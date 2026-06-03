'use client';

import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
import { getLocaleFromPathname, type Locale } from '@/lib/locale';

export function useLocale(): Locale {
  const pathname = usePathname();
  
  return useMemo(() => {
    return getLocaleFromPathname(pathname);
  }, [pathname]);
}
