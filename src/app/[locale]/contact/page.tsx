import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ContactContent } from '@/components/contact/ContactContent';
import { locales, type Locale } from '@/lib/locale';

export function generateStaticParams() {
  return locales.map(locale => ({ locale }));
}

interface ContactPageProps {
  params: {
    locale: Locale;
  };
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params;
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <ContactContent />
      <Footer />
    </div>
  );
}