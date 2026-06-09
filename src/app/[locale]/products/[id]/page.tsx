import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ProductDetailContent } from '@/components/product/ProductDetailContent';
import { locales, type Locale } from '@/lib/locale';
import { getAllProducts, getProductById } from '@/lib/md-parser';
import { Product } from '@/context/CartContext';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function generateStaticParams() {
  const products = getAllProducts();
  const params: Array<{ locale: Locale; id: string }> = [];
  
  locales.forEach(locale => {
    products.forEach(product => {
      params.push({ locale, id: product.id });
    });
  });
  
  return params;
}

interface ProductPageProps {
  params: {
    locale: Locale;
    id: string;
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { locale, id } = await params;
  const product = getProductById(id);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <p className="text-muted-foreground">Product not found</p>
            <Link href={`/${locale}/products`}>
              <Button className="mt-4">Back to Products</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <ProductDetailContent product={product as Product} locale={locale} />
      <Footer />
    </div>
  );
}