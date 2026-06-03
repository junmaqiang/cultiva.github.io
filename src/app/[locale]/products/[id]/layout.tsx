import { translations } from '@/lib/i18n/translations';
import { getProductById as getProductByIdFromMd } from '@/lib/md-parser';
import { type Locale } from '@/lib/locale';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale; id: string }> }) {
  const { locale, id } = await params;
  const t = translations[locale] || translations.en;
  const product = getProductByIdFromMd(id);
  
  let title = t.meta.product.title;
  let description = t.meta.product.description;
  
  if (product) {
    const productName = locale === 'zh' ? product.nameZh || product.name :
                        locale === 'ja' ? product.nameJa || product.name :
                        product.nameEn || product.name;
    title = title.replace('{{name}}', productName);
    description = description.replace('{{name}}', productName);
  }
  
  return {
    title,
    description,
  };
}

export default function ProductDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
