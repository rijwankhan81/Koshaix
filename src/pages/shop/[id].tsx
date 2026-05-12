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

type Product = {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
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

                <h1>{product.name}</h1>

                <div className={styles.priceBox}>
                  <span className={styles.price}>
                    ${product.price.toFixed(2)}
                  </span>

                  {product.oldPrice && (
                    <span className={styles.oldPrice}>
                      ${product.oldPrice.toFixed(2)}
                    </span>
                  )}
                </div>

                <p className={styles.description}>
                  Premium quality fresh meat sourced directly from trusted farms
                  and processed hygienically to ensure freshness, flavor, and
                  nutrition.
                </p>

                <div className={styles.actions}>
                  {/* <button className={styles.primaryBtn}>
                    Find Local Store
                  </button> */}

                  <button className={styles.secondaryBtn}>
                    Add to Wishlist
                  </button>
                </div>

                <div className={styles.meta}>
                  <p>
                    <strong>Category:</strong> {product.category}
                  </p>

                  <p>
                    <strong>Availability:</strong> In Stock
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>
        <section className={styles.storeSection}>
          <Container>
            <div className={styles.head}>
              <h2>Nearby Local Stores</h2>

              <p className={styles.desc}>
                Contact nearby trusted stores directly to place your order
                quickly.
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
                    <h3>{store.name}</h3>

                    <p className={styles.location}>
                      <MdOutlineLocationOn />
                      <span>{store.location}</span>
                    </p>

                    {/* ACTIONS */}
                    <div className={styles.storeActions}>
                      <a href={`tel:${store.phone}`}>Call Store</a>

                      <a
                        href={`https://wa.me/${store.whatsapp.replace(
                          "+",
                          "",
                        )}`}
                        target="_blank"
                      >
                        WhatsApp
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
              <h2>Related Products</h2>

              <p className={styles.desc}>
                Explore more premium fresh cuts selected for you.
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
