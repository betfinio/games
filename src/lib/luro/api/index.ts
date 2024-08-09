import { BETS_MEMORY, LURO, PARTNER } from '@/src/global.ts';
import type { ICurrentRoundInfo } from '@/src/lib/luro/query';
import type { LuroBet, PlaceBetParams, Round, RoundStatusEnum } from '@/src/lib/luro/types.ts';
import { BetsMemoryContract, LuckyRoundBetContract, LuckyRoundContract, PartnerContract, defaultMulticall } from '@betfinio/abi';
import arrayFrom from '@betfinio/abi/dist/utils';
import { ZeroAddress } from '@betfinio/hooks';
import { valueToNumber } from '@betfinio/hooks/dist/utils';
import { multicall, readContract, writeContract } from '@wagmi/core';
import { type Address, encodeAbiParameters, parseAbiParameters } from 'viem';
import { getContractEvents } from 'viem/actions';
import type { Config } from 'wagmi';

export async function placeBet({ round, amount, player }: PlaceBetParams, config: Config) {
	try {
		console.log('PLACING A BET', amount, round);
		const data = encodeAbiParameters(parseAbiParameters('address player, uint256 amount, uint256 round'), [player, BigInt(amount), BigInt(round)]);
		return await writeContract(config, {
			abi: PartnerContract.abi,
			address: PARTNER,
			functionName: 'placeBet',
			value: 0n,
			args: [LURO, BigInt(amount) * 10n ** 18n, data],
		});
	} catch (e) {
		console.log(e);
		throw e;
	}
}

export const distributeBonus = async ({ round }: { round: number }, config: Config) => {
	console.log('distributing bonus', round);
	return await writeContract(config, {
		abi: LuckyRoundContract.abi,
		address: LURO,
		functionName: 'distribute',
		args: [BigInt(round), 0n, 1000n],
	});
};

export const fetchBonusDistribution = async (round: number, config: Config) => {
	console.log('checking distribution', round);
	return (await readContract(config, {
		abi: LuckyRoundContract.abi,
		address: LURO,
		functionName: 'roundDistribution',
		args: [BigInt(round)],
	})) as boolean;
};

export const fetchAvailableBonus = async (address: Address, config: Config): Promise<bigint> => {
	console.log('fetching bonus', address);
	return (await readContract(config, {
		abi: LuckyRoundContract.abi,
		address: LURO,
		functionName: 'claimableBonus',
		args: [address],
	})) as bigint;
};

export const fetchRoundWinner = async (roundId: number, config: Config): Promise<Round['winner']> => {
	const logs = await getContractEvents(config.getClient(), {
		abi: LuckyRoundContract.abi,
		address: LURO,
		eventName: 'WinnerCalculated',
		args: {
			round: BigInt(roundId),
		},
	});
	if (logs.length === 0) return undefined;
	const betInfo = (await readContract(config, {
		abi: LuckyRoundBetContract.abi,
		address: logs[0].args.bet as Address,
		functionName: 'getBetInfo',
	})) as Address[];
	return {
		offset: logs[0].args.winnerOffset,
		bet: logs[0].args.bet,
		player: betInfo[0],
		tx: logs[0].transactionHash,
	};
};

export const fetchRoundBets = async (roundId: number, config: Config) => {
	console.trace('fetching round bets', roundId);
	const count = (await readContract(config, {
		abi: LuckyRoundContract.abi,
		address: LURO,
		functionName: 'getBetsCount',
		args: [roundId],
	})) as bigint;
	const prepared = arrayFrom(Number(count)).map((_, i) => ({
		abi: LuckyRoundContract.abi,
		address: LURO,
		functionName: 'roundBets',
		args: [roundId, i],
	}));
	const result = await multicall(config, {
		multicallAddress: defaultMulticall,
		contracts: prepared,
	});
	return await Promise.all(result.map((e) => e.result as Address).map((bet) => fetchLuroBet(bet, config)));
};

export const fetchLuroBet = async (address: Address, config: Config): Promise<LuroBet> => {
	const betInfo = (await readContract(config, {
		...LuckyRoundBetContract,
		address: address as Address,
		functionName: 'getBetInfo',
	})) as [string, string, bigint, bigint, bigint, bigint];
	return { player: betInfo[0], amount: betInfo[2], address } as LuroBet;
};

export async function startRound(round: number, config: Config) {
	console.log('Starting a round');
	const data = encodeAbiParameters(parseAbiParameters('uint256 round'), [BigInt(round)]);
	return await writeContract(config, {
		abi: LuckyRoundContract.abi,
		address: LURO,
		functionName: 'requestCalculation',
		args: [data],
	});
}

export const getCurrentRoundInfo = (iBets: LuroBet[]): ICurrentRoundInfo => {
	const usersSet = new Set();
	let volume = 0;
	const bets = iBets;
	for (const bet of bets) {
		usersSet.add(bet.player);
		volume += valueToNumber(bet.amount);
	}
	return {
		betsCount: bets.length,
		usersCount: usersSet.size,
		volume,
	};
};

export const fetchRounds = async (player: Address, onlyPlayers: boolean, config: Config): Promise<Round[]> => {
	console.log('fetching rounds', LURO);
	const activeRounds = await getContractEvents(config.getClient(), {
		abi: LuckyRoundContract.abi,
		address: LURO,
		fromBlock: 10220152n,
		eventName: 'RoundStart',
	});
	console.log('rounds', activeRounds);
	return (await Promise.all(activeRounds.reverse().map((e) => fetchRound(e.args.round, player, config)))).filter((e) => !onlyPlayers || e.player.bets > 0n);
};

export const fetchRound = async (round: number, player: Address, config: Config): Promise<Round> => {
	const data = await multicall(config, {
		multicallAddress: defaultMulticall,
		contracts: [
			{
				abi: LuckyRoundContract.abi,
				address: LURO,
				functionName: 'roundBank',
				args: [round],
			},
			{
				abi: LuckyRoundContract.abi,
				address: LURO,
				functionName: 'getBetsCount',
				args: [round],
			},
			{
				abi: LuckyRoundContract.abi,
				address: LURO,
				functionName: 'roundPlayerVolume',
				args: [round, player],
			},
			{
				abi: LuckyRoundContract.abi,
				address: LURO,
				functionName: 'roundPlayerBetsCount',
				args: [round, player],
			},
			{
				abi: LuckyRoundContract.abi,
				address: LURO,
				functionName: 'roundStatus',
				args: [round],
			},
		],
	});
	const volume = data[0].result as bigint;
	const count = data[1].result as bigint;
	const playerVolume = data[2].result as bigint;
	const playerCount = data[3].result as bigint;
	const status = data[4].result as RoundStatusEnum;
	const winner = await fetchRoundWinner(round, config);
	const bonus = (volume / 100n) * 4n;

	return {
		round,
		total: {
			volume: volume,
			bets: count,
			bonus: bonus,
			staking: (volume * 360n) / 10000n,
		},
		player: {
			volume: playerVolume,
			bets: playerCount,
			bonus: (playerVolume / 100n) * 4n,
		},
		status,
		address: ZeroAddress,
		winner: winner,
	};
};

export const fetchBetsCount = async (config: Config): Promise<number> => {
	console.log('fetching total bets number');
	return Number(
		await readContract(config, {
			abi: BetsMemoryContract.abi,
			address: BETS_MEMORY,
			functionName: 'getGamesBetsCount',
			args: [LURO],
		}),
	);
};

export const fetchTotalVolume = async (config: Config): Promise<bigint> => {
	console.log('fetching total volume of luro');
	return (await readContract(config, {
		abi: BetsMemoryContract.abi,
		address: BETS_MEMORY,
		functionName: 'gamesVolume',
		args: [LURO],
	})) as bigint;
};
