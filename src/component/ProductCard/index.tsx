import styles from "./product-card.module.scss";
import NextImage from "@/hooks/NextImage";

type Product = {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  category: string;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <NextImage
          src={product.image}
          alt={product.name}
          className={styles.image}
        />
        <button className={styles.btn}>Add to Cart</button>
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{product.name}</h3>

        <div className={styles.priceBox}>
          <span className={styles.price}>${product.price}</span>
          {product.oldPrice && (
            <span className={styles.oldPrice}>${product.oldPrice}</span>
          )}
        </div>
      </div>
    </div>
  );
}
