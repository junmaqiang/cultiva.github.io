import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ProductsContent } from '@/components/products/ProductsContent';
import { locales } from '@/lib/locale';
import { type Locale } from '@/lib/locale';

export function generateStaticParams() {
  return locales.map(locale => ({ locale }));
}

interface ProductsPageProps {
  params: {
    locale: Locale;
  };
}

export default async function ProductsPage({ params }: ProductsPageProps) {
  const { locale } = await params;
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <ProductsContent locale={locale} />
      <Footer />
    </div>
  );
}