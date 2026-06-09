'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { useApp } from '@/context/AppContext';
import { Lock, FileSearch, Users, Mail, Settings, ShieldCheck } from 'lucide-react';

export default function PrivacyPage() {
  const { t, language } = useApp();

  const privacyContent = {
    en: {
      title: 'Privacy Policy',
      subtitle: 'Your Privacy is Our Priority',
      lastUpdated: 'Last Updated: June 9, 2026',
      intro: 'At Cultiva100, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and protect your data in accordance with the Personal Data Protection Act (PDPA) of Singapore.',
      sections: [
        {
          id: 'collection',
          icon: FileSearch,
          title: 'Information We Collect',
          content: 'We may collect personal information from you when you visit our website, create an account, place an order, or contact us. This may include your name, email address, phone number, shipping address, payment information, and other details necessary to provide our services.'
        },
        {
          id: 'usage',
          icon: Users,
          title: 'How We Use Your Information',
          content: 'We use your personal information to process orders, deliver products, provide customer support, and improve our services. We may also use your information to send you marketing communications about our products and promotions, with your consent. We do not sell your personal information to third parties.'
        },
        {
          id: 'disclosure',
          icon: Mail,
          title: 'Disclosure to Third Parties',
          content: 'We may share your information with trusted third-party service providers who assist us in operating our business, such as payment processors, shipping companies, and analytics providers. These providers are contractually obligated to protect your information and may only use it for the purposes specified by us.'
        },
        {
          id: 'security',
          icon: ShieldCheck,
          title: 'Data Security',
          content: 'We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, disclosure, or misuse. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.'
        },
        {
          id: 'rights',
          icon: Settings,
          title: 'Your Rights',
          content: 'Under the PDPA, you have the right to access, correct, or delete your personal information. You may also withdraw your consent to marketing communications at any time. To exercise these rights, please contact us at e@cultiva100.net.'
        },
        {
          id: 'cookies',
          icon: Lock,
          title: 'Cookies and Tracking',
          content: 'Our website uses cookies to enhance your browsing experience and analyze usage patterns. You can control cookie preferences through your browser settings. By continuing to use our website, you consent to our use of cookies as described in this policy.'
        }
      ],
      childrenPolicy: 'Children\'s Privacy',
      childrenPolicyContent: 'Our website is not intended for children under the age of 16. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.',
      changes: 'Changes to This Policy',
      changesContent: 'We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the updated policy on our website. Your continued use of our services after the effective date constitutes acceptance of the revised policy.',
      contact: 'Contact Us',
      contactContent: 'If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at e@cultiva100.net.'
    },
    zh: {
      title: '隐私政策',
      subtitle: '您的隐私是我们的首要任务',
      lastUpdated: '最后更新：2026年6月9日',
      intro: '在 Cultiva100，我们致力于保护您的隐私并确保您个人信息的安全。本隐私政策说明我们如何根据新加坡《个人数据保护法》（PDPA）收集、使用、披露和保护您的数据。',
      sections: [
        {
          id: 'collection',
          icon: FileSearch,
          title: '我们收集的信息',
          content: '当您访问我们的网站、创建账户、下单或联系我们时，我们可能会收集您的个人信息。这可能包括您的姓名、电子邮件地址、电话号码、送货地址、支付信息以及提供服务所需的其他详细信息。'
        },
        {
          id: 'usage',
          icon: Users,
          title: '我们如何使用您的信息',
          content: '我们使用您的个人信息来处理订单、配送产品、提供客户支持和改进我们的服务。经您同意，我们还可能使用您的信息向您发送有关我们产品和促销的营销信息。我们不会将您的个人信息出售给第三方。'
        },
        {
          id: 'disclosure',
          icon: Mail,
          title: '向第三方披露',
          content: '我们可能会与值得信赖的第三方服务提供商共享您的信息，这些提供商协助我们开展业务，例如支付处理器、运输公司和分析提供商。这些提供商有合同义务保护您的信息，并且只能按照我们规定的目的使用。'
        },
        {
          id: 'security',
          icon: ShieldCheck,
          title: '数据安全',
          content: '我们实施适当的技术和组织措施，保护您的个人信息免受未经授权的访问、披露或滥用。但是，互联网上的任何传输方法或电子存储都不是完全安全的，我们无法保证绝对安全。'
        },
        {
          id: 'rights',
          icon: Settings,
          title: '您的权利',
          content: '根据PDPA，您有权访问、更正或删除您的个人信息。您也可以随时撤回对营销通讯的同意。如需行使这些权利，请通过 e@cultiva100.net 联系我们。'
        },
        {
          id: 'cookies',
          icon: Lock,
          title: 'Cookies和跟踪',
          content: '我们的网站使用cookies来增强您的浏览体验并分析使用模式。您可以通过浏览器设置控制cookie偏好。继续使用我们的网站即表示您同意我们按照本政策使用cookies。'
        }
      ],
      childrenPolicy: '儿童隐私',
      childrenPolicyContent: '我们的网站不面向16岁以下的儿童。我们不会故意收集儿童的个人信息。如果您认为我们收集了儿童的信息，请立即联系我们。',
      changes: '本政策的变更',
      changesContent: '我们可能会不时更新本隐私政策。我们将通过在我们的网站上发布更新后的政策来通知您任何重大变更。您在生效日期后继续使用我们的服务即表示接受修订后的政策。',
      contact: '联系我们',
      contactContent: '如果您对本隐私政策或我们的数据实践有任何疑问或担忧，请通过 e@cultiva100.net 联系我们。'
    },
    ja: {
      title: 'プライバシーポリシー',
      subtitle: 'お客様のプライバシーが最優先事項です',
      lastUpdated: '最終更新日：2026年6月9日',
      intro: 'Cultiva100では、お客様のプライバシーを保護し、個人情報の安全性を確保することに尽力しています。本プライバシーポリシーは、シンガポールの個人情報保護法（PDPA）に従って、お客様のデータを収集、使用、開示、および保護する方法を説明します。',
      sections: [
        {
          id: 'collection',
          icon: FileSearch,
          title: '収集する情報',
          content: 'お客様が当社のウェブサイトを訪問し、アカウントを作成し、注文を行い、または当社に連絡する際に、個人情報を収集する場合があります。これには、お客様の名前、メールアドレス、電話番号、配送先住所、支払い情報、および当社のサービスを提供するために必要なその他の詳細が含まれる場合があります。'
        },
        {
          id: 'usage',
          icon: Users,
          title: '情報の使用方法',
          content: '当社は、注文の処理、製品の配送、カスタマーサポートの提供、およびサービスの改善のためにお客様の個人情報を使用します。また、お客様の同意を得た上で、当社の製品やプロモーションに関するマーケティングコミュニケーションを送信するために情報を使用する場合があります。当社はお客様の個人情報を第三者に販売しません。'
        },
        {
          id: 'disclosure',
          icon: Mail,
          title: '第三者への開示',
          content: '当社は、決済プロセッサ、配送業者、分析プロバイダーなど、当社の事業運営を支援する信頼できる第三者サービスプロバイダーとお客様の情報を共有する場合があります。これらのプロバイダーは、お客様の情報を保護する契約義務があり、当社が指定した目的以外には使用できません。'
        },
        {
          id: 'security',
          icon: ShieldCheck,
          title: 'データセキュリティ',
          content: '当社は、お客様の個人情報が不正アクセス、開示、または不正使用されることから保護するために、適切な技術的および組織的措置を実施しています。ただし、インターネット経由の送信方法または電子ストレージは完全に安全ではありません。'
        },
        {
          id: 'rights',
          icon: Settings,
          title: 'お客様の権利',
          content: 'PDPAに基づき、お客様は個人情報へのアクセス、訂正、または削除の権利を有します。また、いつでもマーケティングコミュニケーションへの同意を撤回することができます。これらの権利を行使するには、e@cultiva100.net までお問い合わせください。'
        },
        {
          id: 'cookies',
          icon: Lock,
          title: 'クッキーと追跡',
          content: '当社のウェブサイトは、お客様の閲覧体験を向上させ、使用パターンを分析するためにクッキーを使用します。お客様はブラウザの設定でクッキーの設定を制御することができます。当社のウェブサイトの使用を続行することで、お客様は本ポリシーに記載されているクッキーの使用に同意したものとみなされます。'
        }
      ],
      childrenPolicy: '子供のプライバシー',
      childrenPolicyContent: '当社のウェブサイトは、16歳未満の子供を対象としていません。当社は故意に子供の個人情報を収集することはありません。子供の情報を収集したと思われる場合は、すぐに当社に連絡してください。',
      changes: '本ポリシーの変更',
      changesContent: '当社は、本プライバシーポリシーを随時更新する場合があります。重要な変更があった場合、当社は更新されたポリシーをウェブサイトに掲載することでお客様に通知します。効力発生日後も当社のサービスを使用し続けることで、お客様は改訂されたポリシーを承認したものとみなされます。',
      contact: 'お問い合わせ',
      contactContent: '本プライバシーポリシーまたは当社のデータ慣行に関する質問や懸念がある場合は、e@cultiva100.net までお問い合わせください。'
    }
  };

  const content = privacyContent[language] || privacyContent.en;

  return (
    <div className="min-h-screen flex flex-col">
      <div>
        <Header />
      </div>

      <main className="flex-1 bg-background">
        <section className="py-16 lg:py-24">
          <div className="page-container max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-serif text-foreground">
                {content.title}
              </h1>
              <p className="text-lg text-muted-foreground">{content.subtitle}</p>
              <p className="text-sm text-muted-foreground mt-4">{content.lastUpdated}</p>
            </div>

            <div className="prose prose-emerald max-w-none">
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {content.intro}
              </p>

              <div className="space-y-8">
                {content.sections.map((section) => (
                  <div key={section.id} className="p-6 rounded-2xl bg-card border hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 flex items-center justify-center flex-shrink-0">
                        <section.icon className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <div>
                        <h2 className="text-xl font-semibold mb-3 text-foreground">{section.title}</h2>
                        <p className="text-muted-foreground leading-relaxed">{section.content}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 rounded-2xl bg-card border">
                <h2 className="text-xl font-semibold mb-3 text-foreground">{content.childrenPolicy}</h2>
                <p className="text-muted-foreground leading-relaxed">{content.childrenPolicyContent}</p>
              </div>

              <div className="mt-8 p-6 rounded-2xl bg-card border">
                <h2 className="text-xl font-semibold mb-3 text-foreground">{content.changes}</h2>
                <p className="text-muted-foreground leading-relaxed">{content.changesContent}</p>
              </div>

              <div className="mt-8 p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800">
                <h2 className="text-xl font-semibold mb-3 text-foreground">{content.contact}</h2>
                <p className="text-muted-foreground leading-relaxed">{content.contactContent}</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <div>
        <Footer />
      </div>
    </div>
  );
}
