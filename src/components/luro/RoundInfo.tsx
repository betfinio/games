import { type FC, useMemo } from 'react';

import RoundMobileInfo from '@/src/components/luro/RoundMobileInfo.tsx';
import { ENV } from '@/src/global.ts';
import { useBetsCount, useTotalVolume, useVisibleRound } from '@/src/lib/luro/query';
import { valueToNumber } from '@betfinio/abi';
import { LuckyRound } from '@betfinio/ui/dist/icons/LuckyRound';
import { BetValue } from 'betfinio_app/BetValue';
import cx from 'clsx';
import { motion } from 'framer-motion';
import { CircleHelp, Menu } from 'lucide-react';

const Stats: FC<{ betsCount: number; volume: bigint; staking: bigint; isFetched: boolean }> = ({ betsCount, volume, staking, isFetched }) => {
	return (
		<div className={'hidden md:flex gap-4 sm:gap-5 items-center justify-end grow text-xs'}>
			<div className={'flex flex-col'}>
				<span>Total Bets</span>
				<div className={cx('font-semibold flex flex-row items-center gap-0 duration-300', !isFetched && 'animate-pulse blur-sm')}>{betsCount}</div>
			</div>
			<div className={'w-[1px] bg-white h-[36px] hidden md:block'} />

			<div className={'flex flex-col'}>
				<span>Total Volume</span>
				<div className={cx('font-semibold flex flex-row items-center gap-1 duration-300', !isFetched && 'animate-pulse blur-sm')}>
					<BetValue precision={1} value={valueToNumber(volume)} withIcon={true} iconClassName={'w-3 h-3'} />
				</div>
			</div>
			<div className={'w-[1px] bg-white h-[36px] hidden md:block'} />

			<div className={'flex flex-col'}>
				<span>Staking Rewards</span>
				<div className={cx('font-semibold flex flex-row items-center gap-1 duration-300', !isFetched && 'animate-pulse blur-sm')}>
					<BetValue precision={1} value={valueToNumber(staking)} withIcon={true} iconClassName={'w-3 h-3'} />
				</div>
			</div>
		</div>
	);
};

export const RoundInfo = () => {
	const { data: currentRound } = useVisibleRound();

	const { data: betsCount = 0, isFetched: isBetsFetched } = useBetsCount();
	const { data: volume = 0n, isFetched: isVolumeFetched } = useTotalVolume();

	const staking = useMemo(() => {
		return (volume * 36n) / 1000n;
	}, [volume]);

	return (
		<div
			className={
				'px-5 py-6 bg-primaryLight border border-gray-800 rounded-lg max-h-[80px] flex gap-5 xl:gap-10 flex-row justify-between md:items-center relative'
			}
		>
			<motion.div className={'flex gap-2 md:gap-4 items-center cursor-pointer'}>
				<div>
					<Menu className={'w-8 md:w-10 aspect-square text-white'} />
				</div>
				<LuckyRound className={'w-8 h-8 md:w-10 md:h-10 text-yellow-400'} />
				<div className={'flex flex-col'}>
					<span className={'text-lg leading-5'}>Lucky round</span>
					<span className={'text-sm leading-5'}>{ENV.includes('prod') ? '1 day' : '10 min'}</span>
				</div>
			</motion.div>

			<div className={'hidden sm:flex flex-row items-center justify-start md:justify-center gap-4'}>
				<p className={'font-bold text-lg'}>
					Round <span className={'font-normal'}>#{currentRound}</span>
				</p>
			</div>

			<Stats betsCount={betsCount} volume={volume} staking={staking} isFetched={isBetsFetched && isVolumeFetched} />

			<div className={'flex flex-row justify-between items-center gap-4 sm:gap-8 px-6 sm:px-0'}>
				<RoundMobileInfo bets={betsCount} volume={volume} staking={staking} />

				<a
					target={'_blank'}
					href={'https://betfin.gitbook.io/betfin-public/games-guide/lucky-round-luro'}
					className={'flex flex-col items-center justify-center cursor-pointer text-[#FFC800] hover:text-[#FFC800] lg:text-white duration-300'}
					rel="noreferrer"
				>
					<CircleHelp className={'cursor-pointer w-6 h-6'} />
					<span className={'hidden lg:inline text-xs whitespace-nowrap'}>How to play</span>
				</a>
			</div>
		</div>
	);
};
