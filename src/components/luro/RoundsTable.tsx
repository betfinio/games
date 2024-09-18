import { usePlayerRounds, useRounds, useWinner, useWinners } from '@/src/lib/luro/query';
import type { Round } from '@/src/lib/luro/types.ts';
import { Route } from '@/src/routes/luro/$interval.tsx';
import { ZeroAddress, truncateEthAddress, valueToNumber } from '@betfinio/abi';
import { Link, useNavigate } from '@tanstack/react-router';
import { createColumnHelper } from '@tanstack/react-table';
import { BetValue } from 'betfinio_app/BetValue';
import { DataTable } from 'betfinio_app/DataTable';
import { Tabs, TabsContent, TabsList, TabsTrigger } from 'betfinio_app/tabs';
import cx from 'clsx';
import { motion } from 'framer-motion';
import { Expand, Loader } from 'lucide-react';
import type { FC } from 'react';
import { useAccount } from 'wagmi';

const RoundsTable: FC<{ className?: string }> = ({ className = '' }) => {
	useWinners();
	return (
		<div className={cx('w-full overflow-x-auto min-h-[100px]', className)}>
			<Tabs defaultValue={'all'}>
				<TabsList>
					<TabsTrigger variant={'default'} value={'all'}>
						All rounds
					</TabsTrigger>
					<TabsTrigger variant={'default'} value={'my'}>
						My rounds
					</TabsTrigger>
				</TabsList>
				<TabsContent value={'all'}>
					<AllRoundsTable />
				</TabsContent>
				<TabsContent value={'my'}>
					<PlayerRoundsTable />
				</TabsContent>
			</Tabs>
		</div>
	);
};

export default RoundsTable;

const columnHelper = createColumnHelper<Round>();
const columns = [
	columnHelper.accessor('round', {
		header: 'Round',
		meta: { className: 'md:w-[120px]' },
		cell: (props) => <div className={'text-gray-400'}>#{Number(props.getValue())}</div>,
	}),
	columnHelper.accessor('total.bets', {
		header: 'Bets',
		cell: (props) => <div className={''}>{valueToNumber(props.getValue(), 0)}</div>,
	}),
	columnHelper.accessor('total.volume', {
		header: 'Total Bets',
		cell: (props) => (
			<div className={''}>
				<BetValue value={valueToNumber(props.getValue())} withIcon />
			</div>
		),
	}),
	columnHelper.accessor('total.bonus', {
		header: 'Total Bonuses',
		meta: {
			className: 'hidden md:table-cell',
		},
		cell: (props) => (
			<div className={'text-yellow-400'}>
				<BetValue value={valueToNumber(props.getValue())} withIcon />
			</div>
		),
	}),
	columnHelper.accessor('winner', {
		header: 'Winner',
		cell: (props) => <WinnerInfo round={Number(props.row.original.round)} />,
	}),
	columnHelper.accessor('total.staking', {
		meta: {
			className: 'md:w-[160px] hidden md:table-cell',
		},
		header: 'Staking Earnings',
		cell: (props) => (
			<div className={''}>
				<BetValue value={valueToNumber(props.getValue())} withIcon />
			</div>
		),
	}),
	columnHelper.display({
		meta: { className: 'w-10' },
		header: '',
		id: 'actions',
		cell: (props) => (
			<Link to={`./?round=${props.row.original.round}`} className={'w-full'}>
				<Expand className={'w-4 h-4 text-white'} />
			</Link>
		),
	}),
];

const AllRoundsTable = () => {
	const { address = ZeroAddress } = useAccount();
	const { data: rounds = [], isLoading } = useRounds(address);
	const navigate = useNavigate();
	const { interval } = Route.useParams();
	const handleClick = (row: Round) => {
		navigate({ to: '/luro/$interval', params: { interval }, search: { round: row.round } });
	};
	return (
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
			{/*// @ts-ignore*/}
			<DataTable data={rounds} columns={columns} onRowClick={handleClick} isLoading={isLoading} loaderClassName="h-[185px]" noResultsClassName="h-[185px]" />
		</motion.div>
	);
};

const PlayerRoundsTable = () => {
	const { address = ZeroAddress } = useAccount();
	const { data: rounds = [], isLoading } = usePlayerRounds(address);
	const navigate = useNavigate();
	const handleClick = (row: Round) => {
		const { interval } = Route.useParams();
		navigate({ to: '/luro/$interval', params: { interval }, search: { round: row.round } });
	};
	return (
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
			{/*// @ts-ignore*/}
			<DataTable data={rounds} columns={columns} onRowClick={handleClick} isLoading={isLoading} loaderClassName="h-[185px]" noResultsClassName="h-[185px]" />
		</motion.div>
	);
};

const WinnerInfo: FC<{ round: number }> = ({ round }) => {
	const { data: winner = null, isLoading, isFetching } = useWinner(round);
	console.log(round, winner);
	if (isLoading || isFetching) {
		return <Loader className={'w-3 h-3 animate-spin'} />;
	}
	if (!winner) {
		return <div>Waiting</div>;
	}
	return <div>{truncateEthAddress(winner.player)}</div>;
};
