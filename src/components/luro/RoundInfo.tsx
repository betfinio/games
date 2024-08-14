import { useMemo } from 'react';

import { ENV } from '@/src/global.ts';
import { useBetsCount, useTotalVolume, useVisibleRound } from '@/src/lib/luro/query';
import { valueToNumber } from '@betfinio/abi';
import { BetValue } from 'betfinio_app/BetValue';
import cx from 'clsx';
import { AlertCircle } from 'lucide-react';

const Stats = () => {
	const { data: betsCount = 0, isFetched: isBetsFetched } = useBetsCount();
	const { data: volume = 0n, isFetched: isVolumeFetched } = useTotalVolume();

	const staking = useMemo(() => {
		return (volume * 36n) / 1000n;
	}, [volume]);

	return (
		<div className={'hidden sm:flex gap-4 sm:gap-5 items-center justify-end grow text-xs'}>
			<div className={'flex flex-col'}>
				<span>Total Bets</span>
				<div className={cx('font-semibold flex flex-row items-center gap-0 duration-300', !isBetsFetched && 'animate-pulse blur-sm')}>{betsCount}</div>
			</div>
			<div className={'w-[1px] bg-white h-[36px] hidden md:block'} />

			<div className={'flex flex-col'}>
				<span>Total Volume</span>
				<div className={cx('font-semibold flex flex-row items-center gap-1 duration-300', !isVolumeFetched && 'animate-pulse blur-sm')}>
					<BetValue precision={1} value={valueToNumber(volume)} withIcon={true} iconClassName={'w-3 h-3'} />
				</div>
			</div>
			<div className={'w-[1px] bg-white h-[36px] hidden md:block'} />

			<div className={'flex flex-col'}>
				<span>Total Staking</span>
				<div className={cx('font-semibold flex flex-row items-center gap-1 duration-300', !isVolumeFetched && 'animate-pulse blur-sm')}>
					<BetValue precision={1} value={valueToNumber(staking)} withIcon={true} iconClassName={'w-3 h-3'} />
				</div>
			</div>
		</div>
	);
};

export const RoundInfo = () => {
	const { data: currentRound } = useVisibleRound();

	return (
		<div
			className={
				'px-5 py-6 bg-primaryLight border border-gray-800 rounded-lg max-h-[80px] flex gap-5 xl:gap-10 flex-row justify-between md:items-center relative'
			}
		>
			<div className={'flex items-center gap-10'}>
				<div className={'text-sm leading-4 hidden sm:block'}>
					<div className={'font-semibold text-yellow-400'}>Lucky round</div>
					<div>{ENV.includes('prod') ? '1 day' : '10 min'}</div>
				</div>
				<div className={' flex flex-row items-center justify-start md:justify-center gap-4'}>
					<p className={'font-semibold text-lg'}>
						Round <span className={'font-normal'}>#{currentRound}</span>
					</p>
				</div>
			</div>

			<Stats />

			<div className={'flex flex-row items-center gap-2'}>
				<a
					target={'_blank'}
					href={'https://betfin.gitbook.io/betfin-public/proof-of-fairness/random-number-generation'}
					className={'flex flex-col items-center justify-center cursor-pointer text-[#FFC800] hover:text-[#FFC800] lg:text-white duration-300'}
					rel="noreferrer"
				>
					<AlertCircle className={'cursor-pointer w-6'} />
					<span className={'hidden lg:inline text-xs whitespace-nowrap'}>How to play</span>
				</a>
			</div>
		</div>
	);
};
