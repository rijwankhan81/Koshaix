// pages/product/[id].tsx

import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import { Container } from "react-bootstrap";

import styles from "./single-product.module.scss";

import Header from "@/layout/header";
import Footer from "@/layout/footer";
import NextImage from "@/hooks/NextImage";

import { meatCategories } from "@/constants/meatCategories";
import ProductCard from "@/component/ProductCard";
import { localStores } from "@/constants/localStores";
import { MdOutlineLocationOn } from "react-icons/md";
import Choose from "@/component/whychooseus";
import { useLanguage } from "@/context/LanguageContext";

type Product = {
  id: number;
  name: string;
  nameBn: string;
  price: number;
  priceBn?: string;
  oldPrice?: number;
  oldPriceBn?: string;
  image: string;
  category?: string;
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
  return (
    <>
      <Head>
        <title>{product.name}</title>

        <meta name="description" content={product.name} />
      </Head>

      <Header />

      <main className={styles.main}>
        {/* PRODUCT DETAIL */}
        <section className={styles.productDetail}>
          <Container>
            <div className={styles.wrapper}>
              {/* LEFT IMAGE */}
              <div className={styles.imageSection}>
                <div className={styles.imageWrapper}>
                  <NextImage
                    src={product.image}
                    alt={product.name}
                    className={styles.image}
                  />
                </div>
              </div>

              {/* RIGHT CONTENT */}
              <div className={styles.content}>
                {product.category && (
                  <span className={styles.category}>{product.category}</span>
                )}

                <h1>{t(product.name, product.nameBn)}</h1>

                <div className={styles.priceBox}>
                  <span className={styles.price}>
                    ${t(product.price.toFixed(2), product.priceBn || "")}
                  </span>

                  {product.oldPrice && (
                    <span className={styles.oldPrice}>
                      $
                      {t(product.oldPrice.toFixed(2), product.oldPriceBn || "")}
                    </span>
                  )}
                </div>

                <p className={styles.description}>
                  {t(
                    "Premium quality fresh meat sourced directly from trusted farms and processed hygienically to ensure freshness, flavor, and nutrition.",
                    "প্রিমিয়াম কোয়ালিটির নতুন মাংস বিশ্বস্ত কৃষকদের থেকে সরাসরি উৎসে প্রাপ্ত এবং হাইজিনিকভাবে প্রসেসড যাতে তার তাজা, স্বাদময়তা এবং পুষ্টির নিশ্চয়তা থাকে।",
                  )}
                </p>

                <div className={styles.actions}>
                  {/* <button className={styles.primaryBtn}>
                    Find Local Store
                  </button> */}

                  <button className={styles.secondaryBtn}>
                    {t("Add to Wishlist", "ইচ্ছা তালিকায় যোগ করুন")}
                  </button>
                </div>

                <div className={styles.meta}>
                  <p>
                    <strong>{t("Category:", "বিভাগ:")}</strong>{" "}
                    {product.category}
                  </p>

                  <p>
                    <strong>{t("Availability:", "উপলব্ধি:")}</strong>{" "}
                    {t("In Stock", "স্টকে আছে")}
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>
        <section className={styles.storeSection}>
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

            <div className={styles.storeGrid}>
              {nearbyStores.map((store) => (
                <div key={store.id} className={styles.storeCard}>
                  {/* IMAGE */}
                  <div className={styles.storeImage}>
                    <NextImage
                      src={store.image}
                      alt={store.name}
                      className={styles.image}
                    />
                    <span className={styles.distance}>{store.distance}</span>
                  </div>

                  {/* CONTENT */}
                  <div className={styles.storeContent}>
                    <h3>{t(store.name || "", store.nameBn || "")}</h3>

                    <p className={styles.location}>
                      <MdOutlineLocationOn />
                      <span>{t(store.location, store.locationBn || "")}</span>
                    </p>

                    {/* ACTIONS */}
                    <div className={styles.storeActions}>
                      <a href={`tel:${store.phone}`}>
                        {t("Call Store", "দোকানে কল করুন")}
                      </a>

                      <a
                        href={`https://wa.me/${store.whatsapp.replace(
                          "+",
                          "",
                        )}`}
                        target="_blank"
                      >
                        {t("WhatsApp", "ওয়াটসঅ্যাপ")}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
                  "আপনার জন্য নির্বাচিত আরও প্রিমিয়াম নতুন কাট এক্সপ্লোর করুন।",
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
