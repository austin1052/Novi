import Head from "next/head";
import Image from "next/image";
import logo from '../public/logo.png'
import styles from "../styles/Hello.module.css";

const Hello = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image src={logo}
          width='300px'
          height='100%'
          objectFit='contain'
          alt="novi logo" />
      </div>
      <div className={styles.quote}>
        <div>Life is a journey. Paint it</div>
        <div className={styles.bold}>BOLD</div>
      </div>
    </div>
  );
};

export default Hello;
