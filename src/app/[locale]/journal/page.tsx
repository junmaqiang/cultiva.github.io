'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useApp } from '@/context/AppContext';
import { Search, Calendar, Clock, User, Tag, ArrowRight, Bookmark, Share2, Heart } from 'lucide-react';

export default function JournalPage() {
  const { t } = useApp();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // 文章数据
  const articles = [
    {
      id: 1,
      title: '21世纪的长寿指南：从NMN到NAD+',
      excerpt: '探索NAD+前体如何帮助我们延缓衰老，提升生命质量。深入了解科学研究背后的抗衰老机制。',
      category: '长寿科学',
      author: 'Dr. Sarah Chen',
      date: '2024年4月15日',
      readTime: '8分钟',
      image: '/images/article-longevity.jpg',
      featured: true
    },
    {
      id: 2,
      title: '如何看懂营养成分表',
      excerpt: '学会解读食品标签，做出更明智的健康选择。我们教您识别关键成分和潜在风险。',
      category: '营养知识',
      author: 'Emily Liu',
      date: '2024年4月10日',
      readTime: '5分钟',
      image: '/images/article-nutrition.jpg',
      featured: false
    },
    {
      id: 3,
      title: '压力管理的科学方法',
      excerpt: '了解压力如何影响身体，以及通过补充剂和生活方式改变来有效管理压力的策略。',
      category: '压力舒缓',
      author: 'Dr. James Wong',
      date: '2024年4月5日',
      readTime: '6分钟',
      image: '/images/article-stress.jpg',
      featured: false
    },
    {
      id: 4,
      title: '皮肤健康从内开始',
      excerpt: '探讨营养补充剂如何改善皮肤状态，实现由内而外的美丽与健康。',
      category: '皮肤修护',
      author: 'Michael Tan',
      date: '2024年3月28日',
      readTime: '7分钟',
      image: '/images/article-skin.jpg',
      featured: false
    },
    {
      id: 5,
      title: '免疫力提升全攻略',
      excerpt: '季节变化时如何增强免疫力？科学证明的方法和补充剂推荐。',
      category: '免疫力',
      author: 'Dr. Sarah Chen',
      date: '2024年3月20日',
      readTime: '9分钟',
      image: '/images/article-immunity.jpg',
      featured: false
    },
    {
      id: 6,
      title: '睡眠质量的关键因素',
      excerpt: '了解影响睡眠的因素，以及如何通过天然方法改善睡眠质量。',
      category: '健康生活',
      author: 'Emily Liu',
      date: '2024年3月15日',
      readTime: '6分钟',
      image: '/images/article-sleep.jpg',
      featured: false
    }
  ];

  const categoryKeys = ['all', 'longevityScience', 'nutritionKnowledge', 'stressRelief', 'skinRepair', 'immunity', 'healthyLiving'];

  const getCategoryValue = (key: string) => {
    const categoryMap: Record<string, string> = {
      '长寿科学': t.journal.longevityScience,
      '营养知识': t.journal.nutritionKnowledge,
      '压力舒缓': t.journal.stressRelief,
      '皮肤修护': t.journal.skinRepair,
      '免疫力': t.journal.immunity,
      '健康生活': t.journal.healthyLiving
    };
    return categoryMap[key] || key;
  };

  const getSelectedCategoryValue = (key: string) => {
    const categoryMap: Record<string, string> = {
      'all': 'all',
      'longevityScience': '长寿科学',
      'nutritionKnowledge': '营养知识',
      'stressRelief': '压力舒缓',
      'skinRepair': '皮肤修护',
      'immunity': '免疫力',
      'healthyLiving': '健康生活'
    };
    return categoryMap[key] || key;
  };

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || article.category === getSelectedCategoryValue(selectedCategory);
    return matchesSearch && matchesCategory;
  });

  const featuredArticle = articles.find(a => a.featured);
  const regularArticles = filteredArticles.filter(a => !a.featured);

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
              src="/images/journal-bg.jpg"
              alt="Journal Background"
              fill
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/95 via-emerald-800/90 to-teal-900/95" />
          </div>
          <div className="page-container relative">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-serif">
                {t.journal.title}
              </h1>
              <p className="text-xl text-emerald-100/90">
                {t.journal.subtitle}
              </p>
            </div>
          </div>
        </section>

        {/* 搜索和筛选 */}
        <section className="py-8 bg-background border-b">
          <div className="page-container">
            <div className="flex flex-col gap-6">
              {/* 搜索框 */}
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder={t.journal.searchArticles}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              {/* 分类按钮 */}
              <div className="flex flex-wrap gap-2">
                {categoryKeys.map((key) => (
                  <button
                    key={key}
                    onClick={() => setSelectedCategory(key)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedCategory === key
                        ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white'
                        : 'bg-muted text-muted-foreground hover:bg-muted/80'
                    }`}
                  >
                    {t.journal[key as keyof typeof t.journal]}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 精选文章 */}
        {featuredArticle && selectedCategory === 'all' && !searchQuery && (
          <section className="py-16 bg-muted/30">
            <div className="page-container">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative">
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                      src={featuredArticle.image}
                      alt={featuredArticle.title}
                      width={800}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-amber-500 text-white text-sm font-medium">
                      {t.journal.featured}
                    </span>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Tag className="h-4 w-4" />
                      {getCategoryValue(featuredArticle.category)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {featuredArticle.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {featuredArticle.readTime}
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold font-serif">
                    {featuredArticle.title}
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    {featuredArticle.excerpt}
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                      <User className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <span className="font-medium">{featuredArticle.author}</span>
                  </div>
                  <Link href={`/journal/${featuredArticle.id}`}>
                    <Button size="lg" className="gap-2 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600">
                      {t.journal.readMore}
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 文章列表 */}
        <section className="py-16 bg-background">
          <div className="page-container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularArticles.map((article) => (
                <article key={article.id} className="group">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4">
                    <Image
                      src={article.image}
                      alt={article.title}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2 py-1 rounded-full bg-emerald-600/90 text-white text-xs font-medium">
                        {getCategoryValue(article.category)}
                      </span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {article.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {article.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold group-hover:text-emerald-600 transition-colors font-serif">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-2">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-sm text-muted-foreground flex items-center gap-1">
                        <User className="h-3 w-3" />
                        {article.author}
                      </span>
                      <div className="flex gap-2">
                        <button className="text-muted-foreground hover:text-foreground transition-colors">
                          <Bookmark className="h-4 w-4" />
                        </button>
                        <button className="text-muted-foreground hover:text-foreground transition-colors">
                          <Share2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {filteredArticles.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted-foreground">{t.journal.noArticlesFound}</p>
              </div>
            )}
          </div>
        </section>

        {/* 订阅区域 */}
        <section className="py-20 bg-gradient-to-r from-emerald-900 to-teal-900 text-white">
          <div className="page-container">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
                {t.journal.subscribeTitle}
              </h2>
              <p className="text-emerald-100/90 mb-8">
                {t.journal.subscribeDesc}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder={t.journal.emailPlaceholder}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
                <Button className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-emerald-900 whitespace-nowrap">
                  {t.journal.subscribeBtn}
                </Button>
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
