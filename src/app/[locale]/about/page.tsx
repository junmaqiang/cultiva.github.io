import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { AboutContent } from '@/components/about/AboutContent';
import { locales } from '@/lib/locale';

export function generateStaticParams() {
  return locales.map(locale => ({ locale }));
}

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <AboutContent />
      <Footer />
    </div>
  );
}