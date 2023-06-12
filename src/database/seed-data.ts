import bcrypt from 'bcryptjs';

interface SeedUser {
  name     : string;
  email    : string;
  password : string;
  role     : 'admin'|'client'
}

interface SeedData {
  users: SeedUser[];
}

export const initialData: SeedData = {
  users: [
      {
          name: 'administrador',
          email: 'admino@google.com',
          password: bcrypt.hashSync('123456'),
          role: 'admin'
      },
      {
          name: 'usuario client',
          email: 'client@google.com',
          password: bcrypt.hashSync('123456'),
          role: 'client'
      },
  ]
}
