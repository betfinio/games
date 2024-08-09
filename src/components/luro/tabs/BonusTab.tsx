import { useRoundBank, useRoundBets, useRoundBonusShare, useVisibleRound } from '@/src/lib/luro/query';
import { addressToColor } from '@/src/lib/roulette';
import { truncateEthAddress, valueToNumber } from '@betfinio/hooks/dist/utils';
import Fox from '@betfinio/ui/dist/icons/Fox';
import { useUsername } from 'betfinio_app/lib/query/username';
import cx from 'clsx';
import { type FC, useMemo } from 'react';
import type { Address } from 'viem';

export const BonusTab = () => {
	const { data: round } = useVisibleRound();
	const { data: bets } = useRoundBets(round);
	const { data: volume = 0n } = useRoundBank(round);
	const { data: bonusShare = 0n } = useRoundBonusShare(round);

	const bonuses = useMemo(() => {
		return bets.map((bet, index) => {
			if (bonusShare === 0n) return { bet, bonus: 0 };
			const bonusPool = (volume / 100n) * 4n;
			const weight = bet.amount * BigInt(bets.length - index);
			return {
				bet,
				bonus: valueToNumber((bonusPool * weight) / bonusShare),
			};
		});
	}, [bets, volume]);

	return (
		<div className={'grow flex flex-col gap-2'}>
			{bonuses.map(({ bet, bonus }, i) => {
				return <TabItem key={i} player={bet.player} bonus={bonus} />;
			})}
		</div>
	);
};

export interface TabItemProps {
	player: Address;
	bonus: number;
}

const TabItem: FC<TabItemProps> = ({ player, bonus }) => {
	const { data: username } = useUsername(player);
	return (
		<div className={cx('rounded-lg flex bg-primary justify-between')}>
			<div className={'py-3 px-4 flex justify-between items-center grow'}>
				<div className={'flex items-start gap-[10px]'}>
					<Fox className={'w-5 h-5'} />
					<div className={'flex flex-col text-[#6A6F84] text-xs gap-2'}>
						<p className={'font-semibold text-sm !text-gray-300'}>{username || truncateEthAddress(player)}</p>
					</div>
				</div>
				<div className={'flex flex-col items-end text-xs gap-2'}>
					<p className={'font-semibold text-sm text-[#FFC800]'}>
						<BonusTab value={bonus} precision={2} withIcon={true} />
					</p>
				</div>
			</div>
			<div className={'w-[10px] rounded-r-[10px]'} style={{ backgroundColor: addressToColor(player) }} />
		</div>
	);
};
