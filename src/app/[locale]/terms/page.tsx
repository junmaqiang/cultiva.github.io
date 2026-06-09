import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { TermsContent } from '@/components/terms/TermsContent';
import { locales } from '@/lib/locale';

export function generateStaticParams() {
  return locales.map(locale => ({ locale }));
}

export default function TermsPage({ params }: { params: { locale: string } }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <TermsContent locale={params.locale} />
      <Footer />
    </div>
  );
}