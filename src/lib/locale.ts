export type Locale = 'en' | 'zh' | 'ja';
export const locales: Locale[] = ['en', 'zh', 'ja'];
export const defaultLocale: Locale = 'en';

export const localeNames: Record<Locale, string> = {
  en: 'English',
  zh: '中文',
  ja: '日本語',
};

export const localeFlags: Record<Locale, string> = {
  en: '🇺🇸',
  zh: '🇨🇳',
  ja: '🇯🇵',
};

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

export function getLocaleFromPathname(pathname: string): Locale {
  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0];
  
  if (firstSegment && isValidLocale(firstSegment)) {
    return firstSegment;
  }
  
  return defaultLocale;
}

export function getPathWithoutLocale(pathname: string): string {
  const locale = getLocaleFromPathname(pathname);
  const localePrefix = `/${locale}`;
  
  if (pathname.startsWith(localePrefix)) {
    return pathname.replace(localePrefix, '') || '/';
  }
  
  return pathname;
}

export function createLocalizedPath(path: string, locale: Locale): string {
  const cleanPath = path === '/' ? '' : path;
  return `/${locale}${cleanPath}`;
}
