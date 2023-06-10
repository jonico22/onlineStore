import { Button } from '@/themes'
import { ReactNode,MouseEventHandler } from 'react';

interface Props {
  size?: any | string,
  variant?:string | any,
  color?:string | any,
  type?:string | any,
  className?: string,
  children: ReactNode,
  onClick?: MouseEventHandler
}
export const Btn = ({size,variant,color,onClick,
  className,type,children}:Props)=>{
  return (
    <>
      <Button
        className={className} size={size}
        color={color} type={type}
        variant={variant} onClick={onClick}>
        {children}
      </Button>
    </>
  )
}
