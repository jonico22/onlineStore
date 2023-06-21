import { Layout } from "@/components/auth"
import { Text } from "@/components/shared"
import { Form } from "./Form"
import { authOptions } from "@/lib/auth";
import {getServerSession} from "next-auth/next"
import { redirect } from 'next/navigation';
export default async function PageLogin(){
  const session = await getServerSession(authOptions)
  console.log(session)
  if (session) {
    return redirect('/dashboard');
  }
  return (
    <>
      <Layout >
        <Text variant="h4"> Sign in to your account  </Text>
        <Form />
      </Layout>
    </>
  )
}


