import { NextResponse } from 'next/server'
import { db } from '@/database';
import { Product } from '@/models';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const slug = searchParams.get('slug')

  await db.connect();
  const product = await Product.findOne({ slug }).lean();
  await db.disconnect();

  if( !product ) {
    let error_response = {
      status: "fail",
      message: "Producto no encontrado",
    };
    return new NextResponse(JSON.stringify(error_response), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }
  product.images = product.images.map( image => {
      return image.includes('http') ? image : `${ process.env.HOST_NAME}products/${ image }`
  });

  return NextResponse.json(product)
}
