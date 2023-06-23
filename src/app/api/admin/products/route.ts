import { NextResponse } from 'next/server'
import { db } from '@/database'
import { Product } from '@/models'
import { v2 as cloudinary } from 'cloudinary';
cloudinary.config( process.env.CLOUDINARY_URL || '' );
import { isValidObjectId } from 'mongoose';
import { validations } from '@/utils';

export async function GET(request: Request) {
  await db.connect();
  const products = await Product.find()
      .sort({ title: 'asc' })
      .lean();
  await db.disconnect();
  return NextResponse.json({ products })
}

export async function POST(request: Request) {
  const body = await request.json()
  const { images = [] } = body;

    if ( images.length < 2 ) {
      return new NextResponse(
        validations.errorMsg(
          400,
          'Es necesario al menos 2 imágenes'))
    }

    // TODO: posiblemente tendremos un localhost:3000/products/asdasd.jpg

    try {
        await db.connect();
        const productInDB = await Product.findOne({ slug: body.slug });
        if ( productInDB ) {
            await db.disconnect();
            return new NextResponse(
              validations.errorMsg(
                400,
                'Ya existe un producto con ese slug'))
        }
        const product = new Product( body );
        await product.save();
        await db.disconnect();
        return NextResponse.json( product )
    } catch (error) {
        console.log(error);
        await db.disconnect();
        return new NextResponse(
          validations.errorMsg(
            400,
            'Revisar la consola del servidor'))
     }
}

export async function PUT(request: Request) {
  const body = await request.json()
  const { _id = '', images = [] } = body

  if ( !isValidObjectId( _id ) ) {
      return new NextResponse(
      validations.errorMsg(
        400,
        'El id del producto no es válido'))
  }

  if ( images.length < 2 ) {
    return new NextResponse(
      validations.errorMsg(
        400,
        'Es necesario al menos 2 imágenes'))
  }

  try {

      await db.connect();
      const product = await Product.findById(_id);
      if ( !product ) {
          await db.disconnect();
          return new NextResponse(
            validations.errorMsg(
              400,
              'El id del producto no es válido'))
      }

      // TODO: eliminar fotos en Cloudinary
      // https://res.cloudinary.com/cursos-udemy/image/upload/v1645914028/nct31gbly4kde6cncc6i.jpg
      product.images.forEach( async(image) => {
          if ( !images.includes(image) ){
              // Borrar de cloudinary
              const [ fileId, extension ] = image.substring( image.lastIndexOf('/') + 1 ).split('.')
              console.log({ image, fileId, extension });
              await cloudinary.uploader.destroy( fileId );
          }
      });

      await product.update( body );
      await db.disconnect();
      return NextResponse.json(product)
  } catch (error) {
      console.log(error);
      await db.disconnect();
      return new NextResponse(
        validations.errorMsg(
          400,
          'Revisar la consola del servidor'))
  }
}

export async function DELETE(request: Request) {}
