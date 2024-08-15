import instance from '@/src/i18n.ts';
import { createRootRoute, redirect } from '@tanstack/react-router';
import { Root } from 'betfinio_app/root';

export const Route = createRootRoute({
	component: () => <Root id={'games'} instance={instance} />,
	notFoundComponent: () => {
		window.location.href = '/predict/BTCUSDT';
	},
});
