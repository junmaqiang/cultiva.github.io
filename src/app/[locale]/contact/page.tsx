import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ContactContent } from '@/components/contact/ContactContent';
import { locales } from '@/lib/locale';

export function generateStaticParams() {
  return locales.map(locale => ({ locale }));
}

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <ContactContent />
      <Footer />
    </div>
  );
}