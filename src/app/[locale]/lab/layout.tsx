import { translations } from '@/lib/i18n/translations';
import { type Locale } from '@/lib/locale';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = translations[locale] || translations.en;
  
  return {
    title: t.meta.lab.title,
    description: t.meta.lab.description,
  };
}

export default function LabLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
