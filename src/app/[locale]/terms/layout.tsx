export async function generateMetadata() {
  return {
    title: 'Terms of Service - Cultiva100',
    description: 'Read Cultiva100\'s Terms of Service. Understand your rights and obligations when using our website and purchasing our products.',
  };
}

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
