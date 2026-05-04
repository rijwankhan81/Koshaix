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
import { FaHandSparkles } from "react-icons/fa";
import { GiWheat, GiKnifeFork } from "react-icons/gi";

export default function Home() {
  const allProducts = meatCategories
    .flatMap((cat) => cat.products)
    .sort((a, b) => a.price - b.price);
  return (
    <>
      <Head>
        <title>Koshaix</title>
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
                  <h1>Best Choice for Fresh Meat</h1>
                  <h2>PREMIUM MEAT</h2>
                  <ul className={styles.tag}>
                    <li>Fresh</li>
                    <li>Hygienic</li>
                    <li>Trusted</li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={styles.slide}>
                <NextImage src={"/images/hmb-2.webp"} alt={""} />
                <div className={styles.content}>
                  <h1>Straight From Farm</h1>
                  <h2>FRESH CUTS</h2>
                  <ul className={styles.tag}>
                    <li>Juicy</li>
                    <li>Tender</li>
                    <li>Delicious</li>
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
                    <h2>{item.label}</h2>
                    <Link href={`/shop?category=${item.label}`}>Shop Now</Link>
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
                    <h2>The Premier Meat Experience</h2>
                    <h3>WELCOME TO KOSHAIX</h3>
                    <Divider />
                    <p className={styles.desc}>
                      Koshaix delivers the finest quality meat and ready-to-cook
                      solutions through our seamless online platform. We proudly
                      serve homes, restaurants, and businesses with fresh,
                      hygienically processed meat sourced from trusted suppliers
                      — ensuring unmatched quality, taste, and reliability.
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
              <h2>Fresh Picks for You</h2>
              <h3>Handpicked premium cuts, ready for your kitchen</h3>
              <Divider />
            </div>
            <div className={styles.row}>
              {allProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </Container>
        </section>
        <section className={styles.whychoose}>
          <Container className={styles.container}>
            <div className={styles.head}>
              <h2>why choose us</h2>
              <h3>EXCEPTIONAL quality</h3>
              <Divider />
            </div>
            <div className={styles.row}>
              <div className={styles.item}>
                <div className={styles.icon}>
                  <GiWheat />
                </div>
                <h2>Farm Fresh Quality</h2>
                <p>
                  Sourced directly from trusted farms for the best taste and
                  freshness.
                </p>
              </div>

              <div className={styles.item}>
                <div className={styles.icon}>
                  <FaHandSparkles />
                </div>
                <h2>Hygienic Processing</h2>
                <p>Processed in clean, temperature-controlled environments.</p>
              </div>

              <div className={styles.item}>
                <div className={styles.icon}>
                  <GiKnifeFork />
                </div>
                <h2>Expert Cuts</h2>
                <p>Perfectly cut by professionals for your cooking needs.</p>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
