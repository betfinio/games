import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/soon')({
	component: () => {
		throw redirect({
			to: '/luro',
		});
	},
});
