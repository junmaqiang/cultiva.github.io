import { translations } from '@/lib/i18n/translations';
import { type Locale } from '@/lib/locale';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = translations[locale] || translations.en;
  
  return {
    title: t.meta.home.title,
    description: t.meta.home.description,
  };
}

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
