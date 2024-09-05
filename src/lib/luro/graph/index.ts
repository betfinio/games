import type { WinnerInfo } from '@/src/lib/luro/types.ts';
import { Client, cacheExchange, fetchExchange, gql } from 'urql';
import type { Address } from 'viem';
const URL = import.meta.env.PUBLIC_LUCKY_ROUND_GRAPH_URL;
const client = new Client({
	url: URL,
	exchanges: [cacheExchange, fetchExchange],
});

export const requestRounds = async (address: Address): Promise<{ round: number }[]> => {
	const query = gql`
      query($address: String) {
          roundStarts(where: {address: $address}, orderBy: round, orderDirection: desc) {
              round
          }
      }
	`;

	const result = await client.query(query, { address });

	console.log(result);
	return result.data.roundStarts.reverse();
};

interface GraphWinnerInfo {
	winner: Address;
	winnerOffset: number;
	transactionHash: Address;
	round: number;
	bet: Address;
}

export const fetchWinners = async (luro: Address): Promise<WinnerInfo[]> => {
	console.log('fetching winners');
	const query = gql`
      query($address: String)  {
          winnerCalculateds(where: {address: $address}, first: 100, orderBy: round, orderDirection: desc) {
              winner
              winnerOffset
              transactionHash
              round
              bet
          }
      }
	`;
	const result = await client.query(query, { address: luro });
	console.log(result);
	return result.data.winnerCalculateds.map(
		(log: GraphWinnerInfo) =>
			({
				player: log.winner as Address,
				round: Number(log.round),
				bet: log.bet as Address,
				offset: Number(log.winnerOffset),
				tx: log.transactionHash as Address,
			}) as WinnerInfo,
	);
};
