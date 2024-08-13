import { useRounds } from '@/src/lib/luro/query';
import type { Round } from '@/src/lib/luro/types.ts';
import { ZeroAddress } from '@betfinio/abi';
import { truncateEthAddress, valueToNumber } from '@betfinio/abi';
import { Link } from '@tanstack/react-router';
import { createColumnHelper } from '@tanstack/react-table';
import { BetValue } from 'betfinio_app/BetValue';
import { DataTable } from 'betfinio_app/DataTable';
import { Tabs, TabsContent, TabsList, TabsTrigger } from 'betfinio_app/tabs';
import cx from 'clsx';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import { useAccount } from 'wagmi';
import {Expand} from "lucide-react";

const RoundsTable: FC<{ className?: string }> = ({ className = '' }) => {
	return (
		<div className={cx('w-full overflow-x-auto min-h-[100px]', className)}>
			<Tabs defaultValue={'all'}>
				<TabsList>
					<TabsTrigger value={'all'}>All rounds</TabsTrigger>
					<TabsTrigger value={'my'}>My rounds</TabsTrigger>
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
		cell: (props) => <div className={''}>{props.getValue() ? truncateEthAddress(props.getValue()?.player || ZeroAddress) : 'Waiting'}</div>,
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
			<Link to={`/luro?round=${props.row.original.round}`} className={'w-full'}>
				<Expand className={'w-4 h-4 text-white'} />
			</Link>
		),
	}),
];

const AllRoundsTable = () => {
	const { address = ZeroAddress } = useAccount();
	const { data: rounds = [] } = useRounds(address);

	return (
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
			{/*// @ts-ignore*/}
			<DataTable data={rounds} columns={columns} />
		</motion.div>
	);
};

const PlayerRoundsTable = () => {
	const { address = ZeroAddress } = useAccount();
	const { data: rounds = [] } = useRounds(address, true);
	return (
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
			{/*// @ts-ignore*/}
			<DataTable data={rounds} columns={columns} />
		</motion.div>
	);
};
