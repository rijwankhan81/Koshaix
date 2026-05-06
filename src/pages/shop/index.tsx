// pages/shop.tsx
import styles from "./shop.module.scss";
import { Container } from "react-bootstrap";
import { meatCategories } from "@/constants/meatCategories";
import ProductCard from "@/component/ProductCard";
import { useState } from "react";
import Head from "next/head";
import Header from "@/layout/header";
import Footer from "@/layout/footer";
import NextImage from "@/hooks/NextImage";
import { RiMenu3Fill } from "react-icons/ri";
import { FaXmark } from "react-icons/fa6";

export default function ShopPage() {
  const [show, setShow] = useState(false);
  // ✅ flatten products
  const allProducts = meatCategories.flatMap((cat) =>
    cat.products.map((p) => ({
      ...p,
      category: cat.label,
    })),
  );

  const [selected, setSelected] = useState<string[]>([]);
  const [sort, setSort] = useState("default"); // ✅ FIX

  const toggleClass = () => {
    setShow((prevState) => !prevState);
  };

  const toggleCategory = (label: string) => {
    setSelected((prev) =>
      prev.includes(label) ? prev.filter((c) => c !== label) : [...prev, label],
    );
  };

  // ✅ filter
  const filteredProducts =
    selected.length === 0
      ? allProducts
      : allProducts.filter((p) => selected.includes(p.category));

  // ✅ sort
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sort === "low") return a.price - b.price;
    if (sort === "high") return b.price - a.price;
    return a.id - b.id; // default
  });

  return (
    <>
      <Head>
        <title>Shop | Koshaix</title>
      </Head>
      <Header />
      <main className={styles.main}>
        <section className={styles.banner}>
          <Container className={styles.container}>
            <div className={styles.content}>
              <h2>Shop</h2>
            </div>
          </Container>
        </section>
        <section className={styles.shop}>
          <Container>
            <div className={styles.wrapper}>
              {/* SIDEBAR */}
              <aside
                className={`${show ? styles.show : ""} ${styles.sidebar} `}
                onClick={toggleClass}
              >
                <div className={styles.sidebarWrapper}>
                  <div className={styles.title}>
                    <h3>PRODUCT CATEGORIES</h3>
                    <div className={styles.crossIcon}>
                      <FaXmark />
                    </div>
                  </div>

                  <div className={styles.categories}>
                    {meatCategories.map((cat) => (
                      <label key={cat.id} className={styles.filterItem}>
                        <input
                          type="checkbox"
                          checked={selected.includes(cat.label)}
                          onChange={() => toggleCategory(cat.label)}
                        />
                        {cat.label} ({cat.products.length})
                      </label>
                    ))}
                  </div>
                </div>
              </aside>

              {/* CONTENT */}
              <div className={styles.content}>
                {/* TOP BAR */}
                <div className={styles.topBar}>
                  <p className={styles.showitems}>
                    Showing {sortedProducts.length} of {allProducts.length}{" "}
                    results
                  </p>

                  <div className={styles.filters}>
                    <select
                      className={styles.sort}
                      value={sort}
                      onChange={(e) => setSort(e.target.value)}
                    >
                      <option value="default">Default sorting</option>
                      <option value="low">Price low to high</option>
                      <option value="high">Price high to low</option>
                    </select>
                    <div className={styles.catHam} onClick={toggleClass}>
                      <RiMenu3Fill />
                    </div>
                  </div>
                </div>

                {/* GRID */}
                <div className={styles.grid}>
                  {sortedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>
        <section className={styles.quality}>
          <Container className={styles.container}>
            <div className={styles.row}>
              <div className={styles.item}>
                <div className={styles.icon}>
                  <NextImage src={"/images/logo.jpg"} alt={""} />
                </div>
                <h2>Koshaix brings you premium-quality</h2>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
