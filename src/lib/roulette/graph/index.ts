import type { RouletteBet } from '@/src/lib/roulette/types.ts';
import { Client, cacheExchange, fetchExchange, gql } from 'urql';
import type { Address } from 'viem';
const URL = import.meta.env.PUBLIC_ROULETTE_GRAPH_URL;
import { ROULETTE } from '@/src/global.ts';
import logger from '@/src/config/logger';
const client = new Client({
	url: URL,
	exchanges: [cacheExchange, fetchExchange],
});

interface BetInfo {
	player: Address;
	bet: Address;
	result: bigint;
	requestId: bigint;
	winAmount: bigint;
	betAmount: bigint;
	blockTimestamp: bigint;
	transactionHash: string;
}
export const fetchBetsByPlayer = async (address: Address): Promise<RouletteBet[]> => {
	logger.start('[roulette]', 'fetching bets by player', address);
	const query = gql`
      query($address: String) {
          landeds(where: {player: $address}, orderBy: blockTimestamp, orderDirection: desc, first: 50) {
              player
              bet
              result
              requestId
              winAmount
              betAmount
              blockTimestamp,
              transactionHash
          }
      }
	`;
	const result = await client.query(query, { address });
	logger.success('[roulette]', 'fetching bets by player', result.data.landeds.length);
	return result.data.landeds.map(
		(landed: BetInfo) =>
			({
				requestId: landed.requestId,
				winNumber: Number(landed.result),
				player: landed.player,
				address: landed.bet,
				game: ROULETTE,
				hash: landed.transactionHash,
				result: BigInt(landed.winAmount),
				amount: BigInt(landed.betAmount),
				created: BigInt(landed.blockTimestamp),
			}) as RouletteBet,
	);
};

export const fetchAllBets = async (count = 10): Promise<RouletteBet[]> => {
	consola.info('[roulette]', `fetching all bets(${count})`);
	const query = gql`
      query($count: Int) {
          landeds(orderBy: blockTimestamp, orderDirection: desc, first: $count) {
              player
              bet
              result
              requestId
              winAmount
              betAmount
              blockTimestamp,
              transactionHash
          }
      }
	`;
	const result = await client.query(query, { count });
	return result.data.landeds.map(
		(landed: BetInfo) =>
			({
				requestId: landed.requestId,
				winNumber: Number(landed.result),
				player: landed.player,
				address: landed.bet,
				game: ROULETTE,
				hash: landed.transactionHash,
				result: BigInt(landed.winAmount),
				amount: BigInt(landed.betAmount),
				created: BigInt(landed.blockTimestamp),
			}) as RouletteBet,
	);
};
