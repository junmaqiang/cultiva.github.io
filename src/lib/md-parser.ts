import { readFileSync, readdirSync, existsSync } from 'fs';
import { join } from 'path';
import { Product } from '@/context/CartContext';

const FRONTMATTER_REGEX = /^---\n([\s\S]*?)\n---/;

function parseFrontmatter(content: string): Record<string, unknown> {
  const match = content.match(FRONTMATTER_REGEX);
  if (!match) return {};
  
  const frontmatter = match[1];
  const result: Record<string, unknown> = {};
  
  frontmatter.split('\n').forEach(line => {
    const [key, ...valueParts] = line.split(':').map(s => s.trim());
    if (!key) return;
    
    const value = valueParts.join(':');
    
    if (value === 'true') {
      result[key] = true;
    } else if (value === 'false') {
      result[key] = false;
    } else if (!isNaN(parseFloat(value))) {
      result[key] = parseFloat(value);
    } else if (value.startsWith('"') && value.endsWith('"')) {
      result[key] = value.slice(1, -1);
    } else {
      result[key] = value;
    }
  });
  
  return result;
}

export function parseProductFile(filePath: string): Product | null {
  try {
    const content = readFileSync(filePath, 'utf-8');
    const frontmatter = parseFrontmatter(content);
    
    return {
      id: frontmatter.id as string || '',
      name: frontmatter.name as string || '',
      nameEn: frontmatter.nameEn as string || '',
      nameZh: frontmatter.nameZh as string || '',
      nameJa: frontmatter.nameJa as string || '',
      description: frontmatter.description as string || '',
      descriptionEn: frontmatter.descriptionEn as string || '',
      descriptionZh: frontmatter.descriptionZh as string || '',
      descriptionJa: frontmatter.descriptionJa as string || '',
      price: frontmatter.price as number || 0,
      image: frontmatter.image as string || '',
      category: frontmatter.category as string || '',
      inStock: frontmatter.inStock as boolean || false,
      rating: frontmatter.rating as number || 0,
      reviews: frontmatter.reviews as number || 0,
    };
  } catch {
    return null;
  }
}

export function getAllProducts(): Product[] {
  const productsDir = join(process.cwd(), 'content', 'products');
  
  if (!existsSync(productsDir)) {
    return [];
  }
  
  const files = readdirSync(productsDir);
  const mdFiles = files.filter(file => file.endsWith('.md'));
  
  return mdFiles
    .map(file => {
      const filePath = join(productsDir, file);
      return parseProductFile(filePath);
    })
    .filter((product): product is Product => product !== null)
    .sort((a, b) => parseInt(a.id) - parseInt(b.id));
}

export function getProductById(id: string): Product | undefined {
  return getAllProducts().find(product => product.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === 'All') return getAllProducts();
  return getAllProducts().filter(product => product.category === category);
}

export function getProductContent(id: string): string {
  const productsDir = join(process.cwd(), 'content', 'products');
  const files = readdirSync(productsDir);
  const mdFiles = files.filter(file => file.endsWith('.md'));
  
  for (const file of mdFiles) {
    const filePath = join(productsDir, file);
    const content = readFileSync(filePath, 'utf-8');
    const frontmatter = parseFrontmatter(content);
    
    if (frontmatter.id === id) {
      const match = content.match(FRONTMATTER_REGEX);
      if (match) {
        return content.slice(match[0].length).trim();
      }
      return content;
    }
  }
  
  return '';
}