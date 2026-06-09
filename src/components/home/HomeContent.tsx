'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Leaf, FlaskConical, Globe, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useApp } from '@/context/AppContext';
import { type Locale } from '@/lib/locale';

interface HomeContentProps {
  locale: Locale;
}

export function HomeContent({ locale }: HomeContentProps) {
  const { t } = useApp();

  const features = [
    {
      icon: Leaf,
      title: t.home.features.items[0].title,
      description: t.home.features.items[0].desc,
    },
    {
      icon: FlaskConical,
      title: t.home.features.items[1].title,
      description: t.home.features.items[1].desc,
    },
    {
      icon: Globe,
      title: t.home.features.items[2].title,
      description: t.home.features.items[2].desc,
    },
  ];

  return (
    <main className="flex-1">
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50/50 via-white to-white dark:from-emerald-950/10 dark:via-background dark:to-background">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-20 w-72 h-72 bg-emerald-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl"></div>
        </div>
        <div className="page-container py-8 md:py-12 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight font-serif text-foreground">
                {t.home.hero.title}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
                {t.home.hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href={`/${locale}/products`}>
                  <Button 
                    size="lg" 
                    className="group gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white shadow-lg shadow-amber-500/25 hover:shadow-xl hover:shadow-amber-500/30 transition-all duration-300"
                  >
                    {t.home.hero.cta}
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href={`/${locale}/about`}>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="gap-2 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-all duration-300"
                  >
                    {t.home.hero.discoverProducts}
                  </Button>
                </Link>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-1">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full border-2 border-white dark:border-background overflow-hidden"
                      >
                        <Image
                          src={`/images/user${i}.jpg`}
                          alt="User"
                          width={100}
                          height={100}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">10K+</span> {t.home.hero.happyCustomers}
                  </span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl shadow-black/10 dark:shadow-black/20 w-[90%] mx-auto">
                <Image
                  src="/images/hero.png"
                  alt="Premium Supplements"
                  width={800}
                  height={800}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-r from-emerald-900 to-teal-900 text-white">
        <div className="page-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">{t.home.promises.title}</h2>
            <p className="text-emerald-100/80 max-w-2xl mx-auto">{t.home.promises.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {t.home.promises.items.map((promise: { title: string; desc: string }, index: number) => (
              <div key={index} className="text-center p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-yellow-500 flex items-center justify-center mx-auto mb-6">
                  <span className="text-emerald-900 font-bold text-xl">100%</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 font-serif">{promise.title}</h3>
                <p className="text-emerald-100/80 text-sm">{promise.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="page-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.home.features.title}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl border bg-card hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 flex items-center justify-center mb-6">
                  <feature.icon className="h-7 w-7 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-muted/30">
        <div className="page-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-4 md:space-y-6">
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="/images/about1.jpg"
                      alt="About us 1"
                      width={400}
                      height={600}
                      className="w-full h-auto transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="/images/about2.jpg"
                      alt="Scientific research laboratory"
                      width={400}
                      height={400}
                      className="w-full h-auto transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>
                <div className="space-y-4 md:space-y-6">
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="/images/about3.jpg"
                      alt="About us 3"
                      width={400}
                      height={400}
                      className="w-full h-auto transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="/images/about4.jpg"
                      alt="About us 4"
                      width={400}
                      height={600}
                      className="w-full h-auto transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold font-serif">{t.home.philosophy.title}</h2>
              <p className="text-sm text-amber-600/80 uppercase tracking-wider">{t.home.philosophy.subtitle}</p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t.home.philosophy.description}
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-xl bg-muted/50 border">
                  <p className="text-3xl font-bold text-emerald-600">50+</p>
                  <p className="text-sm text-muted-foreground">{t.home.hero.premiumProducts}</p>
                </div>
                <div className="p-4 rounded-xl bg-muted/50 border">
                  <p className="text-3xl font-bold text-emerald-600">100+</p>
                  <p className="text-sm text-muted-foreground">{t.home.hero.countriesServed}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-emerald-900 to-teal-900 text-white">
        <div className="page-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">{t.home.hero.readyToStart}</h2>
          <p className="text-lg text-emerald-100/80 mb-8 max-w-2xl mx-auto">
            {t.home.hero.joinThousands}
          </p>
          <Link href={`/${locale}/products`}>
            <Button size="lg" className="gap-2 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-emerald-900">
              {t.home.hero.cta}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}