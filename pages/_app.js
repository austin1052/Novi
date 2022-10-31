import { useState, useEffect } from 'react';
import Head from 'next/head';
import Layout from '../components/layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const [width, setWidth] = useState(undefined);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    setWidth(window.innerWidth)
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    width > 1024 ? setIsMobile(false) : setIsMobile(true);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

  return (
    <Layout isMobile={isMobile}>
      <Head>
        <meta name="theme-color" content="#696B22" />
      </Head>
      <Component {...pageProps} width={width} isMobile={isMobile} />
    </Layout>
  )
}

export default MyApp
