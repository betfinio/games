import React, {useState} from "react";
import cx from "clsx";
import {createColumnHelper, flexRender, getCoreRowModel, useReactTable} from "@tanstack/react-table";
import {DateTime} from "luxon";
import {motion} from "framer-motion";
import Fox from "@betfinio/ui/dist/icons/Fox";
import {truncateEthAddress, valueToNumber} from "@betfinio/hooks/dist/utils";
import {RouletteBet} from "@/src/lib/roulette/types.ts";
import {BetValue} from "betfinio_app/BetValue";
import {getColor} from "@/src/lib/roulette";
import {useLastRouletteBets} from "@/src/lib/roulette/query";
import {Dialog, DialogContent} from "betfinio_app/dialog";
import {RoundModal} from "./HistoryTable";

const columnHelper = createColumnHelper<RouletteBet>()

export const AllBetsTable = () => {
	const [selected, setSelected] = useState<null | RouletteBet>(null);
	const {data: bets = [], isFetched: isBetsFetched} = useLastRouletteBets();
	
	
	const columns = [
		columnHelper.accessor("player", {
			header: "Player",
			cell: (props) => <div className={'flex gap-2 items-center'}>
				<Fox/>
				<span className={'text-gray-400 whitespace-nowrap'}>{truncateEthAddress(props.getValue())}</span>
			</div>
		}),
		columnHelper.accessor("address", {
			header: "Address",
			cell: (props) => <span className={'text-gray-400 whitespace-nowrap'}>{truncateEthAddress(props.getValue())}</span>
		}),
		columnHelper.accessor("created", {
			header: "Date",
			cell: (props) => <span
				className={'text-white'}>{DateTime.fromMillis(Number(props.getValue()) * 1000).toFormat("DD, T")}</span>
		}),
		columnHelper.accessor("amount", {
			header: "Amount",
			cell: (props) => <span className={'text-white font-semibold'}><BetValue value={valueToNumber(props.getValue())}/></span>
		}),
		columnHelper.accessor("result", {
			header: "Win",
			cell: (props) => <span
				className={cx('font-semibold text-gray-500', props.getValue() > 0n && "!text-green-500")}><BetValue value={valueToNumber(props.getValue())}/></span>
		}),
		columnHelper.accessor("winNumber", {
			header: "Result",
			cell: (props) => {
				return <span
					className={cx('text-white w-10 h-10 rounded-xl flex justify-center font-semibold items-center p-3', {
						'bg-red-roulette': getColor(props.getValue()) === "RED",
						'bg-gray-800': getColor(props.getValue()) === "BLACK",
						"bg-green-400": getColor(props.getValue()) === "GREEN",
						
					})}> {props.getValue()}</span>
			}
		})
	]
	
	
	const table = useReactTable<RouletteBet>({columns: columns, data: bets, getCoreRowModel: getCoreRowModel()})
	
	const handleClick = (bet: RouletteBet) => {
		setSelected(bet)
	}
	
	
	if (bets.length === 0) {
		return <div className={"flex justify-center p-3"}>No bets yet</div>
	}
	
	return <div className={cx('my-4')}>
		<Dialog open={!!selected}>
			<DialogContent
				className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] translate-x-[-50%] translate-y-[-50%] rounded-md focus:outline-none">
				<RoundModal selectedBet={selected} onClose={() => setSelected(null)}/>
			</DialogContent>
		</Dialog>
		<table className={'w-full text-sm border-separate border-spacing-y-[2px]'}>
			<thead>
			{table.getHeaderGroups().map(headerGroup => (
				<tr key={headerGroup.id} className={'text-gray-400 text-left'}>
					{headerGroup.headers.map(header => (
						<th key={header.id} className={cx(' h-[40px] px-2 md:px-6', {
							'hidden md:table-cell': ["created"].includes(header.id)
						})}>
							{header.isPlaceholder
								? null
								: flexRender(
									header.column.columnDef.header,
									header.getContext()
								)}
						</th>
					))}
				</tr>
			))}
			</thead>
			<tbody className={cx({'blur-sm animate-pulse': !isBetsFetched})}>
			{table.getRowModel().rows.map(row => (
				<motion.tr key={row.id}
				           onClick={() => handleClick(bets[Number(row.id)])}
				           className={cx('h-[50px] p-0 cursor-pointer ', row.index % 2 ? 'bg-primaryLight' : 'bg-primaryLighter')}>
					{row.getVisibleCells().map(cell => (
						<td key={cell.id} className={cx('text-left px-2 md:px-6', {
							'hidden md:table-cell': ["created"].includes(cell.getContext().column.id)
						})}>
							{flexRender(cell.column.columnDef.cell, cell.getContext())}
						</td>
					))}
				</motion.tr>
			))}
			</tbody>
			<tfoot>
			{table.getFooterGroups().map(footerGroup => (
				<tr key={footerGroup.id}>
					{footerGroup.headers.map(header => (
						<th key={header.id}>
							{header.isPlaceholder
								? null
								: flexRender(
									header.column.columnDef.footer,
									header.getContext()
								)}
						</th>
					))}
				</tr>
			))}
			</tfoot>
		</table>
	</div>
}


