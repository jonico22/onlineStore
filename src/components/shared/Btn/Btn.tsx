import { Button } from '@/themes'
import { ReactNode,MouseEventHandler } from 'react';

interface Props {
  size?: any,
  variant?:any,
  color?:any,
  children: ReactNode,
  onClick?: MouseEventHandler
}
export const Btn = ({size,variant,color,onClick,
  children}:Props)=>{
  return (
    <>
      <Button size={size} color={color}
       variant={variant} onClick={onClick}>
        {children}
      </Button>
    </>
  )
}
