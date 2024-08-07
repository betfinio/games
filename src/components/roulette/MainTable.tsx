import cx from "clsx";
import _ from "lodash";
import React, {useMemo} from "react";
import {useAccount} from "wagmi";
import {useRouletteBets} from "@/src/lib/roulette/query";
import {ZeroAddress} from "@betfinio/hooks";
import {getColor} from "@/src/lib/roulette";
import Wheel from "@/src/components/roulette/Wheel.tsx";

const RouletteTable = () => {
	const {address = ZeroAddress} = useAccount();
	const {data: bets = [], isFetched: isBetsFetched} = useRouletteBets(address);
	const numbers = useMemo(() => bets.length > 0 ? bets.map(e => e.winNumber) : [1, 2, 0, 4, 1, 4, 6, 6], [bets]);
	
	const lastSeven = useMemo(() => numbers.slice(0, 7).reverse(), [numbers]);
	const counts = useMemo(() => _.countBy(numbers), [numbers]);
	const hot = useMemo(() => _.sortBy(numbers, num => -counts[num]).slice(0, 3), [numbers]);
	const cold = useMemo(() => _.sortBy(numbers, num => counts[num]).slice(0, 3), [numbers]);
	const {red = 0, black = 0} = useMemo(() => {
		if (numbers.length === 0) return {red: 50, black: 50}
		const counts = _.countBy(numbers, getColor);
		const totalCount = numbers.length || 1;
		const redCount = counts["RED"] || 0;
		const blackCount = counts["BLACK"] || 0;
		return {red: Math.floor((redCount / totalCount) * 100), black: Math.floor((blackCount / totalCount) * 100)};
	}, [numbers])
	const {odd = 0, even = 0} = useMemo(() => {
		if (numbers.length === 0) return {even: 50, odd: 50}
		const counts = _.countBy(numbers, n => n % 2);
		const totalCount = numbers.length || 1;
		const oddCount = counts[1] || 0;
		const evenCount = counts[0] || 0;
		return {odd: Math.floor((oddCount / totalCount) * 100), even: Math.floor((evenCount / totalCount) * 100)};
	}, [numbers])
	
	const renderLastResults = () => {
		return lastSeven.map((result, index) => <div key={index}
		                                             className={cx('aspect-square text-white rounded-lg flex justify-center items-center ',
			                                             {
				                                             'bg-green-600': getColor(result) === "GREEN",
				                                             'bg-red-600': getColor(result) === "RED",
				                                             'bg-gray-800': getColor(result) === "BLACK",
			                                             },
			                                             {
				                                             'col-start-1': getColor(result) === "RED",
				                                             'col-start-2': getColor(result) === "GREEN",
				                                             'col-start-3': getColor(result) === "BLACK",
			                                             },
			                                             {
				                                             'row-start-1': index === 0,
				                                             'row-start-2': index === 1,
				                                             'row-start-3': index === 2,
				                                             'row-start-4': index === 3,
				                                             'row-start-5': index === 4,
				                                             'row-start-6': index === 5,
				                                             'row-start-7': index === 6,
			                                             })}>
			{result}
		</div>)
	}
	
	const renderStat = () => {
		return <div className={cx('flex flex-col items-center justify-start gap-1', {'blur-sm animate-pulse': !isBetsFetched})}>
			<span className={cx('font-semibold text-sm', !hot.length && 'hidden')}>Hot/Cold</span>
			<div className={'grid grid-cols-2 grid-row-3 gap-1 w-4/5 grid-flow-col'}>
				{hot.map((item, index) =>
					<div key={index}
					     className={'aspect-square bg-red-600 rounded-lg flex items-center justify-center col-start-1'}>{item}</div>)}
				{cold.map((item, index) =>
					<div key={index}
					     className={'aspect-square bg-blue-600 rounded-lg flex items-center justify-center col-start-2'}>{item}</div>)}
			</div>
			<span className={'font-semibold text-sm'}>Red/Black</span>
			<div className={'grid grid-cols-2 grid-row-1 gap-1 w-4/5 grid-flow-col'}>
				<div
					className={'aspect-square bg-red-600 text-xs rounded-lg flex items-center justify-center col-start-1'}>{red}%
				</div>
				<div
					className={'aspect-square bg-gray-800 text-xs rounded-lg flex items-center justify-center col-start-2'}>{black}%
				</div>
			</div>
			<span className={'font-semibold text-sm'}>Odd/Even</span>
			<div className={'grid grid-cols-2 grid-row-1 gap-1 w-4/5 grid-flow-col'}>
				<div
					className={'aspect-square bg-blue-600 text-xs rounded-lg flex items-center justify-center col-start-1'}>{odd}%
				</div>
				<div
					className={'aspect-square bg-green-600 text-xs rounded-lg flex items-center justify-center col-start-2'}>{even}%
				</div>
			</div>
		</div>
	}
	
	return (
		<div className={'grid grid-rows-1 gap-4 h-full grid-cols-8 items-start overflow-hidden'}>
			<div className={'bg-primaryLight rounded-lg p-2 mt-4 border border-gray-800 '}>
				<div className={cx('font-semibold text-xs text-center h-[28px] whitespace-nowrap')}>My Last Numbers</div>
				<div className={cx('grid grid-cols-3 grid-rows-7 gap-1', {'blur-sm animate-pulse': !isBetsFetched})}>
					{renderLastResults()}
				</div>
			</div>
			<div className={'col-span-6 row-span-3 '}>
				<Wheel/>
			</div>
			<div className={'col-span-1 bg-primaryLight rounded-lg row-span-1 p-2 block mt-4 border border-gray-800'}>
				{renderStat()}
			</div>
		</div>
	)
}


export default RouletteTable