'use client';

import { Lock, FileSearch, Users, Mail, Settings, ShieldCheck } from 'lucide-react';

interface PrivacyContentProps {
  locale: string;
}

const translations = {
  en: {
    title: 'Privacy Policy',
    description: 'Your privacy is our priority. Learn how we protect your personal information.',
    infoCollection: 'Information Collection',
    infoCollectionDesc: 'We collect personal information such as name, email address, and shipping details when you create an account or make a purchase. We also collect usage data to improve our services.',
    infoUsage: 'Information Usage',
    infoUsageDesc: 'Your information is used to process orders, provide customer support, and personalize your experience. We do not sell your personal information to third parties.',
    infoSharing: 'Information Sharing',
    infoSharingDesc: 'We may share your information with trusted partners who assist us in providing services, such as payment processors and shipping companies. These partners are required to protect your information.',
    userRights: 'User Rights',
    userRightsDesc: 'You have the right to access, correct, or delete your personal information. Contact us to exercise these rights.',
    contact: 'Contact Us',
    contactDesc: 'If you have any questions about our privacy practices, please contact us at privacy@cultiva100.net.'
  },
  zh: {
    title: '隐私政策',
    description: '您的隐私是我们的首要任务。了解我们如何保护您的个人信息。',
    infoCollection: '信息收集',
    infoCollectionDesc: '当您创建账户或进行购买时，我们会收集姓名、电子邮件地址和配送详情等个人信息。我们还会收集使用数据以改进我们的服务。',
    infoUsage: '信息使用',
    infoUsageDesc: '您的信息用于处理订单、提供客户支持和个性化您的体验。我们不会将您的个人信息出售给第三方。',
    infoSharing: '信息共享',
    infoSharingDesc: '我们可能会与帮助我们提供服务的可信合作伙伴共享您的信息，例如支付处理器和运输公司。这些合作伙伴必须保护您的信息。',
    userRights: '用户权利',
    userRightsDesc: '您有权访问、更正或删除您的个人信息。请联系我们行使这些权利。',
    contact: '联系我们',
    contactDesc: '如果您对我们的隐私做法有任何疑问，请通过 privacy@cultiva100.net 联系我们。'
  },
  ja: {
    title: 'プライバシーポリシー',
    description: 'あなたのプライバシーは私たちの最優先事項です。個人情報の保護方法について学びましょう。',
    infoCollection: '情報収集',
    infoCollectionDesc: 'アカウントを作成または購入する際、氏名、電子メールアドレス、配送先などの個人情報を収集します。サービスの改善のために利用データも収集します。',
    infoUsage: '情報の使用',
    infoUsageDesc: 'あなたの情報は、注文の処理、顧客サポートの提供、体験の個人設定に使用されます。個人情報を第三者に販売することはありません。',
    infoSharing: '情報の共有',
    infoSharingDesc: '決済プロセッサーや配送会社など、サービス提供を支援する信頼できるパートナーと情報を共有する場合があります。これらのパートナーは情報を保護する義務があります。',
    userRights: 'ユーザーの権利',
    userRightsDesc: '個人情報へのアクセス、訂正、削除の権利があります。これらの権利を行使する場合はお問い合わせください。',
    contact: 'お問い合わせ',
    contactDesc: 'プライバシー慣行に関する質問がある場合は、privacy@cultiva100.net までお問い合わせください。'
  }
};

export function PrivacyContent({ locale }: PrivacyContentProps) {
  const t = translations[locale as keyof typeof translations] || translations.en;

  return (
    <main className="flex-1 py-16">
      <div className="page-container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 mb-6">
              <Lock className="h-8 w-8 text-emerald-600" />
            </div>
            <h1 className="text-4xl font-bold font-serif mb-4">{t.title}</h1>
            <p className="text-lg text-muted-foreground">{t.description}</p>
          </div>

          <div className="space-y-12">
            <section>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                  <ShieldCheck className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-2">{t.infoCollection}</h2>
                  <p className="text-muted-foreground">{t.infoCollectionDesc}</p>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                  <FileSearch className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-2">{t.infoUsage}</h2>
                  <p className="text-muted-foreground">{t.infoUsageDesc}</p>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                  <Users className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-2">{t.infoSharing}</h2>
                  <p className="text-muted-foreground">{t.infoSharingDesc}</p>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                  <Settings className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-2">{t.userRights}</h2>
                  <p className="text-muted-foreground">{t.userRightsDesc}</p>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                  <Mail className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-2">{t.contact}</h2>
                  <p className="text-muted-foreground">{t.contactDesc}</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}