# 官网

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

### 部署到 GitHub Pages

**方式 A：使用 GitHub Actions 自动部署（推荐）**

项目根目录创建 `.github/workflows/deploy.yml`：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup pnpm
        uses: pnpm/action-setup@v4
        with:
          version: 9
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'pnpm'
      
      - name: Install dependencies
        run: pnpm install
      
      - name: Build
        run: pnpm build
        env:
          NODE_ENV: production
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: out

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

**方式 B：静态导出手动部署**

由于 GitHub Pages 不支持服务端 API，需要将 API 数据内嵌到前端：

1. 修改 `next.config.ts` 添加静态导出配置：

```typescript
const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
        pathname: '/**',
      },
    ],
  },
  // 如果使用自定义域名，取消注释
  // trailingSlash: true,
};
```

2. 将 `src/app/api/products/route.ts` 的数据迁移到静态 JSON 文件：

创建 `src/lib/products-data.json`：

```json
[
  {
    "id": "1",
    "name": "Product Name",
    "price": 99.00,
    "image": "/images/product-1.jpg"
  }
]
```

3. 修改 `src/lib/md-parser.ts` 从 JSON 读取数据：

```typescript
import productsData from './products-data.json';
import { Product } from '@/context/CartContext';

export function getAllProducts(): Product[] {
  return productsData as Product[];
}
```

4. 重新构建并部署：

```bash
pnpm build
# 将 out 目录内容推送到 gh-pages 分支
```

**GitHub Pages 部署步骤：**

1. 推送代码到 GitHub 仓库
2. 进入仓库 Settings → Pages
3. Source 选择 "Deploy from a branch"
4. Branch 选择 `gh-pages` / `/(root)`
5. 等待部署完成

**注意事项：**
- GitHub Pages 不支持服务端 API，必须使用静态导出
- 自定义域名需要在 DNS 添加 CNAME 记录指向 `<username>.github.io`
- 部署后访问 `https://<username>.github.io/<repo-name>/`

### 部署检查清单

- [ ] 生产环境变量已配置
- [ ] 数据库连接（如需要）已配置
- [ ] SSL 证书已安装（HTTPS）
- [ ] 域名 DNS 解析已生效
- [ ] 防火墙端口 80/443 已开放
- [ ] 静态资源（图片）已正确上传
- [ ] 日志监控已配置
- [ ] 备份策略已制定

### 常见问题

**Q: 部署后样式异常？**
A: 确保清理浏览器缓存，或检查 CDN 缓存配置。

**Q: 图片无法加载？**
A: 检查 `public/images/` 目录是否存在且包含图片文件。

**Q: 多语言路由不工作？**
A: 检查 `middleware.ts` 配置和服务器环境变量。

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
  url: 'https://cultiva100.net',  // 站点URL
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
  copyright: '©{year} Cultiva100.net All rights reserved.',  // 版权信息
  showYear: true,                // 是否显示年份
  termsOfService: '/terms',      // 服务条款链接
  privacyPolicy: '/privacy',     // 隐私政策链接
}
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

## 📧 联系方式

- 邮箱: e@cultiva100.net
- 地址: 36 Purvis Street, #02-06 Singapore 188613
- 电话: +65 86451691
