import { getCurrentRoundInfo } from '@/src/lib/luro/api';
import { useRoundBank, useRoundBets, useVisibleRound } from '@/src/lib/luro/query';
import { valueToNumber } from '@betfinio/abi';
import { Bet } from '@betfinio/ui/dist/icons';
import { BetValue } from 'betfinio_app/BetValue';
import cx from 'clsx';
import { ArrowUpIcon, UserIcon } from 'lucide-react';
import millify from 'millify';
import { useMemo } from 'react';

export const RoundMyInfo = () => {
	const { data: round } = useVisibleRound();
	const { data: bets = [], isFetched } = useRoundBets(round);
	const { data: volume = 0n } = useRoundBank(round);

	const roundInfo = useMemo(() => {
		return getCurrentRoundInfo(bets);
	}, [bets]);

	return (
		<div className={'bg-primaryLight max-h-[120px] border border-gray-800 py-[10px] px-[10px] rounded-xl sticky top-5 text-sm grow flex flex-col gap-2'}>
			<div className={'bg-primary rounded-lg p-[10px] flex justify-between gap-1 items-center text-white font-semibold'}>
				<div className={'flex flex-row items-center gap-1'}>
					<ArrowUpIcon className={'h-4 w-4'} />
					<div className={cx('flex flex-row gap-1 items-center', { 'blur-sm animate-pulse': !isFetched })}>
						<BetValue value={roundInfo.volume} precision={2} />
						<Bet color={'yellow'} className={'w-4 h-4'} />
					</div>
				</div>
				<div className={'flex flex-row items-center gap-1'}>
					<div className={cx('flex flex-row gap-1 items-center text-green-500', { 'blur-sm animate-pulse': !isFetched })}>{roundInfo.usersCount}</div>
					<UserIcon className={'h-4 w-4'} />
				</div>
			</div>

			<div className={'bg-primary rounded-lg p-[10px] flex justify-between gap-1 items-center font-semibold'}>
				<div className={'flex flex-row items-center gap-1 text-[#6A6F84]'}>Total Bonus</div>
				<div className={cx('text-yellow-400', { 'blur-sm animate-pulse': !isFetched })}>
					<BetValue value={valueToNumber((volume / 100n) * 5n)} withIcon />
				</div>
			</div>
		</div>
	);
};
