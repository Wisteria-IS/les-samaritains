import { getRequestConfig } from 'next-intl/server';
import { locales, defaultLocale, type Locale } from './config';

// Import messages statically to avoid dynamic import issues with Turbopack
import frMessages from '../../messages/fr.json';
import enMessages from '../../messages/en.json';

const messages: Record<Locale, typeof frMessages> = {
  fr: frMessages,
  en: enMessages,
};

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  // Validate that the incoming locale is valid
  if (!locale || !locales.includes(locale as Locale)) {
    locale = defaultLocale;
  }

  return {
    locale,
    messages: messages[locale as Locale],
  };
});
