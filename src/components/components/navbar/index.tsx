import React, { useState } from 'react'
import Link from 'next/link'
import { Router, useRouter } from 'next/router'
import tw, { styled } from 'twin.macro'
import { Box, Flex, Button, Stack } from '../index'


// bg - gray - 800
// mx - auto
// px - 2
// sm: px - 6
// lg: px - 8


// const MobileMenu = styled.div`
//   ${tw`
//     sm:hidden
//   `}
// `

// const Button = styled.button`
//   ${tw`
//     text-gray-300
//     hover:bg-gray-700 
//     hover:text-white 
//     px-3 
//     py-2 
//     rounded-md 
//     text-sm
//     font-sans
//   `}
// `


//   ${tw`
//     flex
//     flex-1
//     items-center 
//     sm:hidden
//   `}
// `

// const HamburgerButton = styled.button(({ theme }) =>
//   css({
//     display: 'inline-flex',
//     borderRadius: 'default',
//     alignItems: 'center',
//     justifyContent: 'center',
//     bg: 'dark',
//     p: 2,
//     '&:hover': {
//       background: 'muted',
//     },
//     '&:focus': {
//       outline: 'none',
//       boxShadow: 'inset 0 0 0 2px #fff',
//     }
//   })
// )
const Tab = styled.a(({ isActive }) => [
  tw`text-gray-600 px-3 py-2 text-xs`,
  tw`rounded-t`,
  tw`hover:(bg-gray-100)`,
  isActive && tw`font-semibold`
])

const HamburgerButton = styled.button(() => [
  `inline-flex 
    items-center 
    justify-center 
    p-2 
    rounded-md 
    text-gray-400  
    hover:text-white 
    hover:bg-gray-700 
    focus:outline-none 
    focus:ring-2 
    focus:ring-inset 
    focus:ring-white`
])

export const Navbar = () => {
  const router = useRouter()
  const [menuVisible, setMenuVisible] = useState(false)

  return (
    <header tw='border-b-2'>
      <div tw="max-w-6xl mx-auto px-2 sm:px-6 lg:px-8">
        <div>
          <div tw="relative flex items-center justify-between h-16">
            <div tw="flex-shrink-0 flex items-center">
              <span tw="text-2xl">jdlennoxs</span>
            </div>
            <div tw="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button tw="p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                <span tw="sr-only">Search</span>
                {/* <!-- Heroicon name: outline/bell --> */}
                <svg tw="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path d="M483.4,454.444l-121.3-121.4c28.7-35.2,46-80,46-128.9c0-112.5-91.5-204.1-204.1-204.1S0,91.644,0,204.144	s91.5,204,204.1,204c48.8,0,93.7-17.3,128.9-46l121.3,121.3c8.3,8.3,20.9,8.3,29.2,0S491.8,462.744,483.4,454.444z M40.7,204.144 c0-90.1,73.2-163.3,163.3-163.3s163.4,73.3,163.4,163.4s-73.3,163.4-163.4,163.4S40.7,294.244,40.7,204.144z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <nav>
          <div tw="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* <!-- Mobile menu button--> */}
            <button type="button" onClick={() => setMenuVisible(!menuVisible)} tw="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
              <span tw="sr-only">Open main menu</span>
              {menuVisible ? (
                <svg tw="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg tw="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
          <div tw="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div tw="hidden sm:block">
              <div tw="flex">
                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                <Link href="/">
                  <Tab isActive={router.pathname === "/"}>HOME</Tab>
                </Link>
                <Link href="/">
                  <Tab isActive={router.pathname.match("posts/")}>PROJECTS</Tab>
                </Link>
                <Link href="/">
                  <Tab>DIGITAL GARDEN</Tab>
                </Link>
              </div>
            </div>
          </div>


          {/* <!-- Mobile menu, show/hide based on menu state. --> */}
          {menuVisible ? (
            <div tw="sm:hidden" id="mobile-menu">
              <div tw="px-2 pt-2 pb-3 space-y-1">
                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                <a href="#" tw="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">HOME</a>

                <a href="#" tw="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">POSTS</a>

                <a href="#" tw="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">PROJECTS</a>

                <a href="#" tw="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">DIGITAL GARDEN</a>
              </div>
            </div>) : null}
        </nav>
      </div>
    </header >
  )
}
