import { NextResponse } from 'next/server';
import { getAllProducts, getProductById as getProductByIdFromMd } from '@/lib/md-parser';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  
  if (id) {
    const product = getProductByIdFromMd(id);
    if (product) {
      return NextResponse.json(product);
    }
    return NextResponse.json({ error: 'Product not found' }, { status: 404 });
  }
  
  const products = getAllProducts();
  return NextResponse.json(products);
}