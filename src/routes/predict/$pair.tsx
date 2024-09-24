import BonusAndChart from '@/src/components/predict/BonusAndChart.tsx';
import LastBets from '@/src/components/predict/LastBets.tsx';
import PairInfo from '@/src/components/predict/PairInfo.tsx';
import PlaceBet from '@/src/components/predict/PlaceBet.tsx';
import RoundConditions from '@/src/components/predict/RoundConditions.tsx';
import RoundModal from '@/src/components/predict/RoundModal.tsx';
import RoundsTable from '@/src/components/predict/RoundsTable.tsx';
import i18n from '@/src/i18n.ts';
import { games } from '@/src/lib/predict';
import { createFileRoute } from '@tanstack/react-router';
import { Dialog } from 'betfinio_app/dialog';
import { getStakingUrl } from 'betfinio_app/lib';
import { Trans, useTranslation } from 'react-i18next';

export const Route = createFileRoute('/predict/$pair')({
	validateSearch: (search: Record<string, unknown>) => {
		if (!search.round) return {};
		return { round: Number(search.round) };
	},
	component: PredictPage,
});

function PredictPage() {
	const { pair } = Route.useParams();
	const game = games[pair];
	const search = Route.useSearch();
	const { t } = useTranslation('games');
	return (
		<div className={'rounded-lg w-full h-full p-2 md:p-3 lg:p-4 gap-2 flex flex-col lg:gap-4'}>
			<PairInfo game={game} />
			<div className={'grid mt-2 grid-cols-1 md:grid-cols-8 gap-10 md:gap-4'}>
				<RoundConditions game={game} />
				<PlaceBet game={game} />
				<LastBets game={game} />
			</div>
			<BonusAndChart game={game} />
			<a href={getStakingUrl()} className={'text-center text-gray-400 text-sm md:text-base cursor-pointer'}>
				<Trans t={t} i18nKey={'predict.feeStaking'} i18n={i18n} components={{ b: <b className={'text-yellow-400 font-medium'} /> }} />
			</a>
			<RoundsTable game={game} />
			<Dialog open={!!search.round && search.round > 0}>{search.round && <RoundModal round={search.round} game={game} />}</Dialog>
		</div>
	);
}
