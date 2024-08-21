import { useLimits } from '@/src/lib/roulette/query';
import { valueToNumber } from '@betfinio/abi';
import { BetValue } from 'betfinio_app/BetValue';
import { DialogClose } from 'betfinio_app/dialog';
import { Link, X } from 'lucide-react';

const Paytable = () => {
	const { data: limits = [] } = useLimits();
	return (
		<div className={'bg-primaryLighter games rounded-lg p-4 w-full text-white relative'}>
			<DialogClose>
				<X
					className={
						'absolute top-4 right-4 rounded-full text-white border border-white w-6 h-6 p-1 cursor-pointer hover:border-red-roulette hover:text-red-roulette duration-300'
					}
				/>
			</DialogClose>
			<h2 className={'text-yellow-400 font-semibold text-lg'}>Paytable</h2>
			<div className={'w-full grid grid-cols-4 gap-1 my-4'}>
				<span className={'font-semibold text-lg'}>Bet type</span>
				<span className={'font-semibold text-lg'}>Payout</span>
				<span className={'font-semibold text-lg'}>Min bet</span>
				<span className={'font-semibold text-lg'}>Max bet</span>
				{limits.map((limit, i) => (
					<div className={'col-span-4  grid grid-cols-4'} key={i}>
						<span className={'text-gray-400'}>{limit.title}</span>
						<span className={'text-yellow-400'}>{limit.payout}x</span>
						<div className={'text-green-500 flex flex-row gap-1 items-center'}>
							<BetValue value={valueToNumber(limit.min)} withIcon />
						</div>
						<div className={'text-red-roulette flex flex-row gap-1 items-center'}>
							<BetValue value={valueToNumber(limit.max)} withIcon />
						</div>
					</div>
				))}
			</div>
			<div className={'mt-5 text-sm flex justify-end'}>
				<a
					className={'flex gap-1 underline hover:text-yellow-400 duration-300'}
					href="https://betfin.gitbook.io/betfin-public/games-guide/roulette-single-player/roulette-single-player-terms"
					target={'_blank'}
					rel="noreferrer"
				>
					Learn more
					<Link width={12} />
				</a>
			</div>
		</div>
	);
};

export default Paytable;
