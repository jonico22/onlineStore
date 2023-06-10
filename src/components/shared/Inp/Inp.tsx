import { Input } from '@/themes'
import { ReactNode,MouseEventHandler } from 'react';

interface Props {
  variant? : string | any,
  color?: string | any,
  size?: string | any,
  type?: string | any,
  label: string,
  className?: string,
  onChange?: MouseEventHandler | any,
}
export const Inp = ({variant,color,className,label,size,
  type,onChange}:Props)=>{
  return (
    <>
      <Input label={label} variant={variant} color={color}
       size={size} className={className}
      onChange={onChange} type={type}/>
    </>
  )
}
