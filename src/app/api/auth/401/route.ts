import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  return NextResponse.json('', { status: 401, statusText: 'Unauthorized' });
}
