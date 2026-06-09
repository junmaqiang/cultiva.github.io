import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/', '/static/'],
    },
    sitemap: 'https://cultiva100.net/sitemap.xml',
  };
}
// 🔑 核心：加上下面这行代码！
export const dynamic = 'force-static'