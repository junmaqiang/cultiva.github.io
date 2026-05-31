'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShoppingCart, Minus, Plus, Trash2, ArrowRight, ChevronLeft } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { useApp } from '@/context/AppContext';
import { useCart } from '@/context/CartContext';

export default function CartPage() {
  const { t, language } = useApp();
  const { cart, removeFromCart, updateQuantity, cartTotal, cartCount } = useCart();

  const getName = (nameEn: string, nameZh: string, nameJa: string) => {
    switch (language) {
      case 'zh':
        return nameZh;
      case 'ja':
        return nameJa;
      default:
        return nameEn;
    }
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <div>
          <Header />
        </div>
        <main className="flex-1">
          <div className="page-container py-16 text-center">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center">
              <ShoppingCart className="h-12 w-12 text-muted-foreground" />
            </div>
            <h1 className="text-2xl font-bold mb-4">{t.cart.title}</h1>
            <p className="text-muted-foreground mb-8">{t.cart.empty}</p>
            <Button asChild>
              <Link href="/products" className="gap-2">
                <ChevronLeft className="h-4 w-4" />
                {t.cart.continueShopping}
              </Link>
            </Button>
          </div>
        </main>
        <div>
          <Footer />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div>
        <Header />
      </div>

      <main className="flex-1">
        <div className="page-container py-8">
          <h1 className="text-3xl font-bold mb-8">{t.cart.title} ({cartCount})</h1>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {cart.map((item) => (
                <Card key={item.product.id} className="overflow-hidden">
                  <div className="flex flex-col sm:flex-row">
                    <div className="relative w-full sm:w-40 h-40 bg-muted">
                      <Image
                        src={item.product.image}
                        alt={getName(item.product.nameEn, item.product.nameZh, item.product.nameJa)}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 p-4 flex flex-col justify-between">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg mb-1">
                            {getName(item.product.nameEn, item.product.nameZh, item.product.nameJa)}
                          </h3>
                          <p className="text-muted-foreground text-sm line-clamp-2">
                            {getName(
                              item.product.descriptionEn,
                              item.product.descriptionZh,
                              item.product.descriptionJa
                            )}
                          </p>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-muted-foreground hover:text-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center gap-3">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="w-8 text-center font-medium">{item.quantity}</span>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                        <span className="text-xl font-bold">
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <h2 className="text-xl font-bold">{t.checkout.orderSummary}</h2>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">{t.cart.subtotal}</span>
                    <span>${cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">{t.cart.shipping}</span>
                    <span className={cartTotal >= 100 ? 'text-emerald-600' : ''}>
                      {cartTotal >= 100 ? t.cart.free : '$9.99'}
                    </span>
                  </div>
                  <div className="border-t pt-4 flex items-center justify-between">
                    <span className="font-semibold">{t.cart.total}</span>
                    <span className="text-2xl font-bold">
                      ${(cartTotal + (cartTotal >= 100 ? 0 : 9.99)).toFixed(2)}
                    </span>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col gap-3">
                  <Button asChild className="w-full gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700">
                    <Link href="/checkout">
                      {t.cart.checkout}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="ghost" asChild className="w-full">
                    <Link href="/products">{t.cart.continueShopping}</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <div>
        <Footer />
      </div>
    </div>
  );
}
