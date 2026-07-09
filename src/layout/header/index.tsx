import Link from "next/link";
import styles from "./header.module.scss";
import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import NextImage from "@/hooks/NextImage";
import Head from "next/head";
import { usePathname } from "next/navigation";
import { navItems } from "@/constants/navMenu";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { RiMenu2Line } from "react-icons/ri";
import { FaXmark } from "react-icons/fa6";
import { useWishlist } from "@/context/WishlistContext";
import { useRouter } from "next/router";
import { meatCategories } from "@/constants/meatCategories";
import { useLanguage } from "@/context/LanguageContext";

export default function Header() {
  const [show, setShow] = useState(false);
  const pathname = usePathname();
  const { wishlist } = useWishlist();
  const [isMobile, setIsMobile] = useState(false);
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const { t, toggleLang, lang } = useLanguage();

  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1199);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleClass = () => {
    setShow((prevState) => !prevState);
  };

  //  ALL PRODUCTS
  const allProducts = meatCategories.flatMap((cat) =>
    cat.products.map((p) => ({
      ...p,
      category: cat.label,
    })),
  );

  //  SEARCH SUGGESTIONS
  const suggestions =
    search.trim().length > 0
      ? allProducts
          .filter((product) =>
            product.name.toLowerCase().includes(search.toLowerCase()),
          )
          .slice(0, 5)
      : [];

  //  SUBMIT
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!search.trim()) return;

    router.push(`/shop?search=${encodeURIComponent(search)}`);

    setShowSearch(false);
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
        <Container className={styles.inner}>
          {/* LEFT: hamburger + search */}
          <div className={styles.leftGroup}>
            <button
              type="button"
              className={styles.iconBtn}
              onClick={toggleClass}
              aria-label="Open menu"
            >
              <RiMenu2Line />
            </button>

            <button
              type="button"
              className={styles.iconBtn}
              onClick={() => setShowSearch((prev) => !prev)}
              aria-label="Search"
              aria-expanded={showSearch}
            >
              <IoSearch />
            </button>

            {/* DESKTOP NAV — LEFT SIDE OF LOGO */}
            {!isMobile && (
              <nav className={styles.navInline}>
                {navItems.slice(0, 2).map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`${styles.navLink} ${isActive ? styles.active : ""}`}
                    >
                      {t(item.label, item.labelBn)}
                    </Link>
                  );
                })}
              </nav>
            )}
          </div>

          {/* CENTER: logo */}
          <Link className={styles.logo} href="/">
            <NextImage
              src={lang === "en" ? "/images/logo.jpg" : "/images/logo-bn.jpg"}
              alt="Koshaix"
            />
          </Link>

          {/* RIGHT: nav + icons */}
          <div className={styles.rightGroup}>
            {!isMobile && (
              <nav className={styles.navInline}>
                {navItems.slice(2, 4).map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`${styles.navLink} ${isActive ? styles.active : ""}`}
                    >
                      {t(item.label, item.labelBn)}
                    </Link>
                  );
                })}
              </nav>
            )}

            <ul className={styles.iconList}>
              <li>
                <button
                  type="button"
                  className={styles.iconBtn}
                  aria-label="Account"
                >
                  <FaRegUser />
                </button>
              </li>
              <li>
                <Link href="/wishlist" className={styles.iconBtn}>
                  <FaRegHeart />
                  {wishlist.length > 0 && (
                    <span className={styles.badge}>{wishlist.length}</span>
                  )}
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  className={styles.langToggle}
                  onClick={toggleLang}
                  aria-label="Switch language"
                >
                  <span className={lang === "en" ? styles.langActive : ""}>
                    EN
                  </span>
                  <span className={styles.langDivider}>/</span>
                  <span className={lang === "bn" ? styles.langActive : ""}>
                    বাং
                  </span>
                </button>
              </li>
            </ul>
          </div>
        </Container>

        {/* SEARCH OVERLAY */}
        {showSearch && (
          <div className={styles.searchOverlay}>
            <Container>
              <form className={styles.searchForm} onSubmit={handleSearch}>
                <IoSearch className={styles.searchFormIcon} />
                <input
                  type="text"
                  autoFocus
                  placeholder={t(
                    "Search meat products...",
                    "মাংসের পণ্য খুঁজুন...",
                  )}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <button type="submit" className={styles.searchSubmit}>
                  {t("Search", "খুঁজুন")}
                </button>
                <button
                  type="button"
                  className={styles.searchClose}
                  onClick={() => setShowSearch(false)}
                  aria-label="Close search"
                >
                  <FaXmark />
                </button>
              </form>

              {suggestions.length > 0 && (
                <div className={styles.suggestions}>
                  {suggestions.map((item) => (
                    <Link
                      key={item.id}
                      href={`/shop/${item.id}`}
                      className={styles.suggestionItem}
                      onClick={() => setShowSearch(false)}
                    >
                      <div className={styles.suggestionImage}>
                        <NextImage
                          src={item.image}
                          alt={item.name}
                          className={styles.image}
                        />
                      </div>
                      <div className={styles.suggestionContent}>
                        <h4>{item.name}</h4>
                        <p>${item.price.toFixed(2)}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </Container>
          </div>
        )}

        {/* MOBILE DRAWER */}
        <div
          className={styles.drawerOverlay}
          data-open={show}
          onClick={toggleClass}
        />
        <div
          className={`${styles.mobileDrawer} ${show ? styles.mobileDrawerOpen : ""}`}
        >
          <div className={styles.drawerHead}>
            <h4>{t("Menu", "মেনু")}</h4>
            <button
              type="button"
              className={styles.crossIcon}
              onClick={toggleClass}
              aria-label="Close menu"
            >
              <FaXmark />
            </button>
          </div>
          <ul className={styles.drawerList}>
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href} onClick={toggleClass}>
                  <Link
                    href={item.href}
                    className={`${styles.drawerLink} ${isActive ? styles.active : ""}`}
                  >
                    {t(item.label, item.labelBn)}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </header>
    </>
  );
}
