import styles from "./shop.module.scss";
import { Container } from "react-bootstrap";
import { meatCategories } from "@/constants/meatCategories";
import ProductCard from "@/component/ProductCard";

import { useEffect, useMemo, useState } from "react";

import Head from "next/head";
import Header from "@/layout/header";
import Footer from "@/layout/footer";

import { RiMenu3Fill } from "react-icons/ri";
import { FaXmark, FaStar } from "react-icons/fa6";
import { FaShieldAlt, FaTruck, FaLeaf, FaTags } from "react-icons/fa";

import { useRouter } from "next/router";
import { useLanguage } from "@/context/LanguageContext";
import Newsletter from "@/component/newslatter";

type Freshness = "fresh_today" | "chilled" | "frozen";

const FRESHNESS_OPTIONS: { value: Freshness; en: string; bn: string }[] = [
  { value: "fresh_today", en: "Fresh Today", bn: "আজকের তাজা" },
  { value: "chilled", en: "Chilled", bn: "ঠান্ডা সংরক্ষিত" },
  { value: "frozen", en: "Frozen", bn: "হিমায়িত" },
];

const RATING_OPTIONS = [4, 3, 2];

export default function ShopPage() {
  const router = useRouter();
  const { category, search } = router.query;
  const { t } = useLanguage();

  // MOBILE SIDEBAR
  const [show, setShow] = useState(false);

  // FLATTEN PRODUCTS (once)
  const allProducts = useMemo(
    () =>
      meatCategories.flatMap((cat) =>
        cat.products.map((p) => ({
          ...p,
          category: cat.label,
        })),
      ),
    [],
  );

  const priceBounds = useMemo(() => {
    const prices = allProducts.map((p) => p.price);
    return {
      min: Math.floor(Math.min(...prices)),
      max: Math.ceil(Math.max(...prices)),
    };
  }, [allProducts]);

  // FILTERS
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedFreshness, setSelectedFreshness] = useState<Freshness[]>([]);
  const [minRating, setMinRating] = useState<number>(0);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [priceMin, setPriceMin] = useState(priceBounds.min);
  const [priceMax, setPriceMax] = useState(priceBounds.max);
  const [sort, setSort] = useState("default");

  // PAGINATION
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  // MOBILE FILTER TOGGLE
  const toggleClass = () => setShow((prev) => !prev);

  // TOGGLE HELPERS
  const toggleCategory = (label: string) => {
    setSelectedCategories((prev) =>
      prev.includes(label) ? prev.filter((c) => c !== label) : [...prev, label],
    );
  };

  const toggleFreshness = (value: Freshness) => {
    setSelectedFreshness((prev) =>
      prev.includes(value) ? prev.filter((f) => f !== value) : [...prev, value],
    );
  };

  const clearAllFilters = () => {
    setSelectedCategories([]);
    setSelectedFreshness([]);
    setMinRating(0);
    setInStockOnly(false);
    setPriceMin(priceBounds.min);
    setPriceMax(priceBounds.max);
  };

  // URL CATEGORY SELECT
  useEffect(() => {
    if (category && typeof category === "string") {
      setSelectedCategories([category]);
    }
  }, [category]);

  // RESET PAGINATION on filter change
  useEffect(() => {
    setCurrentPage(1);
  }, [
    selectedCategories,
    selectedFreshness,
    minRating,
    inStockOnly,
    priceMin,
    priceMax,
    sort,
  ]);

  // FILTER PRODUCTS
  const filteredProducts = allProducts.filter((product) => {
    const categoryMatch =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category);

    const searchMatch =
      !search ||
      product.name.toLowerCase().includes(String(search).toLowerCase());

    const freshnessMatch =
      selectedFreshness.length === 0 ||
      (product.freshness &&
        selectedFreshness.includes(product.freshness as Freshness));

    const ratingMatch = minRating === 0 || (product.rating ?? 0) >= minRating;

    const stockMatch = !inStockOnly || product.inStock !== false;

    const priceMatch = product.price >= priceMin && product.price <= priceMax;

    return (
      categoryMatch &&
      searchMatch &&
      freshnessMatch &&
      ratingMatch &&
      stockMatch &&
      priceMatch
    );
  });

  // SORT PRODUCTS
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sort === "low") return a.price - b.price;
    if (sort === "high") return b.price - a.price;
    if (sort === "rating") return (b.rating ?? 0) - (a.rating ?? 0);
    return a.id - b.id;
  });

  // PAGINATION
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const paginatedProducts = sortedProducts.slice(
    startIndex,
    startIndex + productsPerPage,
  );

  const activeFilterCount =
    selectedCategories.length +
    selectedFreshness.length +
    (minRating > 0 ? 1 : 0) +
    (inStockOnly ? 1 : 0) +
    (priceMin !== priceBounds.min || priceMax !== priceBounds.max ? 1 : 0);

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
            <span className={styles.breadcrumb}>
              {t("Home", "হোম")} <span>/</span> {t("Shop", "দোকান")}
            </span>
            <h1>{t("Shop Fresh Meat", "তাজা মাংস কিনুন")}</h1>
            <p>
              {t(
                "Browse every cut, filter by freshness and price, and connect with a verified shop near you.",
                "প্রতিটি কাট ব্রাউজ করুন, তাজা ও মূল্য অনুযায়ী ফিল্টার করুন, এবং আপনার কাছের যাচাইকৃত দোকানের সাথে যোগাযোগ করুন।",
              )}
            </p>
          </Container>
        </section>

        {/* SHOP */}
        <section className={styles.shop}>
          <Container>
            <div className={styles.wrapper}>
              {/* SIDEBAR */}
              <aside className={`${styles.sidebar} ${show ? styles.show : ""}`}>
                <div
                  className={styles.sidebarOverlay}
                  onClick={toggleClass}
                  aria-hidden="true"
                />
                <div className={styles.sidebarWrapper}>
                  <div className={styles.sidebarHead}>
                    <h3>{t("Filters", "ফিল্টার")}</h3>
                    <button className={styles.crossIcon} onClick={toggleClass}>
                      <FaXmark />
                    </button>
                  </div>

                  {activeFilterCount > 0 && (
                    <button
                      className={styles.clearAll}
                      onClick={clearAllFilters}
                    >
                      {t("Clear all filters", "সব ফিল্টার সাফ করুন")} (
                      {activeFilterCount})
                    </button>
                  )}

                  {/* CATEGORY */}
                  <div className={styles.filterGroup}>
                    <h4>{t("Category", "ক্যাটাগরি")}</h4>
                    <div className={styles.checkList}>
                      {meatCategories.map((cat) => (
                        <label key={cat.id} className={styles.checkItem}>
                          <input
                            type="checkbox"
                            checked={selectedCategories.includes(cat.label)}
                            onChange={() => toggleCategory(cat.label)}
                          />
                          <span className={styles.checkbox} />
                          <span className={styles.checkLabel}>
                            {t(cat.label, cat.labelBn)}
                          </span>
                          <span className={styles.count}>
                            ({cat.products.length})
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* PRICE RANGE */}
                  <div className={styles.filterGroup}>
                    <h4>{t("Price Range", "মূল্য সীমা")}</h4>
                    <div className={styles.priceInputs}>
                      <div className={styles.priceField}>
                        <span>$</span>
                        <input
                          type="number"
                          min={priceBounds.min}
                          max={priceMax}
                          value={priceMin}
                          onChange={(e) => setPriceMin(Number(e.target.value))}
                        />
                      </div>
                      <span className={styles.priceDash}>–</span>
                      <div className={styles.priceField}>
                        <span>$</span>
                        <input
                          type="number"
                          min={priceMin}
                          max={priceBounds.max}
                          value={priceMax}
                          onChange={(e) => setPriceMax(Number(e.target.value))}
                        />
                      </div>
                    </div>
                    <input
                      type="range"
                      min={priceBounds.min}
                      max={priceBounds.max}
                      value={priceMax}
                      onChange={(e) => setPriceMax(Number(e.target.value))}
                      className={styles.rangeSlider}
                    />
                  </div>

                  {/* FRESHNESS */}
                  <div className={styles.filterGroup}>
                    <h4>{t("Freshness", "সতেজতা")}</h4>
                    <div className={styles.checkList}>
                      {FRESHNESS_OPTIONS.map((f) => (
                        <label key={f.value} className={styles.checkItem}>
                          <input
                            type="checkbox"
                            checked={selectedFreshness.includes(f.value)}
                            onChange={() => toggleFreshness(f.value)}
                          />
                          <span className={styles.checkbox} />
                          <span className={styles.checkLabel}>
                            {t(f.en, f.bn)}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* RATING */}
                  <div className={styles.filterGroup}>
                    <h4>{t("Minimum Rating", "সর্বনিম্ন রেটিং")}</h4>
                    <div className={styles.ratingList}>
                      {RATING_OPTIONS.map((r) => (
                        <button
                          key={r}
                          className={`${styles.ratingBtn} ${
                            minRating === r ? styles.ratingBtnActive : ""
                          }`}
                          onClick={() => setMinRating(minRating === r ? 0 : r)}
                        >
                          {Array.from({ length: r }).map((_, i) => (
                            <FaStar key={i} />
                          ))}
                          <span>{t("& up", "ও তার বেশি")}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* STOCK */}
                  <div className={styles.filterGroup}>
                    <label className={styles.toggleRow}>
                      <span>{t("In Stock Only", "শুধু স্টকে আছে")}</span>
                      <span className={styles.toggleSwitch}>
                        <input
                          type="checkbox"
                          checked={inStockOnly}
                          onChange={(e) => setInStockOnly(e.target.checked)}
                        />
                        <span className={styles.toggleTrack} />
                      </span>
                    </label>
                  </div>
                </div>
              </aside>

              {/* CONTENT */}
              <div className={styles.content}>
                {/* ACTIVE FILTER CHIPS */}
                {activeFilterCount > 0 && (
                  <div className={styles.chipsRow}>
                    {selectedCategories.map((c) => (
                      <button
                        key={c}
                        className={styles.chip}
                        onClick={() => toggleCategory(c)}
                      >
                        {c} <FaXmark />
                      </button>
                    ))}
                    {selectedFreshness.map((f) => {
                      const opt = FRESHNESS_OPTIONS.find((o) => o.value === f);
                      return (
                        <button
                          key={f}
                          className={styles.chip}
                          onClick={() => toggleFreshness(f)}
                        >
                          {opt ? t(opt.en, opt.bn) : f} <FaXmark />
                        </button>
                      );
                    })}
                    {minRating > 0 && (
                      <button
                        className={styles.chip}
                        onClick={() => setMinRating(0)}
                      >
                        {minRating}★ {t("& up", "ও তার বেশি")} <FaXmark />
                      </button>
                    )}
                    {inStockOnly && (
                      <button
                        className={styles.chip}
                        onClick={() => setInStockOnly(false)}
                      >
                        {t("In Stock", "স্টকে আছে")} <FaXmark />
                      </button>
                    )}
                  </div>
                )}

                {/* TOP BAR */}
                <div className={styles.topBar}>
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

                  <div className={styles.filters}>
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
                      <option value="rating">
                        {t("Highest rated", "সর্বোচ্চ রেটেড")}
                      </option>
                    </select>

                    <button className={styles.catHam} onClick={toggleClass}>
                      <RiMenu3Fill />
                      <span>{t("Filters", "ফিল্টার")}</span>
                      {activeFilterCount > 0 && (
                        <span className={styles.hamBadge}>
                          {activeFilterCount}
                        </span>
                      )}
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
                      <p>
                        {t(
                          "Try adjusting your filters or search term.",
                          "আপনার ফিল্টার বা সার্চ শব্দ পরিবর্তন করে দেখুন।",
                        )}
                      </p>
                      <button onClick={clearAllFilters}>
                        {t("Clear all filters", "সব ফিল্টার সাফ করুন")}
                      </button>
                    </div>
                  )}
                </div>

                {/* PAGINATION */}
                {totalPages > 1 && (
                  <div className={styles.pagination}>
                    <button
                      onClick={() =>
                        setCurrentPage((prev) => Math.max(prev - 1, 1))
                      }
                      disabled={currentPage === 1}
                    >
                      {t("Prev", "পূর্ববর্তী")}
                    </button>

                    {Array.from({ length: totalPages }, (_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentPage(index + 1)}
                        className={
                          currentPage === index + 1 ? styles.activePage : ""
                        }
                      >
                        {index + 1}
                      </button>
                    ))}

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

        {/* TRUST / QUALITY */}
        <section className={styles.quality}>
          <Container>
            <div className={styles.qualityGrid}>
              <div className={styles.qualityItem}>
                <FaShieldAlt />
                <h4>{t("Verified Shops", "যাচাইকৃত দোকান")}</h4>
                <p>
                  {t(
                    "Every shop is checked for hygiene before listing.",
                    "তালিকাভুক্ত হওয়ার আগে প্রতিটি দোকান স্বাস্থ্যবিধির জন্য যাচাই করা হয়।",
                  )}
                </p>
              </div>
              <div className={styles.qualityItem}>
                <FaLeaf />
                <h4>{t("Freshness Tracked", "সতেজতা ট্র্যাক করা")}</h4>
                <p>
                  {t(
                    "Know what's fresh today versus frozen stock.",
                    "আজ কী তাজা আর কী হিমায়িত তা জানুন।",
                  )}
                </p>
              </div>
              <div className={styles.qualityItem}>
                <FaTruck />
                <h4>{t("Local & Fast", "স্থানীয় ও দ্রুত")}</h4>
                <p>
                  {t(
                    "Connect with shops within your own neighborhood.",
                    "আপনার নিজের এলাকার দোকানের সাথে যোগাযোগ করুন।",
                  )}
                </p>
              </div>
              <div className={styles.qualityItem}>
                <FaTags />
                <h4>{t("Fair Pricing", "ন্যায্য মূল্য")}</h4>
                <p>
                  {t(
                    "No middlemen markups — deal with the shop directly.",
                    "কোনো মধ্যস্থতাকারীর বাড়তি মূল্য নেই — সরাসরি দোকানের সাথে লেনদেন করুন।",
                  )}
                </p>
              </div>
            </div>
          </Container>
        </section>
        <Newsletter />
      </main>

      <Footer />
    </>
  );
}
