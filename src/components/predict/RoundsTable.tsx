import { useCurrentRound, useRoundInfo, useRounds } from '@/src/lib/predict/query';
import type { Game, Round, RoundStatus } from '@/src/lib/predict/types';
import { valueToNumber } from '@betfinio/abi';
import { Link, useNavigate } from '@tanstack/react-router';
import { type ColumnDef, createColumnHelper } from '@tanstack/react-table';
import { DataTable } from 'betfinio_app/DataTable';
import { Tabs, TabsContent, TabsList, TabsTrigger } from 'betfinio_app/tabs';
import cx from 'clsx';
import { motion } from 'framer-motion';
import { ArrowDownIcon, ArrowUpIcon, Search } from 'lucide-react';
import millify from 'millify';
import { type FC, useEffect, useMemo, useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import type { CircularProgressbarStyles } from 'react-circular-progressbar/dist/types';
import { useTranslation } from 'react-i18next';

const RoundsTable: FC<{ game: Game }> = ({ game }) => {
	const { data: currentRound } = useCurrentRound(game.interval);
	const { t } = useTranslation('', { keyPrefix: 'games.predict.table' });

	const getStatus = (game: Game, round: number, calculated: boolean): RoundStatus => {
		const last = (round + 1) * game.interval;
		const ended = (round + game.duration) * game.interval;
		const now = Math.floor(Date.now() / 1000);
		if (now < last) return 'accepting';
		if (now < ended) return 'waiting';
		if (calculated) return 'calculated';
		return 'ended';
	};

	const columns = [
		columnHelper.accessor('round', {
			header: 'Round',
			cell: (props) => {
				const { currentPlayerBets, round } = props.row.original;

				return <div className={cx('text-gray-400 md:w-[90px]', currentPlayerBets > 0 && 'text-yellow-400')}>#{round.toString().slice(2)}</div>;
			},
		}),
		columnHelper.accessor('price', {
			header: 'Price change',
			cell: (props) => {
				const { start, end } = props.getValue();
				const formattedStart = valueToNumber(start, 8, 0);
				const formattedEnd = valueToNumber(end, 8, 0);

				return (
					<div className={'flex md:w-[160px] flex-row justify-between items-center rounded-lg bg-secondaryLighter p-2'}>
						<div className={'w-[60px] text-center hidden md:block'}>{formattedStart}</div>
						<div
							className={cx(
								'w-[80px] flex flex-row items-center justify-center gap-1 rounded-md',
								end > start ? 'bg-green-600 ' : 'bg-opacity-30 text-red-500 bg-red-900',
							)}
						>
							{formattedEnd}
							{end > start ? <ArrowUpIcon className={'w-3 h-3 stroke-[3]'} /> : <ArrowDownIcon className={'w-3 h-3 stroke-[3]'} />}
						</div>
					</div>
				);
			},
		}),
		columnHelper.display({
			header: 'Bets',
			cell: (props) => {
				const { pool } = props.row.original;
				return (
					<div className={'flex h-[36px] md:h-[40px] flex-row w-[100px] md:w-[200px] text-white items-center rounded-md overflow-hidden'}>
						<div
							className={'px-1 py-[6px] h-full bg-opacity-30 bg-green-900 text-green-500 flex flex-row items-center gap-1'}
							style={{ width: `${(valueToNumber(pool.long) / (valueToNumber(pool.long) + valueToNumber(pool.short))) * 100}%` }}
						>
							{millify(valueToNumber(pool.long), { precision: 2 })}
						</div>
						<div
							className={' px-1 py-[6px] h-full bg-opacity-30 bg-red-900 text-red-500 flex flex-row items-center gap-1 justify-end'}
							style={{ width: `${(valueToNumber(pool.short) / (valueToNumber(pool.long) + valueToNumber(pool.short))) * 100}%` }}
						>
							{millify(valueToNumber(pool.short), { precision: 2 })}
						</div>
					</div>
				);
			},
		}),

		columnHelper.display({
			header: 'Status',
			meta: {
				className: 'hidden md:table-cell',
			},
			cell: (props) => {
				const { round, calculated } = props.row.original;

				const status: RoundStatus = useMemo(() => {
					return getStatus(game, round, calculated);
				}, [currentRound, round]);

				return <div className={'text-gray-300 w-[80px]'}>{t(`roundStatuses.${status}`)}</div>;
			},
		}),

		columnHelper.display({
			id: 'search',
			cell: (props) => {
				const { round, calculated } = props.row.original;

				const status: RoundStatus = useMemo(() => {
					return getStatus(game, round, calculated);
				}, [currentRound, round]);

				return (
					<div className={'w-[30px]'}>
						{['waiting', 'accepting'].includes(status) ? (
							<TableTimer roundId={round} currentRoundId={currentRound} duration={game.duration} />
						) : (
							<Search className={'w-6 h-6'} />
						)}
					</div>
				);
			},
		}),
	];

	return (
		<Tabs defaultValue={'all'}>
			<TabsList>
				<TabsTrigger value={'all'}>All rounds</TabsTrigger>
				<TabsTrigger value={'my'}>My rounds</TabsTrigger>
			</TabsList>
			<TabsContent value={'all'}>
				<AllRoundsTable columns={columns} game={game} />
			</TabsContent>
			<TabsContent value={'my'}>
				<MyRounds columns={columns} game={game} />
			</TabsContent>
		</Tabs>
	);
};
export default RoundsTable;
const columnHelper = createColumnHelper<Round>();

const AllRoundsTable: FC<{ game: Game; columns: unknown[] }> = ({ game, columns }) => {
	const { data: rounds = [], isLoading } = useRounds(game);

	const navigate = useNavigate();
	return (
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
			<DataTable
				data={rounds}
				columns={columns as ColumnDef<Round, unknown>[]}
				isLoading={isLoading}
				loaderClassName="h-[185px]"
				noResultsClassName="h-[185px]"
			/>
		</motion.div>
	);
};

const MyRounds: FC<{ game: Game; columns: unknown[] }> = ({ game, columns }) => {
	const { data: rounds = [], isLoading } = useRounds(game, true);

	const navigate = useNavigate();
	const handleClick = (row: Round) => {
		navigate({ to: '/predict/$pair', params: { pair: game.name }, search: { round: row.round } });
	};
	return (
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
			<DataTable
				data={rounds}
				columns={columns as ColumnDef<Round, unknown>[]}
				isLoading={isLoading}
				onRowClick={handleClick}
				loaderClassName="h-[185px]"
				noResultsClassName="h-[185px]"
			/>
		</motion.div>
	);
};

function RoundInfo({ round, game, theme }: { round: number; game: Game; theme: 'dark' | 'light' }) {
	const { t } = useTranslation('', { keyPrefix: 'games.predict.table' });
	const { data: currentRound } = useCurrentRound(game.interval);
	const { data: roundData = null } = useRoundInfo(game, round);

	const status: RoundStatus = useMemo(() => {
		if (!roundData) return 'ended';
		const last = (round + 1) * game.interval;
		const ended = (round + game.duration) * game.interval;
		const now = Math.floor(Date.now() / 1000);
		if (now < last) return 'accepting';
		if (now < ended) return 'waiting';
		if (roundData.calculated) return 'calculated';
		return 'ended';
	}, [currentRound, roundData, round]);
	if (round === 0 || roundData === null)
		return <div className={cx('h-[60px] w-full animate-pulse rounded-xl', theme === 'light' ? 'bg-primaryLight' : 'bg-primary')} />;
	// if (roundData.currentPlayerBets === 0 && onlyPlayers) return null;
	const start = valueToNumber(roundData.price.start, 8, 0);
	const end = valueToNumber(roundData.price.end, 8, 0);
	const pool = roundData.pool;
	return (
		<Link
			to={`/predict/${game.name}?round=${round}`}
			className={cx(
				'w-full rounded-xl text-sm md:text-base cursor-pointer flex flex-row items-center md:gap-4 justify-between md:px-4 px-2 h-[60px]',
				theme === 'light' ? 'bg-primaryLight' : 'bg-primary',
			)}
		>
			<div className={cx('text-gray-400 md:w-[90px]', roundData.currentPlayerBets > 0 && 'text-yellow-400')}>#{round.toString().slice(2)}</div>
			<div className={'flex md:w-[160px] flex-row justify-between items-center rounded-lg bg-secondaryLighter p-2'}>
				<div className={'w-[60px] text-center hidden md:block'}>{start}</div>
				<div
					className={cx(
						'w-[80px] flex flex-row items-center justify-center gap-1 rounded-md',
						end > start ? 'bg-green-600 ' : 'bg-opacity-30 text-red-500 bg-red-900',
					)}
				>
					{end}
					{end > start ? <ArrowUpIcon className={'w-3 h-3 stroke-[3]'} /> : <ArrowDownIcon className={'w-3 h-3 stroke-[3]'} />}
				</div>
			</div>
			<div className={'flex h-[36px] md:h-[40px] flex-row w-[100px] md:w-[200px] text-white items-center rounded-md overflow-hidden'}>
				<div
					className={'px-1 py-[6px] h-full bg-opacity-30 bg-green-900 text-green-500 flex flex-row items-center gap-1'}
					style={{ width: `${(valueToNumber(pool.long) / (valueToNumber(pool.long) + valueToNumber(pool.short))) * 100}%` }}
				>
					{millify(valueToNumber(pool.long), { precision: 2 })}
				</div>
				<div
					className={' px-1 py-[6px] h-full bg-opacity-30 bg-red-900 text-red-500 flex flex-row items-center gap-1 justify-end'}
					style={{ width: `${(valueToNumber(pool.short) / (valueToNumber(pool.long) + valueToNumber(pool.short))) * 100}%` }}
				>
					{millify(valueToNumber(pool.short), { precision: 2 })}
				</div>
			</div>
			<div className={'text-gray-300 w-[80px] hidden md:block'}>{t(`roundStatuses.${status}`)}</div>
			<div className={'w-[30px]'}>
				{['waiting', 'accepting'].includes(status) ? (
					<TableTimer roundId={round} currentRoundId={currentRound} duration={game.duration} />
				) : (
					<Search className={'w-6 h-6'} />
				)}
			</div>
		</Link>
	);
}

const progressStyle: CircularProgressbarStyles = {
	root: {
		width: '30px',
	},
	path: {
		strokeLinecap: 'round',
		stroke: '#FFC800',
		strokeWidth: '6px',
	},
	trail: {
		stroke: 'rgba(256, 256, 256, 0.2)',
		strokeWidth: '1px',
	},
	text: {
		fill: 'white',
		fontSize: '30px',
	},
};

export const TableTimer: FC<{ roundId: number; currentRoundId: number; className?: string; duration?: number }> = ({
	roundId,
	className = '',
	duration = 4,
}) => {
	const interval = 270;

	const now = Math.floor(Date.now() / 1000);
	const start = roundId * interval;
	const end = (roundId + duration) * interval;
	const [progress, setProgress] = useState(100 - ((end - now) / (end - start)) * 100);

	useEffect(() => {
		const i = setInterval(() => {
			const now = Math.floor(Date.now() / 1000);
			setProgress(100 - ((end - now) / (end - start)) * 100);
		}, 1000);
		return () => clearInterval(i);
	}, []);

	return (
		<div className={cx('flex w-full', className)}>
			<CircularProgressbar styles={progressStyle} value={progress} />
		</div>
	);
};
