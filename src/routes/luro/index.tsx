import { BetsInfo } from '@/src/components/luro/BetsInfo.tsx';
import BonusClaimBlock from '@/src/components/luro/BonusClaimBlock.tsx';
import { BonusInfo } from '@/src/components/luro/BonusInfo.tsx';
import { CurrentRound } from '@/src/components/luro/CurrentRound.tsx';
import { RoundInfo } from '@/src/components/luro/RoundInfo.tsx';
import RoundModal from '@/src/components/luro/RoundModal.tsx';
import { RoundMyInfo } from '@/src/components/luro/RoundMyInfo.tsx';
import RoundsTable from '@/src/components/luro/RoundsTable.tsx';
import { Link, createFileRoute, useNavigate } from '@tanstack/react-router';
import { getAppUrl, getStakingUrl } from 'betfinio_app/lib';
import { TooltipProvider } from 'betfinio_app/tooltip';
import { Trans } from 'react-i18next';

export const Route = createFileRoute('/luro/')({
	validateSearch: (search: Record<string, unknown>) => {
		if (!search.round) return {};
		return { round: Number(search.round) || 0 };
	},
	component: Luro,
});

function Luro() {
	const navigate = useNavigate();
	const search = Route.useSearch();

	return (
		<div className={'col-span-4 px-4 mt-[70px] lg:mt-0 lg:pt-4 lg:col-start-2'}>
			<TooltipProvider delayDuration={0}>
				<RoundInfo />

				<div className={'grid grid-cols-4 md:grid-cols-3 lg:grid-cols-[repeat(21,minmax(0,_1fr))] xl:grid-cols-4 gap-4 pt-4 relative'}>
					<div className={'col-span-4 md:col-span-2 lg:col-[span_15_/_span_15] xl:col-span-3 flex flex-col justify-between'}>
						<CurrentRound />
						<div className={'text-center my-2 justify-self-end'}>
							<Link to={getStakingUrl('conservative')} className={'text-sm text-[#6A6F84]'}>
								<Trans i18nKey={'lottery.feeStaking'} components={{ b: <b className={'text-yellow-400 font-medium'} /> }} />
							</Link>
						</div>
						<BonusClaimBlock />
						<BonusInfo />
					</div>
					<div className={'col-span-4 md:col-span-2 lg:col-[span_6_/_span_6] xl:col-span-1 flex flex-col gap-4'}>
						<BetsInfo />
						<RoundMyInfo />
					</div>
					<RoundsTable className={'col-span-4 lg:col-[span_21_/_span_21] xl:col-span-4 mt-10'} />
					<RoundModal round={search.round || 0} open={(search.round || 0) > 0} />
				</div>
			</TooltipProvider>
		</div>
	);
}
