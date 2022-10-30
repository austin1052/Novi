import { useState } from 'react';
import Navbar from './navbar'
import { useRouter } from "next/router";
// import Footer from './footer'
import Hamburger from 'hamburger-react'

export default function Layout({ children, isMobile }) {
  const [isOpen, setOpen] = useState(false)

  const router = useRouter();
  if (router.pathname === "/hello") {
    return (
      <> {children} </>
    )
  }
  return (
    <>
      <Navbar isMobile={isMobile} />
      <main>{children}</main>
    </>
  )
}