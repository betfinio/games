import {
	LuroPlayerBetsDocument,
	type LuroPlayerBetsQuery,
	LuroRoundStartsDocument,
	type LuroRoundStartsQuery,
	LuroWinnersDocument,
	type LuroWinnersQuery,
	type WinnerCalculated,
	execute,
} from '@/.graphclient';
import logger from '@/src/config/logger.ts';
import type { WinnerInfo } from '@/src/lib/luro/types.ts';
import type { ExecutionResult } from 'graphql/execution';
import type { Address } from 'viem';

export const requestRounds = async (address: Address): Promise<{ round: number }[]> => {
	logger.start('[luro]', 'fetching rounds by game', address);
	const data: ExecutionResult<LuroRoundStartsQuery> = await execute(LuroRoundStartsDocument, { address });
	logger.success('[luro]', 'fetching rounds by game', data.data?.roundStarts.length);
	if (data.data) {
		return data.data.roundStarts.map((round) => ({ round: Number(round.round) }));
	}
	return [];
};
export const requestPlayerRounds = async (address: Address, player: Address): Promise<{ round: number }[]> => {
	logger.start('[luro]', 'fetching rounds by game and player', address, player);
	const data: ExecutionResult<LuroPlayerBetsQuery> = await execute(LuroPlayerBetsDocument, { address, player });
	logger.success('[luro]', 'fetching rounds by game and player', data.data?.betCreateds.length);
	if (data.data) {
		return data.data.betCreateds.map((round) => ({ round: Number(round.round) }));
	}
	return [];
};

export const fetchWinners = async (luro: Address): Promise<WinnerInfo[]> => {
	logger.start('[luro]', 'fetching winners by game', luro);
	const data: ExecutionResult<LuroWinnersQuery> = await execute(LuroWinnersDocument, { address: luro });
	logger.success('[luro]', 'fetching winners by game', data.data?.winnerCalculateds.length);
	if (data.data) {
		return data.data.winnerCalculateds.map(populateWinner);
	}
	return [];
};

function populateWinner(log: Pick<WinnerCalculated, 'winner' | 'winnerOffset' | 'transactionHash' | 'round' | 'bet'>): WinnerInfo {
	return {
		player: log.winner as Address,
		round: Number(log.round),
		bet: log.bet as Address,
		offset: Number(log.winnerOffset),
		tx: log.transactionHash as Address,
	} as WinnerInfo;
}
