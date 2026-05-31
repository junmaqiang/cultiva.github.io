'use client';

import React from 'react';
import Image from 'next/image';
import { Star, ThumbsUp, Award } from 'lucide-react';
import { Language } from '@/lib/i18n/translations';

interface Review {
  id: string;
  userName: string;
  userAvatar?: string;
  rating: number;
  date: string;
  title: string;
  titleZh: string;
  titleJa: string;
  content: string;
  contentZh: string;
  contentJa: string;
  images?: string[];
  verified: boolean;
  helpful: number;
}

interface ProductReviewsProps {
  language: Language;
  reviews?: Review[];
}

const defaultReviews: Review[] = [
  {
    id: '1',
    userName: 'Jennifer L.',
    rating: 5,
    date: '2024-01-15',
    title: 'Life-changing results!',
    titleZh: '改变生命的产品！',
    titleJa: '人生を変える結果！',
    content: 'After 3 months of taking this supplement, I feel more energized than ever. The quality is exceptional and I can really tell the difference.',
    contentZh: '服用这种补充剂3个月后，我比以往任何时候都更有活力。质量非常出色，我真的能感觉到不同。',
    contentJa: 'このサプリメントを3ヶ月間服用後、从未有よりも元気を感じています。品質は優れており、本当に違いを感じられます。',
    images: ['https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=200&h=200&fit=crop'],
    verified: true,
    helpful: 42,
  },
  {
    id: '2',
    userName: 'Michael T.',
    rating: 5,
    date: '2024-01-10',
    title: 'Worth every penny',
    titleZh: '物超所值',
    titleJa: 'すべての価値がある',
    content: 'As someone who is very particular about supplements, Cultiva100 exceeds all my expectations. The transparency in sourcing is remarkable.',
    contentZh: '作为一个对补充剂非常讲究的人，Cultiva100超出了我所有的期望。来源的透明度非常出色。',
    contentJa: '{supplementにとてもこだわりがある私にとって、Cultiva100はすべての期待を上回っています。調達の透明性は素晴らしいです。',
    images: undefined,
    verified: true,
    helpful: 28,
  },
  {
    id: '3',
    userName: 'Sarah K.',
    rating: 4,
    date: '2024-01-05',
    title: 'Great product, fast shipping',
    titleZh: '很好的产品，发货快',
    titleJa: '素晴らしい製品、快速配送',
    content: 'The product arrived quickly and was well-packaged. I have been using it for a month and already notice improvements in my sleep quality.',
    contentZh: '产品很快到达，包装得很好。我已经使用了一个月，已经注意到睡眠质量的改善。',
    contentJa: '製品はすぐに届き、很好地包装されていました。1ヶ月間使用しており、もう睡眠の質の改善を実感しています。',
    images: ['https://images.unsplash.com/photo-1556228720-195a672e8a03?w=200&h=200&fit=crop'],
    verified: true,
    helpful: 15,
  },
];

export function ProductReviews({ language, reviews = defaultReviews }: ProductReviewsProps) {
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

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString(language === 'zh' ? 'zh-CN' : language === 'ja' ? 'ja-JP' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const averageRating = reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length;

  const titles: Record<Language, {
    title: string;
    showAll: string;
    verified: string;
    helpful: string;
    writeReview: string;
  }> = {
    en: {
      title: 'Customer Reviews',
      showAll: 'Show All Reviews',
      verified: 'Verified Purchase',
      helpful: 'Helpful',
      writeReview: 'Write a Review',
    },
    zh: {
      title: '用户评论',
      showAll: '查看所有评论',
      verified: '已验证购买',
      helpful: '有帮助',
      writeReview: '撰写评论',
    },
    ja: {
      title: '顧客レビュー',
      showAll: 'すべてのレビューを見る',
      verified: '確認済み購入',
      helpful: '参考になった',
      writeReview: 'レビューを書く',
    },
  };

  const t = titles[language];

  return (
    <section className="py-12">
      <div className="page-container">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold font-serif">{t.title}</h2>
            <div className="flex items-center gap-2 mt-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${i < Math.floor(averageRating) ? 'fill-amber-400 text-amber-400' : 'text-gray-300 dark:text-gray-600'}`}
                  />
                ))}
              </div>
              <span className="font-medium">{averageRating.toFixed(1)}</span>
              <span className="text-muted-foreground">({reviews.length} reviews)</span>
            </div>
          </div>
          <button className="px-4 py-2 rounded-full border border-emerald-600 text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-colors text-sm font-medium">
            {t.writeReview}
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {reviews.slice(0, 4).map((review) => (
            <div
              key={review.id}
              className="p-6 rounded-2xl border bg-card hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white font-semibold">
                    {review.userName.charAt(0)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-medium">{review.userName}</p>
                      {review.verified && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-xs">
                          <Award className="h-3 w-3" />
                          {t.verified}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground">{formatDate(review.date)}</p>
                  </div>
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < review.rating ? 'fill-amber-400 text-amber-400' : 'text-gray-300 dark:text-gray-600'}`}
                    />
                  ))}
                </div>
              </div>

              <h4 className="font-semibold mb-2">
                {getLocalizedText(review.title, review.titleZh, review.titleJa)}
              </h4>
              <p className="text-muted-foreground text-sm mb-4">
                {getLocalizedText(review.content, review.contentZh, review.contentJa)}
              </p>

              {review.images && review.images.length > 0 && (
                <div className="flex gap-2 mb-4">
                  {review.images.map((img, idx) => (
                    <div key={idx} className="relative w-16 h-16 rounded-lg overflow-hidden">
                      <Image
                        src={img}
                        alt={`Review image ${idx + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}

              <div className="flex items-center gap-4 pt-4 border-t">
                <button className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-emerald-600 transition-colors">
                  <ThumbsUp className="h-4 w-4" />
                  {t.helpful} ({review.helpful})
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="px-6 py-3 rounded-full border border-emerald-600 text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-colors font-medium">
            {t.showAll}
          </button>
        </div>
      </div>
    </section>
  );
}
