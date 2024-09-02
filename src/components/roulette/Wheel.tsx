import { populateRouletteBet } from '@/src/lib/roulette/api';
import { useRouletteBets, useRouletteState } from '@/src/lib/roulette/query';
import { ZeroAddress } from '@betfinio/abi';
import { valueToNumber } from '@betfinio/abi';
import { useQueryClient } from '@tanstack/react-query';
import anime from 'animejs';
import { toast, useToast } from 'betfinio_app/use-toast';
import cx from 'clsx';
import { motion } from 'framer-motion';
import { PlayIcon } from 'lucide-react';
import { type FC, useEffect, useState } from 'react';
import type { Address } from 'viem';
import { useAccount, useConfig } from 'wagmi';
import { RouletteResultToast } from './RouletteResultToast';

const rouletteWheelNumbers = [
	0, 32, 15, 19, 4, 21, 2, 25, 17, 34, 6, 27, 13, 36, 11, 30, 8, 23, 10, 5, 24, 16, 33, 1, 20, 14, 31, 9, 22, 18, 29, 7, 28, 12, 35, 3, 26,
];

const RouletteWheel: FC = () => {
	const { toast, dismiss } = useToast();
	const { state: wheelStateData, updateState: updateWheelState } = useRouletteState();
	const { address = ZeroAddress } = useAccount();
	const { data: bets = [], isFetched: isBetsFetched } = useRouletteBets(address);
	const lastNumber = bets[0]?.winNumber ?? 0;
	const config = useConfig();
	const queryClient = useQueryClient();
	const wheelState = wheelStateData.data;
	const singleRotationDegree = 360 / 37;
	const singleRotationDuration = 5000;
	const randomOffset = Math.floor(Math.random() * 5 - 2);
	const [tmp, setTmp] = useState(lastNumber);

	useEffect(() => {
		if (lastNumber) {
			setTmp(lastNumber);
		}
	}, [lastNumber]);

	const getRouletteIndexFromNumber = (number: number) => {
		return rouletteWheelNumbers.indexOf(number);
	};

	const getRotationFromNumber = (number: number) => {
		const index = getRouletteIndexFromNumber(number);
		return singleRotationDegree * index;
	};

	useEffect(() => {
		if (wheelState.state === 'standby') {
			anime.set(['.ROULETTE'], {
				rotate: () => -getRotationFromNumber(lastNumber),
			});
		}
	}, [isBetsFetched]);

	useEffect(() => {
		if (wheelState.state === 'spinning') {
			spinWheel();
		}
		if (wheelState.state === 'landed') {
			stopWheel(wheelState.result, wheelState.bet);
		}
	}, [wheelState]);

	function spinWheel() {
		if (wheelState.state !== 'spinning') return;

		anime.set(['.ROULETTE'], {
			rotate: () => -getRotationFromNumber(tmp),
		});
		anime({
			targets: ['.ROULETTE'],
			duration: 2000, // random duration
			rotate: '-720',
			easing: 'easeInQuad',
			complete: () => {
				anime.set(['.ROULETTE'], {
					rotate: () => 0,
				});
				anime({
					targets: ['.ROULETTE'],
					duration: 500, // random duration
					rotate: '-360',
					easing: 'linear',
					loop: true,
				});
			},
		});
	}

	async function stopWheel(result: number, bet: Address) {
		const rouletteBet = await populateRouletteBet(bet, config);
		const bezier = [0.165, 0.84, 0.44, 1.005];
		const wheelMinNumberOfSpins = 1;
		const wheelMaxNumberOfSpins = 2;

		const totalRotation = -(
			Math.floor(Math.random() * (wheelMaxNumberOfSpins - wheelMinNumberOfSpins + 1) + wheelMinNumberOfSpins) * 360 +
			singleRotationDegree * getRouletteIndexFromNumber(result) +
			randomOffset
		);
		anime.remove('.ROULETTE');
		anime({
			targets: ['.ROULETTE'],
			rotate: () => {
				return totalRotation; // random number
			},
			duration: singleRotationDuration, // random duration
			easing: `cubicBezier(${bezier.join(',')})`,
			complete: () => {
				dismiss();
				toast({
					component: <RouletteResultToast rouletteBet={rouletteBet} />,
				});
				updateWheelState({ state: 'standby' });
				setTmp(result);
				queryClient.invalidateQueries({ queryKey: ['roulette', 'bets'] });
			},
		});
	}

	return (
		<>
			<div className={'block'}>
				<motion.div
					initial={{ marginTop: '-30%' }}
					animate={{
						marginTop: wheelState.state === 'spinning' ? '0' : '-30%',
						paddingTop: wheelState.state === 'spinning' ? '60px' : '0',
						scale: wheelState.state === 'spinning' ? 1.15 : 1,
					}}
					transition={{ duration: 1 }}
					className={'flex items-center justify-center overflow-hidden relative pb-20'}
				>
					<div
						className={cx('rounded-full w-4/5 md:w-2/3 aspect-square lg:drop-shadow-[0_0_35px_rgba(0,172,231,0.45)] bg-roulette-wheel bg-cover ROULETTE', {
							'blur-md animate-pulse': !isBetsFetched,
						})}
					/>
					<PlayIcon className={'absolute w-5 h-5 text-white z-5 bottom-[72px] rotate-[270deg]'} />
				</motion.div>
			</div>
		</>
	);
};

export default RouletteWheel;
