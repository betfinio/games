import type { resources } from './i18n';

declare module 'i18next' {
	interface CustomTypeOptions {
		defaultNS: 'games';
		resources: (typeof resources)['en'];
	}
}

export type ILanguageKeys = (typeof resources)['en']['games'];
export type ILanguageErrorKeys = keyof (typeof resources)['en']['shared']['errors'];
