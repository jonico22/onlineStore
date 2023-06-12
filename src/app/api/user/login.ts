import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs';
import { db } from '@/database';
import { User } from '@/models';
import { jwt,validations } from '@/utils';

export async function POST(request: Request) {
    const req = await request.json()
    const { email = '', password = ''  } = req.body;

    await db.connect();
    const user = await User.findOne({ email });
    await db.disconnect();

    if ( !user ) {
      return new NextResponse(
        validations.errorMsg(
          400,
          'Correo o contraseña no válidos - EMAIL'))
    }
    if ( !bcrypt.compareSync( password, user.password! ) ) {
      return new NextResponse(
        validations.errorMsg(
          400,
          'Correo o contraseña no válidos - Password'))
    }
    const { role, name, _id } = user;
    const token = jwt.signToken( _id, email );
    return NextResponse.json(
        {
          token, //jwt
          user: {
              email, role, name
          }
        }
    )
}
