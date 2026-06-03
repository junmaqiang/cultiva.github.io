import { Product } from '@/context/CartContext';

export let products: Product[] = [];

export async function loadProducts(): Promise<Product[]> {
  const res = await fetch('/api/products');
  products = await res.json();
  return products;
}