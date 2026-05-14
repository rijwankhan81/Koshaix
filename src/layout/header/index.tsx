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
export default function Header() {
  const [show, setShow] = useState(false);
  const pathname = usePathname();
  const { wishlist } = useWishlist();
  const [isMobile, setIsMobile] = useState(false);
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);

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
        <div className={styles.wrapper}>
          <Container className={styles.container}>
            <div className={styles.nav}>
              <div className={styles.menuIconsLeft}>
                <ul className={styles.iconList}>
                  <li className={styles.hamMenu} onClick={toggleClass}>
                    <RiMenu2Line />
                  </li>
                  {/* SEARCH ICON */}
                  <li
                    className={styles.searchIcon}
                    onClick={() => setShowSearch((prev) => !prev)}
                  >
                    <IoSearch />
                  </li>

                  {/* SEARCH BAR */}
                  {showSearch && (
                    <div className={styles.searchBar}>
                      {/* FORM */}
                      <form onSubmit={handleSearch}>
                        <input
                          type="text"
                          placeholder="Search meat products..."
                          value={search}
                          onChange={(e) => setSearch(e.target.value)}
                        />

                        <button type="submit">
                          <IoSearch />
                        </button>
                      </form>

                      {/* SUGGESTIONS */}
                      {suggestions.length > 0 && (
                        <div className={styles.suggestions}>
                          {suggestions.map((item) => (
                            <Link
                              key={item.id}
                              href={`/shop/${item.id}`}
                              className={styles.suggestionItem}
                              onClick={() => setShowSearch(false)}
                            >
                              {/* IMAGE */}
                              <div className={styles.suggestionImage}>
                                <NextImage
                                  src={item.image}
                                  alt={item.name}
                                  className={styles.image}
                                />
                              </div>

                              {/* CONTENT */}
                              <div className={styles.suggestionContent}>
                                <h4>{item.name}</h4>

                                <p>${item.price.toFixed(2)}</p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </ul>
              </div>

              <div
                className={`${show ? styles.show : ""} ${styles.menuLeft} `}
                onClick={toggleClass}
              >
                <div className={styles.menuTitle}>
                  <h4>Menu</h4>
                  <div className={styles.crossIcon}>
                    <FaXmark />
                  </div>
                </div>
                <ul className={` ${styles.menuList}`}>
                  {(isMobile ? navItems : navItems.slice(0, 2)).map((item) => {
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
              </div>
              <div className={styles.logo}>
                <Link className={styles.navLink} href="/">
                  <NextImage src={"/images/logo.jpg"} alt={""} />
                </Link>
              </div>
              <div className={styles.menuRight}>
                <ul className={styles.menuList}>
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
              </div>
              <div className={styles.menuIcons}>
                <ul className={styles.iconList}>
                  <li>
                    <FaRegUser />
                  </li>
                  <li className={styles.wishlistItem}>
                    <Link href="/wishlist">
                      <FaRegHeart />

                      {wishlist.length > 0 && (
                        <span className={styles.badge}>{wishlist.length}</span>
                      )}
                    </Link>
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
