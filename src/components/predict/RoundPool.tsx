import {FC, useEffect, useState} from "react";
import {ArrowDownIcon, ArrowUpIcon, UserIcon} from "@heroicons/react/24/outline";
import cx from "clsx";
import millify from "millify";
import {valueToNumber} from "@betfinio/hooks/dist/utils";
import {Bet} from "@betfinio/ui/dist/icons";
import {Game, RoundPool} from "@/src/lib/predict/types";
import {useCurrentRound, useRoundBets} from "@/src/lib/predict/query";
import {BetValue} from "betfinio_app/BetValue";

const RoundPoolInfo: FC<{ game: Game }> = ({game}) => {
	const {data: round} = useCurrentRound(game.interval);
	const {data: roundBets = []} = useRoundBets(game.address, round)
	const [pool, setPool] = useState<RoundPool>({long: 0n, short: 0n, longPlayersCount: 0, shortPlayersCount: 0, longCount: 0, shortCount: 0})
	useEffect(() => {
		const p: RoundPool = {
			long: roundBets.filter(e => e.side).reduce((a, b) => a + b.amount, 0n),
			short: roundBets.filter(e => !e.side).reduce((a, b) => a + b.amount, 0n),
			longPlayersCount: new Set(roundBets.filter(e => e.side).map(e => e.player)).size,
			shortPlayersCount: new Set(roundBets.filter(e => !e.side).map(e => e.player)).size,
			longCount: roundBets.filter(e => e.side).length,
			shortCount: roundBets.filter(e => !e.side).length
		}
		setPool(p)
	}, [roundBets]);
	return <div className={'w-full h-full border border-gray-800 rounded-md bg-primaryLight p-2 flex flex-col justify-between gap-2'}>
		<div className={'grid grid-cols-2 gap-2 w-full items-center'}>
			<div
				className={'bg-primary rounded-lg p-2  flex justify-between gap-1 items-center text-green-500 font-semibold'}>
				<div className={'flex flex-row items-center gap-1'}>
					<ArrowUpIcon className={'h-3 w-3'}/>
					<div
						className={cx('flex flex-row gap-1 text-sm items-center')}>{millify(valueToNumber(pool.long || 0n), {precision: 2})}
						<Bet color={'green'}
						     className={'w-3 h-3'}/></div>
				</div>
				<div className={'flex flex-row items-center gap-[2px]'}>
					<div
						className={cx('flex flex-row gap-1 items-center text-sm')}>{pool.longPlayersCount || 0}</div>
					<UserIcon className={'h-3 w-3'}/>
				</div>
			</div>
			<div
				className={'bg-primary rounded-lg p-2  flex justify-between gap-1 items-center text-red-500 font-semibold'}>
				<div className={'flex flex-row items-center gap-1'}>
					<ArrowDownIcon className={'h-3 w-3'}/>
					<div
						className={cx('flex flex-row gap-1 text-sm items-center')}>{millify(valueToNumber(pool.short || 0n), {precision: 2})}
						<Bet color={'red'} className={'w-3 h-3'}/></div>
				</div>
				<div className={'flex flex-row items-center gap-[2px]'}>
					<div
						className={cx('flex flex-row gap-1 text-sm items-center')}>{pool.shortPlayersCount || 0}</div>
					<UserIcon className={'h-3 w-3'}/>
				</div>
			</div>
		</div>
		<div className={'flex flex-row items-center justify-center gap-1 text-gray-400 text-xs'}>
			Bonus pool is <BetValue value={valueToNumber((pool.short + pool.long) / 25n)} withIcon/>
		</div>
	</div>
}

export default RoundPoolInfo