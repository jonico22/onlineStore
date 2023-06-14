"use client"
import { Text,Inp,Btn,Chk } from "@/components/shared"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { signIn } from "next-auth/react";
import { useSearchParams, useRouter } from "next/navigation";

const schema = Yup.object().shape({
  email: Yup.string()
        .required("* Ingresa un correo.")
        .matches(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          "* Ingresa un correo válido."),
  password: Yup.string()
        .required("* Ingresa una contraseña.")
});

const DataRemember = {
  email:  '',
  password: '' }

type FormData = {
  email: string,
  password: string,
};

export const Form = ()=>{
  const router = useRouter();
  const { register, handleSubmit, formState: { errors }, } = useForm<FormData>(
    { defaultValues: DataRemember,
      resolver: yupResolver(schema),
      mode: "onChange"
    });
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const onSubmitFilter = async (data: FormData) => {
    const {email,password} = data;
    const res = signIn("credentials", {
      email,
      password,
      callbackUrl,
    });
    if (!res?.error) {
      router.push(callbackUrl);
    } else {
      console.log("invalid email or password");
    }
  };
  return(
    <>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        onSubmit={handleSubmit(onSubmitFilter)}>
          <div className="mb-4 flex flex-col gap-6">
            <Inp size="lg" variant="standard" label="Email"
              name={'email'} register={register}  errors={errors}/>
            <Inp variant="standard" name={'password'} type="password" size="lg" register={register}
              label="Password" errors={errors} />
            <Chk label={(<Text variant="small" color="gray"
                  className="flex items-center font-normal">Recordame</Text>)}/>
            <Btn className="mt-1" type={'submit'}>Ingresar</Btn>
          </div>
        </form>
    </>
  )
}
