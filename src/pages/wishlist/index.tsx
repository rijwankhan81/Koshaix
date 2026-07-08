import { FaTrash } from "react-icons/fa";

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

  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.banner}>
          <Container className={styles.container}>
            <div className={styles.content}>
              <h2>{t("My Wishlist", "আমার পছন্দের তালিকা")}</h2>
              {/* <p>
                {wishlist.length} item
                {wishlist.length !== 1 && "s"} saved
              </p> */}
            </div>
          </Container>
        </section>
        <section className={styles.wishlist}>
          <Container>
            {wishlist.length === 0 ? (
              <div className={styles.empty}>
                <h2>
                  {t("Your wishlist is empty", "আপনার পছন্দের তালিকা খালি")}
                </h2>
              </div>
            ) : (
              <div className={styles.grid}>
                {wishlist.map((product) => (
                  <div key={product.id} className={styles.item}>
                    {/* REMOVE BUTTON */}
                    <button
                      className={styles.removeBtn}
                      onClick={() => toggleWishlist(product)}
                    >
                      <FaTrash />
                    </button>

                    {/* PRODUCT */}
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
