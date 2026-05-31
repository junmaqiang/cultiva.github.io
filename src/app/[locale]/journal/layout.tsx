import { translations } from '@/lib/i18n/translations';
import { type Locale } from '@/lib/locale';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = translations[locale] || translations.en;
  
  return {
    title: t.meta.journal.title,
    description: t.meta.journal.description,
  };
}

export default function JournalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
