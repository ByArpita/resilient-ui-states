import { NextResponse } from 'next/server'

const USERS = [
  { id: '1', name: 'Tom Browm', email: 'tom@test.com', role: 'admin' },
  { id: '2', name: 'John Doe', email: 'john@test.com', role: 'user' },
  { id: '3', name: 'Jane Smith', email: 'jane@test.com', role: 'user' }
]

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const state = searchParams.get('state') || 'success'

  if (state === 'loading') {
    await new Promise((r) => setTimeout(r, 3000))
    return NextResponse.json(USERS)
  }

  if (state === 'empty') {
    return NextResponse.json([])
  }

  if (state === 'error') {
    return NextResponse.json(
      { message: 'Failed to fetch users' },
      { status: 500 }
    )
  }

  if (state === 'partial') {
    return NextResponse.json(USERS.slice(0, 1))
  }

  return NextResponse.json(USERS)
}
