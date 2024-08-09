import { mapBetsToRoundTable } from '@/src/lib/luro';
import { useBonusDistribution, useDistributeBonus, useRound, useRoundBank, useRoundBets, useRoundBonusShare } from '@/src/lib/luro/query';
import type { Round, RoundModalPlayer } from '@/src/lib/luro/types.ts';
import { addressToColor } from '@/src/lib/roulette';
import { ZeroAddress } from '@betfinio/abi';
import { truncateEthAddress, valueToNumber } from '@betfinio/hooks/dist/utils';
import Bank from '@betfinio/ui/dist/icons/Bank';
import GoldenTrophy from '@betfinio/ui/dist/icons/GoldenTrophy';
import MoneyHand from '@betfinio/ui/dist/icons/MoneyHand';
import People from '@betfinio/ui/dist/icons/People';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from '@tanstack/react-router';
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { BetValue } from 'betfinio_app/BetValue';
import cx from 'clsx';
import { motion } from 'framer-motion';
import { DateTime } from 'luxon';
import { type FC, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import type { Address } from 'viem';
import { useAccount } from 'wagmi';

export const ModalContent: FC<{
	onClose: () => void;
	roundId: number;
	interval: number;
	round: Round | null;
}> = ({ onClose, interval, roundId, round }) => {
	const { t } = useTranslation('', { keyPrefix: 'luro.roundModal' });

	const start = DateTime.fromMillis(roundId * interval * 1000);
	const end = DateTime.fromMillis((roundId + 1) * interval * 1000);
	const isFinished = DateTime.fromMillis(Date.now()).diff(end).milliseconds > 0;

	const { data: volume = 0n } = useRoundBank(roundId);
	const { data: bonusShare = 0n } = useRoundBonusShare(roundId);

	return (
		<motion.div
			onClick={(e) => e.stopPropagation()}
			className={
				'border relative border-gray-800 bg-primaryLight mx-auto text-white h-full md:max-w-[1200px] lg:w-[1000px] min-h-[300px] rounded-lg flex flex-col p-2  lg:p-8 pt-5'
			}
		>
			<XMarkIcon
				className={'absolute top-5 right-5 w-6 h-6  border-2 border-white rounded-full cursor-pointer hover:text-[#EB5757] hover:border-[#EB5757] duration-300'}
				onClick={() => onClose()}
			/>
			<div className={'flex flex-row gap-2 justify-start items-center'}>
				<div className={'flex flex-col gap-1 w-1/3 whitespace-nowrap'}>
					{isFinished ? (
						<div className={'text-lg leading-6'}>
							{t('titleFinished')} #{roundId}
						</div>
					) : (
						<>
							<div className={'text-lg'}>
								{t('title')} #{roundId}
							</div>
						</>
					)}
					<span className={'-mt-1 text-sm'}>
						{start.toFormat('dd.MM.yyyy / HH:mm')} - {end.toFormat('HH:mm')}
					</span>
				</div>
			</div>

			<RoundDetails volume={volume} usersCount={Number(round?.total.bets)} />
			<div className={'mt-4'}>{/*<LotteryRoundCircle round={roundId} />*/} todo</div>
			<WinnerBetInfo round={roundId} />
			<BetsTable round={roundId} volume={volume} bonusShare={bonusShare} winner={(round?.winner?.player || ZeroAddress).toLowerCase() as Address} />
			<BonusDistribution round={roundId} />
		</motion.div>
	);
};

interface RoundDetailsProps {
	volume: bigint;
	usersCount: number;
}

const BonusDistribution: FC<{ round: number }> = ({ round }) => {
	const { data: distributed } = useBonusDistribution(round);
	const { mutate: distribute } = useDistributeBonus();
	const handleDistribute = () => {
		console.log('distribute');
		distribute({ round });
	};

	if (distributed) {
		return <div className={'flex flex-row items-center my-4 justify-center'}>Bonuses were distributed!</div>;
	}
	return (
		<div className={'flex flex-row gap-2 items-center justify-end py-2'}>
			<button type={'submit'} onClick={handleDistribute} className={'bg-yellow-400 px-4 py-2 rounded-lg text-black '}>
				Distribute bonuses
			</button>
		</div>
	);
};

const RoundDetails: FC<RoundDetailsProps> = ({ volume, usersCount }) => {
	const staking = (volume / 1000n) * 36n;
	const bonus = (volume / 100n) * 4n;
	return (
		<div className={'mt-10 grid lg:grid-cols-3 gap-5'}>
			<div className={'border rounded-xl  border-gray-600 bg-primaryLighter min-h-[100px] flex flex-row justify-center items-center gap-2'}>
				<People className={'w-20 h-20'} />
				<div className={'flex flex-col'}>
					<div className={'text-xl font-semibold'}>
						<BetValue value={valueToNumber(volume)} precision={2} withIcon />
					</div>
					<div className={'text-sm flex font-semibold'}>
						({usersCount}
						<span className={'ml-1'}>bets</span>)
					</div>
					<div className={'mt-1 text-xs text-[#6A6F84]'}>Total bets</div>
				</div>
			</div>
			<div className={'border rounded-xl border-gray-600 bg-primaryLighter min-h-[100px] flex flex-row justify-center items-center gap-2'}>
				<MoneyHand className={'w-16 h-16 text-yellow-400'} />
				<div>
					<div className={'mt-3 text-xl font-semibold'}>
						<BetValue value={valueToNumber(bonus)} precision={1} withIcon={true} />
					</div>
					<div className={'mt-1 text-xs text-[#6A6F84]'}>Total bonus</div>
				</div>
			</div>
			<div className={'border rounded-xl  border-gray-600 bg-primaryLighter min-h-[100px] flex flex-row justify-center items-center gap-2'}>
				<Bank className={'w-20 h-20 text-yellow-400'} />
				<div>
					<div className={'mt-3 text-xl font-semibold'}>
						<BetValue value={valueToNumber(staking)} precision={1} withIcon={true} />
					</div>
					<div className={'mt-1 text-xs text-[#6A6F84]'}>Paid to staking</div>
				</div>
			</div>
		</div>
	);
};

const columnHelper = createColumnHelper<RoundModalPlayer>();

const WinnerBetInfo: FC<{ round: number }> = ({ round }) => {
	const { data = null } = useRound(round);
	if (!data || !data.winner) return null;
	return (
		<div className={'py-5 border-t border-b border-[#1F222F] flex flex-col items-center text-sm font-semibold'}>
			<p>Bet ID:</p>
			<Link target={'_blank'} to={`${import.meta.env.VITE_ETHSCAN}/address/${data.winner.bet}`} className={'underline'}>
				{data.winner.bet}
			</Link>
			<div className={'mt-5 flex gap-3'}>
				<p className={'text-[#8794A1]'}>Proof of Random:</p>
				<Link target={'_blank'} to={`${import.meta.env.VITE_ETHSCAN}/tx/${data.winner.tx}`} className={'underline'}>
					{truncateEthAddress(data.winner.tx)}
				</Link>
			</div>
		</div>
	);
};

const BetsTable: FC<{ round: number; className?: string; volume: bigint; bonusShare: bigint; winner: Address }> = ({
	className,
	round,
	volume,
	bonusShare,
	winner,
}) => {
	const { data: bets = [], isFetched: isRoundsFetched } = useRoundBets(round);
	const { address = ZeroAddress } = useAccount();

	const getTrophyColor = (index: number) => {
		switch (index) {
			case 0:
				return <GoldenTrophy />;
			default:
				return <div />;
		}
	};

	const players = useMemo(() => {
		return mapBetsToRoundTable(bets, winner, volume, bonusShare, address.toLowerCase() as Address);
	}, [bets, winner, address]);

	const columns = [
		columnHelper.display({
			header: '',
			id: 'color',
			meta: {
				className: '!w-[8px] hidden lg:table-cell',
			},
			cell: (props) => <div className={'h-[40px]'} style={{ backgroundColor: addressToColor(props.row.getValue('player')) }} />,
		}),
		columnHelper.display({
			header: '',
			id: 'trophy',
			meta: {
				className: '!w-[32px] h-[40px] !pr-0 hidden lg:table-cell',
			},
			cell: (props) => (
				<div className={'w-full h-full flex items-center justify-center'}>
					{props.row.getValue('player') === address ? (
						<div className={'text-[10px] text-[#6A6F84] font-semibold'}>YOU</div>
					) : (
						props.row.index < 3 && getTrophyColor(props.row.index)
					)}
				</div>
			),
		}),
		columnHelper.accessor('player', {
			header: 'Player',
			cell: (props) => {
				const address = props.getValue();

				return <p>{truncateEthAddress(address)}</p>;
			},
		}),
		columnHelper.accessor('count', {
			header: 'Bets',
			cell: (props) => {
				const count = props.getValue();
				return <div>{count}</div>;
			},
		}),
		columnHelper.accessor('volume', {
			id: 'total_bonus',
			header: 'Amount',
			cell: (props) => {
				const pool = props.getValue();
				return <BetValue value={valueToNumber(pool)} withIcon={true} />;
			},
		}),
		columnHelper.accessor('win', {
			header: 'Result',
			cell: (props) => {
				const amount = props.getValue();
				const isWinner = props.row.getValue('player') === winner;
				if (winner === ZeroAddress) return <div className={'text-gray-500'}>Pending</div>;
				return isWinner ? <BetValue value={valueToNumber(amount)} withIcon={true} /> : <div className={'text-[#EE5E5F] font-semibold'}>Lost</div>;
			},
		}),
		columnHelper.accessor('bonus', {
			header: 'Bonus',
			meta: {
				className: 'hidden md:table-cell',
			},
			cell: (props) => {
				const pool = props.getValue();
				return <BetValue value={valueToNumber(pool)} withIcon={true} />;
			},
		}),
		columnHelper.display({
			header: 'Total Result',
			id: 'totalWin',
			cell: (props) => {
				const isWinner = props.row.getValue('player') === winner;
				const win = props.row.getValue('win') as bigint;
				const bonus = props.row.getValue('bonus') as bigint;
				console.log(win, bonus, isWinner);
				return <BetValue value={bonus + (isWinner ? win : 0n)} withIcon={true} />;
			},
		}),
	];

	const table = useReactTable<RoundModalPlayer>({
		columns: columns,
		data: players,
		getCoreRowModel: getCoreRowModel(),
	});
	return (
		<div className={className}>
			<div className={''}>
				<table className={'w-full text-sm table border-separate border-spacing-y-[2px]'}>
					<thead>
						{table.getHeaderGroups().map((headerGroup) => (
							<tr key={headerGroup.id} className={'text-gray-400 text-left'}>
								{headerGroup.headers.map((header) => (
									<th key={header.id} className={cx('h-[40px] pl-2', header.column.columnDef.meta?.className)}>
										{header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
									</th>
								))}
							</tr>
						))}
					</thead>
					<tbody className={cx({ 'blur-sm animate-pulse': !isRoundsFetched })}>
						{table.getRowModel().rows.map((row) => (
							<tr key={row.id} className={cx('h-[40px] p-0 cursor-pointer ', row.index % 2 ? 'bg-primaryLight' : 'bg-primaryLighter')}>
								{row.getVisibleCells().map((cell) => {
									return (
										<td key={cell.id} className={cx('text-left px-2', cell.column.columnDef.meta?.className, { 'px-0': cell.column.id === 'color' })}>
											{flexRender(cell.column.columnDef.cell, cell.getContext())}
										</td>
									);
								})}
							</tr>
						))}
					</tbody>
					<tfoot>
						{table.getFooterGroups().map((footerGroup) => (
							<tr key={footerGroup.id}>
								{footerGroup.headers.map((header) => (
									<th key={header.id}>{header.isPlaceholder ? null : flexRender(header.column.columnDef.footer, header.getContext())}</th>
								))}
							</tr>
						))}
					</tfoot>
				</table>
			</div>
		</div>
	);
};
