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

#### 前提条件

1. 确保项目已推送到 GitHub 仓库
2. 仓库名称格式：`<username>.github.io`（自定义域名）或任意名称（如 `cultiva100-website`）

#### 方式 A：使用 GitHub Actions 自动部署（推荐）

项目已内置 GitHub Actions 配置，只需完成以下步骤：

1. **启用 GitHub Pages**
   - 进入仓库 → **Settings** → **Pages**
   - 在 **Build and deployment** 部分：
     - **Source** 选择 `GitHub Actions`
   
2. **配置权限**
   - 进入仓库 → **Settings** → **Actions** → **General**
   - 在 **Workflow permissions** 部分：
     - 选择 `Read and write permissions`
     - 勾选 `Allow GitHub Actions to create and approve pull requests`

3. **触发部署**
   - 推送代码到 `main` 分支即可自动触发部署
   - 或在 **Actions** 标签页手动运行 `Deploy to GitHub Pages` workflow

4. **查看部署状态**
   - 部署完成后访问 `https://<username>.github.io/<repo-name>/`

#### 方式 B：手动部署

1. **构建项目**

```bash
NODE_ENV=production pnpm build
```

构建产物将生成在 `out` 目录。

2. **部署到 gh-pages 分支**

```bash
# 安装 gh-pages 工具（首次部署）
pnpm add -D gh-pages

# 部署到 gh-pages 分支
pnpm exec gh-pages -d dist
```

3. **配置 GitHub Pages**
   - 进入仓库 → **Settings** → **Pages**
   - **Source** 选择 `Deploy from a branch`
   - **Branch** 选择 `gh-pages` / `/(root)`
   - 点击 **Save**

#### 自定义域名配置（可选）

1. **在 GitHub Pages 设置中添加域名**
   - 进入仓库 → **Settings** → **Pages**
   - 在 **Custom domain** 输入框中输入域名（如 `cultiva100.net`）
   - 点击 **Save**

2. **配置 DNS 解析**
   - 在域名管理后台添加以下记录：
     - **CNAME**: `www` → `<username>.github.io`
     - **A**: 根域名 → GitHub Pages IP 地址（可选，需查询最新 IP）

3. **启用 HTTPS**
   - 在 GitHub Pages 设置中勾选 `Enforce HTTPS`（需要等待 DNS 解析生效）

#### 项目配置说明

项目已预配置 `next.config.ts`，生产环境自动启用静态导出：

```typescript
output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
```

#### 注意事项

- **GitHub Pages 限制**：不支持服务端 API，所有数据需静态导出
- **图片优化**：项目已配置 `images.unoptimized: true` 支持静态导出
- **路由配置**：多语言路由 `/[locale]/` 在静态导出后正常工作
- **缓存清理**：部署后若样式异常，可强制刷新浏览器缓存（Ctrl+Shift+R）
- **部署日志**：可在 **Actions** 标签页查看部署日志，排查失败原因

#### 部署检查清单

- [ ] 项目已推送到 GitHub 仓库
- [ ] GitHub Actions 权限已配置为 `Read and write`
- [ ] `NODE_ENV=production` 构建正常
- [ ] `out` 目录生成完整
- [ ] GitHub Pages Source 配置正确
- [ ] 自定义域名 DNS 解析已生效（如使用）
- [ ] HTTPS 已启用（推荐）

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
