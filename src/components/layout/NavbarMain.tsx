"use client"
import { Text } from "@/components/shared"
import { AuthContext } from '@/context';
import {  useContext, useState } from 'react';
import Link from 'next/link';
import {
  PowerIcon,
  UserCircleIcon
} from "@heroicons/react/24/outline";
export const NavbarMain = ()=>{
  const { user, isLoggedIn, logout } = useContext(  AuthContext );
  return(
    <>
     <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light'>
      <ul className='flex items-center gap-3'>
        <li className='font-semibold text-lg'>
            TechStore
        </li>
      </ul>
      <ul className='flex items-center gap-3'>
        {
          isLoggedIn ? (
              <>
                <li className='text-black/90'>
                  {user?.email}
                </li>
                <li className='text-black/90'>
                    My Orders
                </li>
                <li className="flex gap-2">
                    <UserCircleIcon strokeWidth={2} className="h-4 w-4" />
                    My Account
                </li>
                <li className="flex gap-2 cursor-pointer" onClick={ logout }>
                    <PowerIcon strokeWidth={2} className="h-4 w-4" />
                    Cerrar Session
                </li>
              </>
          ) :
          <>
            <li>
              <Link href="/auth/login">
                Login
              </Link>
            </li>
          </>
        }
      </ul>


    </nav>
    </>
  )
}

