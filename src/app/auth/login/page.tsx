import { Layout } from "@/components/auth"
import { Text } from "@/components/shared"
import { Form } from "./Form"
export default function PageLogin(){
  return (
    <>
      <Layout >
        <Text variant="h4"> Sign in to your account  </Text>
        <Form />
      </Layout>
    </>
  )
}


