'use client';

import { useState } from 'react';
import { useParams, useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, Moon, Sun, Globe, User, LogOut, ChevronDown } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { siteConfig } from '@/lib/config';
import { locales, localeNames, getPathWithoutLocale, createLocalizedPath, type Locale } from '@/lib/locale';
import { translations } from '@/lib/i18n/translations';

export function Header() {
  const params = useParams();
  const router = useRouter();
  const pathname = usePathname();
  const locale = (params.locale as Locale) || 'en';
  const language = locale === 'zh' ? 'zh' : locale === 'ja' ? 'ja' : 'en';
  const t = translations[language].nav;
  
  const { isDarkMode, toggleDarkMode, user, logout, setLanguage } = useApp();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const checkActive = (path: string) => {
    const currentPath = pathname.replace(`/${locale}`, '') || '/';
    if (path === '/') {
      return currentPath === '/';
    }
    return currentPath.startsWith(path);
  };

  const languages = locales.map((loc) => ({
    code: loc,
    label: localeNames[loc],
  }));

  const navItems = [
    { path: '/', href: `/${locale}`, label: t.home },
    { path: '/products', href: `/${locale}/products`, label: t.products },
    { path: '/about', href: `/${locale}/about`, label: t.about },
    { path: '/contact', href: `/${locale}/contact`, label: t.contact },
  ];

  const switchLanguage = (newLocale: Locale) => {
    setLanguage(newLocale);
    const currentPath = getPathWithoutLocale(pathname);
    router.push(createLocalizedPath(currentPath, newLocale));
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="page-container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href={`/${locale}`} className="mr-6 flex items-center space-x-2">
            {siteConfig.logo.showImage && siteConfig.logo.imageUrl ? (
              <Image
                src={siteConfig.logo.imageUrl}
                alt={siteConfig.logo.text}
                width={32}
                height={32}
              />
            ) : (
              <span className="font-bold text-xl bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                {siteConfig.logo.text}
              </span>
            )}
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors ${
                  checkActive(item.path)
                    ? 'text-emerald-600 dark:text-emerald-400 font-semibold'
                    : 'text-foreground/60 hover:text-foreground/80'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <div className="px-7">
              <Link href={`/${locale}`} className="flex items-center space-x-2" onClick={() => setIsMenuOpen(false)}>
                {siteConfig.logo.showImage && siteConfig.logo.imageUrl ? (
                  <Image
                    src={siteConfig.logo.imageUrl}
                    alt={siteConfig.logo.text}
                    width={32}
                    height={32}
                  />
                ) : (
                  <span className="font-bold text-xl bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    {siteConfig.logo.text}
                  </span>
                )}
              </Link>
            </div>
            <nav className="grid gap-6 p-6 text-lg font-medium">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`transition-colors ${
                    checkActive(item.path)
                      ? 'text-emerald-600 dark:text-emerald-400 font-semibold'
                      : 'text-foreground/60 hover:text-foreground/80'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <Link href={`/${locale}`} className="mr-6 flex items-center space-x-2 md:hidden">
            {siteConfig.logo.showImage && siteConfig.logo.imageUrl ? (
              <Image
                src={siteConfig.logo.imageUrl}
                alt={siteConfig.logo.text}
                width={32}
                height={32}
              />
            ) : (
              <span className="font-bold text-xl bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                {siteConfig.logo.text}
              </span>
            )}
          </Link>
          <div className="flex items-center space-x-[15px]">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="px-[30px] py-3">
                  <Globe className="h-4 w-4" />
                  <span className="text-xs font-semibold ml-0.5">
                    {locale === 'zh' ? '中' : locale === 'ja' ? 'JP' : 'EN'}
                  </span>
                  <span className="sr-only">Toggle language</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => switchLanguage(lang.code)}
                    className={locale === lang.code ? 'bg-accent' : ''}
                  >
                    {lang.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="ghost" size="icon" className="px-[30px] py-3" onClick={toggleDarkMode}>
              {isDarkMode ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
              <span className="text-xs font-semibold ml-0.5">
                {isDarkMode ? 'D' : 'L'}
              </span>
              <span className="sr-only">Toggle theme</span>
            </Button>

            {siteConfig.features.enableAuth && (
              <>
                {user ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm" className="gap-2">
                        <User className="h-5 w-5" />
                        <span className="hidden md:inline">{user.email.split('@')[0]}</span>
                        <ChevronDown className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem disabled className="text-sm">
                        {user.email}
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={logout} className="text-red-600">
                        <LogOut className="h-4 w-4 mr-2" />
                        {t.logout}
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link href={`/${locale}/auth`}>
                    <Button variant="ghost" size="icon">
                      <User className="h-5 w-5" />
                      <span className="sr-only">{t.login}</span>
                    </Button>
                  </Link>
                )}
              </>
            )}

            {/*<Link href={`/${locale}/cart`}>*/}
            {/*  <Button variant="ghost" size="icon" className="relative">*/}
            {/*    <ShoppingCart className="h-5 w-5" />*/}
            {/*    {cartCount > 0 && (*/}
            {/*      <Badge*/}
            {/*        variant="destructive"*/}
            {/*        className="absolute -right-1 -top-1 h-5 w-5 rounded-full p-0 text-xs flex items-center justify-center"*/}
            {/*      >*/}
            {/*        {cartCount}*/}
            {/*      </Badge>*/}
            {/*    )}*/}
            {/*    <span className="sr-only">{t.cart}</span>*/}
            {/*  </Button>*/}
            {/*</Link>*/}
          </div>
        </div>
      </div>
    </header>
  );
}
