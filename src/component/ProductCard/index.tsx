import Link from "next/link";
import styles from "./product-card.module.scss";
import NextImage from "@/hooks/NextImage";

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
};

export default function ProductCard({ product }: Props) {
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
        <Link href={`/shop/${product.id}`}>
          <button className={styles.btn}>Find Local Store</button>
        </Link>
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{product.name}</h3>

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
