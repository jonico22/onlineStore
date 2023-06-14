"use client"
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from '@/themes'
import { Text ,AvatarImage } from "@/components/shared"
import React from 'react';
import {
  PowerIcon,
  UserCircleIcon,
  ChevronDownIcon
} from "@heroicons/react/24/outline";
export const ProfileMenu = ()=>{
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const closeMenu = () => setIsMenuOpen(false);
  return(
    <>
      <Menu  open={isMenuOpen} handler={setIsMenuOpen}>

          <AvatarImage  size="sm" variant="circular"
          className="cursor-pointer"/>
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />

        <MenuList>
        <MenuItem  className="flex items-center gap-2">
            <UserCircleIcon strokeWidth={2} className="h-4 w-4" />
            <Text variant="small" className="font-normal">
              My Profile
            </Text>
          </MenuItem >
          <hr className="my-2 border-blue-gray-50" />
          <MenuItem >
            <PowerIcon strokeWidth={2} className="h-4 w-4" />
            <Text variant="small" className="font-normal">
              Sign Out
            </Text>
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  )
}
