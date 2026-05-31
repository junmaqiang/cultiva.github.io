// 支付方式配置
export interface PaymentMethod {
  id: string;
  name: string;
  nameZh: string;
  nameJa: string;
  icon: string;
  type: 'card' | 'wallet' | 'bank' | 'crypto';
  region?: 'global' | 'china' | 'japan' | 'korea';
  enabled: boolean;
}

export const paymentMethods: PaymentMethod[] = [
  {
    id: 'stripe',
    name: 'Credit/Debit Card (Stripe)',
    nameZh: '信用卡/借记卡 (Stripe)',
    nameJa: 'クレジットカード/デビットカード (Stripe)',
    icon: '/icons/stripe.svg',
    type: 'card',
    region: 'global',
    enabled: true
  },
  {
    id: 'paypal',
    name: 'PayPal',
    nameZh: 'PayPal',
    nameJa: 'PayPal',
    icon: '/icons/paypal.svg',
    type: 'wallet',
    region: 'global',
    enabled: true
  },
  {
    id: 'applepay',
    name: 'Apple Pay',
    nameZh: 'Apple Pay',
    nameJa: 'Apple Pay',
    icon: '/icons/applepay.svg',
    type: 'wallet',
    region: 'global',
    enabled: true
  },
  {
    id: 'googlepay',
    name: 'Google Pay',
    nameZh: 'Google Pay',
    nameJa: 'Google Pay',
    icon: '/icons/googlepay.svg',
    type: 'wallet',
    region: 'global',
    enabled: true
  },
  {
    id: 'alipay',
    name: 'Alipay',
    nameZh: '支付宝',
    nameJa: 'アリペイ',
    icon: '/icons/alipay.svg',
    type: 'wallet',
    region: 'china',
    enabled: true
  },
  {
    id: 'wechatpay',
    name: 'WeChat Pay',
    nameZh: '微信支付',
    nameJa: 'WeChat支付',
    icon: '/icons/wechatpay.svg',
    type: 'wallet',
    region: 'china',
    enabled: true
  },
  {
    id: 'amazonpay',
    name: 'Amazon Pay',
    nameZh: 'Amazon Pay',
    nameJa: 'Amazon Pay',
    icon: '/icons/amazonpay.svg',
    type: 'wallet',
    region: 'global',
    enabled: true
  },
  {
    id: 'klarna',
    name: 'Klarna (Buy Now, Pay Later)',
    nameZh: 'Klarna (先买后付)',
    nameJa: 'Klarna (後払い)',
    icon: '/icons/klarna.svg',
    type: 'bank',
    region: 'global',
    enabled: true
  }
];

export function getPaymentMethods(region?: string): PaymentMethod[] {
  if (!region || region === 'global') {
    return paymentMethods.filter(pm => pm.enabled);
  }
  
  // 根据区域过滤支付方式，global 和对应区域都显示
  return paymentMethods.filter(pm => 
    pm.enabled && (pm.region === 'global' || pm.region === region)
  );
}
