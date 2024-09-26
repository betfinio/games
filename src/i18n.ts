import { sharedLang } from 'betfinio_app/locales/index';
import type { i18n } from 'i18next';
import * as i18 from 'i18next';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';
import ICU from 'i18next-icu';
import { initReactI18next } from 'react-i18next';
import czJSON from './translations/cz.json';
import enJSON from './translations/en.json';
import ruJSON from './translations/ru.json';

export const defaultNS = 'academy';

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
	.use(I18nextBrowserLanguageDetector)
	.init({
		resources: resources,
		fallbackLng: 'en',
		defaultNS,
		interpolation: { escapeValue: false },
		react: { useSuspense: true },
	});

export default instance;
