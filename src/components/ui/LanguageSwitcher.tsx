'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';
import { locales, localeNames, type Locale } from '@/i18n/config';

export function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: Locale) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="flex items-center gap-1 text-sm">
      {locales.map((loc, index) => (
        <span key={loc} className="flex items-center">
          {index > 0 && <span className="text-white/40 mx-1">|</span>}
          <button
            onClick={() => switchLocale(loc)}
            className={`
              px-1 py-0.5 rounded transition-colors
              ${locale === loc
                ? 'text-white font-medium'
                : 'text-white/60 hover:text-white'
              }
            `}
          >
            {localeNames[loc]}
          </button>
        </span>
      ))}
    </div>
  );
}
