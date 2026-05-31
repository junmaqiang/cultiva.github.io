'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { useApp } from '@/context/AppContext';
import { useCart } from '@/context/CartContext';
import { Product } from '@/context/CartContext';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { t, language } = useApp();
  const { addToCart } = useCart();

  const getName = () => {
    switch (language) {
      case 'zh':
        return product.nameZh;
      case 'ja':
        return product.nameJa;
      default:
        return product.nameEn;
    }
  };

  const getDescription = () => {
    switch (language) {
      case 'zh':
        return product.descriptionZh;
      case 'ja':
        return product.descriptionJa;
      default:
        return product.descriptionEn;
    }
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    toast.success(`${getName()} added to cart!`);
  };

  return (
    <Link href={`/products/${product.id}`}>
      <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg group cursor-pointer">
        <div className="relative aspect-square overflow-hidden bg-muted">
          <Image
            src={product.image}
            alt={getName()}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {!product.inStock && (
            <div className="absolute inset-0 bg-background/60 flex items-center justify-center">
              <span className="px-3 py-1 bg-destructive text-destructive-foreground rounded-full text-sm font-medium">
                {t.product.outOfStock}
              </span>
            </div>
          )}
        </div>
        <CardHeader className="p-4 pb-2">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-semibold line-clamp-1">{getName()}</h3>
              <div className="flex items-center gap-1 mt-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm text-muted-foreground">
                  {product.rating} ({product.reviews})
                </span>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-4 pt-0">
          <p className="text-sm text-muted-foreground line-clamp-2">
            {getDescription()}
          </p>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <span className="text-xl font-bold flex-shrink-0">${product.price.toFixed(2)}</span>
          <Button
            size="sm"
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className="gap-1.5 w-full sm:w-auto whitespace-normal"
          >
            <ShoppingCart className="h-4 w-4 flex-shrink-0" />
            {t.product.addToCart}
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
