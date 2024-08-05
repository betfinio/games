import {getBlock, multicall, readContract, writeContract, WriteContractReturnType} from "@wagmi/core";
import {BetInterfaceContract, BetsMemoryContract, DataFeedContract, defaultMulticall, GameContract, PartnerContract, PredictBetContract, TokenContract} from "@betfinio/abi";
import {getContractEvents} from "viem/actions";
import {ZeroAddress} from "@betfinio/hooks/dist";
import {defaultResult, Game, PlaceBetParams, PredictBet, Result, Round, RoundPool} from "../types";
import {Address, encodeAbiParameters, parseAbiParameters} from "viem";
import {Options} from "betfinio_app/lib/types";
import {games} from "@/src/lib/predict";
import {getBlockByTimestamp} from "betfinio_app/lib/utils";

const PREDICT_ADDRESS = import.meta.env.PUBLIC_PREDICT_ADDRESS as Address
const BETS_MEMORY_ADDRESS = import.meta.env.PUBLIC_BETS_MEMORY_ADDRESS as Address
const PARTNER_ADDRESS = import.meta.env.PUBLIC_PARTNER_ADDRESS as Address
// const TOKEN_ADDRESS = import.meta.env.PUBLIC_TOKEN_ADDRESS as Address
// const CORE_ADDRESS = import.meta.env.PUBLIC_CORE_ADDRESS as Address

export async function fetchRound(options: Options, params: { game: Game, round: number, player: Address }): Promise<Round> {
	if (!options.config) throw Error("Config is required!")
	const {game, round, player} = params
	const feed = game.dataFeed
	const started = round * game.interval
	const ended = (round + game.duration) * game.interval
	const pool = await fetchPool(options, {game: game.address, round})
	const startPrice = await fetchPrice(options, {address: feed, time: started})
	const endPrice = await fetchPrice(options, {address: feed, time: ended})
	const data = await multicall(options.config, {
		multicallAddress: defaultMulticall,
		contracts: [
			{
				abi: GameContract.abi,
				address: game.address,
				functionName: 'getPlayerBets',
				args: [player, BigInt(round)]
			},
			{
				abi: GameContract.abi,
				address: game.address,
				functionName: 'roundCalculated',
				args: [BigInt(round)]
			},
			{
				abi: GameContract.abi,
				address: game.address,
				functionName: 'start',
				args: [BigInt(round)]
			},
			{
				abi: GameContract.abi,
				address: game.address,
				functionName: 'end',
				args: [BigInt(round)]
			}
		]
	},)
	const bets = data[0].result as [number, string[]]
	const calculated = data[1].result as boolean
	const start = (data[2].result as bigint[])[1] || startPrice.answer
	const end = (data[3].result as bigint[])[1] || endPrice.answer
	return {
		round: round,
		price: {start, end},
		pool: pool,
		currentPlayerBets: Number(bets[0]),
		calculated: calculated
	} as Round
}


export async function fetchPool(options: Options, params: { game: Address, round: number }): Promise<RoundPool> {
	if (!options.config) throw Error("Config is required!")
	
	const {game, round} = params
	const betsData = await multicall(options.config, {
		multicallAddress: defaultMulticall,
		contracts: [
			{
				abi: GameContract.abi,
				address: game,
				functionName: 'longPool',
				args: [round]
			}, {
				abi: GameContract.abi,
				address: game,
				functionName: 'shortPool',
				args: [round]
			},
		]
	})
	return {
		long: betsData[0].result as bigint,
		short: betsData[1].result as bigint,
	}
}


export async function fetchPrice(options: Options, params: { address: Address, time: number }): Promise<Result> {
	if (!options.config) throw Error("Config is required!")
	if (!options.supabase) throw Error("Supabase is required!")
	const {address, time} = params
	try {
		console.log('fetching price', address, time)
		const block = await getBlockByTimestamp(time, options.supabase);
		const data = await readContract(options.config, {
			...DataFeedContract,
			address: address,
			functionName: 'latestRoundData',
			blockNumber: block
		}) as [bigint, bigint, bigint, bigint, bigint]
		return {
			roundId: data[0],
			answer: data[1],
			timestamp: data[2],
		}
	} catch (e) {
		console.log(e)
		return defaultResult
	}
}

export async function fetchRounds(options: Options, params: { game: Address }): Promise<number[]> {
	if (!options.config) throw Error("Config is required!")
	const {game} = params
	const {config} = options
	console.log('fetching rounds', game)
	const currentBlock = await getBlock(config)
	const events = await getContractEvents(config.getClient(), {
		abi: GameContract.abi,
		address: game,
		fromBlock: currentBlock.number - 100000n,
		toBlock: 'latest',
		eventName: 'RoundCreated'
	})
	return ([...events.reverse().slice(0, 10)].map(e => {
		return parseInt(e.topics[1] || "0", 16)
	}))
	
}

export async function fetchPlayerRounds(options: Options, params: { game: Address, player: Address }): Promise<number[]> {
	const {game, player} = params
	console.log('fetching player rounds', game, player)
	if (player === ZeroAddress) return []
	if (!options.config) throw Error("Config is required!")
	const {config} = options
	const logs = await getContractEvents(config.getClient(), {
		...BetsMemoryContract,
		fromBlock: 0n,
		toBlock: 'latest',
		eventName: 'NewBet',
		args: {
			player: player,
			game: PREDICT_ADDRESS
		}
	})
	const g = Object.values(games).find(g => g.address === game)!
	const rounds = await Promise.all(logs.map(async log => {
		const block = log.blockNumber
		const time = await getBlock(config, {blockNumber: block})
		return Math.floor(Number(time.timestamp) / g.interval)
	}))
	return [...new Set(rounds)].reverse().slice(0, 10)
}

export async function fetchLastBets(options: Options, params: { count: number }): Promise<PredictBet[]> {
	console.log('fetching last bets')
	if (!options.config) throw Error("Config is required!")
	const {config} = options
	const count = params.count
	try {
		const bets = await readContract(config, {
			...BetsMemoryContract,
			address: BETS_MEMORY_ADDRESS,
			functionName: 'getBets',
			args: [BigInt(count), 0n, PREDICT_ADDRESS]
		}) as Address[]
		return await Promise.all(bets.map((bet) => fetchPredictBet(options, {address: bet})))
	} catch (e) {
		console.log(e)
		return []
	}
}


export const fetchPlayerBets = async (options: Options, params: { address: Address, game: Address, round: number }): Promise<PredictBet[]> => {
	if (!options.config) throw Error("Config is required!")
	const {address, game, round} = params
	const {config} = options
	const data = await readContract(config, {
		abi: GameContract.abi,
		address: game,
		functionName: 'getPlayerBets',
		args: [address, round]
	}) as [number, Address[]]
	return Promise.all(data[1].map((bet) => fetchPredictBet(options, {address: bet})))
}


export const fetchBetsVolume = async (options: Options): Promise<bigint> => {
	if (!options.config) throw Error("Config is required!")
	console.log('fetching bets volume', PREDICT_ADDRESS)
	return await readContract(options.config, {
		...BetsMemoryContract,
		address: BETS_MEMORY_ADDRESS,
		functionName: 'gamesVolume',
		args: [PREDICT_ADDRESS]
	}) as bigint
}

export const fetchBetsCount = async (options: Options): Promise<number> => {
	if (!options.config) throw Error("Config is required!")
	try {
		const address = PREDICT_ADDRESS
		console.log('fetching bets count', address)
		return Number(await readContract(options.config, {
			...BetsMemoryContract,
			address: BETS_MEMORY_ADDRESS,
			functionName: 'getGamesBetsCount',
			args: [address]
		}))
	} catch (e) {
		console.error(e)
		return 0
	}
}


export const fetchLatestPrice = async (options: Options, params: { pair: string }): Promise<Result> => {
	const pair = params.pair
	const address = games[pair].dataFeed
	console.log('fetching latest price', pair, address)
	return await fetchPrice(options, {address, time: Math.floor(Date.now() / 1000)});
}
export const fetchYesterdayPrice = async (options: Options, params: { pair: string }): Promise<Result> => {
	if (!games) throw Error("Games are required!");
	const pair = params.pair
	const address = games[pair].dataFeed
	console.log('fetching latest price', pair, address)
	return await fetchPrice(options, {address, time: Math.floor(Date.now() / 1000) - 60 * 60 * 24});
}


export const fetchRoundBets = async (options: Options, params: { game: Address, round: number }) => {
	if (!options.config) throw Error("Config is required!")
	const {game, round} = params
	const {config} = options
	const data = await readContract(config, {
		abi: GameContract.abi,
		address: game,
		functionName: 'getRoundBets',
		args: [round]
	}) as [number, Address[]]
	
	return Promise.all(data[1].map((bet) => fetchPredictBet(options, {address: bet})))
}


export async function fetchPredictBet(options: Options, params: { address: Address }): Promise<PredictBet> {
	if (!options.config) throw Error("Config is required!")
	const {address} = params
	const output = await multicall(options.config, {
		multicallAddress: defaultMulticall,
		contracts: [
			{
				...BetInterfaceContract,
				address: address,
				functionName: 'getBetInfo',
				args: []
			},
			{
				...PredictBetContract,
				address: address,
				functionName: 'getSide',
			},
			{
				...PredictBetContract,
				address: address,
				functionName: 'getRound',
			},
			{
				...PredictBetContract,
				address: address,
				functionName: 'getPredictGame',
			},
			{
				...PredictBetContract,
				address: address,
				functionName: 'getBonus',
			}
		]
	})
	const data = output[0].result as [string, string, bigint, bigint, bigint, bigint]
	const side = output[1].result as boolean
	const round = output[2].result as bigint
	const predictGame = output[3].result as string
	const bonus = output[4].result as bigint
	return {
		address: address,
		player: data[0],
		game: data[1],
		amount: data[2],
		result: data[3],
		status: data[4],
		created: data[5],
		side: side,
		round: round,
		predictGame: predictGame,
		bonus: bonus
	} as PredictBet
}

export async function calculateBets(options: Options, params: { game: Game, round: number }): Promise<`0x${string}`> {
	if (!options.config) throw Error("Config is required!")
	if (!options.supabase) throw Error("Supabase is required!")
	const {game, round} = params
	const {config} = options
	const start = round * game.interval
	const end = (round + game.duration) * game.interval
	const startBlock = await getBlockByTimestamp(start, options.supabase)
	const endBlock = await getBlockByTimestamp(end, options.supabase)
	const priceStart = await readContract(config, {
		...DataFeedContract,
		address: game.dataFeed,
		functionName: 'latestRoundData',
		blockNumber: startBlock
	}) as bigint[]
	const priceEnd = await readContract(config, {
		...DataFeedContract,
		address: game.dataFeed,
		functionName: 'latestRoundData',
		blockNumber: endBlock
	}) as bigint[]
	return await writeContract(config, {
		abi: GameContract.abi,
		address: game.address,
		functionName: 'calculateBets',
		args: [round, priceStart[0], priceEnd[0]]
	})
}


export const placeBet = async ({amount, side, game}: PlaceBetParams, options: Options): Promise<WriteContractReturnType> => {
	if (!options.config) throw new Error('Config are required!')
	const data = encodeAbiParameters(parseAbiParameters('uint256 _amount, bool _side, address _game'), [amount, side, game])
	return await writeContract(options.config, {
		abi: PartnerContract.abi,
		address: PARTNER_ADDRESS,
		functionName: 'placeBet',
		args: [PREDICT_ADDRESS, amount, data]
	})
}