import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs';
import { db } from '@/database';
import { User } from '@/models';
import { jwt, validations } from '@/utils';

export async function POST(request: Request) {
  const { email = '', password = '', name = '' } = await request.json() as { email: string, password: string, name: string };

  if ( password.length < 6 ) {
      return new NextResponse(
        validations.errorMsg(
          400,
          'La contraseña debe de ser de 6 caracteres'))
  }

  if ( name.length < 2 ) {
      return new NextResponse(
        validations.errorMsg(
          400,
          'El nombre debe de ser de 2 caracteres'))
  }

  if ( !validations.isValidEmail( email ) ) {
    return new NextResponse(
      validations.errorMsg(
        400,
        'El correo no tiene formato de correo'))
  }

  await db.connect();
  const user = await User.findOne({ email });
  if ( user ) {
    return new NextResponse(
      validations.errorMsg(
        400,
        'No puede usar ese correo'))
  }

  const newUser = new User({
      email: email.toLocaleLowerCase(),
      password: bcrypt.hashSync( password ),
      role: 'client',
      name,
  });

  try {
      await newUser.save({ validateBeforeSave: true });
  } catch (error) {
    return new NextResponse(
      validations.errorMsg(
        500,
        'Revisar logs del servidor'))
  }

  const { _id, role } = newUser;

  const token = jwt.signToken( _id, email );
  return NextResponse.json({
    token, //jwt
      user: {
          email,
          role,
          name,
      }
   })
}
