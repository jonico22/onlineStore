import { Avatar } from '@/themes'

interface Props {
  variant?:string | any,
  size?: any | string,
  color?: any,
  src?:string,
  className?: string,
}

export const AvatarImage  = ({size,variant,color,
  className,src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"}:Props)=>{
  return <Avatar
  className={className} size={size}
  color={color}
  variant={variant}
  src={src} alt="avatar" />;
}
