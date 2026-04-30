import Link from "next/link";
import styles from "./header.module.scss";
import { Container } from "react-bootstrap";
import { useState } from "react";
import NextImage from "@/hooks/NextImage";
import Head from "next/head";
import { usePathname } from "next/navigation";
import { navItems } from "@/constants/navMenu";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
export default function Header() {
  const [show, setShow] = useState(false);
  const pathname = usePathname();

  const toggleClass = () => {
    setShow((prevState) => !prevState);
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Premium Quality Meat, Poultry, Fish, and Seafood in Dubai. Freshness Guaranteed. Order Online for Delivery or Pickup. Your Trusted Source for High-Quality Meat Products."
        />
        <link rel="icon" href="/images/fav.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Golos+Text:wght@400..900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Vast+Shadow&display=swap"
          rel="stylesheet"
        />
      </Head>
      <header id="header" className={styles.header}>
        <div className={styles.wrapper}>
          <Container className={styles.container}>
            <div className={styles.nav}>
              <div className={styles.search}>
                <IoSearch />
              </div>
              <ul className={`${show ? styles.show : ""} ${styles.menu}`}>
                {navItems.slice(0, 2).map((item) => {
                  const isActive = pathname === item.href;

                  return (
                    <li
                      key={item.href}
                      className={styles.navItem}
                      onClick={toggleClass}
                    >
                      <Link
                        href={item.href}
                        className={`${styles.navLink} ${
                          isActive ? styles.active : ""
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <div className={styles.logo}>
                <Link className={styles.navLink} href="/">
                  <NextImage src={"/images/logo.jpg"} alt={""} />
                </Link>
              </div>
              <ul className={`${show ? styles.show : ""} ${styles.menu}`}>
                {navItems.slice(2, 4).map((item) => {
                  const isActive = pathname === item.href;

                  return (
                    <li
                      key={item.href}
                      className={styles.navItem}
                      onClick={toggleClass}
                    >
                      <Link
                        href={item.href}
                        className={`${styles.navLink} ${
                          isActive ? styles.active : ""
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <div className={styles.menuIcons}>
                <ul className={styles.iconList}>
                  <li>
                    <FaRegUser />
                  </li>
                  <li>
                    <FaRegHeart />
                  </li>
                  <li>
                    <FiShoppingCart />
                  </li>
                </ul>
              </div>
            </div>
          </Container>
        </div>
      </header>
    </>
  );
}
