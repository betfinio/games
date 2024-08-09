import RoundsTable from '@/src/components/luro/RoundsTable.tsx';
import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/luro/')({
	component: Luro,
});

function Luro() {
	return (
		<div>
			<RoundsTable />
		</div>
	);
}
