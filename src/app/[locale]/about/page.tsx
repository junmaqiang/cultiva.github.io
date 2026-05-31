'use client';

import React from 'react';
import Image from 'next/image';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { useApp } from '@/context/AppContext';
import { MapPin, Users, Award, FlaskConical, Building, Clock, CheckCircle, Zap } from 'lucide-react';

export default function AboutPage() {
  const { t, language } = useApp();

  // 团队成员数据
  const teamMembers = [
    {
      name: 'Dr. Sarah Chen',
      nameZh: '陈莎拉博士',
      nameJa: 'サラ・チェン博士',
      role: 'Chief Scientist',
      roleZh: '首席科学家',
      roleJa: '最高科学責任者',
      bio: '20 years of nutrition science research experience, former professor at the National University of Singapore',
      bioZh: '拥有20年营养科学研究经验，曾在新加坡国立大学担任教授',
      bioJa: '20年の栄養科学研究経験、シンガポール国立大学の元教授'
    },
    {
      name: 'Michael Tan',
      nameZh: '陈迈克尔',
      nameJa: 'マイケル・タン',
      role: 'CEO',
      roleZh: 'CEO',
      roleJa: 'CEO',
      bio: 'Serial entrepreneur, 15 years focused on health tech',
      bioZh: '连续创业者，专注于健康科技领域15年',
      bioJa: '連続起業家、ヘルステック分野に15年間注力'
    },
    {
      name: 'Dr. James Wong',
      nameZh: '黄詹姆斯博士',
      nameJa: 'ジェームズ・ウォン博士',
      role: 'Head of R&D',
      roleZh: '研发总监',
      roleJa: '研究開発責任者',
      bio: 'Former GlaxoSmithKline R&D scientist, multiple patents',
      bioZh: '前葛兰素史克研发科学家，拥有多项专利',
      bioJa: '元グラクソ・スミスクライン研究開発科学者、複数の特許保有'
    },
    {
      name: 'Emily Liu',
      nameZh: '刘艾米丽',
      nameJa: 'エミリー・リュウ',
      role: 'QA Director',
      roleZh: '质量保证主管',
      roleJa: '品質保証責任者',
      bio: 'GMP certification expert, ensures every product meets the highest standards',
      bioZh: 'GMP认证专家，确保每款产品符合最高标准',
      bioJa: 'GMP認証専門家、すべての製品が最高基準を満たすことを保証'
    }
  ];

  const getLocalizedTeamText = (text: string, textZh: string, textJa: string) => {
    switch (language) {
      case 'zh':
        return textZh;
      case 'ja':
        return textJa;
      default:
        return text;
    }
  };

  // 核心价值
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

  // 里程碑数据
  const milestoneKeys = [
    'brandFounded',
    'firstProduct',
    'gmpCert',
    'globalExpansion',
    'researchBreakthrough',
    'membershipProgram'
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <div>
        <Header />
      </div>

      <main className="flex-1">
        {/* Hero Section */}
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

        {/* 核心价值 */}
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

        {/* 品牌故事 */}
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

        {/* 发展历程 */}
        <section className="py-20 bg-background">
          <div className="page-container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">{t.about.milestones}</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {t.about.milestonesSubtitle}
              </p>
            </div>
            <div className="relative">
              {/* 时间线 */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-emerald-200 dark:bg-emerald-800 transform -translate-x-1/2" />
              
              <div className="space-y-12">
                {milestoneKeys.map((key, index) => (
                  <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                      <div className="p-6 rounded-2xl border bg-card hover:shadow-lg transition-all duration-300">
                        <span className="text-amber-600 font-bold text-lg">{2019 + index}</span>
                        <h3 className="text-xl font-semibold mt-2 mb-2">{t.about[key as keyof typeof t.about]}</h3>
                        <p className="text-muted-foreground">{t.about[`${key}Desc` as keyof typeof t.about]}</p>
                      </div>
                    </div>
                    <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 border-4 border-background z-10">
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>
                    <div className="w-full md:w-1/2" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 团队介绍 */}
        <section className="py-20 bg-muted/30">
          <div className="page-container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">{t.about.team}</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {t.about.teamSubtitle}
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="text-center">
                  <div className="relative mb-6">
                    <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-emerald-100 dark:border-emerald-900">
                      <Image
                        src={`/images/user${index + 1}.jpg`}
                        alt={getLocalizedTeamText(member.name, member.nameZh, member.nameJa)}
                        width={200}
                        height={200}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{getLocalizedTeamText(member.name, member.nameZh, member.nameJa)}</h3>
                  <p className="text-amber-600 font-medium mb-3">{getLocalizedTeamText(member.role, member.roleZh, member.roleJa)}</p>
                  <p className="text-muted-foreground text-sm">{getLocalizedTeamText(member.bio, member.bioZh, member.bioJa)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 实验室图片 */}
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

      <div>
        <Footer />
      </div>
    </div>
  );
}
