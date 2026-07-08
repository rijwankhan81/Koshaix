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

export default function Home() {
  const allProducts = meatCategories
    .flatMap((cat) => cat.products)
    .sort((a, b) => a.price - b.price);

  const { t } = useLanguage();
  return (
    <>
      <Head>
        <title>{t("Koshaix", "কোশাইক্স")}</title>
      </Head>
      <Header />
      <main className={styles.main}>
        <section className={styles.banner}>
          <Swiper
            modules={[EffectFade, Autoplay]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            loop={true}
            speed={1200}
            className={styles.swiper}
          >
            <SwiperSlide>
              <div className={styles.slide}>
                <NextImage src={"/images/hmb-1.webp"} alt={""} />
                <div className={styles.content}>
                  <h1>
                    {t("Best Choice for Fresh Meat", "তাজা মাংসের সেরা পছন্দ")}
                  </h1>
                  <h2>{t("PREMIUM MEAT", "প্রিমিয়াম মাংস")}</h2>
                  <ul className={styles.tag}>
                    <li>{t("Fresh", "তাজা")}</li>
                    <li>{t("Hygienic", "হাইজিনিক")}</li>
                    <li>{t("Trusted", "বিশ্বস্ত")}</li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={styles.slide}>
                <NextImage src={"/images/hmb-2.webp"} alt={""} />
                <div className={styles.content}>
                  <h1>{t("Straight From Farm", "ফাম থেকে সরাসরি")}</h1>
                  <h2>{t("FRESH CUTS", "তাজা কাট")}</h2>
                  <ul className={styles.tag}>
                    <li>{t("Juicy", "স্বাদু")}</li>
                    <li>{t("Tender", "নরম")}</li>
                    <li>{t("Delicious", "সুস্বাদ")}</li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>
        <section className={styles.itemslist}>
          <Swiper
            modules={[EffectFade, Autoplay]}
            slidesPerView={6}
            fadeEffect={{ crossFade: true }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            loop={true}
            speed={800}
            className={styles.swiper}
            breakpoints={{
              0: {
                slidesPerView: 1.2,
              },
              480: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
              1280: {
                slidesPerView: 5,
              },
              1440: {
                slidesPerView: 6,
              },
            }}
          >
            {meatCategories.map((item) => (
              <SwiperSlide>
                <div className={styles.slide} key={item.id}>
                  <NextImage src={item.image} alt={item.label} />
                  <div className={styles.content}>
                    <h2>{t(item.label, item.labelBn)}</h2>
                    <Link href={`/shop?category=${item.label}`}>
                      {t("Shop Now", "এখনই কিনুন")}
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
        <section className={styles.welcome}>
          <div className={styles.wrap}>
            <Container>
              <div className={styles.rowWrapper}>
                <div className={styles.row}>
                  <div className={styles.image}>
                    <NextImage src={"/images/image1.jpg"} alt={""} />
                  </div>
                  <div className={styles.content}>
                    <div className={styles.icon}>
                      <NextImage src={"/images/logo.jpg"} alt={""} />
                    </div>
                    <h2>
                      {t(
                        "The Premier Meat Experience",
                        "প্রিমিয়াম মাংস অভিজ্ঞতা",
                      )}
                    </h2>
                    <h3>{t("WELCOME TO KOSHAIX", "কোশাইক্সে স্বাগতম")}</h3>
                    <Divider />
                    <p className={styles.desc}>
                      {t(
                        "Koshaix delivers the finest quality meat and ready-to-cook solutions through our seamless online platform. We proudly serve homes, restaurants, and businesses with fresh, hygienically processed meat sourced from trusted suppliers — ensuring unmatched quality, taste, and reliability.",
                        "কোশাইক্স আমাদের সহজ অনলাইন প্ল্যাটফর্মের মাধ্যমে সবচেয়ে ভালো মাংস এবং প্রস্তুত খাবারের সমাধানগুলি প্রদান করে। আমরা বিশ্বস্ত সরবরাহকারীদের থেকে তাজা, জন্যভিত্তিকভাবে  processed মাংস সরবরাহ করি —অপময়তা, সুস্বাদ,এবং বিশ্বস্ততা।",
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </section>
        <section className={styles.products}>
          <Container>
            <div className={styles.head}>
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
              {allProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
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
