'use client';

import { Globe, Award, Users, MapPin } from 'lucide-react';
import { Language } from '@/lib/i18n/translations';

interface SourceLocation {
  name: string;
  nameZh: string;
  nameJa: string;
  description: string;
  descriptionZh: string;
  descriptionJa: string;
}

interface Expert {
  name: string;
  nameZh: string;
  nameJa: string;
  title: string;
  titleZh: string;
  titleJa: string;
  signature: string;
}

interface TrustChainProps {
  language: Language;
  productSources?: SourceLocation[];
}

const defaultSources: SourceLocation[] = [
  {
    name: 'Norwegian Fjords',
    nameZh: '挪威峡湾',
    nameJa: '挪威フィヨルド',
    description: 'Pure Omega-3 from Arctic wild-caught fish',
    descriptionZh: '来自北极野生捕捞鱼的纯净Omega-3',
    descriptionJa: '北極の野生魚からの純粋なオメガ3',
  },
  {
    name: 'Organic Farms, India',
    nameZh: '印度有机农场',
    nameJa: 'インド有機农场',
    description: 'Premium turmeric with high curcumin content',
    descriptionZh: '高姜黄素含量的优质姜黄',
    descriptionJa: '高いクルクミン含量を持つプレミアムターメリック',
  },
  {
    name: 'Swiss Laboratories',
    nameZh: '瑞士实验室',
    nameJa: 'スイス研究所',
    description: 'Advanced extraction technology',
    descriptionZh: '先进提取技术',
    descriptionJa: '先進的な抽出技術',
  },
];

const defaultExperts: Expert[] = [
  {
    name: 'Dr. Sarah Chen',
    nameZh: '陈莎拉博士',
    nameJa: 'サラ・チェン博士',
    title: 'Chief Scientific Officer',
    titleZh: '首席科学家',
    titleJa: '最高科学責任者',
    signature: 'Dr. Sarah Chen',
  },
  {
    name: 'Prof. Michael Tan',
    nameZh: '陈迈克尔教授',
    nameJa: 'マイケル・タン教授',
    title: 'Nutritional Science Advisor',
    titleZh: '营养科学顾问',
    titleJa: '栄養科学アドバイザー',
    signature: 'Prof. Michael Tan',
  },
];

export function TrustChain({ language, productSources = defaultSources }: TrustChainProps) {
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

  const titles: Record<Language, {
    transparency: string;
    transparencySub: string;
    experts: string;
    expertsSub: string;
    certifications: string;
    certificationsSub: string;
    viewMap: string;
  }> = {
    en: {
      transparency: 'Transparent Sourcing',
      transparencySub: 'Trace every ingredient back to its origin',
      experts: 'Expert Endorsement',
      expertsSub: 'Developed by leading scientists and nutritionists',
      certifications: 'Quality Certifications',
      certificationsSub: 'Verified by authoritative bodies',
      viewMap: 'View Source Map',
    },
    zh: {
      transparency: '透明溯源',
      transparencySub: '每种原料都可追溯到产地',
      experts: '专家背书',
      expertsSub: '由顶尖科学家和营养师研发',
      certifications: '质量认证',
      certificationsSub: '权威机构认证',
      viewMap: '查看溯源地图',
    },
    ja: {
      transparency: '透明な調達',
      transparencySub: 'すべての原料の産地を遡る',
      experts: '専門家のおすすめ',
      expertsSub: '一流の科学者と栄養士が開発',
      certifications: '品質認証',
      certificationsSub: '権威ある機関による認定',
      viewMap: '調達地図を見る',
    },
  };

  const t = titles[language];

  return (
    <section className="py-16 bg-muted/30 rounded-2xl">
      <div className="page-container">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 font-serif">
            {language === 'zh' ? '信任链' : language === 'ja' ? '信頼の連鎖' : 'Trust Chain'}
          </h2>
          <p className="text-muted-foreground">
            {language === 'zh'
              ? '我们对品质的承诺，透明可见'
              : language === 'ja'
              ? '品質へのコミットメント、透明性'
              : 'Our commitment to quality, transparent for all to see'}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 flex items-center justify-center mx-auto mb-4">
              <Globe className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
            </div>
            <h3 className="text-lg font-semibold mb-2 font-serif">{t.transparency}</h3>
            <p className="text-sm text-muted-foreground mb-4">{t.transparencySub}</p>
            <div className="space-y-2">
              {productSources.map((source, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4 text-emerald-500" />
                  <span className="font-medium">
                    {getLocalizedText(source.name, source.nameZh, source.nameJa)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-100 to-yellow-100 dark:from-amber-900/30 dark:to-yellow-900/30 flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-amber-600 dark:text-amber-400" />
            </div>
            <h3 className="text-lg font-semibold mb-2 font-serif">{t.experts}</h3>
            <p className="text-sm text-muted-foreground mb-4">{t.expertsSub}</p>
            <div className="space-y-4">
              {defaultExperts.map((expert, index) => (
                <div key={index} className="bg-background rounded-xl p-4 border">
                  <p className="font-semibold text-sm">
                    {getLocalizedText(expert.name, expert.nameZh, expert.nameJa)}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {getLocalizedText(expert.title, expert.titleZh, expert.titleJa)}
                  </p>
                  <p className="text-xs text-emerald-600 mt-1 italic font-serif">
                    {expert.signature}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-slate-100 to-gray-100 dark:from-slate-900/30 dark:to-gray-900/30 flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-slate-600 dark:text-slate-400" />
            </div>
            <h3 className="text-lg font-semibold mb-2 font-serif">{t.certifications}</h3>
            <p className="text-sm text-muted-foreground mb-4">{t.certificationsSub}</p>
            <div className="space-y-2">
              {[
                { label: 'HSA Approved', labelZh: 'HSA批准', labelJa: 'HSA承認' },
                { label: 'GMP Certified', labelZh: 'GMP认证', labelJa: 'GMP認定' },
                { label: 'ISO 22000', labelZh: 'ISO 22000', labelJa: 'ISO 22000' },
                { label: 'Non-GMO', labelZh: '非转基因', labelJa: '非GMO' },
              ].map((cert, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center gap-2 text-sm"
                >
                  <Award className="h-4 w-4 text-emerald-500" />
                  <span className="font-medium">
                    {getLocalizedText(cert.label, cert.labelZh, cert.labelJa)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-colors font-medium">
            <Globe className="h-4 w-4" />
            {t.viewMap}
          </button>
        </div>
      </div>
    </section>
  );
}
