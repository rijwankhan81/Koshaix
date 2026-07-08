import styles from "./shop.module.scss";
import { Container } from "react-bootstrap";
import { meatCategories } from "@/constants/meatCategories";
import ProductCard from "@/component/ProductCard";

import { useEffect, useState } from "react";

import Head from "next/head";
import Header from "@/layout/header";
import Footer from "@/layout/footer";

import NextImage from "@/hooks/NextImage";

import { RiMenu3Fill } from "react-icons/ri";
import { FaXmark } from "react-icons/fa6";

import { useRouter } from "next/router";
import { useLanguage } from "@/context/LanguageContext";

export default function ShopPage() {
  const router = useRouter();
  const { category, search } = router.query;
  const { t } = useLanguage();
  // MOBILE SIDEBAR
  const [show, setShow] = useState(false);

  // FILTERS
  const [selected, setSelected] = useState<string[]>([]);
  const [sort, setSort] = useState("default");

  // PAGINATION
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 8;

  // FLATTEN PRODUCTS
  const allProducts = meatCategories.flatMap((cat) =>
    cat.products.map((p) => ({
      ...p,
      category: cat.label,
    })),
  );

  // MOBILE FILTER TOGGLE
  const toggleClass = () => {
    setShow((prevState) => !prevState);
  };

  // CATEGORY FILTER
  const toggleCategory = (label: string) => {
    setSelected((prev) =>
      prev.includes(label) ? prev.filter((c) => c !== label) : [...prev, label],
    );
  };

  // URL CATEGORY SELECT
  useEffect(() => {
    if (category && typeof category === "string") {
      setSelected([category]);
    }
  }, [category]);

  // RESET PAGINATION
  useEffect(() => {
    setCurrentPage(1);
  }, [selected, sort]);

  // FILTER PRODUCTS
  const filteredProducts = allProducts.filter((product) => {
    // CATEGORY FILTER
    const categoryMatch =
      selected.length === 0 || selected.includes(product.category);

    // SEARCH FILTER
    const searchMatch =
      !search ||
      product.name.toLowerCase().includes(String(search).toLowerCase());

    return categoryMatch && searchMatch;
  });

  // SORT PRODUCTS
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sort === "low") return a.price - b.price;

    if (sort === "high") return b.price - a.price;

    return a.id - b.id;
  });

  // PAGINATION
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);

  const startIndex = (currentPage - 1) * productsPerPage;

  const paginatedProducts = sortedProducts.slice(
    startIndex,
    startIndex + productsPerPage,
  );

  return (
    <>
      <Head>
        <title>{t("Shop | Koshaix", "দোকান | কোশাইক্স")}</title>
      </Head>

      <Header />

      <main className={styles.main}>
        {/* BANNER */}
        <section className={styles.banner}>
          <Container className={styles.container}>
            <div className={styles.content}>
              <h2>{t("Shop", "দোকান")}</h2>
            </div>
          </Container>
        </section>

        {/* SHOP */}
        <section className={styles.shop}>
          <Container>
            <div className={styles.wrapper}>
              {/* SIDEBAR */}
              <aside
                className={`${styles.sidebar} ${show ? styles.show : ""}`}
                onClick={toggleClass}
              >
                <div className={styles.sidebarWrapper}>
                  {/* TITLE */}
                  <div className={styles.title}>
                    <h3>{t("PRODUCT CATEGORIES", "পণ্য বিভাগ")}</h3>

                    <button className={styles.crossIcon}>
                      <FaXmark />
                    </button>
                  </div>

                  {/* CATEGORIES */}
                  <div className={styles.categories}>
                    {meatCategories.map((cat) => (
                      <label key={cat.id} className={styles.filterItem}>
                        <input
                          type="checkbox"
                          checked={selected.includes(cat.label)}
                          onChange={() => toggleCategory(cat.label)}
                        />
                        {t(cat.label, cat.labelBn)} ({cat.products.length})
                      </label>
                    ))}
                  </div>
                </div>
              </aside>

              {/* CONTENT */}
              <div className={styles.content}>
                {/* TOP BAR */}
                <div className={styles.topBar}>
                  {/* RESULTS */}
                  <p className={styles.showitems}>
                    {t("Showing", "প্রদর্শন")}{" "}
                    {sortedProducts.length === 0 ? 0 : startIndex + 1}–
                    {Math.min(
                      startIndex + productsPerPage,
                      sortedProducts.length,
                    )}{" "}
                    {t("of", "থেকে")} {sortedProducts.length}{" "}
                    {t("results", "ফলাফল")}
                  </p>

                  {/* FILTERS */}
                  <div className={styles.filters}>
                    {/* SORT */}
                    <select
                      className={styles.sort}
                      value={sort}
                      onChange={(e) => setSort(e.target.value)}
                    >
                      <option value="default">
                        {t("Default sorting", "ডিফল্ট সর্টিং")}
                      </option>

                      <option value="low">
                        {t("Price low to high", "মূল্য কম থেকে বেশি")}
                      </option>

                      <option value="high">
                        {t("Price high to low", "মূল্য বেশি থেকে কম")}
                      </option>
                    </select>

                    {/* MOBILE BUTTON */}
                    <button className={styles.catHam} onClick={toggleClass}>
                      <RiMenu3Fill />
                    </button>
                  </div>
                </div>

                {/* GRID */}
                <div className={styles.grid}>
                  {paginatedProducts.length > 0 ? (
                    paginatedProducts.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))
                  ) : (
                    <div className={styles.noProducts}>
                      <h3>
                        {t("No products found", "কোন পণ্য পাওয়া যায়নি")}
                      </h3>
                    </div>
                  )}
                </div>

                {/* PAGINATION */}
                {totalPages > 1 && (
                  <div className={styles.pagination}>
                    {/* PREV */}
                    <button
                      onClick={() =>
                        setCurrentPage((prev) => Math.max(prev - 1, 1))
                      }
                      disabled={currentPage === 1}
                    >
                      {t("Prev", "পূর্ববর্তী")}
                    </button>

                    {/* NUMBERS */}
                    {Array.from(
                      {
                        length: totalPages,
                      },
                      (_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentPage(index + 1)}
                          className={
                            currentPage === index + 1 ? styles.activePage : ""
                          }
                        >
                          {index + 1}
                        </button>
                      ),
                    )}

                    {/* NEXT */}
                    <button
                      onClick={() =>
                        setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                      }
                      disabled={currentPage === totalPages}
                    >
                      {t("Next", "পরবর্তী")}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </Container>
        </section>

        {/* QUALITY */}
        <section className={styles.quality}>
          <Container className={styles.container}>
            <div className={styles.row}>
              <div className={styles.item}>
                <div className={styles.icon}>
                  <NextImage src={"/images/logo.jpg"} alt="Koshaix" />
                </div>

                <h2>
                  {t(
                    "Koshaix brings you premium-quality fresh meat directly from trusted local stores",
                    "কোশাইক্স আপনাকে বিশ্বস্ত স্থানীয় দোকানগুলি থেকে প্রিমিয়াম-গুণের তাজা মাংস পেশ করে",
                  )}
                </h2>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
