'use client';

import { useEffect } from 'react';
import { useLocale } from '@/hooks/useLocale';

export function LanguageProvider() {
  const locale = useLocale();
  
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return null;
}
