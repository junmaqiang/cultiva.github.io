import type { Metadata } from 'next';
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
    'premium quality products',
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
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased min-h-screen flex flex-col font-sans`}>
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
