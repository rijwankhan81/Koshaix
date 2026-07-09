// pages/product/[id].tsx

import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import { Container } from "react-bootstrap";
import Link from "next/link";

import styles from "./single-product.module.scss";

import Header from "@/layout/header";
import Footer from "@/layout/footer";
import NextImage from "@/hooks/NextImage";

import {
  meatCategories,
  FRESHNESS_LABEL,
  type Freshness,
} from "@/constants/meatCategories";
import ProductCard from "@/component/ProductCard";
import { localStores } from "@/constants/localStores";
import { MdOutlineLocationOn } from "react-icons/md";
import {
  FaHeart,
  FaRegHeart,
  FaStar,
  FaShieldAlt,
  FaCommentDots,
} from "react-icons/fa";
import Choose from "@/component/whychooseus";
import { useLanguage } from "@/context/LanguageContext";
import { useWishlist } from "@/context/WishlistContext";

type Product = {
  id: number;
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
  category?: string;
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
  relatedProducts: Product[];
};

export default function SingleProductPage({ product, relatedProducts }: Props) {
  const nearbyStores = localStores.filter((store) =>
    store.categories.includes(product.category || ""),
  );
  const { t } = useLanguage();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const wished = isInWishlist(product.id);
  const outOfStock = product.inStock === false;
  const fresh = product.freshness ? FRESHNESS_LABEL[product.freshness] : null;

  const discountPct =
    product.oldPrice && product.oldPrice > product.price
      ? Math.round(
          ((product.oldPrice - product.price) / product.oldPrice) * 100,
        )
      : null;

  return (
    <>
      <Head>
        <title>{product.name} | Koshaix</title>
        <meta
          name="description"
          content={`${product.name} — ${product.shortDesc || "premium fresh meat, connected locally on Koshaix."}`}
        />
      </Head>

      <Header />

      <main className={styles.main}>
        {/* PRODUCT DETAIL */}
        <section className={styles.productDetail}>
          <Container>
            <div className={styles.breadcrumb}>
              <Link href="/">{t("Home", "হোম")}</Link>
              <span>/</span>
              <Link href="/shop">{t("Shop", "দোকান")}</Link>
              {product.category && (
                <>
                  <span>/</span>
                  <Link href={`/shop?category=${product.category}`}>
                    {product.category}
                  </Link>
                </>
              )}
              <span>/</span>
              <span className={styles.breadcrumbCurrent}>
                {t(product.name, product.nameBn)}
              </span>
            </div>

            <div className={styles.wrapper}>
              {/* LEFT IMAGE */}
              <div className={styles.imageSection}>
                <div className={styles.imageWrapper}>
                  <NextImage
                    src={product.image}
                    alt={product.name}
                    className={styles.image}
                  />
                  <span className={styles.imageCut} aria-hidden="true" />

                  {outOfStock && (
                    <div className={styles.stockOverlay}>
                      <span>{t("Out of Stock", "স্টকে নেই")}</span>
                    </div>
                  )}

                  {discountPct && (
                    <span className={styles.discountBadge}>
                      -{discountPct}%
                    </span>
                  )}
                </div>
              </div>

              {/* RIGHT CONTENT */}
              <div className={styles.content}>
                <div className={styles.badgeRow}>
                  {product.category && (
                    <span className={styles.category}>{product.category}</span>
                  )}
                  {fresh && (
                    <span
                      className={`${styles.freshBadge} ${
                        product.freshness === "fresh_today"
                          ? styles.freshToday
                          : ""
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

                <h1>{t(product.name, product.nameBn)}</h1>

                {product.rating !== undefined && (
                  <div className={styles.ratingRow}>
                    <FaStar className={styles.starIcon} />
                    <span className={styles.ratingValue}>
                      {product.rating.toFixed(1)}
                    </span>
                    {product.reviewCount !== undefined && (
                      <span className={styles.reviewCount}>
                        ({product.reviewCount} {t("reviews", "রিভিউ")})
                      </span>
                    )}
                  </div>
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

                  {product.oldPrice && (
                    <span className={styles.oldPrice}>
                      $
                      {t(product.oldPrice.toFixed(2), product.oldPriceBn || "")}
                    </span>
                  )}
                </div>

                {product.minOrderLabel && (
                  <p className={styles.minOrder}>
                    {t(product.minOrderLabel, product.minOrderLabelBn || "")}
                  </p>
                )}

                <p className={styles.description}>
                  {t(
                    product.shortDesc ||
                      "Premium quality fresh meat sourced directly from trusted farms and processed hygienically to ensure freshness, flavor, and nutrition.",
                    product.shortDescBn ||
                      "প্রিমিয়াম কোয়ালিটির তাজা মাংস বিশ্বস্ত খামার থেকে সরাসরি সংগৃহীত এবং স্বাস্থ্যসম্মতভাবে প্রক্রিয়াজাত, যাতে তাজা স্বাদ ও পুষ্টি নিশ্চিত থাকে।",
                  )}
                </p>

                <div className={styles.actions}>
                  <a href="#nearby-stores" className={styles.primaryBtn}>
                    {t("Find Local Store", "স্থানীয় দোকান খুঁজুন")}
                  </a>

                  <button
                    type="button"
                    className={styles.secondaryBtn}
                    onClick={() => toggleWishlist(product)}
                    aria-pressed={wished}
                  >
                    {wished ? <FaHeart /> : <FaRegHeart />}
                    {wished
                      ? t("Saved to Wishlist", "উইশলিস্টে সংরক্ষিত")
                      : t("Add to Wishlist", "উইশলিস্টে যোগ করুন")}
                  </button>
                </div>

                <div className={styles.trustRow}>
                  <span>
                    <FaShieldAlt /> {t("Verified Sellers", "যাচাইকৃত বিক্রেতা")}
                  </span>
                  <span>
                    <FaCommentDots /> {t("Direct Contact", "সরাসরি যোগাযোগ")}
                  </span>
                </div>

                <div className={styles.meta}>
                  <p>
                    <strong>{t("Category:", "বিভাগ:")}</strong>{" "}
                    {product.category}
                  </p>
                  <p>
                    <strong>{t("Availability:", "উপলব্ধতা:")}</strong>{" "}
                    {outOfStock
                      ? t("Out of Stock", "স্টকে নেই")
                      : t("In Stock", "স্টকে আছে")}
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* NEARBY STORES */}
        <section id="nearby-stores" className={styles.storeSection}>
          <Container>
            <div className={styles.head}>
              <h2>{t("Nearby Local Stores", "নিকটবর্তী স্থানীয় দোকান")}</h2>
              <p className={styles.desc}>
                {t(
                  "Contact nearby trusted stores directly to place your order quickly.",
                  "নিকটবর্তী বিশ্বস্ত দোকানগুলির সাথে সরাসরি যোগাযোগ করে আপনার অর্ডার দিন।",
                )}
              </p>
            </div>

            {nearbyStores.length > 0 ? (
              <div className={styles.storeGrid}>
                {nearbyStores.map((store) => (
                  <div key={store.id} className={styles.storeCard}>
                    <div className={styles.storeImage}>
                      <NextImage
                        src={store.image}
                        alt={store.name}
                        className={styles.image}
                      />
                      <span className={styles.distance}>{store.distance}</span>
                    </div>

                    <div className={styles.storeContent}>
                      <h3>{t(store.name || "", store.nameBn || "")}</h3>

                      <p className={styles.location}>
                        <MdOutlineLocationOn />
                        <span>{t(store.location, store.locationBn || "")}</span>
                      </p>

                      <div className={styles.storeActions}>
                        <a
                          href={`tel:${store.phone}`}
                          className={styles.callBtn}
                        >
                          {t("Call Store", "দোকানে কল করুন")}
                        </a>
                        <a
                          href={`https://wa.me/${store.whatsapp.replace("+", "")}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.whatsappBtn}
                        >
                          {t("WhatsApp", "ওয়াটসঅ্যাপ")}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className={styles.noStores}>
                <p>
                  {t(
                    "No verified stores found near you for this category yet.",
                    "এই বিভাগের জন্য আপনার কাছাকাছি এখনো কোনো যাচাইকৃত দোকান পাওয়া যায়নি।",
                  )}
                </p>
              </div>
            )}
          </Container>
        </section>

        {/* RELATED PRODUCTS */}
        <section className={styles.relatedSection}>
          <Container>
            <div className={styles.head}>
              <h2>{t("Related Products", "সম্পর্কিত পণ্য")}</h2>
              <p className={styles.desc}>
                {t(
                  "Explore more premium fresh cuts selected for you.",
                  "আপনার জন্য নির্বাচিত আরও প্রিমিয়াম তাজা কাট এক্সপ্লোর করুন।",
                )}
              </p>
            </div>

            <div className={styles.relatedGrid}>
              {relatedProducts.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          </Container>
        </section>

        <Choose />
      </main>

      <Footer />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const allProducts = meatCategories.flatMap((cat) =>
    cat.products.map((p) => ({
      ...p,
      category: cat.label,
    })),
  );

  const paths = allProducts.map((product) => ({
    params: {
      id: product.id.toString(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const allProducts = meatCategories.flatMap((cat) =>
    cat.products.map((p) => ({
      ...p,
      category: cat.label,
    })),
  );

  const product = allProducts.find((item) => item.id.toString() === params?.id);

  if (!product) {
    return {
      notFound: true,
    };
  }

  const relatedProducts = allProducts
    .filter(
      (item) => item.category === product.category && item.id !== product.id,
    )
    .slice(0, 4);

  return {
    props: {
      product,
      relatedProducts,
    },
  };
};
