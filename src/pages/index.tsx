import Head from "next/head";
import styles from "@/styles/Home.module.scss";
import Header from "@/layout/header";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import NextImage from "@/hooks/NextImage";
import { meatCategories } from "@/constants/meatCategories";
import Link from "next/link";
import Footer from "@/layout/footer";
import { Container } from "react-bootstrap";
import ProductCard from "@/component/ProductCard";
import Divider from "@/component/divider";
import Choose from "@/component/whychooseus";
import { useLanguage } from "@/context/LanguageContext";
import Newsletter from "@/component/newslatter";

export default function Home() {
  const allProducts = meatCategories
    .flatMap((cat) => cat.products)
    .sort((a, b) => a.price - b.price);

  const { t, lang } = useLanguage();

  return (
    <>
      <Head>
        <title>
          {t(
            "Koshaix — Fresh Meat, Connected Locally",
            "কোশাইক্স — তাজা মাংস, স্থানীয়ভাবে সংযুক্ত",
          )}
        </title>
        <meta
          name="description"
          content={t(
            "Premium quality fresh meat and ready-to-cook solutions, connected to trusted local shops.",
            "প্রিমিয়াম মানের তাজা মাংস এবং রেডি-টু-কুক সমাধান, বিশ্বস্ত স্থানীয় দোকানের সাথে সংযুক্ত।",
          )}
        />
      </Head>

      <Header />

      <main className={styles.main}>
        {/* HERO BANNER */}
        <section className={styles.banner}>
          <Swiper
            modules={[EffectFade, Autoplay]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop={true}
            speed={1200}
            className={styles.swiper}
          >
            <SwiperSlide>
              <div className={styles.slide}>
                <NextImage
                  src="/images/hmb-1.webp"
                  alt=""
                  className={styles.slideImage}
                />
                <div className={styles.slideOverlay} />
                <Container className={styles.content}>
                  <span className={styles.eyebrow}>
                    {t("PREMIUM MEAT", "প্রিমিয়াম মাংস")}
                  </span>
                  <h1>
                    {t("Best Choice for Fresh Meat", "তাজা মাংসের সেরা পছন্দ")}
                  </h1>
                  <ul className={styles.tag}>
                    <li>{t("Fresh", "তাজা")}</li>
                    <li>{t("Hygienic", "হাইজিনিক")}</li>
                    <li>{t("Trusted", "বিশ্বস্ত")}</li>
                  </ul>
                  <Link href="/shop" className={styles.heroBtn}>
                    {t("Shop Now", "এখনই কিনুন")}
                  </Link>
                </Container>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={styles.slide}>
                <NextImage
                  src="/images/hmb-2.webp"
                  alt=""
                  className={styles.slideImage}
                />
                <div className={styles.slideOverlay} />
                <Container className={styles.content}>
                  <span className={styles.eyebrow}>
                    {t("FRESH CUTS", "তাজা কাট")}
                  </span>
                  <h1>{t("Straight From Farm", "ফার্ম থেকে সরাসরি")}</h1>
                  <ul className={styles.tag}>
                    <li>{t("Juicy", "স্বাদু")}</li>
                    <li>{t("Tender", "নরম")}</li>
                    <li>{t("Delicious", "সুস্বাদু")}</li>
                  </ul>
                  <Link href="/shop" className={styles.heroBtn}>
                    {t("Shop Now", "এখনই কিনুন")}
                  </Link>
                </Container>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>

        {/* CATEGORY SLIDER */}
        <section className={styles.itemslist}>
          <Container>
            <div className={styles.sectionHead}>
              <span className={styles.eyebrowDark}>
                {t("Browse", "ব্রাউজ করুন")}
              </span>
              <h2>{t("Shop By Category", "ক্যাটাগরি অনুযায়ী কিনুন")}</h2>
            </div>
          </Container>

          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop={true}
            speed={800}
            spaceBetween={20}
            className={styles.categorySwiper}
            breakpoints={{
              0: { slidesPerView: 1.4 },
              480: { slidesPerView: 2.2 },
              768: { slidesPerView: 3.2 },
              1024: { slidesPerView: 4.2 },
              1280: { slidesPerView: 5.2 },
              1440: { slidesPerView: 6 },
            }}
          >
            {meatCategories.map((item) => (
              <SwiperSlide key={item.id}>
                <Link
                  href={`/shop?category=${item.label}`}
                  className={styles.catSlide}
                >
                  <NextImage
                    src={item.image}
                    alt={item.label}
                    className={styles.catImage}
                  />
                  <span className={styles.catCut} aria-hidden="true" />
                  <div className={styles.catContent}>
                    <h3>{t(item.label, item.labelBn)}</h3>
                    <span className={styles.catCta}>
                      {t("Shop Now →", "এখনই কিনুন →")}
                    </span>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        {/* WELCOME */}
        <section className={styles.welcome}>
          <Container>
            <div className={styles.row}>
              <div className={styles.image}>
                <NextImage src="/images/image1.jpg" alt="Koshaix" />
                <span className={styles.imageCut} aria-hidden="true" />
              </div>
              <div className={styles.content}>
                <div className={styles.icon}>
                  <NextImage
                    src={
                      lang === "en" ? "/images/logo.jpg" : "/images/logo-bn.jpg"
                    }
                    alt="Koshaix"
                  />
                </div>
                <span className={styles.eyebrowDark}>
                  {t("WELCOME TO KOSHAIX", "কোশাইক্সে স্বাগতম")}
                </span>
                <h2>
                  {t("The Premier Meat Experience", "প্রিমিয়াম মাংস অভিজ্ঞতা")}
                </h2>
                <Divider />
                <p className={styles.desc}>
                  {t(
                    "Koshaix delivers the finest quality meat and ready-to-cook solutions through our seamless online platform. We proudly serve homes, restaurants, and businesses with fresh, hygienically processed meat sourced from trusted suppliers — ensuring unmatched quality, taste, and reliability.",
                    "কোশাইক্স আমাদের সহজ অনলাইন প্ল্যাটফর্মের মাধ্যমে সর্বোচ্চ মানের মাংস এবং রেডি-টু-কুক সমাধান সরবরাহ করে। আমরা বিশ্বস্ত সরবরাহকারীদের কাছ থেকে সংগৃহীত তাজা, স্বাস্থ্যসম্মতভাবে প্রক্রিয়াজাত মাংস দিয়ে ঘর, রেস্তোরাঁ ও ব্যবসাকে সেবা দিতে গর্বিত — অতুলনীয় মান, স্বাদ ও নির্ভরযোগ্যতার নিশ্চয়তাসহ।",
                  )}
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* PRODUCTS */}
        <section className={styles.products}>
          <Container>
            <div className={styles.head}>
              <span className={styles.eyebrowDark}>
                {t("Handpicked", "বাছাইকৃত")}
              </span>
              <h2>{t("Fresh Picks for You", "আপনার জন্য তাজা পিক")}</h2>
              <h3>
                {t(
                  "Handpicked premium cuts, ready for your kitchen",
                  "হ্যান্ডপিকড প্রিমিয়াম কাট, আপনার রান্নাঘরের জন্য প্রস্তুত",
                )}
              </h3>
              <Divider />
            </div>
            <div className={styles.row}>
              {allProducts.slice(0, 8).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </Container>
        </section>

        <Choose />
        <Newsletter />
      </main>

      <Footer />
    </>
  );
}
