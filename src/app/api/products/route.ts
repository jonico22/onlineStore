import { NextResponse } from 'next/server'
import { db, SHOP_CONSTANTS } from '@/database'
import { Product } from '@/models'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const type = searchParams.get('query')
  let condition = {};
  if ( type !== 'all' && SHOP_CONSTANTS.validType.includes(`${type}`) ) {
      condition = { type };
  }
  await db.connect();
  const products = await Product.find(condition)
                              .select('title images price inStock slug -_id')
                              .lean();
  await db.disconnect();
  return NextResponse.json({ products })
}
