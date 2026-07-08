import Link from "next/link";
import styles from "./product-card.module.scss";
import NextImage from "@/hooks/NextImage";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useWishlist } from "@/context/WishlistContext";
import { useLanguage } from "@/context/LanguageContext";

export type Product = {
  id: number;
  name: string;
  nameBn: string;
  price: number;
  priceBn?: string;
  oldPrice?: number;
  oldPriceBn?: string;
  image: string;
  category?: string; // ✅ optional (merged data ke liye)
};

type Props = {
  product: Product;
  hideWishlist?: boolean;
};

export default function ProductCard({ product, hideWishlist = false }: Props) {
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { t } = useLanguage();
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
          <button className={styles.btn}>
            {t("Find Local Store", "স্থানীয় দোকান খুঁজুন")}
          </button>
        </Link>
      </div>

      <div className={styles.content}>
        <Link className={styles.titleWrap} href={`/shop/${product.id}`}>
          <h3 className={styles.title}>{t(product.name, product.nameBn)}</h3>
        </Link>
        <div className={styles.priceBox}>
          <span className={styles.price}>
            ${t(product.price.toFixed(2), product.priceBn || "")}
          </span>

          {product.oldPrice !== undefined && (
            <span className={styles.oldPrice}>
              ${t(product.oldPrice.toFixed(2), product.oldPriceBn || "")}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
