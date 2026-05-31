# Cultiva100.net 官网

新加坡高端保健品品牌 Cultiva100 的官方网站，采用 Next.js 15 + TypeScript + Tailwind CSS 构建。

## 🚀 快速开始

### 环境要求

- Node.js >= 20.x
- pnpm >= 8.x

### 安装依赖

```bash
pnpm install
```

### 开发模式

```bash
pnpm dev
```

访问 http://localhost:3000 查看网站。

### 生产构建

```bash
pnpm build
```

### 预览生产版本

```bash
pnpm start
```

## 📁 项目结构

```
├── public/                 # 静态资源
│   ├── images/            # 图片文件
│   └── favicon.ico        # 网站图标
├── src/                   # 源代码
│   ├── app/               # Next.js App Router 页面
│   │   ├── [locale]/      # 国际化页面（en/zh/ja）
│   │   │   ├── about/     # 关于我们
│   │   │   ├── club/      # 会员俱乐部
│   │   │   ├── contact/   # 联系我们
│   │   │   ├── journal/   # 生活方式专栏
│   │   │   ├── lab/       # 科研中心
│   │   │   ├── products/  # 产品页面
│   │   │   └── page.tsx   # 首页
│   │   └── page.tsx       # 默认首页（重定向）
│   ├── components/        # 组件库
│   │   ├── layout/        # 布局组件（Header/Footer）
│   │   ├── ui/            # shadcn/ui 组件
│   │   └── common/        # 通用组件
│   ├── context/           # React Context
│   ├── hooks/             # 自定义 Hooks
│   ├── lib/               # 工具库
│   │   ├── config.ts      # 配置文件（重点）
│   │   ├── i18n/          # 国际化配置
│   │   └── products.ts    # 产品数据
│   └── styles/            # 全局样式
├── .env                   # 环境变量
├── next.config.js         # Next.js 配置
├── tailwind.config.ts     # Tailwind CSS 配置
└── tsconfig.json          # TypeScript 配置
```

## ⚙️ 配置说明

### 主要配置文件

配置文件位于 `src/lib/config.ts`，包含以下可配置项：

#### 1. 站点信息

```typescript
site: {
  name: 'cultiva100',           // 站点名称
  url: 'https://www.cultiva100.net',  // 站点URL
  description: 'Singapore\'s Precision Wellness...',  // 站点描述
}
```

#### 2. 联系方式

```typescript
contact: {
  address: '36 Purvis Street, #02-06 Singapore 188613',  // 地址
  phone: '+65 69798752',    // 联系电话
  email: 'e@cultiva100.net', // 邮箱
}
```

#### 3. 品牌色系

```typescript
colors: {
  primary: 'emerald',   // 主色：深橄榄绿
  secondary: 'gray',    // 辅助色：科技银
  accent: 'amber',      // 点缀色：香槟金
}
```

#### 4. Logo 配置

```typescript
logo: {
  text: 'Cultiva100',       // Logo 文字
  showImage: true,           // 是否显示图片Logo
  imageUrl: '/images/logo.svg',  // Logo图片路径
}
```

#### 5. 底部配置

```typescript
footer: {
  copyright: '© {year} Cultiva100. All rights reserved.',  // 版权信息
  showYear: true,                // 是否显示年份
  termsOfService: '/terms',      // 服务条款链接
  privacyPolicy: '/privacy',     // 隐私政策链接
}
```

#### 6. 社交媒体链接

```typescript
social: {
  instagram: 'https://instagram.com/cultiva100',  // Instagram
  facebook: 'https://facebook.com/cultiva100',    // Facebook
  twitter: 'https://twitter.com/cultiva100',      // Twitter
  linkedin: 'https://linkedin.com/company/cultiva100',  // LinkedIn
}
```

#### 7. 功能开关

```typescript
features: {
  enableAuth: true,         // 启用登录功能
  enablePayments: true,     // 启用在线支付
  enableAIAdvisor: true,    // 启用AI健康顾问
}
```

### 环境配置

项目支持多环境配置：

- **开发环境**: `NODE_ENV=development`
- **生产环境**: `NODE_ENV=production`

环境变量文件：
- `.env` - 默认环境变量
- `.env.dev` - 开发环境（可选）
- `.env.prod` - 生产环境（可选）

## 🌐 国际化

### 支持语言

- English (`en`) - 英语
- 简体中文 (`zh`) - 中文
- 日本語 (`ja`) - 日语

### URL 路由

```
/           → 默认语言（重定向到/en）
/en         → 英语
/zh         → 简体中文
/ja         → 日语
```

### 添加翻译

翻译文件位于 `src/lib/i18n/translations.ts`，按语言组织：

```typescript
export const translations: Record<Locale, Translation> = {
  en: {
    // 英语翻译
  },
  zh: {
    // 中文翻译
  },
  ja: {
    // 日语翻译
  },
};
```

## 🎨 视觉风格

### 设计原则

- **极简主义**: 大量留白，高分辨率图片
- **品牌色系**: 
  - Trust Green（信任绿）: 深橄榄绿 #059669
  - Scientific Silver（科技银）: #6B7280
  - Vitality Gold（活力金）: #F59E0B

### 字体

- **标题**: Playfair Display（衬线体）
- **正文**: Inter（无衬线体）

## 📱 响应式设计

| 断点 | 设备类型 | 宽度 |
|------|----------|------|
| sm | 手机横屏 | 640px |
| md | 平板 | 768px |
| lg | 笔记本 | 1024px |
| xl | 桌面 | 1280px |
| 2xl | 大屏桌面 | 1536px |

## ✅ 功能清单

- [x] 响应式布局
- [x] 明暗主题切换
- [x] 多语言支持（英/中/日）
- [x] 动态年份显示
- [x] 导航活动状态
- [x] 可配置 Logo
- [x] 可配置色系
- [x] 可配置社交媒体链接
- [x] 产品展示
- [x] 会员俱乐部
- [x] 生活方式专栏
- [x] 科研中心页面
- [x] 联系我们页面

## 🛠️ 技术栈

- **框架**: Next.js 15 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS 3
- **组件**: shadcn/ui
- **图标**: Lucide React
- **状态管理**: Zustand
- **国际化**: next-intl

## 📝 开发规范

### Commit 格式

```
type(scope): description

示例：
feat(auth): 添加邮箱验证码登录
fix(footer): 修复社交媒体链接配置
docs(readme): 更新配置说明
```

### Type 类型

- `feat` - 新功能
- `fix` - 修复 bug
- `docs` - 文档更新
- `style` - 样式调整
- `refactor` - 代码重构
- `test` - 测试用例
- `ci` - CI/CD 配置
- `chore` - 杂务

## 📄 许可证

MIT License

## 📧 联系方式

- 邮箱: e@cultiva100.net
- 地址: 36 Purvis Street, #02-06 Singapore 188613
- 电话: +65 69798752
