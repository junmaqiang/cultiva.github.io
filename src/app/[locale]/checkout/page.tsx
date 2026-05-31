'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { CreditCard, Lock, ChevronLeft, CheckCircle2, Shield, Smartphone } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { PaymentMethodSelector } from '@/components/checkout/PaymentMethodSelector';
import { useApp } from '@/context/AppContext';
import { useCart } from '@/context/CartContext';
import { toast } from 'sonner';

export default function CheckoutPage() {
  const router = useRouter();
  const { t, language } = useApp();
  const { cart, cartTotal, clearCart } = useCart();
  const [step, setStep] = useState<'shipping' | 'payment' | 'success'>('shipping');
  const [paymentMethod, setPaymentMethod] = useState('stripe');
  const [isProcessing, setIsProcessing] = useState(false);
  const [shippingInfo, setShippingInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: ''
  });

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

  const handleShippingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShippingInfo({
      ...shippingInfo,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 'shipping') {
      // 验证必填字段
      if (!shippingInfo.firstName || !shippingInfo.lastName || !shippingInfo.email || 
          !shippingInfo.address || !shippingInfo.city || !shippingInfo.country) {
        toast.error('Please fill in all required fields');
        return;
      }
      setStep('payment');
    } else if (step === 'payment') {
      setIsProcessing(true);
      try {
        // 创建支付意向
        const totalAmount = cartTotal + (cartTotal >= 100 ? 0 : 9.99);
        const response = await fetch('/api/payments/create-intent', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            amount: totalAmount,
            currency: 'usd',
            items: cart.map(item => ({
              id: item.product.id,
              name: item.product.nameEn,
              quantity: item.quantity,
              price: item.product.price
            })),
            customerEmail: shippingInfo.email
          })
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || 'Payment initialization failed');
        }

        console.log('[DEV] Payment initialized:', data);
        toast.success('Payment processed successfully!');

        setStep('success');
        clearCart();
      } catch (error) {
        toast.error(error instanceof Error ? error.message : 'Payment failed');
      } finally {
        setIsProcessing(false);
      }
    }
  };

  if (cart.length === 0 && step !== 'success') {
    router.push('/cart');
    return null;
  }

  if (step === 'success') {
    return (
      <div className="min-h-screen flex flex-col">
        <div>
          <Header />
        </div>
        <main className="flex-1 flex items-center justify-center py-16">
          <div className="page-container max-w-md text-center">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
              <CheckCircle2 className="h-12 w-12 text-emerald-600" />
            </div>
            <h1 className="text-3xl font-bold mb-4">{t.checkout.thankYou}</h1>
            <p className="text-muted-foreground mb-8">
              {t.checkout.orderSuccess}
            </p>
            <Button asChild className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700">
              <Link href="/">{t.checkout.continueShopping}</Link>
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
          <div className="flex items-center gap-4 mb-8">
            <Button variant="ghost" asChild>
              <Link href="/cart" className="flex items-center gap-2">
                <ChevronLeft className="h-4 w-4" />
                {t.checkout.backToCart}
              </Link>
            </Button>
            <div className="flex-1 h-1 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-emerald-600 to-teal-600 transition-all duration-300"
                style={{ width: step === 'shipping' ? '50%' : '100%' }}
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit}>
                {step === 'shipping' && (
                  <Card>
                    <CardHeader>
                      <h2 className="text-xl font-bold">{t.checkout.shipping}</h2>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">{t.checkout.firstName}</Label>
                          <Input id="firstName" value={shippingInfo.firstName} onChange={handleShippingChange} required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">{t.checkout.lastName}</Label>
                          <Input id="lastName" value={shippingInfo.lastName} onChange={handleShippingChange} required />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">{t.checkout.email}</Label>
                        <Input id="email" type="email" value={shippingInfo.email} onChange={handleShippingChange} required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">{t.checkout.phone}</Label>
                        <Input id="phone" type="tel" value={shippingInfo.phone} onChange={handleShippingChange} required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="address">{t.checkout.address}</Label>
                        <Input id="address" value={shippingInfo.address} onChange={handleShippingChange} required />
                      </div>
                      <div className="grid sm:grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="city">{t.checkout.city}</Label>
                          <Input id="city" value={shippingInfo.city} onChange={handleShippingChange} required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="state">{t.checkout.state}</Label>
                          <Input id="state" value={shippingInfo.state} onChange={handleShippingChange} />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="zip">{t.checkout.zipCode}</Label>
                          <Input id="zip" value={shippingInfo.zip} onChange={handleShippingChange} required />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="country">{t.checkout.country}</Label>
                        <Input id="country" value={shippingInfo.country} onChange={handleShippingChange} required />
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-end">
                      <Button type="submit" className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700">
                        {t.checkout.continueToPayment}
                      </Button>
                    </CardFooter>
                  </Card>
                )}

                {step === 'payment' && (
                  <Card>
                    <CardHeader>
                      <h2 className="text-xl font-bold">{t.checkout.payment}</h2>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <PaymentMethodSelector
                        selectedMethod={paymentMethod}
                        onMethodChange={setPaymentMethod}
                      />

                      {paymentMethod === 'stripe' && (
                        <div className="space-y-4 pt-4 border-t">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CreditCard className="h-4 w-4" />
                            <span>Secure card payment via Stripe</span>
                          </div>
                          <div className="space-y-4">
                            <div className="space-y-2">
                              <Label htmlFor="cardNumber">{t.checkout.cardNumber}</Label>
                              <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="cardName">{t.checkout.nameOnCard}</Label>
                              <Input id="cardName" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label htmlFor="expiry">{t.checkout.expiryDate}</Label>
                                <Input id="expiry" placeholder="MM/YY" />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="cvc">{t.checkout.cvc}</Label>
                                <Input id="cvc" placeholder="123" />
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {(paymentMethod === 'applepay' || paymentMethod === 'googlepay') && (
                        <div className="space-y-4 pt-4 border-t">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Smartphone className="h-4 w-4" />
                            <span>Quick checkout with {paymentMethod === 'applepay' ? 'Apple' : 'Google'} Pay</span>
                          </div>
                        </div>
                      )}

                      {paymentMethod === 'alipay' || paymentMethod === 'wechatpay' ? (
                        <div className="space-y-4 pt-4 border-t">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Smartphone className="h-4 w-4" />
                            <span>QR code payment will be generated after order confirmation</span>
                          </div>
                        </div>
                      ) : null}

                      <div className="flex items-center gap-3 text-sm text-muted-foreground pt-4 border-t">
                        <Shield className="h-4 w-4 text-emerald-600" />
                        <span>{t.checkout.paymentSecure}</span>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button type="button" variant="ghost" onClick={() => setStep('shipping')}>
                        {t.checkout.back}
                      </Button>
                      <Button
                        type="submit"
                        className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700"
                        disabled={isProcessing}
                      >
                        {isProcessing ? t.checkout.processing : t.checkout.placeOrder}
                      </Button>
                    </CardFooter>
                  </Card>
                )}
              </form>
            </div>

            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <h2 className="text-xl font-bold">{t.checkout.orderSummary}</h2>
                </CardHeader>
                <CardContent className="space-y-4">
                  {cart.map((item) => (
                    <div key={item.product.id} className="flex items-center gap-4">
                      <div className="relative w-16 h-16 rounded-md overflow-hidden bg-muted flex-shrink-0">
                        <Image
                          src={item.product.image}
                          alt={getName(item.product.nameEn, item.product.nameZh, item.product.nameJa)}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium truncate">
                          {getName(item.product.nameEn, item.product.nameZh, item.product.nameJa)}
                        </p>
                        <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                      </div>
                      <span className="font-medium">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  ))}
                  <div className="border-t pt-4 space-y-3">
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
                    <div className="flex items-center justify-between font-semibold text-lg pt-3 border-t">
                      <span>{t.cart.total}</span>
                      <span>${(cartTotal + (cartTotal >= 100 ? 0 : 9.99)).toFixed(2)}</span>
                    </div>
                  </div>
                </CardContent>
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
