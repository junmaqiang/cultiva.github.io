import { NextResponse } from 'next/server';

export const dynamic = 'force-static';

export async function GET() {
  return NextResponse.json({ user: null }, { status: 200 });
}

export async function DELETE() {
  return NextResponse.json({ message: 'Logged out' }, { status: 200 });
}