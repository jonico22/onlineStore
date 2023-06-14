import { Text } from "@/components/shared"
import { ProfileMenu } from "./ProfileMenu"
import {
  Navbar
} from '@/themes'
export const NavbarMain = ()=>{
  return(
    <>
      <Navbar className="mx-auto max-w-screen-xl p-2 lg:rounded-full lg:pl-6">
        <div className="relative mx-auto flex items-center text-blue-gray-900">
          <Text
            className="mr-4 ml-2 cursor-pointer py-1.5 font-medium"
          >
            Material Tailwind
          </Text>
          <ProfileMenu />
        </div>
      </Navbar>
    </>
  )
}

