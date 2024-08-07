import {createFileRoute} from '@tanstack/react-router'
import cx from "clsx";
import Header from "@/src/components/roulette/Header";
import MainTable from "@/src/components/roulette/MainTable.tsx";
import BetTable from "@/src/components/roulette/BetTable.tsx";
import Controls from "@/src/components/roulette/Controls.tsx";
import HistoryTable from "@/src/components/roulette/HistoryTable.tsx";

export const Route = createFileRoute('/roulette/')({
	component: RoulettePage
})


function RoulettePage() {
	return <div className={'p-2 md:p-3 lg:p-4'}>
		<div className={cx('overflow-x-hidden grid-cols-8 lg:grid hidden')}>
			<div className={'col-span-8 h-[80px]'}>
				<Header/>
			</div>
			<div className={'col-span-8'}>
				<MainTable/>
			</div>
			<div className={'col-span-8 gap-1 px-2 flex flex-col'}>
				<BetTable/>
				<Controls/>
			</div>
			<div className={'hidden lg:block col-span-9'}>
				<HistoryTable/>
			</div>
		</div>
		<div className={'lg:hidden flex flex-row items-center justify-center text-center mt-10'}>
			Roulette is not available on mobile yet.
			<br/>
			Please use a desktop device.
		</div>
	</div>
}