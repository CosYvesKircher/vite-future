import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import de from './de';
import en from './en';

const resources = {
   en,
   de,
};

i18n
   .use(LanguageDetector)
   .use(initReactI18next)
   .init({
      ns: ['default'],
      defaultNS: 'default',
      resources,
      whitelist: ['en', 'de'],
      lng: 'de',
      fallbackLng: 'de',
      debug: false,
      keySeparator: true,
      interpolation: {
         escapeValue: false,
      },
   })
   .then(() => {
      // do nothing
   });

export default i18n;
