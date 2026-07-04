'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Star, Check } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { translations } from '@/lib/i18n/translations';
import { Product } from '@/context/CartContext';
import { TrustChain } from './TrustChain';
import { type Locale } from '@/lib/locale';
import { siteConfig } from '@/lib/config';

interface ProductDetailContentProps {
  product: Product;
  locale: Locale;
}

export function ProductDetailContent({ product, locale }: ProductDetailContentProps) {
  const { t, language } = useApp();

  const getCategoryLabel = (category: string) => {
    const tCommon = translations[language].common;
    switch (category) {
      case 'ergothioneine':
        return tCommon.ergothioneine;
      case 'equol':
        return tCommon.equol;
      case 'ginsenoside':
        return tCommon.ginsenoside;
      default:
        return category;
    }
  };

  const getProductName = () => {
    switch (locale) {
      case 'zh':
        return product.nameZh || product.name;
      case 'ja':
        return product.nameJa || product.name;
      default:
        return product.nameEn || product.name;
    }
  };

  const getProductDescription = () => {
    switch (locale) {
      case 'zh':
        return product.descriptionZh || product.description;
      case 'ja':
        return product.descriptionJa || product.description;
      default:
        return product.descriptionEn || product.description;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 py-12">
        <div className="page-container">
          <div className="flex items-center gap-2 mb-8">
            <Link href={`/${locale}/products`} className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="h-4 w-4" />
              {t.products.back}
            </Link>
            <span>/</span>
            <span className="text-muted-foreground">{getCategoryLabel(product.category)}</span>
            <span>/</span>
            <span>{getProductName()}</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 pb-8">
            <div className="space-y-4">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted">
                <Image
                  src={product.image}
                  alt={getProductName()}
                  width={800}
                  height={800}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary">{getCategoryLabel(product.category)}</Badge>
                  {product.inStock && (
                    <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                      {t.products.inStock}
                    </Badge>
                  )}
                </div>
                <h1 className="text-3xl md:text-4xl font-bold font-serif mb-4">{getProductName()}</h1>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'fill-amber-400 text-amber-400' : 'text-muted-foreground'}`}
                      />
                    ))}
                    <span className="ml-2 font-medium">{product.rating}</span>
                  </div>
                  <span className="text-muted-foreground">({product.reviews} {t.products.reviews})</span>
                </div>
              </div>

              <div className="border-t pt-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-emerald-600">${product.price.toFixed(2)}</span>
                  <span className="text-muted-foreground line-through">${(product.price * 1.2).toFixed(2)}</span>
                  <Badge variant="destructive">-20%</Badge>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-3">{t.products.description}</h3>
                <p className="text-muted-foreground leading-relaxed">{getProductDescription()}</p>
              </div>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <a
                    href={siteConfig.shops.tmall.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="lg"
                      className="flex-1 gap-2 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white"
                    >
                      {t.products.tmall}
                    </Button>
                  </a>
                  <a
                    href={siteConfig.shops.taobao.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="lg"
                      variant="outline"
                      className="flex-1 gap-2"
                    >
                      {t.products.taobao}
                    </Button>
                  </a>
                </div>
              </div>

              <div className="border-t pt-6 space-y-4">
                <div className="flex items-center gap-3 text-sm">
                  <Check className="h-4 w-4 text-emerald-500" />
                  <span>{t.products.shipping}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Check className="h-4 w-4 text-emerald-500" />
                  <span>{t.products.returns}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Check className="h-4 w-4 text-emerald-500" />
                  <span>{t.products.securePayment}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8">
            <TrustChain language={language} />
          </div>
        </div>
      </main>
    </div>
  );
}