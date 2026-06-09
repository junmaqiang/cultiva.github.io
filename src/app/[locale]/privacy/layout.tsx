export async function generateMetadata() {
  return {
    title: 'Privacy Policy - Cultiva100',
    description: 'Read Cultiva100\'s Privacy Policy. Understand how we collect, use, and protect your personal information.',
  };
}

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
