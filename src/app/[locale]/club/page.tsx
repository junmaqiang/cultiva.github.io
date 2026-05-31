'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { useApp } from '@/context/AppContext';
import { Check, Crown, Gift, Heart, Star, Zap, Users, Clock, Shield, MessageSquare, Truck, Award, ArrowRight } from 'lucide-react';

export default function ClubPage() {
  const { t } = useApp();

  // 会员套餐
  const membershipPlans = [
    {
      name: t.club.basic,
      price: t.club.basicPrice,
      description: t.club.basicDesc,
      features: t.club.basicFeatures,
      popular: false,
      icon: Heart
    },
    {
      name: t.club.premium,
      price: t.club.premiumPrice,
      description: t.club.premiumDesc,
      features: t.club.premiumFeatures,
      popular: true,
      icon: Crown
    },
    {
      name: t.club.enterprise,
      price: t.club.enterprisePrice,
      description: t.club.enterpriseDesc,
      features: t.club.enterpriseFeatures,
      popular: false,
      icon: Users
    }
  ];

  // 会员福利
  const benefits = [
    {
      icon: Gift,
      key: 'exclusiveBox'
    },
    {
      icon: Zap,
      key: 'priorityAccess'
    },
    {
      icon: Shield,
      key: 'exclusiveAdvisor'
    },
    {
      icon: Truck,
      key: 'freeShipping'
    },
    {
      icon: MessageSquare,
      key: 'vipSupport'
    },
    {
      icon: Award,
      key: 'exclusiveEvents'
    }
  ];

  // 会员级别
  const tierKeys = ['silver', 'gold', 'platinum', 'diamond'];

  return (
    <div className="min-h-screen flex flex-col">
      <div>
        <Header />
      </div>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden text-white py-20 lg:py-28">
          <div className="absolute inset-0">
            <Image
              src="/images/club-bg.jpg"
              alt="Club Background"
              fill
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/95 via-emerald-800/90 to-teal-900/95" />
          </div>
          <div className="page-container relative">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-500/20 border border-amber-500/30 mb-8">
                <Crown className="h-5 w-5 text-amber-400 mr-2" />
                <span className="text-amber-300 font-medium">100 Club</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-serif">
                {t.club.heroTitle}
              </h1>
              <p className="text-xl text-emerald-100/90 mb-8">
                {t.club.heroSubtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gap-2 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-emerald-900">
                  {t.club.joinNow}
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button size="lg" variant="secondary" className="bg-white/10 hover:bg-white/20 text-white">
                  {t.club.learnMore}
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 会员福利 */}
        <section className="py-20 bg-background">
          <div className="page-container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">{t.club.benefits}</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {t.club.benefitsSubtitle}
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="p-8 rounded-2xl border bg-card hover:shadow-lg transition-all duration-300">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 flex items-center justify-center mb-6">
                    <benefit.icon className="h-7 w-7 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{t.club[benefit.key as keyof typeof t.club]}</h3>
                  <p className="text-muted-foreground">{t.club[`${benefit.key}Desc` as keyof typeof t.club]}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 会员套餐 */}
        <section className="py-20 bg-muted/30">
          <div className="page-container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">{t.club.plans}</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {t.club.plansSubtitle}
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {membershipPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative p-8 rounded-3xl border transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-b from-emerald-50 to-white dark:from-emerald-950/30 dark:to-background border-emerald-200 dark:border-emerald-800 shadow-xl scale-105'
                      : 'bg-card hover:shadow-lg'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="px-4 py-1 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 text-white text-sm font-medium">
                        {t.club.mostPopular}
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 flex items-center justify-center mx-auto mb-4">
                      <plan.icon className={`h-8 w-8 ${plan.popular ? 'text-amber-600' : 'text-emerald-600 dark:text-emerald-400'}`} />
                    </div>
                    <h3 className="text-2xl font-bold mb-2 font-serif">{plan.name}</h3>
                    <div className="text-4xl font-bold mb-2">{plan.price}</div>
                    <p className="text-muted-foreground">{plan.description}</p>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? 'bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600'
                        : ''
                    }`}
                  >
                    {index === 2 ? t.club.contactUs : t.club.joinNow}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 会员等级 */}
        <section className="py-20 bg-background">
          <div className="page-container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">{t.club.tiers}</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {t.club.tiersSubtitle}
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {tierKeys.map((tierKey, index) => (
                <div key={tierKey} className="p-6 rounded-2xl border bg-card text-center hover:shadow-lg transition-all duration-300">
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${
                    index === 0 ? 'from-gray-400 to-gray-500' :
                    index === 1 ? 'from-amber-400 to-yellow-500' :
                    index === 2 ? 'from-slate-300 to-slate-400' :
                    'from-cyan-400 to-blue-500'
                  } flex items-center justify-center mx-auto mb-4`}>
                    <span className="text-2xl font-bold text-white">{(t.club[tierKey as keyof typeof t.club] as string).charAt(0)}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 font-serif">{t.club[tierKey as keyof typeof t.club]}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{t.club[`${tierKey}Points` as keyof typeof t.club]}</p>
                  <div className="inline-block px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-900/30">
                    <span className="text-emerald-700 dark:text-emerald-300 font-semibold">
                      {['5%', '10%', '15%', '20%'][index]} {t.club.discount}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 用户见证 */}
        <section className="py-20 bg-muted/30">
          <div className="page-container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">{t.club.testimonials}</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {t.club.testimonialsSubtitle}
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: '李明',
                  role: '企业高管',
                  avatar: '/images/user1.svg',
                  quote: '100 Club的健康顾问帮我制定了个性化的健康方案，三个月后我的精力明显提升了。',
                  rating: 5
                },
                {
                  name: 'Sarah Tan',
                  role: '健身教练',
                  avatar: '/images/user2.svg',
                  quote: '作为健身教练，我向所有客户推荐Cultiva100的产品。质量稳定，效果显著。',
                  rating: 5
                },
                {
                  name: '王阿姨',
                  role: '退休医生',
                  avatar: '/images/user3.svg',
                  quote: '从医40年，我对保健品很挑剔。Cultiva100的透明度和科学背书让我信服。',
                  rating: 5
                }
              ].map((testimonial, index) => (
                <div key={index} className="p-8 rounded-2xl border bg-card">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        width={100}
                        height={100}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 加入CTA */}
        <section className="py-20 bg-gradient-to-r from-emerald-900 to-teal-900 text-white">
          <div className="page-container">
            <div className="text-center max-w-2xl mx-auto">
              <Crown className="h-16 w-16 text-amber-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
                {t.club.readyToStart}
              </h2>
              <p className="text-emerald-100/90 mb-8">
                {t.club.readyToStartDesc}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gap-2 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-emerald-900">
                  {t.club.joinClub}
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Link href="/contact">
                  <Button size="lg" variant="secondary" className="bg-white/10 hover:bg-white/20 text-white">
                    {t.club.contactUs}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <div>
        <Footer />
      </div>
    </div>
  );
}
