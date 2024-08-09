import { BonusChart } from '@/src/components/luro/BonusChart.tsx';
import { useRoundBank, useRoundBets, useRoundBonusShare, useVisibleRound } from '@/src/lib/luro/query';
import { ZeroAddress } from '@betfinio/abi';
import { valueToNumber } from '@betfinio/hooks/dist/utils';
import { BetValue } from 'betfinio_app/BetValue';
import { Tooltip, TooltipContent, TooltipTrigger } from 'betfinio_app/tooltip';
import { AnimatePresence, motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';
import React, { useMemo } from 'react';
import { useAccount } from 'wagmi';

export const BonusInfo = () => {
	const { data: round } = useVisibleRound();
	const { data: bets = [] } = useRoundBets(round);
	const { data: volume = 0n } = useRoundBank(round);
	const { data: bonusShare = 0n } = useRoundBonusShare(round);
	const { address = ZeroAddress } = useAccount();

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
	}, [bets, volume, address]);

	const myBonus = bonuses.reduce((acc, { bonus, bet }) => acc + (bet.player.toLowerCase() === address.toLowerCase() ? bonus : 0), 0);

	return (
		<AnimatePresence>
			<Tooltip>
				<motion.div initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0 }}>
					<div className={'flex items-center justify-between'}>
						<h1 className={'flex gap-1 my-2 text-lg font-semibold'}>
							Your bonus for this round:
							<span className={'text-[#FFC800]'}>
								<BetValue value={myBonus} precision={2} withIcon={true} />
							</span>
						</h1>
						<TooltipTrigger>
							<AlertCircle className={'text-yellow-400'} width={24} />
						</TooltipTrigger>
						<TooltipContent className={'text-[#959DAD] border border-yellow-400 rounded-lg bg-black bg-opacity-75 py-2 px-3'}>
							<div className={'text-xs italic'}>
								<div className={'text-center'}>
									The bonus represents <span className={'text-[#FFC800]'}>4%</span> of all bets{' '}
									<span className={'text-[#FFC800]'}>({valueToNumber(volume)} BET)</span> that are split among winners according to{' '}
									<span className={'text-[#FFC800]'}>order</span> and <span className={'text-[#FFC800]'}>size</span> of bets.
								</div>
								<div className={'text-center font-bold'}>The sooner and more you bet the bigger bonus you get.</div>
							</div>
						</TooltipContent>
					</div>
					<div className={'bg-primaryLight rounded-md px-[30px] py-5 border border-gray-800'}>
						<div className={'relative'}>
							<div className={'px-[120px] relative z-10'}>{/*<BonusChart bonuses={bonuses} />*/}</div>
							<div className={'absolute bottom-[4px] w-full'}>
								<div className={'flex justify-between text-[#6A6A9F] text-xs font-bold'}>
									<p>First bet</p>
									<p>Last bet</p>
								</div>
								<div className={'flex justify-between text-[#959DAD] text-xs font-semibold'} />
							</div>
						</div>
					</div>
				</motion.div>
			</Tooltip>
		</AnimatePresence>
	);
};
