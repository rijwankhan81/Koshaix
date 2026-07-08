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
import { useLanguage } from "@/context/LanguageContext";
export default function Footer() {
  const pathname = usePathname();
  const { t } = useLanguage();
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
                {t(
                  "Premium quality meat delivered hygienically to your doorstep.",
                  "প্রিমিয়াম কুয়ালিটির মাংস হাইজিনিকভাবে আপনার ডেস্কটপে পরিহার করা হয়।",
                )}
                {t(
                  "Koshaix brings farm-fresh cuts with unmatched quality and care.",
                  "কোশাইক্স অপময়তা এবং দয়ার সাথে ফার্ম-ফ্রেশ কাটগুলি আনে।",
                )}
              </p>
            </div>
            <div className={styles.footer_menu}>
              <h3>{t("Categories", "বিভাগ")}</h3>
              <ul>
                {meatCategories.map(
                  (item: { href: string; label: string; labelBn: string }) => {
                    const isActive =
                      pathname === `/shop?category=${item.label}`;

                    return (
                      <li key={item.label} className={styles.navItem}>
                        <Link
                          href={`/shop?category=${item.label}`}
                          className={`${styles.nav_link} ${
                            isActive ? styles.active : ""
                          }`}
                        >
                          {t(item.label, item.labelBn)}
                        </Link>
                      </li>
                    );
                  },
                )}
              </ul>
            </div>
            <div className={styles.footer_menu}>
              <h3>{t("About Us", "আমাদের সম্পর্কে")}</h3>
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
                        {t(item.label, item.labelBn)}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className={styles.footer_menu}>
              <h3>{t("Account", "অ্যাকাউন্ট")}</h3>
              <ul>
                {legalItems.map(
                  (item: { href: string; label: string; labelBn: string }) => {
                    const isActive = pathname === item.href;

                    return (
                      <li key={item.href} className={styles.navItem}>
                        <Link
                          href={item.href}
                          className={`${styles.nav_link} ${
                            isActive ? styles.active : ""
                          }`}
                        >
                          {t(item.label, item.labelBn)}
                        </Link>
                      </li>
                    );
                  },
                )}
              </ul>
            </div>
          </div>
          <div className={styles.footer_bootom}>
            <p className={styles.copyright}>
              {t(
                "© 2026 Koshaix. All rights reserved.",
                "© 2026 কোশাইক্স। সব অধিকার সংরক্ষিত।",
              )}
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
