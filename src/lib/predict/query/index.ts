import {
	calculateRound,
	fetchBetsCount,
	fetchBetsVolume,
	fetchLastBets,
	fetchLatestPrice,
	fetchPlayerBets,
	fetchPlayerRounds,
	fetchPool,
	fetchPrice,
	fetchRound,
	fetchRoundBets,
	fetchRounds,
	fetchYesterdayPrice,
	placeBet,
} from '@/src/lib/predict/api';
import { type CalculateRoundParams, type Game, type PlaceBetParams, type PredictBet, type Result, defaultResult } from '@/src/lib/predict/types.ts';
import { BetsMemoryContract, GameContract } from '@betfinio/abi';
import { ZeroAddress } from '@betfinio/abi';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import type { WriteContractReturnType } from '@wagmi/core';
import { getTransactionLink } from 'betfinio_app/helpers';
import { useSupabase } from 'betfinio_app/supabase';
import { toast } from 'betfinio_app/use-toast';
import type { Address, WriteContractErrorType } from 'viem';
import { waitForTransactionReceipt } from 'viem/actions';
import { useAccount, useConfig, useWatchContractEvent } from 'wagmi';

export const useCurrentRound = (interval: number) => {
	return useQuery<number>({
		initialData: Math.floor(Date.now() / 1000 / interval),
		queryKey: ['predict', 'round', 'current', interval],
		queryFn: async () => Math.floor(Date.now() / 1000 / interval),
		refetchIntervalInBackground: true,
		refetchInterval: 5 * 1000,
	});
};

export const useLatestPrice = (pair: string) => {
	const config = useConfig();
	const { client } = useSupabase();
	return useQuery<Result>({
		queryKey: ['predict', 'price', 'latest', pair],
		queryFn: () => fetchLatestPrice({ config, supabase: client }, { pair }),
	});
};

export const usePrice = (game: Address, time: number) => {
	const config = useConfig();
	const { client: supabase } = useSupabase();
	return useQuery<Result>({
		queryKey: ['predict', 'price', game, time],
		initialData: defaultResult,
		queryFn: async () => fetchPrice({ config, supabase }, { address: game, time }),
	});
};

export const useYesterdayPrice = (pair: string) => {
	const config = useConfig();
	const { client: supabase } = useSupabase();

	return useQuery<Result>({
		queryKey: ['predict', 'price', 'yesterday', pair],
		queryFn: () => fetchYesterdayPrice({ config, supabase }, { pair }),
	});
};

export const useBetsCount = () => {
	const config = useConfig();

	return useQuery<number>({
		queryKey: ['predict', 'bets', 'count'],
		queryFn: () => fetchBetsCount({ config }),
	});
};

export const useBetsVolume = () => {
	const config = useConfig();
	const { client: supabase } = useSupabase();

	return useQuery<bigint>({
		queryKey: ['predict', 'bets', 'volume'],
		queryFn: () => fetchBetsVolume({ config, supabase }),
	});
};

export const usePlayerBets = (address: Address, game: Address, round: number) => {
	const config = useConfig();

	return useQuery<PredictBet[]>({
		queryKey: ['predict', 'bets', address, game, round],
		queryFn: () => fetchPlayerBets({ config }, { address, game, round }),
	});
};

export const useLastBets = (count: number) => {
	const config = useConfig();

	const queryClient = useQueryClient();
	useWatchContractEvent({
		...BetsMemoryContract,
		config: config,
		eventName: 'NewBet',
		onLogs: () => queryClient.invalidateQueries({ queryKey: ['predict', 'bets'] }),
		poll: false,
	});
	return useQuery<PredictBet[]>({
		queryKey: ['predict', 'bets', 'last', count],
		queryFn: () => fetchLastBets({ config }, { count }),
	});
};

export const useRoundInfo = (game: Game, round: number) => {
	const config = useConfig();

	const { address = ZeroAddress } = useAccount({ config });
	const { client: supabase } = useSupabase();

	return useQuery({
		queryKey: ['predict', 'round', round],
		queryFn: () => fetchRound({ config, supabase }, { game, round, player: address }),
		refetchOnMount: false,
		refetchOnWindowFocus: false,
	});
};

export const useRoundBets = (game: Address, round: number) => {
	const config = useConfig();
	return useQuery<PredictBet[]>({
		initialData: [],
		queryKey: ['predict', 'bets', 'round', game, round],
		queryFn: () => fetchRoundBets({ config }, { game, round }),
	});
};

export const usePool = (game: Address, round: number) => {
	const config = useConfig();
	const client = useQueryClient();
	useWatchContractEvent({
		abi: BetsMemoryContract.abi,
		address: game,
		config: config,
		eventName: 'NewBet',
		onLogs: async () => {
			await client.invalidateQueries({ queryKey: ['predict', 'pool', game] });
		},
	});
	return useQuery({
		queryKey: ['predict', 'pool', game, round],
		queryFn: () => fetchPool({ config }, { game, round }),
	});
};
export const useRounds = (game: Address) => {
	const config = useConfig();

	const client = useQueryClient();
	useWatchContractEvent({
		abi: GameContract.abi,
		address: game,
		config: config,
		eventName: 'RoundCreated',
		onLogs: async () => {
			await client.invalidateQueries({ queryKey: ['predict', 'rounds', game] });
		},
	});

	return useQuery<number[]>({
		queryKey: ['predict', 'rounds', game],
		queryFn: () => fetchRounds({ config }, { game }),
	});
};
export const usePlayerRounds = (game: Address) => {
	const config = useConfig();
	const { client: supabase } = useSupabase();
	const { address = ZeroAddress } = useAccount({ config });
	return useQuery<number[]>({
		queryKey: ['predict', 'playerRounds', game, address],
		queryFn: () => fetchPlayerRounds({ config, supabase }, { game, player: address }),
	});
};

export const usePlaceBet = () => {
	const client = useQueryClient();
	const config = useConfig();
	return useMutation<WriteContractReturnType, WriteContractErrorType, PlaceBetParams>({
		mutationKey: ['predict', 'bets', 'place'],
		mutationFn: (params) => placeBet(params, { config }),
		onError: (e) => {
			console.log(e);
		},
		onMutate: () => console.log('placeBet'),
		onSuccess: async (data) => {
			console.log(data);
			const { update } = toast({
				title: 'Placing a bet',
				description: 'Transaction is pending',
				variant: 'loading',
				duration: 10000,
			});
			await waitForTransactionReceipt(config.getClient(), { hash: data });
			update({ variant: 'default', description: 'Transaction is confirmed', title: 'Bet placed', action: getTransactionLink(data), duration: 5000 });
			await client.invalidateQueries({ queryKey: ['predict', 'bets'] });
		},
		onSettled: () => console.log('placeBet settled'),
	});
};

export const useCalculate = () => {
	const client = useQueryClient();
	const config = useConfig();
	const { client: supabase } = useSupabase();
	return useMutation<WriteContractReturnType, WriteContractErrorType, CalculateRoundParams>({
		mutationKey: ['predict', 'bets', 'calculate'],
		mutationFn: (params) => calculateRound(params, { config, supabase }),
		onError: (e) => {
			console.log(e);
		},
		onSuccess: async (data) => {
			const { update } = toast({
				title: 'Calculating a round',
				description: 'Transaction is pending',
				variant: 'loading',
				duration: 10000,
			});
			await waitForTransactionReceipt(config.getClient(), { hash: data });
			update({ variant: 'default', description: 'Transaction is confirmed', title: 'Bet placed', action: getTransactionLink(data), duration: 3000 });
			await client.invalidateQueries({ queryKey: ['predict'] });
		},
	});
};
