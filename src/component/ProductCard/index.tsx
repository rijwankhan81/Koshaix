import Link from "next/link";
import styles from "./product-card.module.scss";
import NextImage from "@/hooks/NextImage";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useWishlist } from "@/context/WishlistContext";

export type Product = {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  category?: string; // ✅ optional (merged data ke liye)
};

type Props = {
  product: Product;
  hideWishlist?: boolean;
};

export default function ProductCard({ product, hideWishlist = false }: Props) {
  const { toggleWishlist, isInWishlist } = useWishlist();

  const wished = isInWishlist(product.id);
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <NextImage
          src={product.image}
          alt={product.name}
          className={styles.image}
        />
        {product.category && (
          <span className={styles.badge}>{product.category}</span>
        )}
        {!hideWishlist && (
          <button
            className={styles.whishlistIcon}
            onClick={() => toggleWishlist(product)}
          >
            {wished ? <FaHeart /> : <FaRegHeart />}
          </button>
        )}
        <Link className={styles.btnWrap} href={`/shop/${product.id}`}>
          <button className={styles.btn}>Find Local Store</button>
        </Link>
      </div>

      <div className={styles.content}>
        <Link className={styles.titleWrap} href={`/shop/${product.id}`}>
          <h3 className={styles.title}>{product.name}</h3>
        </Link>
        <div className={styles.priceBox}>
          <span className={styles.price}>${product.price.toFixed(2)}</span>

          {product.oldPrice !== undefined && (
            <span className={styles.oldPrice}>
              ${product.oldPrice.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
