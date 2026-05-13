import { FaTrash } from "react-icons/fa";

import { useWishlist } from "@/context/WishlistContext";
import ProductCard from "@/component/ProductCard";

import styles from "./wishlist.module.scss";
import Footer from "@/layout/footer";
import Header from "@/layout/header";
import { Container } from "react-bootstrap";

export default function WishlistPage() {
  const { wishlist, toggleWishlist } = useWishlist();

  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.banner}>
          <Container className={styles.container}>
            <div className={styles.content}>
              <h2>My Wishlist</h2>
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
                <h2>Your wishlist is empty</h2>
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
                    <ProductCard product={product} hideWishlist />
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
