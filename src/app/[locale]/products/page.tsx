'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Search, Grid, List, Star } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { useApp } from '@/context/AppContext';
import { loadProducts, products } from '@/lib/products';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { type Locale } from '@/lib/locale';
import { Product } from '@/context/CartContext';

export default function Products() {
  const params = useParams();
  const locale = (params.locale as Locale) || 'en';
  const searchParams = useSearchParams();
  const router = useRouter();
  const { t } = useApp();
  
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'All');
  const [loadedProducts, setLoadedProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      await loadProducts();
      setLoadedProducts([...products]);
      setIsLoading(false);
    };
    fetchProducts();
  }, []);

  const categories = [
    { key: 'All', label: t.common.all },
    { key: 'ergothioneine', label: t.common.ergothioneine },
    { key: 'equol', label: t.common.equol },
    { key: 'ginsenoside', label: t.common.ginsenoside },
  ];

  useEffect(() => {
    const currentQ = searchParams.get('q') || '';
    const currentCategory = searchParams.get('category') || 'All';
    
    // 仅当 URL 参数与当前状态不一致时才更新 URL，避免无限循环
    if (currentQ === searchQuery && currentCategory === selectedCategory) {
      return;
    }
    
    const newParams = new URLSearchParams();
    if (searchQuery) {
      newParams.set('q', searchQuery);
    }
    if (selectedCategory !== 'All') {
      newParams.set('category', selectedCategory);
    }
    
    const queryString = newParams.toString();
    const url = queryString ? `/${locale}/products?${queryString}` : `/${locale}/products`;
    router.push(url, { scroll: false });
  }, [searchQuery, selectedCategory, locale, router]);

  const filteredProducts = useMemo(() => {
    return loadedProducts.filter(product => {
      const searchLower = searchQuery.toLowerCase();
      if (!searchQuery) {
        return selectedCategory === 'All' || product.category === selectedCategory;
      }
      
      let matchesSearch = false;
      switch (locale) {
        case 'zh':
          matchesSearch = product.nameZh?.toLowerCase().includes(searchLower);
          break;
        case 'ja':
          matchesSearch = product.nameJa?.toLowerCase().includes(searchLower);
          break;
        default:
          matchesSearch = product.name.toLowerCase().includes(searchLower);
          break;
      }
      
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [loadedProducts, searchQuery, selectedCategory, locale]);

  const getProductName = (product: Product) => {
    switch (locale) {
      case 'zh':
        return product.nameZh || product.name;
      case 'ja':
        return product.nameJa || product.name;
      default:
        return product.nameEn || product.name;
    }
  };

  const getProductDescription = (product: Product) => {
    switch (locale) {
      case 'zh':
        return product.descriptionZh || product.description;
      case 'ja':
        return product.descriptionJa || product.description;
      default:
        return product.descriptionEn || product.description;
    }
  };

  const getCategoryLabel = (category: string) => {
    const cat = categories.find(c => c.key === category);
    return cat ? cat.label : category;
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
        </main>
        <Footer />
      </div>
    );
  }

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
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
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
                key={category.key}
                variant={selectedCategory === category.key ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category.key)}>
                {category.label}
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
                    <Badge variant="secondary">{getCategoryLabel(product.category)}</Badge>
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