import { translations } from '@/lib/i18n/translations';
import { type Locale } from '@/lib/locale';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = translations[locale] || translations.en;

  return {
    title: t.meta.terms.title,
    description: t.meta.terms.description,
  };
}

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}