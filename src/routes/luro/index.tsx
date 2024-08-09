import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/luro/')({
	component: Luro,
	beforeLoad: () => {
		throw redirect({ to: '/luro/soon' });
	},
});

function Luro() {
	return <div>Soon</div>;
}
