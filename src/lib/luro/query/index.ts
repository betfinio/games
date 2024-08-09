import { LURO } from '@/src/global.ts';
import { animateNewBet, getCurrentRound, handleError } from '@/src/lib/luro';
import {
	distributeBonus,
	fetchAvailableBonus,
	fetchBetsCount,
	fetchBonusDistribution,
	fetchRound,
	fetchRoundBets,
	fetchRounds,
	fetchTotalVolume,
	placeBet,
	startRound,
} from '@/src/lib/luro/api';
import type { LuroBet, PlaceBetParams, Round, WheelState } from '@/src/lib/luro/types.ts';
import { LotteryContract } from '@betfinio/abi';
import { ZeroAddress } from '@betfinio/hooks';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { type WriteContractReturnType, readContract } from '@wagmi/core';
import { useTranslation } from 'react-i18next';
import type { Address, WriteContractErrorType } from 'viem';
import { useAccount, useConfig, useWatchContractEvent } from 'wagmi';

export const useObserveBet = () => {
	const queryClient = useQueryClient();
	const resetObservedBet = () => {
		queryClient.setQueryData(['luro', 'bets', 'newBet'], ZeroAddress);
	};
	const query = useQuery<{ address: Address; strength: number }>({
		queryKey: ['luro', 'bets', 'newBet'],
		initialData: { address: ZeroAddress, strength: 0 },
	});

	return { query, resetObservedBet };
};

export const usePlaceBet = (address: Address) => {
	const { t } = useTranslation('', { keyPrefix: 'shared.errors' });
	const queryClient = useQueryClient();
	const config = useConfig();
	return useMutation<WriteContractReturnType, WriteContractErrorType, PlaceBetParams>({
		mutationKey: ['luro', 'bets', 'place'],
		mutationFn: (params) => placeBet(params, config),
		onError: (e) => {
			// @ts-ignore
			console.log(e.cause, t(e.cause?.reason));
		},
		onMutate: () => console.log('placeBet'),
		onSuccess: async (data) => {
			animateNewBet(address, 10, queryClient);
			await queryClient.invalidateQueries({ queryKey: ['luro', 'bets', 'round'] });
		},
		onSettled: () => console.log('placeBet settled'),
	});
};

export const useStartRound = (round: number) => {
	const { t } = useTranslation('', { keyPrefix: 'shared.errors' });
	const { updateState } = useLuroState();
	const config = useConfig();
	useWatchContractEvent({
		abi: LotteryContract.abi,
		address: LURO,
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
		abi: LotteryContract.abi,
		address: LURO,
		eventName: 'WinnerCalculated',
		onLogs: (landedLogs) => {
			console.log('CALCULATED LOGS', landedLogs);
			// @ts-ignore
			if (Number(landedLogs[0].args.round) === round) {
				console.log('LANDED, STOP SPINNING');
				// @ts-ignore
				updateState({ state: 'landed', result: Number(landedLogs[0].args.result), bet: landedLogs[0].args.bet });
			}
		},
	});

	return useMutation<WriteContractReturnType, WriteContractErrorType>({
		mutationKey: ['luro', 'round', 'start'],
		mutationFn: () => startRound(round, config),
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
	return useQuery<LuroBet[]>({
		initialData: [],
		queryKey: ['luro', 'bets', 'round', round],
		queryFn: () => fetchRoundBets(round, config),
	});
};

export const useRoundBank = (round: number) => {
	const config = useConfig();
	return useQuery<bigint>({
		initialData: 0n,
		queryKey: ['luro', 'bank', 'round', round],
		queryFn: async () => {
			return (await readContract(config, {
				abi: LotteryContract.abi,
				address: LURO,
				functionName: 'roundBank',
				args: [BigInt(round)],
			})) as bigint;
		},
	});
};

export const useRoundBonusShare = (round: number) => {
	const config = useConfig();

	return useQuery<bigint>({
		queryKey: ['luro', 'bonus', 'round', round],
		queryFn: async () => {
			return (await readContract(config, {
				abi: LotteryContract.abi,
				address: LURO,
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
	return useMutation<WriteContractReturnType, WriteContractErrorType, { round: number }>({
		mutationKey: ['luro', 'bonus', 'distribute'],
		mutationFn: (params) => distributeBonus(params, config),
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
	return useQuery<boolean>({
		queryKey: ['luro', 'bonus', 'distribution', round],
		queryFn: () => fetchBonusDistribution(round, config),
	});
};

export const useAvailableBonus = (address: Address) => {
	const config = useConfig();
	return useQuery({
		queryKey: ['luro', 'bonus', address],
		queryFn: () => fetchAvailableBonus(address, config),
	});
};

export const useRound = (round: number) => {
	const { address = ZeroAddress } = useAccount();
	const queryClient = useQueryClient();
	const config = useConfig();
	useWatchContractEvent({
		abi: LotteryContract.abi,
		address: LURO,
		eventName: 'BetCreated',
		args: {
			round: BigInt(round),
		},
		onLogs: async (betLogs) => {
			console.log('BET LOGS', betLogs);
			await queryClient.invalidateQueries({ queryKey: ['luro', 'round', Number(logs[0].args.round)] });
			if (betLogs[0]?.args?.player !== address) {
				animateNewBet(betLogs[0]?.args?.player ?? ZeroAddress, 10, queryClient);
			}
		},
	});

	useWatchContractEvent({
		abi: LotteryContract.abi,
		address: LURO,
		eventName: 'WinnerCalculated',
		onLogs: async (logs) => {
			console.log('winner', logs[0]);
			console.log('round', Number(logs[0].args.round));
			await queryClient.invalidateQueries({ queryKey: ['luro', 'round', Number(logs[0].args.round)] });
		},
	});
	useWatchContractEvent({
		abi: LotteryContract.abi,
		address: LURO,
		eventName: 'RequestedCalculation',
		onLogs: (logs) => {
			console.log('request', logs[0]);
			// @ts-ignore
			console.log('round', Number(logs[0].args.round));
			// @ts-ignore
			queryClient.invalidateQueries({ queryKey: ['luro', 'round', Number(logs[0].args.round)] });
		},
	});
	return useQuery<Round>({
		queryKey: ['luro', 'round', round],
		queryFn: () => fetchRound(round, address, config),
		refetchOnMount: false,
		refetchOnWindowFocus: false,
	});
};

export const useLuroState = () => {
	const queryClient = useQueryClient();
	const state = useQuery<WheelState>({
		queryKey: ['luro', 'state'],
		initialData: { state: 'standby' },
	});

	const updateState = (st: WheelState) => {
		queryClient.setQueryData(['luro', 'state'], st);
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
	const fetchRound = async (): Promise<number> => {
		await queryClient.invalidateQueries({ queryKey: ['luro', 'bets', 'round'] });
		return getCurrentRound();
	};

	return useQuery({
		queryKey: ['luro', 'visibleRound'],
		queryFn: fetchRound,
		initialData: getCurrentRound(),
		refetchOnWindowFocus: false,
		refetchOnMount: false,
		refetchOnReconnect: false,
	});
};

export const useRounds = (player: Address, onlyPlayers = false) => {
	const config = useConfig();
	return useQuery<Round[]>({
		queryKey: ['luro', 'rounds', player, onlyPlayers],
		queryFn: () => fetchRounds(player, onlyPlayers, config),
		refetchOnMount: false,
		refetchOnWindowFocus: false,
	});
};

export const useRoundInfo = (round: number) => {
	const config = useConfig();
	const { address = ZeroAddress } = useAccount();
	return useQuery<Round>({
		queryKey: ['luro', 'round', round],
		queryFn: () => fetchRound(round, address, config),
	});
};

export const useTotalVolume = () => {
	const config = useConfig();

	return useQuery<bigint>({
		queryKey: ['luro', 'totalVolume'],
		queryFn: () => fetchTotalVolume(config),
	});
};
export const useBetsCount = () => {
	const config = useConfig();
	return useQuery<number>({
		queryKey: ['luro', 'betsCount'],
		queryFn: () => fetchBetsCount(config),
	});
};
