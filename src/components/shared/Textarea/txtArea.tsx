import { Textarea } from '@/themes'
import { MouseEventHandler } from 'react';
import { Text } from '../Text';

interface Props {
  variant? : string | any,
  color?: string | any,
  size?: string | any,
  type?: string | any,
  label: string,
  name: string,
  className?: string,
  register?:any,
  errors?:any,
  rows?:any,
  onChange?: MouseEventHandler | any,
}
export const TxtArea = ({variant,color,className,label,size,register,errors,
  type,onChange,name,rows=4}:Props)=>{
  return (
    <>
      <Textarea label={label} variant={variant} color={color} rows={rows}
       size={size} className={className} {...register(name)}
       onChange={onChange} type={type}  error={ errors[name] && true} />
      {errors[name] && (
         <Text variant="small" color="red">{errors[name].message}</Text>
      )}
    </>
  )
}
