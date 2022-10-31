import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/logo.png'
import styles from "../styles/Navbar.module.css";
import { FaShoppingCart } from "react-icons/fa";
import { Twirl as Hamburger } from "hamburger-react";

export default function Navbar({ isMobile }) {
  const [isOpen, setIsOpen] = useState(false);
  // const logoWidth = isMobile ? "130px" : "100px";
  const logoWidth = "100px"

  const showNavLinks = () => setIsOpen(!isOpen);

  const toggleContent = () => {
    if (window.innerWidth < 1024) setIsOpen(!isOpen);
  };
  return (
    <>

      <header className={styles.header}>
        <nav className={isOpen ? `${styles.active} ${styles.nav}` : `${styles.nav}`}>

          <ul className={styles.navLinks} onClick={() => setIsOpen(false)}>
            <li>
              <Link href='/'>
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href='/gallery'>
                <a>Gallery</a>
              </Link>
            </li>
            <li>
              <Link href='/shop'>
                <a>Shop</a>
              </Link>
            </li>
          </ul>

        </nav>

        <Link href="/">
          <div className={styles.navLogo}>
            <Image
              src={logo}
              width={logoWidth}
              height='100%'
              objectFit='contain'
              alt="novi art logo"
            />
          </div>
        </Link>

        {
          isMobile ?
            <Hamburger
              toggled={isOpen}
              toggle={setIsOpen}
              // className={styles.hamburgerMenu}
              label="Show Menu"
            />
            :
            <div className={styles.cart}>
              <Link href='/cart'>
                <a>
                  <FaShoppingCart title="Cart" className={styles.cartIcon} />
                </a>
              </Link>
            </div>
        }

      </header>
    </>
  );
};