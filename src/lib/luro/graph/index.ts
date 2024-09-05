import type { WinnerInfo } from '@/src/lib/luro/types.ts';
import { gql, request } from 'graphql-request';
import type { Address } from 'viem';
const URL = import.meta.env.PUBLIC_LUCKY_ROUND_GRAPH_URL;

export const requestRounds = async (address: Address): Promise<{ round: number }[]> => {
	const query = gql`{
      roundStarts(where: {address: "${address}"}, first: 50, orderBy: round) {
          round
      }
  }`;
	const result = await request(URL, query);

	console.log(result);
	return result.roundStarts;
};

export const fetchWinners = async (luro: Address): Promise<WinnerInfo[]> => {
	console.log('fetching winners');
	const query = gql`{
      winnerCalculateds(where: {address: "${luro}"}) {
          winner
          winnerOffset
          transactionHash
          round
          bet
      }
  }`;
	const result = await request(URL, query);
	console.log(result);
	// @ts-ignore
	return result.winnerCalculateds.map(
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		(log: any) =>
			({
				player: log.winner as Address,
				round: Number(log.round),
				bet: log.bet as Address,
				offset: Number(log.winnerOffset),
				tx: log.transactionHash as Address,
			}) as WinnerInfo,
	);
};
