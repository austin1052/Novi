import Navbar from './navbar'
import { useRouter } from "next/router";
// import Footer from './footer'

export default function Layout({ children }) {

  const router = useRouter();
  if (router.pathname === "/hello") {
    return (
      <> {children} </>
    )
  }
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  )
}