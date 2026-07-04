import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { PrivacyContent } from '@/components/privacy/PrivacyContent';
import { locales, type Locale } from '@/lib/locale';

export function generateStaticParams() {
  return locales.map(locale => ({ locale }));
}

interface PrivacyPageProps {
  params: {
    locale: Locale;
  };
}

export default async function PrivacyPage({ params }: PrivacyPageProps) {
  const { locale } = await params;
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <PrivacyContent />
      <Footer />
    </div>
  );
}