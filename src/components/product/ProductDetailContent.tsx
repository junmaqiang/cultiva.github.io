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
            <div className="space-y-6">
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
                
              </div>

              <div className="border-t pt-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-emerald-600">${product.price.toFixed(2)}</span>
                  <span className="text-muted-foreground line-through">${(product.price * 1.2).toFixed(2)}</span>
                  <Badge variant="destructive">-20%</Badge>
                </div>
              </div>

              <div>
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
                      className="flex-1 gap-2 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white cursor-pointer"
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
                      className="flex-1 gap-2 cursor-pointer"
                    >
                      {t.products.taobao}
                    </Button>
                  </a>
                </div>
              </div>

              <div className="border-t pt-6 space-y-4">
                {product.productName && (
                  <div className="flex items-start gap-2">
                    <span className="font-bold text-base text-foreground">产品名称：</span>
                    <span className="text-base text-muted-foreground">{product.productName}</span>
                  </div>
                )}
                {product.productType && (
                  <div className="flex items-start gap-2">
                    <span className="font-bold text-base text-foreground">产品类型：</span>
                    <span className="text-base text-muted-foreground">{product.productType}</span>
                  </div>
                )}
                {product.specification && (
                  <div className="flex items-start gap-2">
                    <span className="font-bold text-base text-foreground">规格：</span>
                    <span className="text-base text-muted-foreground">{product.specification}</span>
                  </div>
                )}
                {product.suitableFor && (
                  <div className="flex flex-col gap-2">
                    <span className="font-bold text-base text-foreground">适合人群</span>
                    <p className="text-base text-muted-foreground">{product.suitableFor}</p>
                  </div>
                )}
                {product.scenarios && (
                  <div className="flex flex-col gap-2">
                    <span className="font-bold text-base text-foreground">适用场景</span>
                    <ul className="text-base text-muted-foreground space-y-2">
                      {product.scenarios.split('\n').map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-emerald-500 mt-1">-</span>
                          <span>{item.replace(/^\d+\.\s*/, '')}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {product.usage && (
                  <div className="flex items-start gap-2">
                    <span className="font-bold text-base text-foreground">服用方式：</span>
                    <span className="text-base text-muted-foreground">{product.usage}</span>
                  </div>
                )}
                {product.cautions && (
                  <div className="flex flex-col gap-2">
                    <span className="font-bold text-base text-foreground">注意事项</span>
                    <ul className="text-base text-muted-foreground space-y-2">
                      {product.cautions.split('\n').filter(line => line.trim()).map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-amber-500 mt-1">-</span>
                          <span>{item.replace(/^-\s*/, '')}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
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