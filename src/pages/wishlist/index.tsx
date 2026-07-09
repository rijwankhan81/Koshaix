import { FaTrash, FaHeart, FaArrowRight } from "react-icons/fa";
import Link from "next/link";

import { useWishlist } from "@/context/WishlistContext";
import ProductCard from "@/component/ProductCard";

import styles from "./wishlist.module.scss";
import Footer from "@/layout/footer";
import Header from "@/layout/header";
import { Container } from "react-bootstrap";
import { useLanguage } from "@/context/LanguageContext";

export default function WishlistPage() {
  const { wishlist, toggleWishlist } = useWishlist();
  const { t } = useLanguage();

  const hasItems = wishlist.length > 0;

  return (
    <>
      <Header />
      <main className={styles.main}>
        {/* BANNER */}
        <section className={styles.banner}>
          <Container className={styles.container}>
            <span className={styles.breadcrumb}>
              {t("Home", "হোম")} <span>/</span>{" "}
              {t("Wishlist", "পছন্দের তালিকা")}
            </span>
            <div className={styles.bannerRow}>
              <div>
                <h1>{t("My Wishlist", "আমার পছন্দের তালিকা")}</h1>
                <p>
                  {hasItems
                    ? `${wishlist.length} ${
                        wishlist.length === 1
                          ? t("item saved", "টি আইটেম সংরক্ষিত")
                          : t("items saved", "টি আইটেম সংরক্ষিত")
                      }`
                    : t(
                        "Save cuts you're interested in and come back anytime.",
                        "আপনার পছন্দের কাট সংরক্ষণ করুন এবং যেকোনো সময় ফিরে আসুন।",
                      )}
                </p>
              </div>

              {hasItems && (
                <button
                  className={styles.clearAllBtn}
                  onClick={() => wishlist.forEach((p) => toggleWishlist(p))}
                >
                  <FaTrash />
                  {t("Clear Wishlist", "পছন্দের তালিকা সাফ করুন")}
                </button>
              )}
            </div>
          </Container>
        </section>

        {/* WISHLIST */}
        <section className={styles.wishlist}>
          <Container>
            {!hasItems ? (
              <div className={styles.empty}>
                <span className={styles.emptyIcon}>
                  <FaHeart />
                </span>
                <h2>
                  {t("Your wishlist is empty", "আপনার পছন্দের তালিকা খালি")}
                </h2>
                <p>
                  {t(
                    "Browse fresh cuts and tap the heart icon to save them here for later.",
                    "তাজা কাট ব্রাউজ করুন এবং পরে দেখার জন্য হার্ট আইকনে ট্যাপ করে সংরক্ষণ করুন।",
                  )}
                </p>
                <Link href="/shop" className={styles.emptyCta}>
                  {t("Browse Shop", "দোকান ব্রাউজ করুন")} <FaArrowRight />
                </Link>
              </div>
            ) : (
              <div className={styles.grid}>
                {wishlist.map((product) => (
                  <div key={product.id} className={styles.item}>
                    <button
                      className={styles.removeBtn}
                      onClick={() => toggleWishlist(product)}
                      aria-label={t(
                        "Remove from wishlist",
                        "পছন্দের তালিকা থেকে সরান",
                      )}
                    >
                      <FaTrash />
                    </button>

                    <ProductCard
                      product={{
                        ...product,
                        nameBn:
                          (product as any).nameBn ?? (product as any).name,
                      }}
                      hideWishlist
                    />
                  </div>
                ))}
              </div>
            )}
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
