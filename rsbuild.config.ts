import {defineConfig} from '@rsbuild/core';
import {pluginReact} from '@rsbuild/plugin-react';
import {pluginSvgr} from '@rsbuild/plugin-svgr';
import {ModuleFederationPlugin} from "@module-federation/enhanced/rspack";
// @ts-ignore
import {TanStackRouterRspack} from '@tanstack/router-plugin/rspack'
// @ts-ignore
import {dependencies} from "./package.json";

const getStaking = () => {
	switch (process.env.PUBLIC_ENVIRONMENT) {
		case 'development':
			return 'betfinio_staking@https://betfin-staking-dev.web.app/mf-manifest.json'
		case 'production':
			return 'betfinio_staking@https://staking.betfin.io/mf-manifest.json'
		default:
			return 'betfinio_staking@http://localhost:3000/mf-manifest.json'
	}
}

const getApp = () => {
	switch (process.env.PUBLIC_ENVIRONMENT) {
		case 'development':
			return 'betfinio_app@https://betfin-app-dev.web.app/mf-manifest.json'
		case 'production':
			return 'betfinio_app@https://betfin-app.web.app/mf-manifest.json'
		default:
			return 'betfinio_app@http://localhost:5555/mf-manifest.json'
	}
}

export default defineConfig({
	server: {
		port: 7777,
	},
	dev: {
		// assetPrefix: 'http://localhost:7777',
	},
	html: {
		title: 'BetFin Games',
		favicon: './src/assets/favicon.svg',
	},
	output: {
		assetPrefix: process.env.PUBLIC_ENVIRONMENT === 'production' ? 'https://betfin-games.web.app' : 'https://betfin-games-dev.web.app',
	},
	plugins: [pluginReact(), pluginSvgr()],
	tools: {
		rspack: (config, {appendPlugins}) => {
			config.output!.uniqueName = 'betfinio_games';
			appendPlugins([
				TanStackRouterRspack(),
				new ModuleFederationPlugin({
					name: 'betfinio_games',
					remotes: {
						betfinio_app: getApp(),
						betfinio_staking: getStaking()
					},
					shared: {
						'react': {
							singleton: true,
							requiredVersion: dependencies['react']
						},
						'react-dom': {
							singleton: true,
							requiredVersion: dependencies['react-dom']
						},
						"@tanstack/react-router": {
							singleton: true,
							requiredVersion: dependencies['@tanstack/react-router']
						},
						"@tanstack/react-query": {
							singleton: true,
							requiredVersion: dependencies['@tanstack/react-query']
						},
						"lucide-react": {
							singleton: true,
							requiredVersion: dependencies['lucide-react']
						},
						"i18next": {
							singleton: true,
							requiredVersion: dependencies['i18next']
						},
						"react-i18next": {
							singleton: true,
							requiredVersion: dependencies['react-i18next']
						},
						"tailwindcss-animate": {
							singleton: true,
							requiredVersion: dependencies['tailwindcss-animate']
						},
						"tailwindcss": {
							singleton: true,
							requiredVersion: dependencies['tailwindcss']
						},
						"wagmi": {
							singleton: true,
							requiredVersion: dependencies['wagmi']
						},
					},
				}),
			]);
		},
	},
});
