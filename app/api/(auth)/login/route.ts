import { NextResponse } from 'next/server';

export function GET(): NextResponse<{ users: string }> {
  return NextResponse.json({ users: '/api/users' });
}
