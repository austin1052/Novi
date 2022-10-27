import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/logo.png'
import styles from "../styles/Navbar.module.css";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
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
        <div className={styles.navLogo}>
          <Image src={logo}
            width='100px'
            height='100%'
            objectFit='contain'
            alt="novi art logo"
          />
        </div>
        <div className={styles.cart}>
          <Link href='/cart'>
            <a>
              <FaShoppingCart title="Cart" className={styles.cartIcon} />
            </a>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;