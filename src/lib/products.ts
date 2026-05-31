import { Product } from '@/context/CartContext';

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Omega-3',
    nameEn: 'Premium Omega-3',
    nameZh: '高端Omega-3',
    nameJa: 'プレミアムオメガ3',
    description: 'High-quality fish oil supplement with EPA and DHA for heart and brain health.',
    descriptionEn: 'High-quality fish oil supplement with EPA and DHA for heart and brain health.',
    descriptionZh: '含有EPA和DHA的高品质鱼油补充剂，有益心脏和大脑健康。',
    descriptionJa: '心臓と脳の健康のためのEPAとDHAを含む高品質な魚油サプリメント。',
    price: 89.00,
    image: '/images/product-omega3.jpg',
    category: 'Supplements',
    inStock: true,
    rating: 4.8,
    reviews: 256
  },
  {
    id: '2',
    name: 'Organic Turmeric Curcumin',
    nameEn: 'Organic Turmeric Curcumin',
    nameZh: '有机姜黄素',
    nameJa: 'オーガニックターメリッククルクミン',
    description: 'Natural anti-inflammatory supplement with black pepper extract for better absorption.',
    descriptionEn: 'Natural anti-inflammatory supplement with black pepper extract for better absorption.',
    descriptionZh: '天然抗炎补充剂，含有黑胡椒提取物，促进更好的吸收。',
    descriptionJa: 'より良い吸収のための黒コショウ抽出物を含む天然抗炎症サプリメント。',
    price: 45.00,
    image: '/images/product-turmeric.jpg',
    category: 'Herbs',
    inStock: true,
    rating: 4.7,
    reviews: 189
  },
  {
    id: '3',
    name: 'Vitamin D3 + K2',
    nameEn: 'Vitamin D3 + K2',
    nameZh: '维生素D3 + K2',
    nameJa: 'ビタミンD3 + K2',
    description: 'Combination formula for bone health, immune support, and cardiovascular function.',
    descriptionEn: 'Combination formula for bone health, immune support, and cardiovascular function.',
    descriptionZh: '骨骼健康、免疫支持和心血管功能的复合配方。',
    descriptionJa: '骨の健康、免疫サポート、心血管機能のための配合処方。',
    price: 38.00,
    image: '/images/product-vitamin.jpg',
    category: 'Vitamins',
    inStock: true,
    rating: 4.9,
    reviews: 342
  },
  {
    id: '4',
    name: 'Probiotic Complex',
    nameEn: 'Probiotic Complex',
    nameZh: '益生菌复合物',
    nameJa: 'プロバイオティクスコンプレックス',
    description: '50 billion CFU multi-strain probiotic for digestive health and immunity.',
    descriptionEn: '50 billion CFU multi-strain probiotic for digestive health and immunity.',
    descriptionZh: '500亿CFU多菌株益生菌，促进消化健康和免疫力。',
    descriptionJa: '消化器の健康と免疫力のための500億CFUマルチ菌株プロバイオティクス。',
    price: 52.00,
    image: '/images/product-probiotic.jpg',
    category: 'Digestive',
    inStock: true,
    rating: 4.6,
    reviews: 167
  },
  {
    id: '5',
    name: 'Ashwagandha Extract',
    nameEn: 'Ashwagandha Extract',
    nameZh: '南非醉茄提取物',
    nameJa: 'アシュワガンダエキス',
    description: 'Adaptogenic herb for stress relief, energy, and hormonal balance.',
    descriptionEn: 'Adaptogenic herb for stress relief, energy, and hormonal balance.',
    descriptionZh: '适应原草本植物，缓解压力、提升能量、平衡荷尔蒙。',
    descriptionJa: 'ストレス緩和、エネルギー、ホルモンバランスのためのアダプトジェニックハーブ。',
    price: 48.00,
    image: '/images/product-ashwagandha.jpg',
    category: 'Herbs',
    inStock: true,
    rating: 4.5,
    reviews: 123
  },
  {
    id: '6',
    name: 'Collagen Peptides',
    nameEn: 'Collagen Peptides',
    nameZh: '胶原蛋白肽',
    nameJa: 'コラーゲンペプチド',
    description: 'Hydrolyzed collagen for skin, hair, nails, and joint health support.',
    descriptionEn: 'Hydrolyzed collagen for skin, hair, nails, and joint health support.',
    descriptionZh: '水解胶原蛋白，支持皮肤、头发、指甲和关节健康。',
    descriptionJa: '肌、髪、爪、関節の健康サポートのための加水分解コラーゲン。',
    price: 65.00,
    image: '/images/product-collagen.jpg',
    category: 'Beauty',
    inStock: true,
    rating: 4.8,
    reviews: 289
  }
];

export function getProductById(id: string): Product | undefined {
  return products.find(product => product.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(product => product.category === category);
}
