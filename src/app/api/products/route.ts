import { NextResponse } from 'next/server';
import { getAllProducts } from '@/lib/md-parser';

export const dynamic = 'force-static';

export async function GET() {
  const products = getAllProducts();
  return NextResponse.json(products);
}