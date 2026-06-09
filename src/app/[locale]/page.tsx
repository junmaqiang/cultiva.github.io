import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HomeContent } from '@/components/home/HomeContent';
import { locales, type Locale } from '@/lib/locale';

export function generateStaticParams() {
  return locales.map(locale => ({ locale }));
}

interface HomePageProps {
  params: {
    locale: Locale;
  };
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <HomeContent locale={locale} />
      <Footer />
    </div>
  );
}