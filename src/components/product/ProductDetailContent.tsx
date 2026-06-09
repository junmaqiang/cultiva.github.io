'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Star, ShoppingCart, Heart, Share2, Check } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { translations } from '@/lib/i18n/translations';
import { Product } from '@/context/CartContext';
import { TrustChain } from './TrustChain';
import { type Locale } from '@/lib/locale';

interface ProductDetailContentProps {
  product: Product;
  locale: Locale;
}

export function ProductDetailContent({ product, locale }: ProductDetailContentProps) {
  const { t, language } = useApp();
  const { addToCart } = useCart();
  
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

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

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
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

          <div className="grid lg:grid-cols-2 gap-12">
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
              <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="aspect-square rounded-lg overflow-hidden bg-muted cursor-pointer hover:ring-2 hover:ring-emerald-500 transition-all"
                  >
                    <Image
                      src={product.image}
                      alt={`${getProductName()} view ${i}`}
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
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
                <div className="flex items-center gap-4">
                  <span className="font-medium w-20">{t.products.quantity}</span>
                  <div className="flex items-center border rounded-lg">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-10 w-10 rounded-none border-r"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                      -
                    </Button>
                    <Input
                      type="number"
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-20 h-10 text-center border-none focus-visible:ring-0"
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-10 w-10 rounded-none border-l"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      +
                    </Button>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button
                    size="lg"
                    className="flex-1 gap-2 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white"
                    onClick={handleAddToCart}
                    disabled={!product.inStock}
                  >
                    {isAdded ? (
                      <>
                        <Check className="h-4 w-4" />
                        {t.products.added}
                      </>
                    ) : (
                      <>
                        <ShoppingCart className="h-4 w-4" />
                        {t.products.addToCart}
                      </>
                    )}
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => setIsFavorite(!isFavorite)}
                    className={`${isFavorite ? 'text-red-500 border-red-500' : ''}`}
                  >
                    <Heart className={`h-5 w-5 ${isFavorite ? 'fill-current' : ''}`} />
                  </Button>
                  <Button variant="outline" size="lg">
                    <Share2 className="h-5 w-5" />
                  </Button>
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

          <TrustChain language={language} />
        </div>
      </main>
    </div>
  );
}