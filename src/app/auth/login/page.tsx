"use client"
import { Layout } from "@/components/auth"
import { Text,Inp,Btn,Chk } from "@/components/shared"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const schema = Yup.object().shape({
  user: Yup.string()
        .required("* Ingresa un correo.")
        .matches(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          "* Ingresa un correo válido."),
  pass: Yup.string()
        .required("* Ingresa una contraseña.")
});

const DataRemember = {
  user: localStorage.getItem('userRember') ?
        JSON.parse(localStorage.getItem('userRember') as string) : '',
  pass: localStorage.getItem('passRember') ?
        JSON.parse(localStorage.getItem('passRember') as string) : '' }
export default function PageLogin(){

  const { register, handleSubmit, formState: { errors }, } = useForm(
    { defaultValues: DataRemember,
      resolver: yupResolver(schema),
      mode: "onChange"
    });
  const onSubmitFilter = async (data: any) => {
    console.log(data)
  };

  return (
    <>
      <Layout >
        <Text variant="h4"> Sign in to your account  </Text>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        onSubmit={handleSubmit(onSubmitFilter)}>
          <div className="mb-4 flex flex-col gap-6">
            <Inp size="lg" variant="standard" label="Email"
              name={'user'} register={register}  errors={errors}/>
            <Inp variant="standard" name={'pass'} type="password" size="lg" register={register}
              label="Password" errors={errors} />
            <Chk label={(<Text variant="small" color="gray"
                  className="flex items-center font-normal">Recordame</Text>)}/>
            <Btn className="mt-1" type={'submit'}>Ingresar</Btn>
          </div>
        </form>
      </Layout>
    </>
  )
}
