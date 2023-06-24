"use client"
import { Text,Inp,Btn,Chk ,TxtArea} from "@/components/shared"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Radio } from '@/themes'
import { ChangeEvent, FC, useEffect, useRef, useState } from 'react';

const schema = Yup.object().shape({
  title: Yup.string()
        .required("* Ingresa un correo."),
  description: Yup.string()
        .required("* Ingresa una contraseña.")
});

type FormData = {
  _id?       : string;
  description: string;
  images     : string[];
  inStock    : number;
  price      : number;
  slug       : string;
  tags       : string[];
  title      : string;
  type       : string;
  brand      : string;
};

const DataRemember = {
  title:  '',
  description: '',
  images     : [],
  inStock    : 0,
  price      : 0,
  slug       : '',
  tags       : [],
  type       : '',
  brand      : ''
}

const validTypes = ['logitech','microsoft','elgato','lg','samsung','hp','razer']
const validBrand = ['mouse','monitor','teclado','speaker','webcam','microfono']

export const FormProduct = ()=>{
  const fileInputRef = useRef<HTMLInputElement>(null)

  const { register, handleSubmit, formState: { errors }, getValues, setValue, watch } = useForm<FormData>(
    { defaultValues: DataRemember,
      resolver: yupResolver(schema),
      mode: "onChange"
    });
    const onFilesSelected = async({ target }: ChangeEvent<HTMLInputElement>) => {
      if ( !target.files || target.files.length === 0 ) {
          return;
      }

      try {

          console.log( target );
          for( const file of target.files ) {
              const formData = new FormData();
              formData.append('file', file);
              console.log( file );
              setValue('images', [...getValues('images'), file], { shouldValidate: true });
          }


      } catch (error) {
          console.log({ error });
      }
  }
  const onSubmit= async (data: FormData) => {
      console.log(data)
  }
  return(
    <>
      <form action="" onSubmit={ handleSubmit( onSubmit ) }>
      <div className="mb-4 flex flex-col gap-6">
          <Inp size="lg" variant="standard" label="Título"
                  name={'title'} register={register}  errors={errors}/>
          <TxtArea size="lg" variant="standard" label="Descripción"
                  name={'description'} register={register}  errors={errors}/>
          <Inp size="lg" variant="standard" label="Inventario" type={'number'}
                  name={'inStock'} register={register}  errors={errors}/>
          <Inp size="lg" variant="standard" label="Slug - URL"
                  name={'slug'} register={register}  errors={errors}/>
          <label htmlFor="">Tipos</label>
          {
            validTypes.map( option => (
                <Radio
                    key={ option }
                    id={ option }
                    name ='type'
                    label={ option }
                    {...register('type')}
                />
            ))
          }
        <Inp size="lg" variant="standard" label="Precio" type={'number'}
            name={'price'} register={register}  errors={errors}/>
         <label htmlFor="">Marcas</label>
          {
            validBrand.map( option => (
                <Radio
                    key={ option }
                    id={ option }
                    name ='brand'
                    label={ option }
                    {...register('brand')}
                />
            ))
          }
          <label htmlFor="">Imagenes</label>
          <Btn className="mt-1" onClick={ () => fileInputRef.current?.click() }
          > Cargar imagen</Btn>
            <input
              ref={ fileInputRef }
              type="file"
              multiple
              accept='image/png, image/gif, image/jpeg'
              style={{ display: 'none' }}
              onChange={ onFilesSelected }
          />



          <Btn className="mt-1" type={'submit'}>Guardar</Btn>
      </div>

      </form>
    </>
  )
}
