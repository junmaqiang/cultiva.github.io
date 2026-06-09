'use client';

import Image from 'next/image';
import { useApp } from '@/context/AppContext';
import { MessageSquare, ShoppingBag, Heart } from 'lucide-react';

export function ContactContent() {
  const { t } = useApp();
  
  const quickContactKeys = ['productInquiry', 'orderInquiry', 'afterSales'];
  const quickContactIcons = [MessageSquare, ShoppingBag, Heart];

  return (
    <main className="flex-1">
      <section className="relative overflow-hidden text-white py-20 lg:py-28">
        <div className="absolute inset-0">
          <Image
            src="/images/contact-bg.jpg"
            alt="Contact Background"
            fill
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/95 via-emerald-800/90 to-teal-900/95" />
        </div>
        <div className="page-container relative">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-serif">
              {t.contact.title}
            </h1>
            <p className="text-xl text-emerald-100/90">
              {t.contact.subtitle}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="page-container">
          <div className="grid md:grid-cols-3 gap-8">
            {quickContactKeys.map((key, index) => {
              const Icon = quickContactIcons[index];
              return (
                <div key={key} className="p-8 rounded-2xl border bg-card hover:shadow-lg transition-all duration-300 text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 flex items-center justify-center mx-auto mb-6">
                    <Icon className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{t.contact[key as keyof typeof t.contact]}</h3>
                  <p className="text-muted-foreground">{t.contact[`${key}Desc` as keyof typeof t.contact]}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}