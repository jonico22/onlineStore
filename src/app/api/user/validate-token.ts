import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { db } from '@/database';
import { User } from '@/models';
import { jwt,validations } from '@/utils';

export async function GET() {
  const cookieStore = cookies()
  const tk:any = cookieStore.get('token');
  let userId = '';
  try {
    userId = await jwt.isValidToken(tk);
  } catch (error) {
      return new NextResponse(
        validations.errorMsg(
          401,
          'Token de autorización no es válido'))
  }

  await db.connect();
  const user = await User.findById( userId ).lean();
  await db.disconnect();

  if ( !user ) {
    return new NextResponse(
      validations.errorMsg(
        400,
        'No existe usuario con ese id'))
  }

  const { _id, email, role, name } = user;
  return NextResponse.json(
    {
      token: jwt.signToken( _id, email ),
      user: {
          email,
          role,
          name
      }
    }
  )
}
