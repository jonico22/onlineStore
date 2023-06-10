
import { ReactNode } from 'react';

interface Props {
  className?: string,
  children: ReactNode;
}
export const Layout = ({className,children}:Props)=>{
  return (
    <>
      <main className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          logo
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          {children}
        </div>
      </main>
    </>
  )
}
