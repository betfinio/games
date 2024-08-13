import Paytable from '@/src/components/roulette/Paytable.tsx';
import { DYNAMIC_STAKING } from '@/src/global.ts';
import { useLocalBets, usePotentialWin } from '@/src/lib/roulette/query';
import { valueToNumber } from '@betfinio/abi';
import { Bag } from '@betfinio/ui/dist/icons';
import { BetValue } from 'betfinio_app/BetValue';
import { Button } from 'betfinio_app/button';
import { Dialog, DialogContent, DialogTrigger } from 'betfinio_app/dialog';
import { useBalance } from 'betfinio_app/lib/query/token';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from 'betfinio_app/tooltip';
import cx from 'clsx';
import { AlertCircle, CircleAlert, CircleHelp } from 'lucide-react';
import React, { type FC, useMemo } from 'react';

const ROULETTE_TUTORIAL = 'https://betfin.gitbook.io/betfin-public/v/games-manual/games-guide/roulette-single-player';

const Header: FC = () => {
	const { data: balance = 0n } = useBalance(DYNAMIC_STAKING);
	const maxPayout = useMemo(() => {
		return balance / 20n;
	}, [balance]);

	const { data: bets = [] } = useLocalBets();
	const { data: potentialWin = 1928234n * 10n ** 18n, isLoading } = usePotentialWin();
	const total = bets.reduce((acc, bet) => acc + bet.amount, 0);
	const handleReport = () => {
		document.getElementById('live-chat-ai-button')?.click();
	};
	return (
		<TooltipProvider>
			<div className={cx('rounded-lg border border-gray-800 bg-primaryLight p-3 flex-row justify-between items-center h-full hidden lg:flex')}>
				<div className={cx('flex flex-row grow items-center justify-start gap-4 w-1/2 h-full')}>
					<div className={'flex gap-2 px-4 pr-8'}>
						<Tooltip>
							<TooltipTrigger>
								<div className={'flex items-center'}>
									<Bag className={'w-8 text-yellow-400'} />
								</div>
							</TooltipTrigger>

							<TooltipContent id="dynamic" className={cx('z-[50] border-2 border-[#FFC800] text-white')}>
								<div className={'px-8 py-5 text-xs bg-black bg-opacity-75'}>
									<p>
										<b className={'font-bold text-[#FFC800]'}>Dynamic</b> game
									</p>
								</div>
							</TooltipContent>
						</Tooltip>

						<div className={'flex flex-col leading-4 items-start'}>
							<h2 className={'text-base'}>Winning Pool</h2>
							<div className={'font-semibold'}>
								<BetValue withIcon value={balance} />
							</div>
						</div>
					</div>

					<div className={'flex flex-col relative px-4 pr-8 leading-4 items-start'}>
						<Tooltip>
							<div className={'flex items-center gap-1'}>
								<h2 className={'text-base'}>Max Payout</h2>
								<TooltipTrigger>
									<AlertCircle className={'cursor-pointer'} width={16} />
								</TooltipTrigger>
							</div>
							<TooltipContent className={'bg-primaryLighter border border-gray-800 rounded-lg text-white'}>
								<div className={' text-xs'}>
									<p>
										<b className={'font-bold text-[#FFC800]'}>5%</b> of Winning Pool
									</p>
								</div>
							</TooltipContent>
						</Tooltip>
						<div className={'font-semibold'}>
							<BetValue withIcon value={valueToNumber(maxPayout)} />
						</div>
					</div>
					<div className={'h-[80%] bg-white text-white w-[1px]'} />

					<div className={'flex flex-col  px-4 pr-8 leading-4 items-start'}>
						<h2 className={'text-base'}>Total Bet</h2>
						<div className={'font-semibold'}>
							<BetValue withIcon value={valueToNumber(BigInt(total) * 10n ** 18n)} />
						</div>
					</div>
					<div className={'flex flex-col px-4 pr-6 leading-4 items-start'}>
						<h2 className={'text-base'}>Potential Win</h2>
						<div className={cx('font-semibold text-yellow-400', isLoading && 'blur-sm')}>
							<BetValue withIcon value={valueToNumber(potentialWin)} />
						</div>
					</div>
					<div className={'h-[80%] bg-white text-white w-[1px]'} />
				</div>
				<div className={cx('flex flex-row justify-between items-center gap-8 px-6')}>
					<Dialog>
						<DialogTrigger>
							<div className={'flex flex-col items-center justify-center cursor-pointer text-[#FFC800] hover:text-[#FFC800] lg:text-white duration-300'}>
								<CircleHelp className={'w-6 h-6'} />
								<span className={'hidden sm:inline text-xs'}>Paytable</span>
							</div>
						</DialogTrigger>
						<DialogContent>
							<Paytable />
						</DialogContent>
					</Dialog>
					<a
						target={'_blank'}
						href={ROULETTE_TUTORIAL}
						className={'flex flex-col items-center justify-center cursor-pointer text-[#FFC800] hover:text-[#FFC800] lg:text-white duration-300'}
						rel="noreferrer"
					>
						<AlertCircle className={'w-6 h-6'} />
						<span className={'hidden sm:inline text-xs'}>How to Play</span>
					</a>
					<Button
						onClick={handleReport}
						variant={'link'}
						className={'text-white md:hover:text-yellow-400 md:text-yellow-400 flex flex-col items-center justify-center p-0'}
					>
						<CircleAlert className={'w-6'} />
						<span className={'hidden lg:inline text-xs whitespace-nowrap'}>Report</span>
					</Button>
				</div>
			</div>
		</TooltipProvider>
	);
};

export default Header;
