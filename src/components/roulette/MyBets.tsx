import { getColor } from '@/src/lib/roulette';
import { useRouletteBets } from '@/src/lib/roulette/query';
import type { RouletteBet } from '@/src/lib/roulette/types.ts';
import { ZeroAddress } from '@betfinio/abi';
import { truncateEthAddress, valueToNumber } from '@betfinio/abi';
import { createColumnHelper } from '@tanstack/react-table';
import { BetValue } from 'betfinio_app/BetValue';
import { DataTable } from 'betfinio_app/DataTable';
import { Dialog, DialogContent } from 'betfinio_app/dialog';
import cx from 'clsx';
import { DateTime } from 'luxon';
import { useState } from 'react';
import { useAccount } from 'wagmi';
import { RoundModal } from './HistoryTable';

const columnHelper = createColumnHelper<RouletteBet>();

export const MyBetsTable = () => {
	const [selected, setSelected] = useState<null | RouletteBet>(null);
	const { address = ZeroAddress } = useAccount();
	const { data: bets = [], isFetched: isBetsFetched } = useRouletteBets(address);

	const columns = [
		columnHelper.accessor('address', {
			header: 'Address',
			cell: (props) => <span className={'text-gray-400 whitespace-nowrap'}>{truncateEthAddress(props.getValue())}</span>,
		}),
		columnHelper.accessor('created', {
			header: 'Date',
			cell: (props) => <span className={'text-white'}>{DateTime.fromMillis(Number(props.getValue()) * 1000).toFormat('DD, T')}</span>,
		}),
		columnHelper.accessor('amount', {
			header: 'Amount',
			cell: (props) => (
				<span className={'text-white font-semibold'}>
					<BetValue value={props.getValue()} />
				</span>
			),
		}),
		columnHelper.accessor('result', {
			header: 'Win',
			cell: (props) => (
				<span className={cx('font-semibold text-gray-500', props.getValue() > 0n && '!text-green-500')}>
					<BetValue value={valueToNumber(props.getValue())} />
				</span>
			),
		}),
		columnHelper.accessor('winNumber', {
			header: 'Result',
			cell: (props) => {
				return (
					<span
						className={cx('text-white w-10 h-10 rounded-xl flex justify-center font-semibold items-center p-3', {
							'bg-red-roulette': getColor(props.getValue()) === 'RED',
							'bg-gray-800': getColor(props.getValue()) === 'BLACK',
							'bg-green-400': getColor(props.getValue()) === 'GREEN',
						})}
					>
						{' '}
						{props.getValue()}
					</span>
				);
			},
		}),
	];

	if (bets.length === 0) {
		return <div className={'flex justify-center p-3'}>No bets yet</div>;
	}

	return (
		<div className={cx('my-4')}>
			<Dialog open={!!selected}>
				<DialogContent className="games w-auto">
					<RoundModal selectedBet={selected} onClose={() => setSelected(null)} />
				</DialogContent>
			</Dialog>
			{/*// @ts-ignore*/}
			<DataTable columns={columns} data={bets} />
		</div>
	);
};
