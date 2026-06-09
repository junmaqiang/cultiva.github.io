'use client';

import { FileText, Shield, Clock, RefreshCw, Globe } from 'lucide-react';

interface TermsContentProps {
  locale: string;
}

const translations = {
  en: {
    title: 'Terms of Service',
    description: 'Read our terms of service to understand your rights and obligations when using our website.',
    acceptance: 'Acceptance of Terms',
    acceptanceDesc: 'By using our website, you agree to be bound by these terms of service. If you do not agree, please do not use our website.',
    usage: 'Usage Policy',
    usageDesc: 'You may use our website for personal, non-commercial purposes. You must not misuse or disrupt our services.',
    term: 'Term',
    termDesc: 'These terms remain in effect until terminated by either party. We may terminate your access if you violate these terms.',
    modifications: 'Modifications',
    modificationsDesc: 'We may update these terms from time to time. We will notify you of significant changes.'
  },
  zh: {
    title: '服务条款',
    description: '阅读我们的服务条款，了解您使用我们网站时的权利和义务。',
    acceptance: '接受条款',
    acceptanceDesc: '通过使用我们的网站，您同意受这些服务条款的约束。如果您不同意，请不要使用我们的网站。',
    usage: '使用政策',
    usageDesc: '您可以将我们的网站用于个人非商业目的。您不得滥用或干扰我们的服务。',
    term: '期限',
    termDesc: '这些条款在任何一方终止前保持有效。如果您违反这些条款，我们可能会终止您的访问权限。',
    modifications: '修改',
    modificationsDesc: '我们可能会不时更新这些条款。我们会通知您重大变更。'
  },
  ja: {
    title: '利用規約',
    description: 'ウェブサイトのご利用に関する権利と義務を理解するために、利用規約をお読みください。',
    acceptance: '規約の承認',
    acceptanceDesc: 'ウェブサイトを使用することで、これらの利用規約に拘束されることに同意したものとみなされます。同意しない場合は、ウェブサイトを使用しないでください。',
    usage: '利用ポリシー',
    usageDesc: 'ウェブサイトは個人の非営利目的でご利用いただけます。サービスを悪用または妨害してはなりません。',
    term: '期間',
    termDesc: 'これらの規約は、いずれかの当事者によって終了されるまで効力を維持します。規約に違反した場合、アクセスを終了する場合があります。',
    modifications: '変更',
    modificationsDesc: '随時これらの規約を更新する場合があります。重要な変更については通知します。'
  }
};

export function TermsContent({ locale }: TermsContentProps) {
  const t = translations[locale as keyof typeof translations] || translations.en;

  return (
    <main className="flex-1 py-16">
      <div className="page-container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 mb-6">
              <FileText className="h-8 w-8 text-emerald-600" />
            </div>
            <h1 className="text-4xl font-bold font-serif mb-4">{t.title}</h1>
            <p className="text-lg text-muted-foreground">{t.description}</p>
          </div>

          <div className="space-y-12">
            <section>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                  <Globe className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-2">{t.acceptance}</h2>
                  <p className="text-muted-foreground">{t.acceptanceDesc}</p>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-2">{t.usage}</h2>
                  <p className="text-muted-foreground">{t.usageDesc}</p>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-2">{t.term}</h2>
                  <p className="text-muted-foreground">{t.termDesc}</p>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                  <RefreshCw className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-2">{t.modifications}</h2>
                  <p className="text-muted-foreground">{t.modificationsDesc}</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}