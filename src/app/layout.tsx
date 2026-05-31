import type { Metadata } from 'next';
import { Inspector } from 'react-dev-inspector';
import { AppProvider } from '@/context/AppContext';
import { CartProvider } from '@/context/CartContext';
import { LanguageProvider } from '@/components/layout/LanguageProvider';
import { siteConfig } from '@/lib/config';
import './globals.css';
import { Toaster } from '@/components/ui/sonner';

export const metadata: Metadata = {
  title: {
    default: siteConfig.site.name,
    template: `%s | ${siteConfig.site.name}`,
  },
  description: siteConfig.site.description,
  keywords: [
    siteConfig.site.name,
    'health supplements',
    'natural products',
    'vitamins',
    'herbs',
    'wellness',
    'premium supplements',
    'global shipping'
  ],
  authors: [{ name: siteConfig.site.name, url: siteConfig.site.url }],
  generator: 'Next.js',
  openGraph: {
    title: siteConfig.site.name,
    description: siteConfig.site.description,
    url: siteConfig.site.url,
    siteName: siteConfig.site.name,
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isDev = process.env.COZE_PROJECT_ENV === 'DEV';

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased min-h-screen flex flex-col font-sans`}>
        {isDev && <Inspector />}
        <AppProvider>
          <LanguageProvider />
          <CartProvider>
            {children}
            <Toaster />
          </CartProvider>
        </AppProvider>
      </body>
    </html>
  );
}
