import { LURO, LURO_5MIN } from '@/src/global.ts';
import { type LuroInterval, animateNewBet, getCurrentRound, handleError } from '@/src/lib/luro';
import {
	distributeBonus,
	fetchAvailableBonus,
	fetchBetsCount,
	fetchBonusDistribution,
	fetchRound,
	fetchRoundBets,
	fetchRounds,
	fetchTotalVolume,
	getRoundWinnerByOffset,
	placeBet,
	startRound,
} from '@/src/lib/luro/api';
import { fetchWinners } from '@/src/lib/luro/graph';
import type { LuroBet, PlaceBetParams, Round, WheelState, WinnerInfo } from '@/src/lib/luro/types.ts';
import { Route } from '@/src/routes/luro/$interval.tsx';
import { LuckyRoundContract } from '@betfinio/abi';
import { ZeroAddress } from '@betfinio/abi';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { type WriteContractReturnType, readContract } from '@wagmi/core';
import { getTransactionLink } from 'betfinio_app/helpers';
import { toast } from 'betfinio_app/use-toast';
import { useTranslation } from 'react-i18next';
import type { Address, WriteContractErrorType } from 'viem';
import { waitForTransactionReceipt } from 'viem/actions';
import { useAccount, useConfig, useWatchContractEvent } from 'wagmi';

export const useObserveBet = (round: number) => {
	const queryClient = useQueryClient();
	const resetObservedBet = () => {
		queryClient.setQueryData(['luro', address, 'bets', 'newBet'], ZeroAddress);
	};
	const { interval } = Route.useParams();
	const address = interval === '1d' ? LURO : LURO_5MIN;
	const query = useQuery<{ address: Address; strength: number }>({
		queryKey: ['luro', address, 'bets', 'newBet'],
		initialData: { address: ZeroAddress, strength: 0 },
	});

	const luro = interval === '1d' ? LURO : LURO_5MIN;
	console.log(luro);
	useWatchContractEvent({
		abi: LuckyRoundContract.abi,
		address: luro,
		eventName: 'BetCreated',
		args: {
			round: BigInt(round),
		},
		onLogs: async (betLogs) => {
			console.log('BET LOGS', betLogs);
			// @ts-ignore
			animateNewBet(betLogs[0]?.args?.player ?? ZeroAddress, 10, queryClient, address);
			await queryClient.invalidateQueries({ queryKey: ['luro', luro, 'round'] });
			await queryClient.invalidateQueries({ queryKey: ['luro', luro, 'bets'] });
		},
	});

	return { query, resetObservedBet };
};

export const usePlaceBet = () => {
	const { t } = useTranslation('', { keyPrefix: 'shared.errors' });
	const queryClient = useQueryClient();
	const config = useConfig();
	const { interval } = Route.useParams();
	const address = interval === '1d' ? LURO : LURO_5MIN;
	return useMutation<WriteContractReturnType, WriteContractErrorType, PlaceBetParams>({
		mutationKey: ['luro', address, 'bets', 'place'],
		mutationFn: (params) => placeBet(params, config),
		onError: (e) => {
			toast({
				// @ts-ignore
				title: t(e.cause?.reason),
				variant: 'destructive',
				// @ts-ignore
				description: t(e.cause?.message),
			});
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
			await queryClient.invalidateQueries({ queryKey: ['luro', address, 'bets', 'round'] });
			await queryClient.invalidateQueries({ queryKey: ['luro', address, 'round'] });
		},
		onSettled: () => console.log('placeBet settled'),
	});
};

export const useStartRound = (round: number) => {
	const queryClient = useQueryClient();
	const { t } = useTranslation('', { keyPrefix: 'shared.errors' });
	const { updateState } = useLuroState();
	const config = useConfig();
	const { interval } = Route.useParams();
	const address = interval === '1d' ? LURO : LURO_5MIN;
	useWatchContractEvent({
		abi: LuckyRoundContract.abi,
		address: address,
		eventName: 'RequestedCalculation',
		onLogs: (rolledLogs) => {
			console.log('ROLLED LOGS', rolledLogs);
			// @ts-ignore
			if (Number(rolledLogs[0].args.round) === round) {
				console.log('START SPINNING');
				updateState({ state: 'spinning' });
			}
		},
	});

	useWatchContractEvent({
		abi: LuckyRoundContract.abi,
		address: address,
		eventName: 'WinnerCalculated',
		onLogs: async (landedLogs) => {
			console.log('CALCULATED LOGS', landedLogs);
			// @ts-ignore
			if (Number(landedLogs[0].args.round) === round) {
				console.log('LANDED, STOP SPINNING');
				// @ts-ignore
				updateState({ state: 'landed', winnerOffset: Number(landedLogs[0].args.winnerOffset), bet: landedLogs[0].args.bet });
			}

			// @ts-ignore
			await queryClient.invalidateQueries({ queryKey: ['luro', address, 'round', Number(landedLogs[0].args.round)] });
		},
	});

	return useMutation<WriteContractReturnType, WriteContractErrorType>({
		mutationKey: ['luro', address, 'round', 'start'],
		mutationFn: () => startRound(address, round, config),
		onError: (e) => handleError(e, t),
		onMutate: () => console.log('Start round'),
		onSuccess: async (data) => {
			console.log(data);
		},
		onSettled: () => console.log('Round start settled'),
	});
};

export const useRoundBets = (round: number) => {
	const config = useConfig();
	const { interval } = Route.useParams();
	const address = interval === '1d' ? LURO : LURO_5MIN;
	return useQuery<LuroBet[]>({
		queryKey: ['luro', address, 'bets', 'round', round],
		queryFn: () => fetchRoundBets(address, round, config),
	});
};

export const useRoundBank = (round: number) => {
	const config = useConfig();
	const { interval } = Route.useParams();
	const address = interval === '1d' ? LURO : LURO_5MIN;
	return useQuery<bigint>({
		queryKey: ['luro', address, 'round', 'bank', round],
		queryFn: async () =>
			(await readContract(config, {
				abi: LuckyRoundContract.abi,
				address: address,
				functionName: 'roundBank',
				args: [BigInt(round)],
			})) as bigint,
	});
};

export const useRoundBonusShare = (round: number) => {
	const config = useConfig();
	const { interval } = Route.useParams();
	const address = interval === '1d' ? LURO : LURO_5MIN;
	return useQuery<bigint>({
		queryKey: ['luro', address, 'round', 'bonus', round],
		queryFn: async () => {
			return (await readContract(config, {
				abi: LuckyRoundContract.abi,
				address: address,
				functionName: 'roundBonusShares',
				args: [BigInt(round)],
			})) as bigint;
		},
	});
};

export const useDistributeBonus = () => {
	const { t } = useTranslation('', { keyPrefix: 'shared.errors' });
	const queryClient = useQueryClient();
	const config = useConfig();
	const { interval } = Route.useParams();
	const address = interval === '1d' ? LURO : LURO_5MIN;
	return useMutation<WriteContractReturnType, WriteContractErrorType, { round: number }>({
		mutationKey: ['luro', 'bonus', 'distribute'],
		mutationFn: (params) => distributeBonus({ ...params, address }, config),
		onError: (e) => {
			console.log(e);
			handleError(e, t);
		},
		onMutate: () => console.log('distribute bonus'),
		onSuccess: async (data) => {
			console.log(data);
			await queryClient.invalidateQueries({ queryKey: ['luro', 'bonus'] });
		},
		onSettled: () => console.log('placeBet settled'),
	});
};

export const useBonusDistribution = (round: number) => {
	const config = useConfig();
	const { interval } = Route.useParams();
	const address = interval === '1d' ? LURO : LURO_5MIN;
	return useQuery<boolean>({
		queryKey: ['luro', address, 'bonus', 'distribution', round],
		queryFn: () => fetchBonusDistribution(address, round, config),
	});
};

export const useAvailableBonus = (address: Address) => {
	const config = useConfig();
	const { interval } = Route.useParams();
	const luro = interval === '1d' ? LURO : LURO_5MIN;
	return useQuery({
		queryKey: ['luro', address, 'bonus', address],
		queryFn: () => fetchAvailableBonus(luro, address, config),
	});
};

export const useWinners = () => {
	const { interval } = Route.useParams();
	const luro = interval === '1d' ? LURO : LURO_5MIN;
	return useQuery<WinnerInfo[]>({
		queryKey: ['luro', luro, 'winners'],
		queryFn: () => fetchWinners(luro),
	});
};

export const useRoundWinner = (round: number) => {
	const { data: bets } = useRoundBets(round);
	const { data: roundData } = useRound(round);

	const offset = roundData?.winnerOffset;
	return getRoundWinnerByOffset(bets ?? [], offset || 0n);
};

export const useRound = (round: number) => {
	const { address = ZeroAddress } = useAccount();
	const queryClient = useQueryClient();
	const config = useConfig();
	const { interval } = Route.useParams();
	const luro = interval === '1d' ? LURO : LURO_5MIN;

	useWatchContractEvent({
		abi: LuckyRoundContract.abi,
		address: luro,
		eventName: 'RequestedCalculation',
		onLogs: (logs) => {
			console.log('request', logs[0]);
			// @ts-ignore
			console.log('round', Number(logs[0].args.round));
			// @ts-ignore
			queryClient.invalidateQueries({ queryKey: ['luro', luro, 'round', Number(logs[0].args.round)] });
		},
	});
	return useQuery<Round>({
		queryKey: ['luro', luro, 'round', round],
		queryFn: () => {
			return fetchRound(luro, round, address, config.getClient());
		},
	});
};

export const useLuroState = () => {
	const queryClient = useQueryClient();
	const { interval } = Route.useParams();
	const address = interval === '1d' ? LURO : LURO_5MIN;
	const state = useQuery<WheelState>({
		queryKey: ['luro', 'state'],
		initialData: { state: 'standby' },
	});

	const updateState = (st: WheelState) => {
		queryClient.setQueryData(['luro', address, 'state'], st);
	};

	return { state, updateState };
};

export interface ICurrentRoundInfo {
	betsCount: number;
	usersCount: number;
	volume: number;
}

export const useVisibleRound = () => {
	const queryClient = useQueryClient();
	const { interval } = Route.useParams();
	const address = interval === '1d' ? LURO : LURO_5MIN;
	const fetchRound = async (): Promise<number> => {
		await queryClient.invalidateQueries({ queryKey: ['luro', address, 'bets', 'round'] });
		return getCurrentRound(interval as LuroInterval);
	};

	return useQuery({
		queryKey: ['luro', address, 'visibleRound'],
		queryFn: fetchRound,
		initialData: getCurrentRound(interval as LuroInterval),
		refetchOnWindowFocus: false,
		refetchOnMount: false,
		refetchOnReconnect: false,
	});
};

export const useRounds = (player: Address, onlyPlayers = false) => {
	const config = useConfig();
	const { interval } = Route.useParams();
	const address = interval === '1d' ? LURO : LURO_5MIN;
	return useQuery<Round[]>({
		queryKey: ['luro', address, 'rounds', player, onlyPlayers],
		queryFn: () => fetchRounds(address, player, onlyPlayers, config.getClient()),
	});
};

export const useTotalVolume = () => {
	const config = useConfig();
	const { interval } = Route.useParams();
	const address = interval === '1d' ? LURO : LURO_5MIN;
	return useQuery<bigint>({
		queryKey: ['luro', address, 'totalVolume'],
		queryFn: () => fetchTotalVolume(address, config),
	});
};
export const useBetsCount = () => {
	const config = useConfig();
	const { interval } = Route.useParams();
	const address = interval === '1d' ? LURO : LURO_5MIN;
	return useQuery<number>({
		queryKey: ['luro', address, 'betsCount'],
		queryFn: () => fetchBetsCount(address, config),
	});
};
