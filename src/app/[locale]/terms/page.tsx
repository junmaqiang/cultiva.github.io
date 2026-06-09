'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { useApp } from '@/context/AppContext';
import { FileText, Shield, Clock, RefreshCw, Globe } from 'lucide-react';

export default function TermsPage() {
  const { t, language } = useApp();

  const termsContent = {
    en: {
      title: 'Terms of Service',
      subtitle: 'Agreement Between You and Cultiva100',
      lastUpdated: 'Last Updated: June 9, 2026',
      intro: 'Welcome to Cultiva100. These Terms of Service ("Terms") govern your use of our website, products, and services. By accessing or using our platform, you agree to be bound by these Terms.',
      sections: [
        {
          id: 'acceptance',
          icon: FileText,
          title: 'Acceptance of Terms',
          content: 'By accessing, browsing, or using the Cultiva100 website, products, or services, you acknowledge that you have read, understood, and agree to be bound by these Terms and all applicable laws and regulations. If you do not agree to these Terms, please do not use our website or services.'
        },
        {
          id: 'products',
          icon: Shield,
          title: 'Product Information & Purchases',
          content: 'All product descriptions, images, and pricing information are for informational purposes only. We reserve the right to modify product details, pricing, and availability at any time without notice. Orders are subject to product availability and our acceptance. We reserve the right to refuse or cancel any order for any reason.'
        },
        {
          id: 'payment',
          icon: Clock,
          title: 'Payment & Billing',
          content: 'All payments must be made through our secure payment gateway. We accept major credit cards, PayPal, and other payment methods as specified on our website. You authorize us to charge your selected payment method for all purchases. Prices are listed in Singapore Dollars (SGD) unless otherwise specified.'
        },
        {
          id: 'returns',
          icon: RefreshCw,
          title: 'Returns & Refunds',
          content: 'We offer a 30-day money-back guarantee on all products. To be eligible for a refund, products must be returned unopened and in their original packaging. Shipping costs are non-refundable unless the return is due to our error. Refunds will be processed within 7-10 business days of receiving the returned item.'
        },
        {
          id: 'shipping',
          icon: Globe,
          title: 'Shipping & Delivery',
          content: 'We ship worldwide. Shipping times vary by location and are estimated at checkout. We are not responsible for delays caused by customs, weather, or other factors beyond our control. Risk of loss or damage passes to you upon delivery to the carrier.'
        }
      ],
      governingLaw: 'Governing Law',
      governingLawContent: 'These Terms shall be governed by and construed in accordance with the laws of Singapore. Any disputes arising from or related to these Terms shall be subject to the exclusive jurisdiction of the courts of Singapore.',
      contact: 'Contact Us',
      contactContent: 'If you have any questions about these Terms, please contact us at e@cultiva100.net.'
    },
    zh: {
      title: '服务条款',
      subtitle: '您与 Cultiva100 之间的协议',
      lastUpdated: '最后更新：2026年6月9日',
      intro: '欢迎使用 Cultiva100。本服务条款（"条款"）适用于您使用我们的网站、产品和服务。通过访问或使用我们的平台，您同意受本条款约束。',
      sections: [
        {
          id: 'acceptance',
          icon: FileText,
          title: '接受条款',
          content: '通过访问、浏览或使用 Cultiva100 网站、产品或服务，您确认已阅读、理解并同意受本条款及所有适用法律和法规的约束。如果您不同意本条款，请不要使用我们的网站或服务。'
        },
        {
          id: 'products',
          icon: Shield,
          title: '产品信息与购买',
          content: '所有产品描述、图片和定价信息仅供参考。我们保留随时修改产品详情、定价和库存的权利，无需事先通知。订单需视产品供应情况和我们的接受情况而定。我们保留因任何原因拒绝或取消任何订单的权利。'
        },
        {
          id: 'payment',
          icon: Clock,
          title: '支付与账单',
          content: '所有付款必须通过我们的安全支付网关进行。我们接受主要信用卡、PayPal 以及网站上指定的其他支付方式。您授权我们从您选择的支付方式中扣除所有购买款项。价格以新加坡元（SGD）列出，除非另有说明。'
        },
        {
          id: 'returns',
          icon: RefreshCw,
          title: '退货与退款',
          content: '我们对所有产品提供30天退款保证。要获得退款资格，产品必须未开封并保持原包装退回。除非因我们的错误导致退货，否则运费不予退还。退款将在收到退回物品后的7-10个工作日内处理。'
        },
        {
          id: 'shipping',
          icon: Globe,
          title: '运输与配送',
          content: '我们提供全球配送服务。运输时间因地点而异，在结账时预估。我们对海关、天气或其他超出我们控制范围的因素造成的延误不承担责任。损失或损坏的风险在交付给承运人后转移给您。'
        }
      ],
      governingLaw: '适用法律',
      governingLawContent: '本条款应受新加坡法律管辖并依其解释。因本条款产生或与之相关的任何争议应受新加坡法院的专属管辖。',
      contact: '联系我们',
      contactContent: '如果您对本条款有任何疑问，请通过 e@cultiva100.net 联系我们。'
    },
    ja: {
      title: '利用規約',
      subtitle: 'あなたと Cultiva100 との間の契約',
      lastUpdated: '最終更新日：2026年6月9日',
      intro: 'Cultiva100へようこそ。本利用規約（「規約」）は、当社のウェブサイト、製品、およびサービスのご利用を規律します。当社のプラットフォームにアクセスまたは使用することにより、お客様は本規約に拘束されることに同意したものとみなされます。',
      sections: [
        {
          id: 'acceptance',
          icon: FileText,
          title: '規約の承認',
          content: 'Cultiva100のウェブサイト、製品、またはサービスにアクセス、閲覧、または使用することにより、お客様は本規約およびすべての適用される法令を読み、理解し、それに拘束されることに同意したものとみなされます。本規約に同意されない場合は、当社のウェブサイトまたはサービスを使用しないでください。'
        },
        {
          id: 'products',
          icon: Shield,
          title: '製品情報と購入',
          content: 'すべての製品説明、画像、および価格情報は情報提供の目的でのみ使用されます。当社は、予告なしにいつでも製品の詳細、価格、および在庫状況を変更する権利を留保します。注文は製品の入手可能性と当社の承認に従います。当社は、いかなる理由でも注文を拒否またはキャンセルする権利を留保します。'
        },
        {
          id: 'payment',
          icon: Clock,
          title: '支払いと請求',
          content: 'すべての支払いは、当社の安全な決済ゲートウェイを介して行う必要があります。当社は、主要なクレジットカード、PayPal、および当社のウェブサイトに指定されているその他の支払い方法を承認しています。お客様は、すべての購入代金のために選択した支払い方法から請求されることを許可します。価格は特に明記されていない限り、シンガポールドル（SGD）で表示されます。'
        },
        {
          id: 'returns',
          icon: RefreshCw,
          title: '返品と返金',
          content: '当社はすべての製品に対して30日間返金保証を提供しています。返金の対象となるためには、製品は未開封のまま元のパッケージで返送する必要があります。当社の過ちによる返品以外の場合、配送料は返金されません。返金は、返送品を受領した後7～10営業日以内に処理されます。'
        },
        {
          id: 'shipping',
          icon: Globe,
          title: '配送',
          content: '当社は世界中に配送しています。配送時間は場所によって異なり、チェックアウト時に推定されます。当社は、税関、天候、または当社の管理外のその他の要因による遅延について責任を負いません。紛失または損傷のリスクは、運送業者に引き渡された時点でお客様に移転します。'
        }
      ],
      governingLaw: '準拠法',
      governingLawContent: '本規約は、シンガポールの法律に従って解釈および適用されます。本規約に起因または関連する紛争は、シンガポールの裁判所の排他的管轄権に服するものとします。',
      contact: 'お問い合わせ',
      contactContent: '本規約に関する質問がある場合は、e@cultiva100.net までお問い合わせください。'
        }
  };

  const content = termsContent[language] || termsContent.en;

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

              <div className="mt-12 p-6 rounded-2xl bg-card border">
                <h2 className="text-xl font-semibold mb-3 text-foreground">{content.governingLaw}</h2>
                <p className="text-muted-foreground leading-relaxed">{content.governingLawContent}</p>
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
