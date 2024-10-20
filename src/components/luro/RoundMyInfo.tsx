import { getCurrentRoundInfo } from '@/src/lib/luro/api';
import { useRoundBank, useRoundBets, useVisibleRound } from '@/src/lib/luro/query';
import { valueToNumber } from '@betfinio/abi';
import { Bet } from '@betfinio/ui/dist/icons';
import { LuckyRound } from '@betfinio/ui/dist/icons/LuckyRound';
import { BetValue } from 'betfinio_app/BetValue';
import cx from 'clsx';
import { UserIcon } from 'lucide-react';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

export const RoundMyInfo = () => {
	const { t } = useTranslation('games', { keyPrefix: 'luro.myInfo' });
	const { data: round } = useVisibleRound();
	const { data: bets = [], isFetched } = useRoundBets(round);
	const { data: volume = 0n } = useRoundBank(round);

	const roundInfo = useMemo(() => {
		return getCurrentRoundInfo(bets);
	}, [bets]);

	return (
		<div className={'bg-primaryLight max-h-[120px] border border-gray-800 py-[10px] px-[10px] rounded-xl sticky top-5 text-sm grow flex flex-col gap-2'}>
			<div className={'bg-primary rounded-lg p-[10px] flex justify-between gap-1 items-center text-white font-semibold'}>
				<div className={'flex flex-row items-center gap-1 text-yellow-400'}>
					<LuckyRound className={'h-4 w-4 '} />
					<div className={cx('flex flex-row gap-1 items-center', { 'blur-sm animate-pulse': !isFetched })}>
						<BetValue value={roundInfo.volume} precision={2} />
						<Bet color={'yellow'} className={'w-4 h-4'} />
					</div>
				</div>
				<div className={'flex flex-row items-center gap-1 text-yellow-400'}>
					<div className={cx('flex flex-row gap-1 items-center', { 'blur-sm animate-pulse': !isFetched })}>{roundInfo.usersCount}</div>
					<UserIcon className={'h-4 w-4'} />
				</div>
			</div>

			<div className={'bg-primary rounded-lg p-[10px] flex justify-between gap-1 items-center font-semibold'}>
				<div className={'flex flex-row items-center gap-1 text-[#6A6F84]'}>{t('totalBonus')}</div>
				<div className={cx('text-blue-400 flex flex-row gap-1 items-center', { 'blur-sm animate-pulse': !isFetched })}>
					<BetValue value={valueToNumber((volume / 100n) * 5n)} />
					{/*TODO: make blue in ui*/}
					<Bet color={'blue-400'} className={'w-4 h-4'} />
				</div>
			</div>
		</div>
	);
};
