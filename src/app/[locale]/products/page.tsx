'use client';

import React, { useState } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Filter, Grid, List, Star } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { useApp } from '@/context/AppContext';
import { products, getProductsByCategory } from '@/lib/products';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { type Locale } from '@/lib/locale';

export default function Products() {
  const params = useParams();
  const locale = (params.locale as Locale) || 'en';
  const searchParams = useSearchParams();
  const { t } = useApp();
  
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'All');

  const categories = ['All', 'Supplements', 'Herbs', 'Vitamins', 'Digestive', 'Beauty'];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getProductName = (product: typeof products[0]) => {
    switch (locale) {
      case 'zh':
        return product.nameZh || product.name;
      case 'ja':
        return product.nameJa || product.name;
      default:
        return product.nameEn || product.name;
    }
  };

  const getProductDescription = (product: typeof products[0]) => {
    switch (locale) {
      case 'zh':
        return product.descriptionZh || product.description;
      case 'ja':
        return product.descriptionJa || product.description;
      default:
        return product.descriptionEn || product.description;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div>
        <Header />
      </div>

      <main className="flex-1">
        <section className="relative overflow-hidden text-white py-20 lg:py-28">
          <div className="absolute inset-0">
            <Image
              src="/images/products-bg.jpg"
              alt="Products Background"
              fill
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/95 via-emerald-800/90 to-teal-900/95" />
          </div>
          <div className="page-container relative">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-serif">{t.products.title}</h1>
              <p className="text-xl text-emerald-100/90">{t.products.description}</p>
            </div>
          </div>
        </section>

        <div className="page-container py-12">
          <div className="flex flex-col lg:flex-row gap-6 mb-8">
            <div className="flex-1 relative">
              <Filter className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder={t.products.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="flex gap-2">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'ghost'}
                size="icon"
                onClick={() => setViewMode('grid')}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'ghost'}
                size="icon"
                onClick={() => setViewMode('list')}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category)}>
                {category === 'all' ? t.products.allCategories : category}
              </Button>
            ))}
          </div>

          <div className={`grid gap-6 ${viewMode === 'grid' ? 'md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
            {filteredProducts.map((product) => (
              <Link
                key={product.id}
                href={`/${locale}/products/${product.id}`}
                className={`group block p-6 rounded-2xl border bg-card hover:shadow-lg transition-all duration-300 ${viewMode === 'list' ? 'flex gap-6' : ''}`}
              >
                <div className={`${viewMode === 'list' ? 'w-48 flex-shrink-0' : ''}`}>
                  <div className="relative aspect-square rounded-xl overflow-hidden bg-muted">
                    <Image
                      src={product.image}
                      alt={getProductName(product)}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {!product.inStock && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <Badge variant="destructive">{t.products.outOfStock}</Badge>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className={`flex-1 ${viewMode === 'grid' ? 'mt-4' : ''}`}>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary">{product.category}</Badge>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                      <span className="text-sm font-medium">{product.rating}</span>
                      <span className="text-sm text-muted-foreground">({product.reviews})</span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-emerald-600 transition-colors">
                    {getProductName(product)}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {getProductDescription(product)}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-emerald-600">${product.price.toFixed(2)}</span>
                    <Button variant="ghost" className="gap-1 group-hover:text-emerald-600">
                      {t.products.viewDetails}
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">{t.products.noProducts}</p>
            </div>
          )}
        </div>
      </main>

      <div>
        <Footer />
      </div>
    </div>
  );
}
