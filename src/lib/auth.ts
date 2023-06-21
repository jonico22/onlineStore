import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { dbUsers } from '@/database';

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/auth/login",
  },
  session: {
    maxAge: 2592000, /// 30d
    strategy: 'jwt',
    updateAge: 86400,
  },
  providers: [
    CredentialsProvider({
      name: "Sign in",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          return null;
        }
        return await dbUsers.checkUserEmailPassword(credentials!.email, credentials!.password );
      },
    }),
  ],
  callbacks: {
    async jwt ({ token, user}:any) {
      return { ...token, ...user };
    },
    async session ({ session, token }) {
      session.user = token as any;
      return session;
    }

  },
};
