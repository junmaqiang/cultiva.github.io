'use client';

import React from 'react';
import { Microscope, Award, Shield, FileText, Beaker, Users } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { useApp } from '@/context/AppContext';
import { Language } from '@/lib/i18n/translations';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const certifications = [
  {
    id: 'hsA',
    name: 'HSA Approved',
    nameZh: 'HSA 批准',
    nameJa: 'HSA承認',
    description: 'Health Sciences Authority Singapore',
    descriptionZh: '新加坡卫生科学局',
    descriptionJa: 'シンガポール保健科学局',
    icon: Shield,
  },
  {
    id: 'gmp',
    name: 'GMP Certified',
    nameZh: 'GMP 认证',
    nameJa: 'GMP認定',
    description: 'Good Manufacturing Practice',
    descriptionZh: '良好生产规范',
    descriptionJa: '適正製造規範',
    icon: Award,
  },
  {
    id: 'iso',
    name: 'ISO 22000',
    nameZh: 'ISO 22000',
    nameJa: 'ISO 22000',
    description: 'Food Safety Management',
    descriptionZh: '食品安全管理',
    descriptionJa: '食品安全管理',
    icon: FileText,
  },
  {
    id: 'fda',
    name: 'FDA Registered',
    nameZh: 'FDA 注册',
    nameJa: 'FDA登録',
    description: 'US Food and Drug Administration',
    descriptionZh: '美国食品药品监督管理局',
    descriptionJa: '米国食品医薬品局',
    icon: Shield,
  },
];

const researchPapers = [
  {
    id: '1',
    title: 'Clinical Study on NMN Efficacy',
    titleZh: 'NMN功效临床研究',
    titleJa: 'NMN有効性の臨床研究',
    journal: 'Journal of Longevity Science',
    year: '2024',
    status: 'Published',
  },
  {
    id: '2',
    title: 'Omega-3 Bioavailability Enhancement',
    titleZh: 'Omega-3生物利用度提升',
    titleJa: 'オメガ3生物学的利用能向上',
    journal: 'Nutritional Science Review',
    year: '2023',
    status: 'Published',
  },
  {
    id: '3',
    title: 'Curcumin Absorption Optimization',
    titleZh: '姜黄素吸收优化',
    titleJa: 'クルクミン吸収最適化',
    journal: 'Phytotherapy Research',
    year: '2023',
    status: 'Published',
  },
];

const labTeam = [
  {
    id: '1',
    name: 'Dr. Sarah Chen',
    nameZh: '陈莎拉博士',
    nameJa: 'サラ・チェン博士',
    role: 'Chief Scientific Officer',
    roleZh: '首席科学家',
    roleJa: '最高科学責任者',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face',
  },
  {
    id: '2',
    name: 'Dr. James Wong',
    nameZh: '黄詹姆斯博士',
    nameJa: 'ジェームズ・ウォン博士',
    role: 'Head of Research',
    roleZh: '研究主管',
    roleJa: '研究責任者',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face',
  },
  {
    id: '3',
    name: 'Dr. Mei Lin',
    nameZh: '林美博士',
    nameJa: 'メイ・リーン博士',
    role: 'Nutritional Scientist',
    roleZh: '营养科学家',
    roleJa: '栄養科学者',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop&crop=face',
  },
];

export default function CultivaLabPage() {
  const { t, language } = useApp();

  const getLocalizedText = (text: string, textZh: string, textJa: string) => {
    switch (language) {
      case 'zh':
        return textZh;
      case 'ja':
        return textJa;
      default:
        return text;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div>
        <Header />
      </div>

      <main className="flex-1">
        <section className="py-24 bg-gradient-to-r from-emerald-900 to-teal-900 text-white">
          <div className="page-container">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur mb-6">
                <Microscope className="h-5 w-5" />
                <span className="text-sm font-medium">{t.lab.subtitle}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif">{t.lab.title}</h1>
              <p className="text-xl text-emerald-100/80 leading-relaxed">
                {t.lab.description}
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="page-container">
            <h2 className="text-3xl font-bold mb-12 text-center font-serif">{t.lab.certifications}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert) => {
                const Icon = cert.icon;
                return (
                  <div
                    key={cert.id}
                    className="p-8 rounded-2xl border bg-card hover:shadow-lg transition-all text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 flex items-center justify-center mx-auto mb-6">
                      <Icon className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">
                      {getLocalizedText(cert.name, cert.nameZh, cert.nameJa)}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {getLocalizedText(cert.description, cert.descriptionZh, cert.descriptionJa)}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted/30">
          <div className="page-container">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl font-bold font-serif">{t.lab.research}</h2>
              <Button variant="ghost" className="gap-2">
                {t.lab.viewStudies}
              </Button>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {researchPapers.map (({ id, title, titleZh, titleJa, journal, year, status }) => (
                <div
                  key={id}
                  className="p-6 rounded-2xl bg-background border hover:shadow-lg transition-all"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-xs font-medium">
                      {status}
                    </span>
                    <span className="text-xs text-muted-foreground">{year}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    {getLocalizedText(title, titleZh, titleJa)}
                  </h3>
                  <p className="text-sm text-muted-foreground">{journal}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="page-container">
            <h2 className="text-3xl font-bold mb-12 text-center font-serif">{t.lab.team}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {labTeam.map((member) => (
                <div key={member.id} className="text-center">
                  <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                    <img
                      src={member.image}
                      alt={getLocalizedText(member.name, member.nameZh, member.nameJa)}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-1">
                    {getLocalizedText(member.name, member.nameZh, member.nameJa)}
                  </h3>
                  <p className="text-muted-foreground">
                    {getLocalizedText(member.role, member.roleZh, member.roleJa)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-emerald-900 to-teal-900 text-white">
          <div className="page-container text-center">
            <Beaker className="h-16 w-16 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl font-bold mb-4 font-serif">
              {t.lab.wantToLearnMore}
            </h2>
            <p className="text-emerald-100/80 max-w-2xl mx-auto mb-8">
              {t.lab.wantToLearnMoreDesc}
            </p>
            <Link href="/products">
              <Button className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-emerald-900">
                {t.lab.browseProducts}
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <div>
        <Footer />
      </div>
    </div>
  );
}
