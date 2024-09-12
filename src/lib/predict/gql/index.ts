import { PredictRoundCreatedsByGameAddressDocument, type PredictRoundCreatedsByGameAddressQuery, execute } from '@/.graphclient';
import logger from '@/src/config/logger.ts';
import type { ExecutionResult } from 'graphql/execution';
import type { Address } from 'viem';

export const fetchRoundIds = async (address: Address, page: number, pageSize: number): Promise<number[]> => {
	logger.start('[predict]', 'fetching round starts by game address', address);

	const first = pageSize;
	const skip = pageSize * (page - 1);

	const { data, errors }: ExecutionResult<PredictRoundCreatedsByGameAddressQuery> = await execute(PredictRoundCreatedsByGameAddressDocument, {
		address: address,
		first,
		skip,
	});
	if (data) {
		logger.success('[predict]', 'fetching round starts by game address', data.roundCreateds?.length);
		return mapDataToRounds(data);
	}

	return [];
};

const mapDataToRounds = (data: PredictRoundCreatedsByGameAddressQuery): number[] => {
	return data.roundCreateds.map((created) => Number(created.round));
};
