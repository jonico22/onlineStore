import { Input } from '@/themes'
import { ReactNode,MouseEventHandler } from 'react';

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
  onChange?: MouseEventHandler | any,
}
export const Inp = ({variant,color,className,label,size,register,errors,
  type,onChange,name}:Props)=>{
  return (
    <>
      <Input label={label} variant={variant} color={color}
       size={size} className={className} {...register(name)}
      onChange={onChange} type={type}/>
      {errors[name] && (
        <span className="message-error">{errors[name].message}</span>
      )}
    </>
  )
}
