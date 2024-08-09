import RoundPool from '@/src/components/predict/RoundPool.tsx';
import SingleBet from '@/src/components/predict/SingleBet.tsx';
import { useLastBets } from '@/src/lib/predict/query';
import type { Game } from '@/src/lib/predict/types';
import cx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import type { FC } from 'react';

const LastBets: FC<{ game: Game }> = ({ game }) => {
	const { data: bets = [], isLoading } = useLastBets(4);

	return (
		<div className={'md:col-start-3 col-span-4 lg:col-span-2 items-center flex flex-col gap-2 lg:gap-4'}>
			{bets.length === 0 ? (
				<div className={'text-center text-gray-600 p-5'}>No bets yet</div>
			) : (
				<>
					<h2 className={'font-medium uppercase '}>Latest bets</h2>
					<AnimatePresence initial={false}>
						<div className={cx('w-full grid grid-cols-1 grid-rows-4 gap-1', { 'animate-pulse blur-sm': isLoading })}>
							{bets.map((e, i) => (
								<motion.div key={i} initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }} transition={{ duration: 0.5 }}>
									<SingleBet {...e} loading={false} />
								</motion.div>
							))}
							<div className={'row-span-1'}>
								<RoundPool game={game} />
							</div>
						</div>
					</AnimatePresence>
				</>
			)}
		</div>
	);
};

export default LastBets;
