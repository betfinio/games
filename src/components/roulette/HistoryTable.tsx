import { AllBetsTable } from '@/src/components/roulette/AllBetsTable.tsx';
import { MyBetsTable } from '@/src/components/roulette/MyBets.tsx';
import { ETHSCAN } from '@/src/global.ts';
import { bitMapToNumbers, getColor } from '@/src/lib/roulette';
import { useProofRandom } from '@/src/lib/roulette/query';
import type { RouletteBet } from '@/src/lib/roulette/types.ts';
import { ZeroAddress, truncateEthAddress, valueToNumber } from '@betfinio/abi';
import { Link } from '@tanstack/react-router';
import { BetValue } from 'betfinio_app/BetValue';
import { Tabs, TabsContent, TabsList, TabsTrigger } from 'betfinio_app/tabs';
import cx from 'clsx';
import { motion, useAnimation } from 'framer-motion';
import { ShieldCheckIcon, X } from 'lucide-react';
import { DateTime } from 'luxon';
import type { FC } from 'react';

const tabAnim = {
	hide: {
		opacity: 0,
		transition: {
			duration: 0.2,
			ease: 'linear',
			when: 'beforeChildren',
		},
	},
	show: {
		opacity: 1,
		transition: {
			duration: 0.2,
			ease: 'linear',
			when: 'beforeChildren',
		},
	},
};

const History = () => {
	return (
		<Tabs defaultValue={'my'}>
			<TabsList>
				<TabsTrigger value={'my'}>My Bets</TabsTrigger>
				<TabsTrigger value={'all'}>All Bets</TabsTrigger>
			</TabsList>

			<TabsContent value={'my'}>
				<MyBetsTable />
			</TabsContent>
			<TabsContent value={'all'}>
				<AllBetsTable />
			</TabsContent>
		</Tabs>
	);
};

export default History;

export const RoundModal: FC<{
	selectedBet: RouletteBet | null;
	onClose: () => void;
}> = ({ selectedBet, onClose }) => {
	const { data: proofTx, isFetching } = useProofRandom(selectedBet?.requestId || 0n);

	return (
		<motion.div
			onClick={(e) => e.stopPropagation()}
			className={
				'relative z-[100] mx-auto text-white  text-base font-semibold bg-primaryLighter w-full min-w-[90vw] sm:min-w-[500px] max-w-[600px] min-h-[300px] rounded-lg py-4 xs:px-1 sm:p-8'
			}
		>
			<div className={'flex items-center justify-between px-4 sm:px-0'}>
				<p>Betting ticket</p>
				<X
					onClick={onClose}
					className={'w-4 h-4 border border-white rounded-full cursor-pointer hover:text-red-roulette hover:border-red-roulette duration-200'}
				/>
			</div>

			<div className={'mt-8'}>
				<p className={'text-center'}>Winning</p>
				<div className={'flex items-center justify-center gap-3'}>
					<div className={cx('font-semibold text-4xl text-gray-500 flex gap-2', (selectedBet?.result ?? 0n) > 0n && '!text-[#38BB7F]')}>
						{valueToNumber(selectedBet?.result) > 0 && '+'}
						<BetValue withIcon className={'gap-2'} value={valueToNumber(selectedBet?.result)} iconClassName={'w-6 h-6'} />
					</div>
				</div>
			</div>

			<div className={'mt-6 py-6 border-y border-white border-opacity-10'}>
				<div className={'grid grid-cols-2 relative'}>
					<div>
						<div className={'text-center text-[#8794A1] text-sm'}>Total bet</div>
						<div className={'flex mt-2 gap-1 items-center justify-center'}>
							<div className={'text-base'}>
								<BetValue value={valueToNumber(selectedBet?.amount)} withIcon={true} />
							</div>
						</div>
					</div>

					<div className={'w-[1px] absolute left-[50%] -translate-x-[50%] h-full bg-white bg-opacity-10'} />

					<div>
						<p className={'text-center text-[#8794A1] text-sm'}>Win number</p>
						<div className={'flex mt-1 gap-1 items-center justify-center'}>
							<div
								className={cx('text-white min-w-[30px] min-h-[30px] rounded-lg flex justify-center font-semibold items-center text-xs', {
									'bg-red-roulette': getColor(selectedBet?.winNumber ?? 0) === 'RED',
									'bg-gray-800': getColor(selectedBet?.winNumber ?? 0) === 'BLACK',
									'bg-green-400': getColor(selectedBet?.winNumber ?? 0) === 'GREEN',
								})}
							>
								{selectedBet?.winNumber === 42 ? <div className={'px-2'}>Waiting</div> : selectedBet?.winNumber}
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className={'mt-5 flex flex-col items-center'}>
				<div className={'text-center'}>Bet ID:</div>
				<Link
					to={`${ETHSCAN}/address/${selectedBet?.address}`}
					className={'block text-center underline cursor-pointer hover:text-[#7366FF] duration-300 px-4 sm:hidden'}
					target={'_blank'}
				>
					{truncateEthAddress(selectedBet?.address || ZeroAddress, 7)}
				</Link>
				<Link
					to={`${ETHSCAN}/address/${selectedBet?.address}`}
					className={'text-center underline cursor-pointer hover:text-[#7366FF] duration-300 px-4 hidden sm:inline-block'}
					target={'_blank'}
				>
					{selectedBet?.address}
				</Link>
				<p className={'text-center font-normal text-[#8794A1]'}>
					{DateTime.fromMillis(Number(selectedBet?.created) * 1000).toFormat('yyyy-MM-dd, HH:mm:ss Z')} UTC
				</p>
			</div>

			<div className={'flex items-end justify-center gap-2 mt-5'}>
				<p className={'text-[#8794A1] font-semibold'}>Proof of random:</p>
				<ShieldCheckIcon className={'text-[#38BB7F] w-5 h-5'} />
				<a
					href={`${ETHSCAN}/tx/${proofTx}`}
					target={'_blank'}
					className={cx(
						'block text-center underline cursor-pointer hover:text-[#7366FF] duration-300',
						isFetching && 'animate-pulse blur-sm pointer-events-none',
					)}
					rel="noreferrer"
				>
					{truncateEthAddress(proofTx)}
				</a>
			</div>
			<div className={'text-xs mt-1 text-center '}>
				<a
					className={'text-[#8794A1] hover:text-green-400 duration-300 underline'}
					href="https://betfin.gitbook.io/betfin-public/proof-of-fairness/random-number-generation"
					target={'_blank'}
					rel="noreferrer"
				>
					How it works?
				</a>
			</div>

			<GameDetails bet={selectedBet} />
		</motion.div>
	);
};

export const GameDetails: FC<{ bet: RouletteBet | null }> = ({ bet }) => {
	const iconControls = useAnimation();
	const contentControls = useAnimation();

	const toggleContent = async (open: boolean) => {
		await contentControls.start({
			opacity: open ? 1 : 0,
			y: open ? 0 : -100,
			maxHeight: open ? 1000 : 0, // Adjust the maxHeight value as needed
			zIndex: open ? 1 : 0, // Set zIndex to 1 when open, 0 when closed
		});
		await iconControls.start({ rotate: open ? 180 : 0 });
	};
	console.log(bet);

	return null;
	// <Disclosure>
	// 	{({open}) => (
	// 		<>
	// 			<Disclosure.Button
	// 				className={'w-full mt-5'}
	// 				onClick={() => toggleContent(!open)}
	// 			>
	// 				<div className={'rounded-xl bg-primary flex p-6 items-center justify-between border border-[#151A2A]'}>
	// 					<span className="ml-2 text-base">Game details</span>
	// 					<motion.div
	// 						animate={iconControls}
	// 						transition={{duration: 0.3, ease: 'easeOut'}}
	// 						initial={{rotate: 0}}
	// 					>
	// 						<ChevronUpIcon className="w-4 h-4 text-[#FFC800]"/>
	// 					</motion.div>
	// 				</div>
	// 			</Disclosure.Button>
	// 			<div
	// 				className={'overflow-hidden'}
	// 			>
	//
	// 				<motion.div
	// 					initial={{opacity: 0, y: -10, maxHeight: 0, zIndex: 0}}
	// 					animate={contentControls}
	// 					transition={{duration: 0.3, ease: 'easeOut'}}
	// 				>
	// 					<Disclosure.Panel static>
	// 						<Roulette bet={bet}/>
	// 					</Disclosure.Panel>
	// 				</motion.div>
	// 			</div>
	//
	// 		</>
	// 	)}
	// </Disclosure>
};

const Roulette: FC<{ bet: RouletteBet | null }> = ({ bet }) => {
	const numbers = Array.from(Array(36).keys()).map((item) => item + 1);
	const getAmount = (selected: string) => {
		if (selected === '1k') return 10n ** BigInt(21);
		if (selected === '5k') return BigInt(5) * 10n ** BigInt(21);
		if (selected === '10k') return 10n ** BigInt(22);
		if (selected === '50k') return BigInt(5) * 10n ** BigInt(22);
		if (selected === '100k') return 10n ** BigInt(23);
		return 10n ** BigInt(21);
	};
	// amount, bet, value
	const bitmaps = bet?.bets?.map((bet) => bet.bitmap);
	const bets = bet?.bets?.map((bet) => bitMapToNumbers(bet)) || [];
	const selectedNumbers = bets?.flatMap((bet) => bet.numbers);
	return (
		<div className={'mt-5 grid grid-cols-3 xs:grid-cols-1 gap-[2px] '}>
			<div className={'grid grid-cols-3 grid-rows-14 xs:grid-rows-2 xs:grid-cols-14 gap-1 text-[10px] sm:text-xs xs:row-start-2 relative'}>
				<div className={'hidden xs:grid absolute top-0 left-0 grid-cols-14 grid-rows-2 w-full h-full items-center'}>
					<div className={'h-[50%] aspect-square col-span-4 col-start-2 ml-[49%] -translate-x-1/2 '}>
						{bets
							.filter((e) => e.value === 20000)
							.map((e, k) => (
								<div
									key={k}
									className={cx({
										'bg-chip-1k bg-cover w-full h-full absolute': e.amount === getAmount('1k'),
										'bg-chip-5k bg-cover w-full h-full absolute': e.amount === getAmount('5k'),
										'bg-chip-10k bg-cover w-full h-full absolute': e.amount === getAmount('10k'),
										'bg-chip-50k bg-cover w-full h-full absolute': e.amount === getAmount('50k'),
										'bg-chip-100k bg-cover w-full h-full absolute': e.amount === getAmount('100k'),
										'ml-[2px] mt-[2px]': k === 1,
										'ml-[4px] mt-[4px]': k === 2,
										'ml-[6px] mt-[6px]': k === 3,
										'ml-[8px] mt-[8px]': k === 4,
									})}
								/>
							))}
					</div>
					<div className={'h-[50%] aspect-square col-span-4 col-start-6 ml-[49%] -translate-x-1/2 '}>
						{bets
							.filter((e) => e.value === 20001)
							.map((e, k) => (
								<div
									key={k}
									className={cx({
										'bg-chip-1k bg-cover w-full h-full absolute': e.amount === getAmount('1k'),
										'bg-chip-5k bg-cover w-full h-full absolute': e.amount === getAmount('5k'),
										'bg-chip-10k bg-cover w-full h-full absolute': e.amount === getAmount('10k'),
										'bg-chip-50k bg-cover w-full h-full absolute': e.amount === getAmount('50k'),
										'bg-chip-100k bg-cover w-full h-full absolute': e.amount === getAmount('100k'),
										'ml-[2px] mt-[2px]': k === 1,
										'ml-[4px] mt-[4px]': k === 2,
										'ml-[6px] mt-[6px]': k === 3,
										'ml-[8px] mt-[8px]': k === 4,
									})}
								/>
							))}
					</div>
					<div className={'h-[50%] aspect-square col-span-4 col-start-10 ml-[49%] -translate-x-1/2 '}>
						{bets
							.filter((e) => e.value === 20002)
							.map((e, k) => (
								<div
									key={k}
									className={cx({
										'bg-chip-1k bg-cover w-full h-full absolute': e.amount === getAmount('1k'),
										'bg-chip-5k bg-cover w-full h-full absolute': e.amount === getAmount('5k'),
										'bg-chip-10k bg-cover w-full h-full absolute': e.amount === getAmount('10k'),
										'bg-chip-50k bg-cover w-full h-full absolute': e.amount === getAmount('50k'),
										'bg-chip-100k bg-cover w-full h-full absolute': e.amount === getAmount('100k'),
										'ml-[2px] mt-[2px]': k === 1,
										'ml-[4px] mt-[4px]': k === 2,
										'ml-[6px] mt-[6px]': k === 3,
										'ml-[8px] mt-[8px]': k === 4,
									})}
								/>
							))}
					</div>
					<div className={'h-[50%] aspect-square col-span-2 row-start-2 col-start-2 ml-[49%] -translate-x-1/2 '}>
						{bets
							.filter((e) => e.value === 20003)
							.map((e, k) => (
								<div
									key={k}
									className={cx({
										'bg-chip-1k bg-cover w-full h-full absolute': e.amount === getAmount('1k'),
										'bg-chip-5k bg-cover w-full h-full absolute': e.amount === getAmount('5k'),
										'bg-chip-10k bg-cover w-full h-full absolute': e.amount === getAmount('10k'),
										'bg-chip-50k bg-cover w-full h-full absolute': e.amount === getAmount('50k'),
										'bg-chip-100k bg-cover w-full h-full absolute': e.amount === getAmount('100k'),
										'ml-[2px] mt-[2px]': k === 1,
										'ml-[4px] mt-[4px]': k === 2,
										'ml-[6px] mt-[6px]': k === 3,
										'ml-[8px] mt-[8px]': k === 4,
									})}
								/>
							))}
					</div>
					<div className={'h-[50%] aspect-square col-span-2 row-start-2 col-start-12 ml-[49%] -translate-x-1/2 '}>
						{bets
							.filter((e) => e.value === 20004)
							.map((e, k) => (
								<div
									key={k}
									className={cx({
										'bg-chip-1k bg-cover w-full h-full absolute': e.amount === getAmount('1k'),
										'bg-chip-5k bg-cover w-full h-full absolute': e.amount === getAmount('5k'),
										'bg-chip-10k bg-cover w-full h-full absolute': e.amount === getAmount('10k'),
										'bg-chip-50k bg-cover w-full h-full absolute': e.amount === getAmount('50k'),
										'bg-chip-100k bg-cover w-full h-full absolute': e.amount === getAmount('100k'),
										'ml-[2px] mt-[2px]': k === 1,
										'ml-[4px] mt-[4px]': k === 2,
										'ml-[6px] mt-[6px]': k === 3,
										'ml-[8px] mt-[8px]': k === 4,
									})}
								/>
							))}
					</div>
					<div className={'h-[50%] aspect-square col-span-2 row-start-2 col-start-4 ml-[49%] -translate-x-1/2 '}>
						{bets
							.filter((e) => e.value === 20005)
							.map((e, k) => (
								<div
									key={k}
									className={cx({
										'bg-chip-1k bg-cover w-full h-full absolute': e.amount === getAmount('1k'),
										'bg-chip-5k bg-cover w-full h-full absolute': e.amount === getAmount('5k'),
										'bg-chip-10k bg-cover w-full h-full absolute': e.amount === getAmount('10k'),
										'bg-chip-50k bg-cover w-full h-full absolute': e.amount === getAmount('50k'),
										'bg-chip-100k bg-cover w-full h-full absolute': e.amount === getAmount('100k'),
										'ml-[2px] mt-[2px]': k === 1,
										'ml-[4px] mt-[4px]': k === 2,
										'ml-[6px] mt-[6px]': k === 3,
										'ml-[8px] mt-[8px]': k === 4,
									})}
								/>
							))}
					</div>
					<div className={'h-[50%] aspect-square col-span-2 row-start-2 col-start-10 ml-[49%] -translate-x-1/2 '}>
						{bets
							.filter((e) => e.value === 20006)
							.map((e, k) => (
								<div
									key={k}
									className={cx({
										'bg-chip-1k bg-cover w-full h-full absolute': e.amount === getAmount('1k'),
										'bg-chip-5k bg-cover w-full h-full absolute': e.amount === getAmount('5k'),
										'bg-chip-10k bg-cover w-full h-full absolute': e.amount === getAmount('10k'),
										'bg-chip-50k bg-cover w-full h-full absolute': e.amount === getAmount('50k'),
										'bg-chip-100k bg-cover w-full h-full absolute': e.amount === getAmount('100k'),
										'ml-[2px] mt-[2px]': k === 1,
										'ml-[4px] mt-[4px]': k === 2,
										'ml-[6px] mt-[6px]': k === 3,
										'ml-[8px] mt-[8px]': k === 4,
									})}
								/>
							))}
					</div>
					<div className={'h-[50%] aspect-square col-span-2 row-start-2 col-start-6 ml-[49%] -translate-x-1/2 '}>
						{bets
							.filter((e) => e.value === 20007)
							.map((e, k) => (
								<div
									key={k}
									className={cx({
										'bg-chip-1k bg-cover w-full h-full absolute': e.amount === getAmount('1k'),
										'bg-chip-5k bg-cover w-full h-full absolute': e.amount === getAmount('5k'),
										'bg-chip-10k bg-cover w-full h-full absolute': e.amount === getAmount('10k'),
										'bg-chip-50k bg-cover w-full h-full absolute': e.amount === getAmount('50k'),
										'bg-chip-100k bg-cover w-full h-full absolute': e.amount === getAmount('100k'),
										'ml-[2px] mt-[2px]': k === 1,
										'ml-[4px] mt-[4px]': k === 2,
										'ml-[6px] mt-[6px]': k === 3,
										'ml-[8px] mt-[8px]': k === 4,
									})}
								/>
							))}
					</div>
					<div className={'h-[50%] aspect-square col-span-2 row-start-2 col-start-8 ml-[49%] -translate-x-1/2 '}>
						{bets
							.filter((e) => e.value === 20008)
							.map((e, k) => (
								<div
									key={k}
									className={cx({
										'bg-chip-1k bg-cover w-full h-full absolute': e.amount === getAmount('1k'),
										'bg-chip-5k bg-cover w-full h-full absolute': e.amount === getAmount('5k'),
										'bg-chip-10k bg-cover w-full h-full absolute': e.amount === getAmount('10k'),
										'bg-chip-50k bg-cover w-full h-full absolute': e.amount === getAmount('50k'),
										'bg-chip-100k bg-cover w-full h-full absolute': e.amount === getAmount('100k'),
										'ml-[2px] mt-[2px]': k === 1,
										'ml-[4px] mt-[4px]': k === 2,
										'ml-[6px] mt-[6px]': k === 3,
										'ml-[8px] mt-[8px]': k === 4,
									})}
								/>
							))}
					</div>
				</div>

				{/*MOBILE*/}
				<div className={'grid xs:hidden absolute top-0 left-0 grid-cols-3 grid-rows-14 w-full h-full items-center'}>
					{/*1 to 12 mobile*/}
					<div className={'h-[50%] aspect-square self-end translate-x-[50%] translate-y-[50%] col-start-3 row-start-3 relative '}>
						{bets
							.filter((e) => e.value === 20000)
							.map((e, k) => (
								<div
									key={k}
									className={cx({
										'bg-chip-1k bg-cover w-full h-full absolute': e.amount === getAmount('1k'),
										'bg-chip-5k bg-cover w-full h-full absolute': e.amount === getAmount('5k'),
										'bg-chip-10k bg-cover w-full h-full absolute': e.amount === getAmount('10k'),
										'bg-chip-50k bg-cover w-full h-full absolute': e.amount === getAmount('50k'),
										'bg-chip-100k bg-cover w-full h-full absolute': e.amount === getAmount('100k'),
										'ml-[2px] mt-[2px]': k === 1,
										'ml-[4px] mt-[4px]': k === 2,
										'ml-[6px] mt-[6px]': k === 3,
										'ml-[8px] mt-[8px]': k === 4,
									})}
								/>
							))}
					</div>

					{/*13 to 24 mobile*/}
					<div className={'h-[50%] aspect-square self-end translate-x-[50%] translate-y-[50%] relative col-start-3 row-start-7 '}>
						{bets
							.filter((e) => e.value === 20001)
							.map((e, k) => (
								<div
									key={k}
									className={cx({
										'bg-chip-1k bg-cover w-full h-full absolute': e.amount === getAmount('1k'),
										'bg-chip-5k bg-cover w-full h-full absolute': e.amount === getAmount('5k'),
										'bg-chip-10k bg-cover w-full h-full absolute': e.amount === getAmount('10k'),
										'bg-chip-50k bg-cover w-full h-full absolute': e.amount === getAmount('50k'),
										'bg-chip-100k bg-cover w-full h-full absolute': e.amount === getAmount('100k'),
										'ml-[2px] mt-[2px]': k === 1,
										'ml-[4px] mt-[4px]': k === 2,
										'ml-[6px] mt-[6px]': k === 3,
										'ml-[8px] mt-[8px]': k === 4,
									})}
								/>
							))}
					</div>

					{/*25 to 36 mobile*/}
					<div className={'h-[50%] aspect-square self-end translate-x-[50%] translate-y-[50%] relative col-start-3 row-start-[11] '}>
						{bets
							.filter((e) => e.value === 20002)
							.map((e, k) => (
								<div
									key={k}
									className={cx({
										'bg-chip-1k bg-cover w-full h-full absolute': e.amount === getAmount('1k'),
										'bg-chip-5k bg-cover w-full h-full absolute': e.amount === getAmount('5k'),
										'bg-chip-10k bg-cover w-full h-full absolute': e.amount === getAmount('10k'),
										'bg-chip-50k bg-cover w-full h-full absolute': e.amount === getAmount('50k'),
										'bg-chip-100k bg-cover w-full h-full absolute': e.amount === getAmount('100k'),
										'ml-[2px] mt-[2px]': k === 1,
										'ml-[4px] mt-[4px]': k === 2,
										'ml-[6px] mt-[6px]': k === 3,
										'ml-[8px] mt-[8px]': k === 4,
									})}
								/>
							))}
					</div>

					{/*1 to 18 mobile*/}
					<div className={'h-[50%] aspect-square self-end translate-x-[50%] translate-y-[50%] relative col-start-2 row-start-2 '}>
						{bets
							.filter((e) => e.value === 20003)
							.map((e, k) => (
								<div
									key={k}
									className={cx({
										'bg-chip-1k bg-cover w-full h-full absolute': e.amount === getAmount('1k'),
										'bg-chip-5k bg-cover w-full h-full absolute': e.amount === getAmount('5k'),
										'bg-chip-10k bg-cover w-full h-full absolute': e.amount === getAmount('10k'),
										'bg-chip-50k bg-cover w-full h-full absolute': e.amount === getAmount('50k'),
										'bg-chip-100k bg-cover w-full h-full absolute': e.amount === getAmount('100k'),
										'ml-[2px] mt-[2px]': k === 1,
										'ml-[4px] mt-[4px]': k === 2,
										'ml-[6px] mt-[6px]': k === 3,
										'ml-[8px] mt-[8px]': k === 4,
									})}
								/>
							))}
					</div>

					{/*19 to 36 mobile*/}
					<div className={'h-[50%] aspect-square self-end translate-x-[50%] translate-y-[50%] relative col-start-2 row-start-12 '}>
						{bets
							.filter((e) => e.value === 20004)
							.map((e, k) => (
								<div
									key={k}
									className={cx({
										'bg-chip-1k bg-cover w-full h-full absolute': e.amount === getAmount('1k'),
										'bg-chip-5k bg-cover w-full h-full absolute': e.amount === getAmount('5k'),
										'bg-chip-10k bg-cover w-full h-full absolute': e.amount === getAmount('10k'),
										'bg-chip-50k bg-cover w-full h-full absolute': e.amount === getAmount('50k'),
										'bg-chip-100k bg-cover w-full h-full absolute': e.amount === getAmount('100k'),
										'ml-[2px] mt-[2px]': k === 1,
										'ml-[4px] mt-[4px]': k === 2,
										'ml-[6px] mt-[6px]': k === 3,
										'ml-[8px] mt-[8px]': k === 4,
									})}
								/>
							))}
					</div>

					{/*Even mobile*/}
					<div className={'h-[50%] aspect-square self-end translate-x-[50%] translate-y-[50%] relative col-start-2 row-start-4 '}>
						{bets
							.filter((e) => e.value === 20005)
							.map((e, k) => (
								<div
									key={k}
									className={cx({
										'bg-chip-1k bg-cover w-full h-full absolute': e.amount === getAmount('1k'),
										'bg-chip-5k bg-cover w-full h-full absolute': e.amount === getAmount('5k'),
										'bg-chip-10k bg-cover w-full h-full absolute': e.amount === getAmount('10k'),
										'bg-chip-50k bg-cover w-full h-full absolute': e.amount === getAmount('50k'),
										'bg-chip-100k bg-cover w-full h-full absolute': e.amount === getAmount('100k'),
										'ml-[2px] mt-[2px]': k === 1,
										'ml-[4px] mt-[4px]': k === 2,
										'ml-[6px] mt-[6px]': k === 3,
										'ml-[8px] mt-[8px]': k === 4,
									})}
								/>
							))}
					</div>

					{/*Odd mobile*/}
					<div className={'h-[50%] aspect-square self-end translate-x-[50%] translate-y-[50%] relative col-start-2 row-start-10 '}>
						{bets
							.filter((e) => e.value === 20006)
							.map((e, k) => (
								<div
									key={k}
									className={cx({
										'bg-chip-1k bg-cover w-full h-full absolute': e.amount === getAmount('1k'),
										'bg-chip-5k bg-cover w-full h-full absolute': e.amount === getAmount('5k'),
										'bg-chip-10k bg-cover w-full h-full absolute': e.amount === getAmount('10k'),
										'bg-chip-50k bg-cover w-full h-full absolute': e.amount === getAmount('50k'),
										'bg-chip-100k bg-cover w-full h-full absolute': e.amount === getAmount('100k'),
										'ml-[2px] mt-[2px]': k === 1,
										'ml-[4px] mt-[4px]': k === 2,
										'ml-[6px] mt-[6px]': k === 3,
										'ml-[8px] mt-[8px]': k === 4,
									})}
								/>
							))}
					</div>

					{/*Black mobile*/}
					<div className={'h-[50%] aspect-square self-end translate-x-[50%] translate-y-[50%] relative col-start-2 row-start-6  '}>
						{bets
							.filter((e) => e.value === 20007)
							.map((e, k) => (
								<div
									key={k}
									className={cx({
										'bg-chip-1k bg-cover w-full h-full absolute': e.amount === getAmount('1k'),
										'bg-chip-5k bg-cover w-full h-full absolute': e.amount === getAmount('5k'),
										'bg-chip-10k bg-cover w-full h-full absolute': e.amount === getAmount('10k'),
										'bg-chip-50k bg-cover w-full h-full absolute': e.amount === getAmount('50k'),
										'bg-chip-100k bg-cover w-full h-full absolute': e.amount === getAmount('100k'),
										'ml-[2px] mt-[2px]': k === 1,
										'ml-[4px] mt-[4px]': k === 2,
										'ml-[6px] mt-[6px]': k === 3,
										'ml-[8px] mt-[8px]': k === 4,
									})}
								/>
							))}
					</div>

					{/*Red mobile*/}
					<div className={'h-[50%] aspect-square self-end translate-x-[50%] translate-y-[50%] relative col-start-2 row-start-8 '}>
						{bets
							.filter((e) => e.value === 20008)
							.map((e, k) => (
								<div
									key={k}
									className={cx({
										'bg-chip-1k bg-cover w-full h-full absolute': e.amount === getAmount('1k'),
										'bg-chip-5k bg-cover w-full h-full absolute': e.amount === getAmount('5k'),
										'bg-chip-10k bg-cover w-full h-full absolute': e.amount === getAmount('10k'),
										'bg-chip-50k bg-cover w-full h-full absolute': e.amount === getAmount('50k'),
										'bg-chip-100k bg-cover w-full h-full absolute': e.amount === getAmount('100k'),
										'ml-[2px] mt-[2px]': k === 1,
										'ml-[4px] mt-[4px]': k === 2,
										'ml-[6px] mt-[6px]': k === 3,
										'ml-[8px] mt-[8px]': k === 4,
									})}
								/>
							))}
					</div>
				</div>

				<div
					className={cx(
						'col-span-1 row-span-4 xs:aspect-[4/1] xs:col-span-4 xs:row-span-1 xs:col-start-2 border border-gray-900 bg-primaryLighter rounded-md MODAL_VERTICAL flex items-center justify-center font-semibold row-start-2 col-start-3',
						{ 'border-[3px] border-sky-500': bitmaps?.includes(8190n) },
					)}
				>
					1 to 12
				</div>
				<div
					className={cx(
						'col-span-1 row-span-4 xs:col-span-4 xs:row-span-1 border border-gray-900 bg-primaryLighter rounded-md MODAL_VERTICAL flex items-center justify-center font-semibold row-start-6 col-start-3',
						{ 'border-[3px] border-sky-500': bitmaps?.includes(33546240n) },
					)}
				>
					13 to 34
				</div>
				<div
					className={cx(
						'col-span-1 row-span-4 xs:col-span-4 xs:row-span-1 border border-gray-900 bg-primaryLighter rounded-md MODAL_VERTICAL  flex items-center justify-center font-semibold row-start-10 col-start-3',
						{ 'border-[3px] border-sky-500': bitmaps?.includes(137405399040n) },
					)}
				>
					25 to 36
				</div>
				<div
					className={cx(
						'col-span-1 row-span-2 xs:col-span-2 xs:row-span-1 xs:col-start-2 xs:row-start-2 border border-gray-900 bg-primaryLighter rounded-md MODAL_VERTICAL  flex items-center justify-center font-semibold row-start-2 col-start-2',
						{ 'border-[3px] border-sky-500': bitmaps?.includes(524286n) },
					)}
				>
					1 to 18
				</div>
				<div
					className={cx(
						'col-span-1 row-span-2 xs:col-span-2 xs:row-span-1 xs:col-start-4 xs:row-start-2 border border-gray-900 bg-primaryLighter rounded-md MODAL_VERTICAL  flex items-center justify-center font-semibold row-start-4 col-start-2',
						{ 'border-[3px] border-sky-500': bitmaps?.includes(91625968980n) },
					)}
				>
					Even
				</div>
				<div
					className={cx(
						'col-span-1 row-span-2 xs:col-span-2 xs:row-span-1 xs:col-start-6 xs:row-start-2 border border-gray-900 bg-gray-800 rounded-md MODAL_VERTICAL  flex items-center justify-center font-semibold row-start-6 col-start-2',
						{ 'border-[3px] border-sky-500': bitmaps?.includes(45991767380n) },
					)}
				/>
				<div
					className={cx(
						'col-span-1 row-span-2 xs:col-span-2 xs:row-span-1 xs:col-start-8 xs:row-start-2 border border-gray-900 bg-red-roulette rounded-md MODAL_VERTICAL  flex items-center justify-center font-semibold row-start-8 col-start-2',
						{ 'border-[3px] border-sky-500': bitmaps?.includes(91447186090n) },
					)}
				/>
				<div
					className={cx(
						'col-span-1 row-span-2 xs:col-span-2 xs:row-span-1 xs:col-start-10 xs:row-start-2 border border-gray-900 bg-primaryLighter rounded-md MODAL_VERTICAL  flex items-center justify-center font-semibold row-start-10 col-start-2',
						{ 'border-[3px] border-sky-500': bitmaps?.includes(45812984490n) },
					)}
				>
					Odd
				</div>
				<div
					className={cx(
						'col-span-1 row-span-2 xs:col-span-2 xs:row-span-1 xs:col-start-12 xs:row-start-2 border border-gray-900 bg-primaryLighter rounded-md MODAL_VERTICAL  flex items-center justify-center font-semibold row-start-12 col-start-2',
						{ 'border-[3px] border-sky-500': bitmaps?.includes(45812984490n) },
					)}
				>
					19 to 36
				</div>
			</div>
			<div className={'grid grid-cols-3 grid-rows-14 xs:grid-rows-3 xs:grid-cols-14 gap-1 xs:text-xl relative'}>
				{/*number*/}
				<div className={'absolute top-0 left-0 w-full h-full hidden xs:grid grid-cols-14 grid-rows-3 gap-1'}>
					{Array.from(Array(42)).map((_, i) => (
						<div
							key={i}
							className={cx('h-[50%] aspect-square z-[5]  mt-[25%] ml-[25%] relative', {
								'w-0 h-0': i === 28 || i === 0,
							})}
						>
							{bets
								.filter((e) => e.value === i)
								.map((e, k) => (
									<div
										key={k}
										className={cx({
											'bg-chip-1k bg-cover w-full h-full absolute': e.amount === getAmount('1k'),
											'bg-chip-5k bg-cover w-full h-full absolute': e.amount === getAmount('5k'),
											'bg-chip-10k bg-cover w-full h-full absolute': e.amount === getAmount('10k'),
											'bg-chip-50k bg-cover w-full h-full absolute': e.amount === getAmount('50k'),
											'bg-chip-100k bg-cover w-full h-full absolute': e.amount === getAmount('100k'),
											'ml-[2px] mt-[2px]': k === 1,
											'ml-[4px] mt-[4px]': k === 2,
											'ml-[6px] mt-[6px]': k === 3,
											'ml-[8px] mt-[8px]': k === 4,
										})}
									/>
								))}
						</div>
					))}
				</div>
				{/*number mobile*/}
				<div className={'absolute top-0 left-0 w-full h-full grid xs:hidden grid-cols-3 grid-flow-col grid-rows-14 gap-1'}>
					{Array.from(Array(42)).map((_, i) => (
						<div
							key={i}
							className={cx('h-[50%] aspect-square z-[5]  mt-[25%] ml-[25%] relative', {
								'w-0 h-0': i === 28 || i === 0,
								'col-start-3': i >= 0 && i <= 13,
								'col-start-2': i >= 14 && i <= 27,
								'col-start-1': i >= 28 && i <= 41,
							})}
						>
							{bets
								.filter((e) => e.value === i)
								.map((e, k) => (
									<div
										key={k}
										className={cx({
											'bg-chip-1k bg-cover w-full h-full absolute': e.amount === getAmount('1k'),
											'bg-chip-5k bg-cover w-full h-full absolute': e.amount === getAmount('5k'),
											'bg-chip-10k bg-cover w-full h-full absolute': e.amount === getAmount('10k'),
											'bg-chip-50k bg-cover w-full h-full absolute': e.amount === getAmount('50k'),
											'bg-chip-100k bg-cover w-full h-full absolute': e.amount === getAmount('100k'),
											'ml-[2px] mt-[2px]': k === 1,
											'ml-[4px] mt-[4px]': k === 2,
											'ml-[6px] mt-[6px]': k === 3,
											'ml-[8px] mt-[8px]': k === 4,
										})}
									/>
								))}
						</div>
					))}
				</div>
				{/*corner*/}
				<div className={'absolute top-0 left-0 w-full h-full hidden xs:grid grid-cols-14 grid-rows-3 gap-1'}>
					{Array.from(Array(29)).map((_, i) => (
						<div
							key={i}
							className={cx('h-[50%] aspect-square z-[5] relative mt-[90%] ml-[83%] sm:mt-[80%] sm:ml-[80%]', {
								// 'w-0 h-0': i === 13 || i == 12 || i === 27 || i === 26
							})}
						>
							{bets
								.filter((e) => e.value === 100 + i)
								.map((e, k) => (
									<div
										key={k}
										className={cx({
											'bg-chip-1k bg-cover w-full h-full absolute': e.amount === getAmount('1k'),
											'bg-chip-5k bg-cover w-full h-full absolute': e.amount === getAmount('5k'),
											'bg-chip-10k bg-cover w-full h-full absolute': e.amount === getAmount('10k'),
											'bg-chip-50k bg-cover w-full h-full absolute': e.amount === getAmount('50k'),
											'bg-chip-100k bg-cover w-full h-full absolute': e.amount === getAmount('100k'),
											'ml-[2px] mt-[2px]': k === 1,
											'ml-[4px] mt-[4px]': k === 2,
											'ml-[6px] mt-[6px]': k === 3,
											'ml-[8px] mt-[8px]': k === 4,
										})}
									/>
								))}
						</div>
					))}
				</div>
				{/*mobile corner*/}
				<div className={'absolute top-0 left-0 w-full h-full grid xs:hidden  grid-rows-14 grid-cols-3 grid-flow-col gap-0 '}>
					{Array.from(Array(29)).map((_, i) => (
						<div
							key={i}
							className={cx('h-[50%] w-[50%] z-[5]  relative  mt-[75%] ml-[-25%]', {
								'col-start-3': i >= 0 && i <= 13,
								'col-start-2': i >= 14 && i <= 27,
								'!w-0 !h-0': i === 13 || i === 12 || i === 27 || i === 26,
							})}
						>
							{bets
								.filter((e) => e.value === 100 + i)
								.map((e, k) => (
									<div
										key={k}
										className={cx({
											'bg-chip-1k bg-cover w-full h-full absolute': e.amount === getAmount('1k'),
											'bg-chip-5k bg-cover w-full h-full absolute': e.amount === getAmount('5k'),
											'bg-chip-10k bg-cover w-full h-full absolute': e.amount === getAmount('10k'),
											'bg-chip-50k bg-cover w-full h-full absolute': e.amount === getAmount('50k'),
											'bg-chip-100k bg-cover w-full h-full absolute': e.amount === getAmount('100k'),
											'ml-[2px] mt-[2px]': k === 1,
											'ml-[4px] mt-[4px]': k === 2,
											'ml-[6px] mt-[6px]': k === 3,
											'ml-[8px] mt-[8px]': k === 4,
										})}
									/>
								))}
						</div>
					))}
				</div>
				{/*h split*/}
				<div className={'absolute top-0 left-0 w-full h-full hidden xs:grid grid-cols-14 grid-rows-3 gap-1'}>
					{Array.from(Array(40)).map((_, i) => (
						<div
							key={i}
							className={cx('h-[50%] aspect-square  z-[5] relative  mt-[25%] ml-[80%]', {
								'w-0 h-0': i === 12 || i === 13 || i === 27 || i === 26,
							})}
						>
							{bets
								.filter((e) => e.value === 1000 + i)
								.map((e, k) => (
									<div
										key={k}
										className={cx({
											'bg-chip-1k bg-cover w-full h-full absolute': e.amount === getAmount('1k'),
											'bg-chip-5k bg-cover w-full h-full absolute': e.amount === getAmount('5k'),
											'bg-chip-10k bg-cover w-full h-full absolute': e.amount === getAmount('10k'),
											'bg-chip-50k bg-cover w-full h-full absolute': e.amount === getAmount('50k'),
											'bg-chip-100k bg-cover w-full h-full absolute': e.amount === getAmount('100k'),
											'ml-[2px] mt-[2px]': k === 1,
											'ml-[4px] mt-[4px]': k === 2,
											'ml-[6px] mt-[6px]': k === 3,
											'ml-[8px] mt-[8px]': k === 4,
										})}
									/>
								))}
						</div>
					))}
				</div>
				{/*h split mobile*/}
				<div className={'absolute top-0 left-0 w-full h-full xs:hidden grid grid-cols-3 grid-rows-14 gap-0 grid-flow-col'}>
					{Array.from(Array(40)).map((_, i) => (
						<div
							key={i}
							className={cx('h-[50%] aspect-square z-[5]  relative  mt-[73%] ml-[25%] ', {
								'col-start-3': i >= 0 && i <= 13,
								'col-start-2': i >= 14 && i <= 27,
								'w-0 h-0': i === 12 || i === 13 || i === 27 || i === 26,
							})}
						>
							{bets
								.filter((e) => e.value === 1000 + i)
								.map((e, k) => (
									<div
										key={k}
										className={cx({
											'bg-chip-1k bg-cover w-full h-full absolute': e.amount === getAmount('1k'),
											'bg-chip-5k bg-cover w-full h-full absolute': e.amount === getAmount('5k'),
											'bg-chip-10k bg-cover w-full h-full absolute': e.amount === getAmount('10k'),
											'bg-chip-50k bg-cover w-full h-full absolute': e.amount === getAmount('50k'),
											'bg-chip-100k bg-cover w-full h-full absolute': e.amount === getAmount('100k'),
											'ml-[2px] mt-[2px]': k === 1,
											'ml-[4px] mt-[4px]': k === 2,
											'ml-[6px] mt-[6px]': k === 3,
											'ml-[8px] mt-[8px]': k === 4,
										})}
									/>
								))}
						</div>
					))}
				</div>
				{/*v split*/}
				<div className={'absolute top-0 left-0 w-full h-full hidden xs:grid grid-cols-14 grid-rows-3 gap-1'}>
					{Array.from(Array(41)).map((_, i) => (
						<div
							key={i}
							className={cx('h-[50%] aspect-square z-[5]  relative mt-[80%] ml-[25%]', {
								'w-0 h-0': i === 0 || i === 13 || i === 27 || i === 14 || i === 28,
							})}
						>
							{bets
								.filter((e) => e.value === 10000 + i)
								.map((e, k) => (
									<div
										key={k}
										className={cx({
											'bg-chip-1k bg-cover w-full h-full absolute': e.amount === getAmount('1k'),
											'bg-chip-5k bg-cover w-full h-full absolute': e.amount === getAmount('5k'),
											'bg-chip-10k bg-cover w-full h-full absolute': e.amount === getAmount('10k'),
											'bg-chip-50k bg-cover w-full h-full absolute': e.amount === getAmount('50k'),
											'bg-chip-100k bg-cover w-full h-full absolute': e.amount === getAmount('100k'),
											'ml-[2px] mt-[2px]': k === 1,
											'ml-[4px] mt-[4px]': k === 2,
											'ml-[6px] mt-[6px]': k === 3,
											'ml-[8px] mt-[8px]': k === 4,
										})}
									/>
								))}
						</div>
					))}
				</div>
				{/*v split mobile*/}
				<div className={'absolute top-0 left-0 w-full h-full xs:hidden grid grid-cols-3 grid-rows-14 grid-flow-col'}>
					{Array.from(Array(41)).map((_, i) => (
						<div
							key={i}
							className={cx('h-[50%] aspect-square z-[5]  relative mt-[25%] ml-[-25%]', {
								'col-start-3': i >= 0 && i <= 13,
								'col-start-2': i >= 14 && i <= 27,
								'w-0 h-0': i === 0 || i === 13 || i === 27 || i === 14 || i === 28,
							})}
						>
							{bets
								.filter((e) => e.value === 10000 + i)
								.map((e, k) => (
									<div
										key={k}
										className={cx({
											'bg-chip-1k bg-cover w-full h-full absolute': e.amount === getAmount('1k'),
											'bg-chip-5k bg-cover w-full h-full absolute': e.amount === getAmount('5k'),
											'bg-chip-10k bg-cover w-full h-full absolute': e.amount === getAmount('10k'),
											'bg-chip-50k bg-cover w-full h-full absolute': e.amount === getAmount('50k'),
											'bg-chip-100k bg-cover w-full h-full absolute': e.amount === getAmount('100k'),
											'ml-[2px] mt-[2px]': k === 1,
											'ml-[4px] mt-[4px]': k === 2,
											'ml-[6px] mt-[6px]': k === 3,
											'ml-[8px] mt-[8px]': k === 4,
										})}
									/>
								))}
						</div>
					))}
				</div>
				<div
					className={cx(
						'rounded-md bg-green-400 col-span-3 row-span-1 xs:col-span-1 xs:row-span-3 font-semibold text-sm flex items-center justify-center !row-start-1 !col-start-1 ',
						selectedNumbers?.includes(0) && 'border-[3px] border-sky-500',
					)}
				>
					0
				</div>
				{numbers.map((e) => (
					<div
						key={e}
						className={cx('rounded-md aspect-square font-semibold flex items-center justify-center text-xs', {
							'bg-red-roulette': getColor(e) === 'RED',
							'bg-gray-800': getColor(e) === 'BLACK',
							'xs:row-start-1 ': e % 3 === 0,
							'xs:row-start-2 ': e % 3 === 2,
							'xs:row-start-3 ': e % 3 === 1,
							'border-[3px] border-sky-500': selectedNumbers?.includes(e),
							'border-[3px] border-yellow-400': e === bet?.winNumber,
						})}
					>
						{e}
					</div>
				))}
				<div className={'rounded-md aspect-square font-semibold flex items-center justify-center border border-gray-900 text-xs bg-primaryLighter'}>2:1</div>
				<div className={'rounded-md aspect-square font-semibold flex items-center justify-center border border-gray-900 text-xs bg-primaryLighter'}>2:1</div>
				<div className={'rounded-md aspect-square font-semibold flex items-center justify-center border border-gray-900 text-xs bg-primaryLighter'}>2:1</div>
			</div>
		</div>
	);
};
