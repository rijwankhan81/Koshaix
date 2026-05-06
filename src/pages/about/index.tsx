// pages/shop.tsx
import styles from "./about.module.scss";
import { Container } from "react-bootstrap";
import Head from "next/head";
import Header from "@/layout/header";
import Footer from "@/layout/footer";
import NextImage from "@/hooks/NextImage";
import Choose from "@/component/whychooseus";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About | Koshaix</title>
      </Head>
      <Header />
      <main className={styles.main}>
        <section className={styles.banner}>
          <Container className={styles.container}>
            <div className={styles.content}>
              <h2>About Us</h2>
            </div>
          </Container>
        </section>
        <section className={styles.about}>
          <div className={styles.wrap}>
            <Container>
              <div className={styles.rowWrapper}>
                <div className={styles.row}>
                  <div className={styles.content}>
                    <h2>Fresh Meat, Connected Locally</h2>
                    <p className={styles.desc}>
                      Koshaix is a smart platform that connects customers with
                      trusted nearby meat shops in just a few clicks. We make it
                      simple to explore fresh meat options, find local sellers
                      around you, and connect directly with the shop of your
                      choice.
                    </p>
                    <p className={styles.desc}>
                      Whether you're looking for premium chicken, fresh mutton,
                      quality beef, or ready-to-cook cuts, Koshaix helps you
                      discover the best meat providers near your location —
                      quickly, safely, and conveniently.
                    </p>
                    <div>
                      <h3>How Koshaix Works</h3>
                      <ul>
                        <li>
                          <h4>Select Your Meat</h4>
                          <p>
                            Browse different categories and choose the meat
                            products you need.
                          </p>
                        </li>
                        <li>
                          <h4>Discover Nearby Shops</h4>
                          <p>
                            Koshaix instantly shows trusted meat shops available
                            near your location.
                          </p>
                        </li>
                        <li>
                          <h4>Connect & Purchase</h4>
                          <p>
                            Contact the shop directly, confirm availability, and
                            get your fresh meat easily.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className={styles.image}>
                    <NextImage src={"/images/bg3.webp"} alt={""} />
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </section>
        <Choose />
      </main>
      <Footer />
    </>
  );
}
