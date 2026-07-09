import Link from "next/link";
import styles from "./product-card.module.scss";
import NextImage from "@/hooks/NextImage";
import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa";
import { useWishlist } from "@/context/WishlistContext";
import { useLanguage } from "@/context/LanguageContext";
import { FRESHNESS_LABEL, type Freshness } from "@/constants/meatCategories";

export type Product = {
  id: number;
  slug?: string;
  name: string;
  nameBn: string;
  shortDesc?: string;
  shortDescBn?: string;
  price: number;
  priceBn?: string;
  oldPrice?: number;
  oldPriceBn?: string;
  unit?: string;
  unitBn?: string;
  image: string;
  category?: string; // ✅ optional (merged data ke liye)
  rating?: number;
  reviewCount?: number;
  inStock?: boolean;
  freshness?: Freshness;
  minOrderLabel?: string;
  minOrderLabelBn?: string;
  isBestSeller?: boolean;
  isNew?: boolean;
};

type Props = {
  product: Product;
  hideWishlist?: boolean;
};

export default function ProductCard({ product, hideWishlist = false }: Props) {
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { t } = useLanguage();
  const wished = isInWishlist(product.id);
  const outOfStock = product.inStock === false;

  const discountPct =
    product.oldPrice && product.oldPrice > product.price
      ? Math.round(
          ((product.oldPrice - product.price) / product.oldPrice) * 100,
        )
      : null;

  const fresh = product.freshness ? FRESHNESS_LABEL[product.freshness] : null;

  return (
    <div className={`${styles.card} ${outOfStock ? styles.cardDisabled : ""}`}>
      <div className={styles.imageWrapper}>
        <NextImage
          src={product.image}
          alt={product.name}
          className={styles.image}
        />
        <span className={styles.cardCut} aria-hidden="true" />

        {outOfStock && (
          <div className={styles.stockOverlay}>
            <span>{t("Out of Stock", "স্টকে নেই")}</span>
          </div>
        )}

        <div className={styles.topRow}>
          <div className={styles.topLeftBadges}>
            {product.category && (
              <span className={styles.badge}>{product.category}</span>
            )}
            {fresh && (
              <span
                className={`${styles.freshBadge} ${
                  product.freshness === "fresh_today" ? styles.freshToday : ""
                }`}
              >
                {t(fresh.en, fresh.bn)}
              </span>
            )}
            {product.isBestSeller && (
              <span className={styles.bestSellerBadge}>
                {t("Best Seller", "বেস্ট সেলার")}
              </span>
            )}
            {product.isNew && (
              <span className={styles.newBadge}>{t("New", "নতুন")}</span>
            )}
          </div>
          {discountPct && (
            <span className={styles.discountBadge}>-{discountPct}%</span>
          )}
        </div>

        {!hideWishlist && (
          <button
            type="button"
            className={styles.wishlistIcon}
            onClick={() => toggleWishlist(product)}
            aria-label={t("Add to wishlist", "উইশলিস্টে যোগ করুন")}
            aria-pressed={wished}
          >
            {wished ? <FaHeart /> : <FaRegHeart />}
          </button>
        )}

        <Link
          className={styles.btnWrap}
          href={outOfStock ? "#" : `/shop/${product.id}`}
          aria-disabled={outOfStock}
          onClick={(e) => outOfStock && e.preventDefault()}
        >
          <button type="button" className={styles.btn} disabled={outOfStock}>
            {outOfStock
              ? t("Notify Me", "আমাকে জানান")
              : t("Find Local Store", "স্থানীয় দোকান খুঁজুন")}
          </button>
        </Link>
      </div>

      <div className={styles.content}>
        {product.rating !== undefined && (
          <div className={styles.ratingRow}>
            <FaStar className={styles.starIcon} />
            <span className={styles.ratingValue}>
              {product.rating.toFixed(1)}
            </span>
            {product.reviewCount !== undefined && (
              <span className={styles.reviewCount}>
                ({product.reviewCount})
              </span>
            )}
          </div>
        )}

        <Link className={styles.titleWrap} href={`/shop/${product.id}`}>
          <h3 className={styles.title}>{t(product.name, product.nameBn)}</h3>
        </Link>

        {product.shortDesc && (
          <p className={styles.shortDesc}>
            {t(product.shortDesc, product.shortDescBn || "")}
          </p>
        )}

        <div className={styles.priceBox}>
          <span className={styles.price}>
            ${t(product.price.toFixed(2), product.priceBn || "")}
            {product.unit && (
              <span className={styles.unit}>
                /
                {t(
                  product.unit.replace("per ", ""),
                  (product.unitBn || "").replace("প্রতি ", ""),
                )}
              </span>
            )}
          </span>

          {product.oldPrice !== undefined && (
            <span className={styles.oldPrice}>
              ${t(product.oldPrice.toFixed(2), product.oldPriceBn || "")}
            </span>
          )}
        </div>

        {product.minOrderLabel && (
          <p className={styles.minOrder}>
            {t(product.minOrderLabel, product.minOrderLabelBn || "")}
          </p>
        )}
      </div>
    </div>
  );
}
