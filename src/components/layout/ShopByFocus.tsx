'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Shield, Heart, Brain, Sparkles, Leaf, Microscope, Users, BookOpen } from 'lucide-react';
import { Language } from '@/lib/i18n/translations';
import { type Locale } from '@/lib/locale';

interface CategoryItem {
  id: string;
  name: string;
  nameZh: string;
  nameJa: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  descriptionZh: string;
  descriptionJa: string;
  href: string;
}

const categories: CategoryItem[] = [
  {
    id: 'immunity',
    name: 'Immunity',
    nameZh: '免疫力',
    nameJa: '免疫力',
    icon: Shield,
    description: 'Strengthen your natural defenses',
    descriptionZh: '增强您的自然抵抗力',
    descriptionJa: '自然な防御力を強化',
    href: 'products?category=immunity',
  },
  {
    id: 'longevity',
    name: 'Longevity (NMN/NAD+)',
    nameZh: '长寿管理 (NMN/NAD+)',
    nameJa: '長寿管理 (NMN/NAD+)',
    icon: Heart,
    description: 'Cellular renewal and anti-aging',
    descriptionZh: '细胞更新与抗衰老',
    descriptionJa: '細胞再生とアンチエージング',
    href: 'products?category=longevity',
  },
  {
    id: 'stress',
    name: 'Stress Relief',
    nameZh: '压力舒缓',
    nameJa: 'ストレス解消',
    icon: Brain,
    description: 'Calm mind, balanced life',
    descriptionZh: '平静心灵，平衡生活',
    descriptionJa: '穏やかな心、バランスの取れた生活',
    href: 'products?category=stress',
  },
  {
    id: 'skin',
    name: 'Skin Repair',
    nameZh: '皮肤修护',
    nameJa: '肌修復',
    icon: Sparkles,
    description: 'Radiant skin from within',
    descriptionZh: '由内而外的肌肤焕新',
    descriptionJa: '内側から輝く肌へ',
    href: 'products?category=skin',
  },
  {
    id: 'digestive',
    name: 'Digestive Health',
    nameZh: '消化健康',
    nameJa: '消化器健康',
    icon: Leaf,
    description: 'Gut health foundation',
    descriptionZh: '肠道健康基础',
    descriptionJa: '腸の健康基盤',
    href: 'products?category=digestive',
  },
  {
    id: 'lab',
    name: 'Patented Extracts',
    nameZh: '专利提取物',
    nameJa: '特許抽出物',
    icon: Microscope,
    description: 'Proprietary formulations',
    descriptionZh: '专利配方',
    descriptionJa: '独自処方',
    href: 'products?category=patented',
  },
];

const brandModules: CategoryItem[] = [
  {
    id: 'cultiva-lab',
    name: 'Cultiva Lab',
    nameZh: '科研中心',
    nameJa: 'キュルティバ研究所',
    icon: Microscope,
    description: 'Research & certifications',
    descriptionZh: '研究与认证',
    descriptionJa: '研究と認定',
    href: 'lab',
  },
  {
    id: 'origin',
    name: 'Our Origin',
    nameZh: '关于我们',
    nameJa: '私たちについて',
    icon: Users,
    description: 'Singapore precision wellness',
    descriptionZh: '新加坡精密健康',
    descriptionJa: 'シンガポール精密ウェルネス',
    href: 'about',
  },
  {
    id: 'journal',
    name: 'Journal',
    nameZh: '生活方式专栏',
    nameJa: 'ジャーナル',
    icon: BookOpen,
    description: 'Educational content',
    descriptionZh: '教育性内容',
    descriptionJa: '教育的コンテンツ',
    href: 'journal',
  },
];

interface ShopByFocusProps {
  language: Language;
}

export function ShopByFocus({ language }: ShopByFocusProps) {
  const params = useParams();
  const locale = (params.locale as Locale) || 'en';
  const getLocalizedContent = (item: CategoryItem) => {
    switch (language) {
      case 'zh':
        return { name: item.nameZh, description: item.descriptionZh };
      case 'ja':
        return { name: item.nameJa, description: item.descriptionJa };
      default:
        return { name: item.name, description: item.description };
    }
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="page-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
            {language === 'zh' ? '探索产品' : language === 'ja' ? '製品を探索' : 'Shop by Focus'}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {language === 'zh'
              ? '按功能或成分找到最适合您的健康方案'
              : language === 'ja'
              ? '機能または成分別に最適な健康ソリューションを見つける'
              : 'Find the perfect wellness solution for your needs by function or ingredient'}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {categories.map((category) => {
            const content = getLocalizedContent(category);
            const Icon = category.icon;
            return (
              <Link
                key={category.id}
                href={`/${locale}/${category.href}`}
                className="group p-6 rounded-2xl bg-background border hover:border-emerald-500 hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="font-semibold text-sm mb-2">{content.name}</h3>
                <p className="text-xs text-muted-foreground line-clamp-2">{content.description}</p>
              </Link>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {brandModules.map((module) => {
            const content = getLocalizedContent(module);
            const Icon = module.icon;
            return (
              <Link
                key={module.id}
                href={`/${locale}/${module.href}`}
                className="group p-8 rounded-2xl bg-gradient-to-r from-emerald-900 to-teal-900 text-white hover:from-emerald-800 hover:to-teal-800 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <Icon className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg font-serif">{content.name}</h3>
                    <p className="text-sm text-emerald-100/80">{content.description}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
