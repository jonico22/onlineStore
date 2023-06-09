import { Typography } from '@/themes'
import { ReactNode } from 'react';

interface Props {
  variant? : any,
  color?: any,
  className?: string,
  children: ReactNode;
}
export const Text = ({variant,color,className,children}:Props)=>{
  return (
    <>
      <Typography variant={variant} color={color} className={className}>
          {children}
      </Typography>
    </>
  )
}
