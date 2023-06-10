import { Checkbox } from '@/themes'

interface Props {
  label? : string,
  color?: any,
  className?: string,
}
export const Chk = ({label,color,className}:Props)=>{
  return (
    <Checkbox defaultChecked label={label}
    color={color} className={className}/>
  )
}
