import { Layout } from "@/components/auth"
import { Text,Inp,Btn } from "@/components/shared"
export default function Page(){
  return (
    <>
      <Layout >
        <Text variant="h4"> Sign in to your account  </Text>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
            <Inp size="lg" variant="standard" label="Email" />
            <Inp variant="standard" type="password" size="lg" label="Password" />
            <Btn className="mt-6" type={'submit'}>Ingresar</Btn>
          </div>
        </form>
      </Layout>
    </>
  )
}
