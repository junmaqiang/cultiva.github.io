import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { locales, defaultLocale, isValidLocale } from '@/lib/locale';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // 检查路径是否已包含有效的 locale 前缀
  const pathSegments = pathname.split('/').filter(Boolean);
  const firstSegment = pathSegments[0];
  
  // 如果路径已经有有效的 locale，直接放行
  if (firstSegment && isValidLocale(firstSegment)) {
    return NextResponse.next();
  }
  
  // 获取用户首选语言
  const acceptLanguage = request.headers.get('accept-language');
  let preferredLocale = defaultLocale;
  
  if (acceptLanguage) {
    const languages = acceptLanguage.split(',').map(lang => lang.split(';')[0]);
    for (const lang of languages) {
      const langCode = lang.split('-')[0];
      if (locales.includes(langCode as typeof locales[number])) {
        preferredLocale = langCode as typeof locales[number];
        break;
      }
    }
  }
  
  // 重定向到带 locale 的路径
  const redirectUrl = new URL(`/${preferredLocale}${pathname}`, request.url);
  return NextResponse.redirect(redirectUrl);
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
