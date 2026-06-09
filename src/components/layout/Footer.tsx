'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useApp } from '@/context/AppContext';
import { Instagram, Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { siteConfig } from '@/lib/config';
import { type Locale } from '@/lib/locale';

export function Footer() {
  const params = useParams();
  const locale = (params.locale as Locale) || 'en';
  const { t } = useApp();
  const [year, setYear] = useState('');

  // 在客户端设置当前年份，避免 hydration 错误
  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  // 替换版权信息中的 {year} 占位符
  const copyrightText = t.footer.copyright.replace('{year}', year);

  return (
    <footer id="contact" className="bg-muted/50 border-t mt-auto">
      <div className="page-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            {siteConfig.logo.showImage && siteConfig.logo.imageUrl ? (
              <Link href={`/${locale}`} className="block">
                <img src={siteConfig.logo.imageUrl} alt={siteConfig.logo.text} className="h-8" />
              </Link>
            ) : (
              <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                {siteConfig.logo.text}
              </h3>
            )}
            <p className="text-muted-foreground text-sm">
              {t.footer.brandDescription}
            </p>
            <div className="flex space-x-4">
              {siteConfig.social.instagram && (
                <a href={siteConfig.social.instagram} className="text-muted-foreground hover:text-foreground transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
              )}
              {siteConfig.social.facebook && (
                <a href={siteConfig.social.facebook} className="text-muted-foreground hover:text-foreground transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
              )}
              {siteConfig.social.twitter && (
                <a href={siteConfig.social.twitter} className="text-muted-foreground hover:text-foreground transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
              )}
              {siteConfig.social.linkedin && (
                <a href={siteConfig.social.linkedin} className="text-muted-foreground hover:text-foreground transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
              )}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={`/${locale}`} className="text-muted-foreground hover:text-foreground transition-colors">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/products`} className="text-muted-foreground hover:text-foreground transition-colors">
                  {t.nav.products}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/about`} className="text-muted-foreground hover:text-foreground transition-colors">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/contact`} className="text-muted-foreground hover:text-foreground transition-colors">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t.nav.contact}</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 mt-0.5 text-muted-foreground flex-shrink-0" />
                <span className="text-muted-foreground">{siteConfig.contact.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                <a href={`tel:${siteConfig.contact.phone}`} className="text-muted-foreground hover:text-foreground transition-colors">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="text-muted-foreground hover:text-foreground transition-colors">
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t.footer.followUs}</h4>
            <p className="text-muted-foreground text-sm mb-4">
              {t.footer.followDescription}
            </p>
            <div className="flex space-x-3">
              {siteConfig.social.weibo && (
                <a
                  href={siteConfig.social.weibo}
                  className="w-10 h-10 rounded-full bg-background border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-all"
                >
                  <img src="/weibo.svg" alt="Weibo" className="h-5 w-5 dark:brightness-0 dark:invert" />
                </a>
              )}
              {siteConfig.social.douyin && (
                <a
                  href={siteConfig.social.douyin}
                  className="w-10 h-10 rounded-full bg-background border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-all"
                >
                  <img src="/douyin.svg" alt="Douyin" className="h-5 w-5 dark:brightness-0 dark:invert" />
                </a>
              )}
              {siteConfig.social.xiaohongshu && (
                <a
                  href={siteConfig.social.xiaohongshu}
                  className="w-10 h-10 rounded-full bg-background border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-all"
                >
                  <img src="/xiaohongshu.svg" alt="Xiaohongshu" className="h-5 w-5 dark:brightness-0 dark:invert" />
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>{copyrightText}</p>
          <div className="mt-2 space-x-4">
            <Link href={`/${locale}${siteConfig.footer.termsOfService}`} className="hover:text-foreground transition-colors">
              {t.footer.termsOfService}
            </Link>
            <Link href={`/${locale}${siteConfig.footer.privacyPolicy}`} className="hover:text-foreground transition-colors">
              {t.footer.privacyPolicy}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
