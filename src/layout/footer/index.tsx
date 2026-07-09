import { Container } from "react-bootstrap";
import styles from "./footer.module.scss";
import Link from "next/link";
import { FiFacebook, FiPhone, FiMail } from "react-icons/fi";
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
  const { t, lang } = useLanguage();

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.wrapper}>
          {/* BRAND */}
          <div className={styles.inner_wrapper}>
            <Link className={styles.logo} href="/">
              <NextImage
                src={lang === "en" ? "/images/logo.jpg" : "/images/logo-bn.jpg"}
                alt="Koshaix"
              />
            </Link>

            <p>
              {t(
                "Premium quality meat delivered hygienically to your doorstep.",
                "প্রিমিয়াম মানের মাংস স্বাস্থ্যসম্মতভাবে আপনার দোরগোড়ায় পৌঁছে দেওয়া হয়।",
              )}{" "}
              {t(
                "Koshaix brings farm-fresh cuts with unmatched quality and care.",
                "কোশাইক্স অতুলনীয় মান ও যত্নসহ খামারের তাজা কাট নিয়ে আসে।",
              )}
            </p>

            <ul className={styles.contactList}>
              <li>
                <FiPhone /> <span>+880 1XXX-XXXXXX</span>
              </li>
              <li>
                <FiMail /> <span>support@koshaix.com</span>
              </li>
            </ul>

            <ul className={styles.socialList}>
              <li>
                <a href="#" aria-label="Facebook">
                  <FiFacebook />
                </a>
              </li>
              <li>
                <a href="#" aria-label="X (Twitter)">
                  <FaXTwitter />
                </a>
              </li>
              <li>
                <a href="#" aria-label="Instagram">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href="#" aria-label="LinkedIn">
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </div>

          {/* CATEGORIES */}
          <div className={styles.footer_menu}>
            <h3>{t("Categories", "বিভাগ")}</h3>
            <ul>
              {meatCategories.map(
                (item: { href: string; label: string; labelBn: string }) => {
                  const isActive = pathname === `/shop?category=${item.label}`;

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

          {/* ABOUT */}
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

          {/* ACCOUNT / LEGAL */}
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
              "© ২০২৬ কোশাইক্স। সব অধিকার সংরক্ষিত।",
            )}
          </p>
          <p className={styles.tagline}>
            {t("Taste Beyond Every Bite", "প্রতিটি কামড়ে স্বাদ")}
          </p>
        </div>
      </Container>
    </footer>
  );
}
