'use client';

import Image from 'next/image';
import { useApp } from '@/context/AppContext';
import { MapPin, Users, Award, Building, CheckCircle, Zap } from 'lucide-react';

export function AboutContent() {
  const { t } = useApp();

  const values = [
    {
      icon: CheckCircle,
      key: 'transparency'
    },
    {
      icon: Zap,
      key: 'innovation'
    },
    {
      icon: Award,
      key: 'quality'
    },
    {
      icon: Users,
      key: 'trust'
    }
  ];

  return (
    <main className="flex-1">
      <section className="relative overflow-hidden text-white py-20 lg:py-32">
        <div className="absolute inset-0">
          <Image
            src="/images/about-bg.jpg"
            alt="About Background"
            fill
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/95 via-emerald-800/90 to-teal-900/95" />
        </div>
        <div className="page-container relative">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-serif">
              {t.about.title}
            </h1>
            <p className="text-xl text-emerald-100/90 mb-8">
              {t.about.subtitle}
            </p>
            <div className="flex items-center justify-center gap-2 text-emerald-200">
              <MapPin className="h-5 w-5" />
              <span>{t.about.location}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="page-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">{t.about.values}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t.about.valuesSubtitle}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="p-8 rounded-2xl border bg-card hover:shadow-lg transition-all duration-300 text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{t.about[value.key as keyof typeof t.about]}</h3>
                <p className="text-muted-foreground text-sm">{t.about[`${value.key}Desc` as keyof typeof t.about]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="page-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold font-serif">{t.about.whySingapore}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t.about.whySingaporeDesc1}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t.about.whySingaporeDesc2}
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-xl bg-background border">
                  <Building className="h-6 w-6 text-emerald-600 mb-2" />
                  <p className="font-semibold">{t.about.hsaRegulation}</p>
                  <p className="text-sm text-muted-foreground">{t.about.hsaRegulationDesc}</p>
                </div>
                <div className="p-4 rounded-xl bg-background border">
                  <Award className="h-6 w-6 text-emerald-600 mb-2" />
                  <p className="font-semibold">{t.about.gmpCertification}</p>
                  <p className="text-sm text-muted-foreground">{t.about.gmpCertificationDesc}</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/about1.jpg"
                  alt="Singapore Laboratory"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="page-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">{t.about.laboratory}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t.about.laboratorySubtitle}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square rounded-2xl overflow-hidden">
                <Image
                  src={`/images/about${i}.jpg`}
                  alt={`Lab ${i}`}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}