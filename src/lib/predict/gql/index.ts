import { GraphQLClient } from 'graphql-request';

import { type CreatedRoundsByAddressQuery, getSdk } from '@/src/lib/predict/gql/index.gen.ts';
import { gql } from 'graphql-tag';
import type { Address } from 'viem';

const url = import.meta.env.PUBLIC_PREDICT_GRAPH_URL;

gql`
    query CreatedRoundsByAddress ($address: Bytes)  {
        roundCreateds (where: {address: $address}, first: 100, orderBy: round, orderDirection: desc)  {
            round
        }
    }
`;

const client = new GraphQLClient(url);
export const requestRounds = async (address: Address): Promise<CreatedRoundsByAddressQuery['roundCreateds']> => {
	try {
		const sdk = getSdk(client);
		const roundsData = await sdk.CreatedRoundsByAddress({ address: address });
		return roundsData.roundCreateds;
	} catch (e) {
		console.log(e);
		return [];
	}
};
