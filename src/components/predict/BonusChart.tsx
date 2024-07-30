import {BarTooltipProps, ResponsiveBar} from '@nivo/bar'
import {PredictBet} from "@/src/lib/predict/types.ts";
import {FC} from "react";
import millify from "millify";
import {Bet} from "@betfinio/ui/dist/icons";

interface Bonus {
	bet: PredictBet,
	bonus: number
}

const BonusChart: FC<{ bonuses: Bonus[] }> = ({bonuses}) => {
	const data = bonuses.map(({bet, bonus}) => ({
		id: bet.address,
		value: bet.side ? bonus : -bonus,
		color: bet.side ? '#27AE60' : '#EB5757'
	}))
	
	console.log(data)
	return <ResponsiveBar
		data={data}
		padding={0.8}
		renderWrapper={true}
		margin={{left: 100, right: 100}}
		enableLabel={false}
		enableGridY={false}
		enableGridX={false}
		borderRadius={4}
		groupMode="grouped"
		tooltip={CustomTooltip}
		axisBottom={{
			ariaHidden: true,
			format: (v) => '',
		}}
		axisLeft={{
			ariaHidden: true,
			format: (v) => '',
		}}
		colors={{datum: 'data.color'}}
	/>
}

export default BonusChart


const CustomTooltip: FC<BarTooltipProps<{ id: string; value: number; color: string; }>> = ({value}) => {
	return <div className={'bg-gray-800 text-white rounded-lg text-sm px-4 py-2 flex flex-row items-center gap-2'}>
		{millify(Math.abs(value))} <Bet className={'w-4 h-4 '}/>
	</div>
}