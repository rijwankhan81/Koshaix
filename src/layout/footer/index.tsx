import { Container } from "react-bootstrap";
import styles from "./footer.module.scss";
import Link from "next/link";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import NextImage from "@/hooks/NextImage";
import { usePathname } from "next/navigation";
import { navItems } from "@/constants/navMenu";
import { meatCategories } from "@/constants/meatCategories";
import { legalItems } from "@/constants/legal";
export default function Footer() {
  const pathname = usePathname();

  return (
    <>
      <footer className={styles.footer}>
        <Container>
          <div className={styles.wrapper}>
            <div className={styles.inner_wrapper}>
              <Link className={styles.logo} href="/">
                <NextImage src="/images/logo.jpg" alt="" />
              </Link>

              <p>
                Premium quality meat delivered hygienically to your doorstep.
                Koshaix brings farm-fresh cuts with unmatched quality and care.
              </p>
            </div>
            <div className={styles.footer_menu}>
              <h3>Categories</h3>
              <ul>
                {meatCategories.map((item: { href: string; label: string }) => {
                  const isActive = pathname === `/shop?category=${item.label}`;

                  return (
                    <li key={item.label} className={styles.navItem}>
                      <Link
                        href={`/shop?category=${item.label}`}
                        className={`${styles.nav_link} ${
                          isActive ? styles.active : ""
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className={styles.footer_menu}>
              <h3>About Us</h3>
              <ul>
                {navItems.map((item) => {
                  const isActive = pathname === item.href;

                  return (
                    <li key={item.href} className={styles.navItem}>
                      <Link
                        href={item.href}
                        className={`${styles.nav_link} ${
                          isActive ? styles.active : ""
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className={styles.footer_menu}>
              <h3>Account</h3>
              <ul>
                {legalItems.map((item: { href: string; label: string }) => {
                  const isActive = pathname === item.href;

                  return (
                    <li key={item.href} className={styles.navItem}>
                      <Link
                        href={item.href}
                        className={`${styles.nav_link} ${
                          isActive ? styles.active : ""
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className={styles.footer_bootom}>
            <p className={styles.copyright}>
              © 2026 Koshaix. All rights reserved.
            </p>
            <div className={styles.connect}>
              <ul>
                <li>
                  <Link href="javascript:void(0)">
                    <FiFacebook />
                  </Link>
                </li>
                <li>
                  <Link href="javascript:void(0)">
                    <FaXTwitter />
                  </Link>
                </li>
                <li>
                  <Link href="javascript:void(0)">
                    <FaInstagram />
                  </Link>
                </li>

                <li>
                  <Link href="javascript:void(0)">
                    <FaLinkedinIn />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
}
