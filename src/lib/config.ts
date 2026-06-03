/**
 * Cultiva100 网站配置文件
 * 所有可配置项集中管理，便于维护和部署
 */

export interface SiteConfig {
  // 站点基本信息
  site: {
    name: string;
    url: string;
    description: string;
  };

  // 联系方式
  contact: {
    address: string;
    phone: string;
    email: string;
  };

  // 品牌色系
  colors: {
    primary: string;       // 主色（Trust Green）- 深橄榄绿或森林绿
    secondary: string;    // 辅助色（Scientific Silver）- 科技银
    accent: string;        // 点缀色（Vitality Gold）- 柔和的香槟金
  };

  // 底部配置
  footer: {
    copyright: string;
    showYear: boolean;
    termsOfService: string;
    privacyPolicy: string;
  };

  // Logo 配置
  logo: {
    text: string;
    showImage: boolean;
    imageUrl?: string;
  };

  // 功能开关
  features: {
    enableAuth: boolean;           // 邮箱验证码登录
    enablePayments: boolean;       // 在线支付
    enableAIAdvisor: boolean;     // AI 健康顾问
  };

  // 社交媒体链接
  social: {
    weibo?: string;
    douyin?: string;
    xiaohongshu?: string;
    instagram?: string;
    facebook?: string;
    twitter?: string;
    linkedin?: string;
  };
}

// 开发环境配置
export const devConfig: SiteConfig = {
  site: {
    name: 'cultiva100',
    url: 'https://www.cultiva100.net',
    description: 'Singapore\'s Precision Wellness, Cultivated for Longevity.',
  },

  contact: {
    address: '36 Purvis Street，#02-06 Singapore 188613',
    phone: '+65 86451691',
    email: 'e@cultiva100.net',
  },

  colors: {
    primary: 'emerald',      // 深橄榄绿
    secondary: 'gray',      // 科技银
    accent: 'amber',        // 柔和的香槟金
  },

  footer: {
    copyright: '©{year} Cultiva100. All rights reserved.',
    showYear: true,
    termsOfService: '/terms',
    privacyPolicy: '/privacy',
  },

  logo: {
    text: 'Cultiva100',
    showImage: false,
    imageUrl: '/images/logo.svg',
  },

  features: {
    enableAuth: false,        // 开发环境关闭登录
    enablePayments: false,    // 开发环境关闭支付
    enableAIAdvisor: false,   // 开发环境关闭 AI 顾问
  },

  social: {
    weibo: 'https://weibo.com/cultiva100',
    douyin: 'https://v.douyin.com/cultiva100/',
    xiaohongshu: 'https://www.xiaohongshu.com/user/profile/cultiva100',
    instagram: 'https://instagram.com/cultiva100',
    facebook: 'https://www.facebook.com/cultiva100',
    twitter: 'https://twitter.com/cultiva100/',
    linkedin: 'https://www.linkedin.com/company/cultiva100',
  },
};

// 生产环境配置
export const prodConfig: SiteConfig = {
  site: {
    name: 'cultiva100',
    url: 'https://www.cultiva100.net',
    description: 'Singapore\'s Precision Wellness, Cultivated for Longevity.',
  },

  contact: {
    address: '36 Purvis Street, #02-06 Singapore 188613',
    phone: '+65 86451691',
    email: 'e@cultiva100.net',
  },

  colors: {
    primary: 'emerald',
    secondary: 'gray',
    accent: 'amber',
  },

  footer: {
    copyright: '©{year} Cultiva100. All rights reserved.',
    showYear: true,
    termsOfService: '/terms',
    privacyPolicy: '/privacy',
  },

  logo: {
    text: 'Cultiva100',
    showImage: true,
    imageUrl: '/images/logo.svg',
  },

  features: {
    enableAuth: true,         // 生产环境开启登录
    enablePayments: true,     // 生产环境开启支付
    enableAIAdvisor: true,    // 生产环境开启 AI 顾问
  },

  social: {
    weibo: 'https://weibo.com/cultiva100',
    douyin: 'https://v.douyin.com/cultiva100/',
    xiaohongshu: 'https://www.xiaohongshu.com/user/profile/cultiva100',
    instagram: 'https://instagram.com/cultiva100',
    facebook: 'https://www.facebook.com/cultiva100',
    twitter: 'https://twitter.com/cultiva100/',
    linkedin: 'https://www.linkedin.com/company/cultiva100',
  },
};

// 根据环境选择配置
const isDevelopment = process.env.NODE_ENV === 'development';
export const siteConfig: SiteConfig = isDevelopment ? devConfig : prodConfig;

// 导出配置访问函数
export function getConfig(): SiteConfig {
  return siteConfig;
}

// 导出配置更新函数（用于动态更新配置）
export function updateConfig(updates: Partial<SiteConfig>): SiteConfig {
  Object.assign(siteConfig, updates);
  return siteConfig;
}
