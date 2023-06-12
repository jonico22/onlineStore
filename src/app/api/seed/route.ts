import { NextResponse } from 'next/server'
import { validations } from '@/utils';
import { db, seedDatabase } from '@/database';
import {  User } from '@/models';

export async function GET() {
  if (  process.env.NODE_ENV === 'production'){
    return new NextResponse(
      validations.errorMsg(
        401,
        'No tiene acceso a este API'))
  }
  await db.connect();
  await User.deleteMany();
  await User.insertMany( seedDatabase.initialData.users );
  await db.disconnect();

  return NextResponse.json({ message: 'Proceso realizado correctamente'})
}
