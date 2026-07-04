import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { AboutContent } from '@/components/about/AboutContent';
import { locales, type Locale } from '@/lib/locale';

export function generateStaticParams() {
  return locales.map(locale => ({ locale }));
}

interface AboutPageProps {
  params: {
    locale: Locale;
  };
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <AboutContent />
      <Footer />
    </div>
  );
}