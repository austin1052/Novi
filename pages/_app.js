import { useState, useEffect } from 'react';
import Layout from '../components/layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  const [width, setWidth] = useState(undefined);
  const [mobileDisplay, setMobileDisplay] = useState(true)

  useEffect(() => {
    setWidth(window.innerWidth)
    console.log("set width")
  }, []);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    width > 1024 ? setMobileDisplay(false) : setMobileDisplay(true);
    // console.log("width change")
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

  return (
    <Layout>
      <Component {...pageProps} width={width} />
    </Layout>
  )
}

export default MyApp
