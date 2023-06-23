import formidable from 'formidable';
import fs from 'fs';
import { NextResponse } from 'next/server'

import { v2 as cloudinary } from 'cloudinary';
cloudinary.config( process.env.CLOUDINARY_URL || '' );

const saveFile = async( file: formidable.File ): Promise<string> => {
  const { secure_url } = await cloudinary.uploader.upload( file.filepath );
  return secure_url;
}

const parseFiles = async(req): Promise<string> => {
  return new Promise( (resolve, reject) => {
      const form = new formidable.IncomingForm();
      form.parse( req, async( err, fields, files ) => {
          // console.log({ err, fields, files });
          if ( err ) {
              return reject(err);
          }
          const filePath = await saveFile( files.file as formidable.File )
          resolve(filePath);
      })
  })
}

export async function POST(req: Request) {
  const body = await req.json()
  const imageUrl = await parseFiles(body);
  return NextResponse.json( { message: imageUrl } );
}
