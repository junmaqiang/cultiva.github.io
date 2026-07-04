import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { TermsContent } from '@/components/terms/TermsContent';
import { locales, type Locale } from '@/lib/locale';

export function generateStaticParams() {
  return locales.map(locale => ({ locale }));
}

interface TermsPageProps {
  params: {
    locale: Locale;
  };
}

export default async function TermsPage({ params }: TermsPageProps) {
  const { locale } = await params;
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <TermsContent />
      <Footer />
    </div>
  );
}