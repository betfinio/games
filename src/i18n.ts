import * as i18 from 'i18next';
import type { i18n } from 'i18next';
import ICU from 'i18next-icu';
import { initReactI18next } from 'react-i18next';
import czJSON from './translations/cz.json';
import enJSON from './translations/en.json';
import ruJSON from './translations/ru.json';
export const defaultNS = 'academy';

import { sharedLang } from 'betfinio_app/locales/index';

export const resources = {
	en: {
		games: enJSON,
		shared: sharedLang.en,
	},
	cz: {
		games: czJSON,
		shared: sharedLang.cz,
	},
	ru: {
		games: ruJSON,
		shared: sharedLang.ru,
	},
} as const;

const instance: i18n = i18.createInstance();
instance
	.use(initReactI18next)
	.use(ICU)
	.init({
		resources: resources,
		lng: 'en', // default language
		fallbackLng: 'en',
		defaultNS,
		interpolation: { escapeValue: false },
		react: { useSuspense: true },
	});

export default instance;
