import BonusInfo from '@/src/components/predict/BonusInfo.tsx';
import PriceChart from '@/src/components/predict/PiceGraph.tsx';
import type { Game } from '@/src/lib/predict/types';
import { Tabs, TabsContent, TabsList, TabsTrigger } from 'betfinio_app/tabs';
import type { FC } from 'react';

const BonusAndChart: FC<{ game: Game }> = ({ game }) => {
	return (
		<div className={''}>
			<Tabs defaultValue={'bonus'}>
				<TabsList>
					<TabsTrigger value={'bonus'}>Bonus chart</TabsTrigger>
					<TabsTrigger value={'chart'}>Price graph</TabsTrigger>
				</TabsList>
				<TabsContent value={'bonus'}>
					<BonusInfo game={game} />
				</TabsContent>
				<TabsContent value={'chart'} className={'h-[300px]'}>
					<PriceChart />
				</TabsContent>
			</Tabs>
		</div>
	);
};

export default BonusAndChart;
