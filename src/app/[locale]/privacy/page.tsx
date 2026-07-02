import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { PrivacyContent } from '@/components/privacy/PrivacyContent';
import { locales } from '@/lib/locale';

export function generateStaticParams() {
  return locales.map(locale => ({ locale }));
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <PrivacyContent />
      <Footer />
    </div>
  );
}