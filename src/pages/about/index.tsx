// pages/shop.tsx
import styles from "./about.module.scss";
import { Container } from "react-bootstrap";
import Head from "next/head";
import Header from "@/layout/header";
import Footer from "@/layout/footer";
import NextImage from "@/hooks/NextImage";
import Choose from "@/component/whychooseus";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutPage() {
  const { t } = useLanguage();
  return (
    <>
      <Head>
        <title>{t("About | Koshaix", "আমাদের সম্পর্কে | Koshaix")}</title>
      </Head>
      <Header />
      <main className={styles.main}>
        <section className={styles.banner}>
          <Container className={styles.container}>
            <div className={styles.content}>
              <h2>{t("About Us", "আমাদের সম্পর্কে")}</h2>
            </div>
          </Container>
        </section>
        <section className={styles.about}>
          <div className={styles.wrap}>
            <Container>
              <div className={styles.rowWrapper}>
                <div className={styles.row}>
                  <div className={styles.content}>
                    <h2>
                      {t(
                        "Fresh Meat, Connected Locally",
                        "তাজা মাংস, স্থানীয়ভাবে সংযুক্ত",
                      )}
                    </h2>
                    <p className={styles.desc}>
                      {t(
                        "Koshaix is a smart platform that connects customers with trusted nearby meat shops in just a few clicks. We make it simple to explore fresh meat options, find local sellers  around you, and connect directly with the shop of your choice.",
                        "কশাইক্স একটি স্মার্ট প্ল্যাটফর্ম, যা মাত্র কয়েকটি ক্লিকেই গ্রাহকদের আশেপাশের বিশ্বস্ত মাংসের দোকানের সঙ্গে সংযুক্ত করে। আমরা তাজা মাংসের বিভিন্ন বিকল্প খুঁজে দেখা, আপনার কাছাকাছি থাকা স্থানীয় বিক্রেতাদের খুঁজে পাওয়া এবং আপনার পছন্দের দোকানের সঙ্গে সরাসরি যোগাযোগ করাকে সহজ করে তুলেছি।",
                      )}
                    </p>
                    <p className={styles.desc}>
                      {t(
                        "Whether you're looking for premium chicken, fresh mutton, quality beef, or ready-to-cook cuts, Koshaix helps you discover the best meat providers near your location — quickly, safely, and conveniently.",
                        "আপনি কি প্রিমিয়াম মুরগি, তাজা মাংস, গুণগত বিশ্বস্ত বিফ, বা প্রস্তুতকরণের জন্য উপযুক্ত কাটগুলির খোঁজে আছেন? কশাইক্স আপনাকে আপনার অবস্থানের কাছাকাছি সবচেয়ে ভালো মাংসের প্রদানকারীদের খুঁজে দিতে সহায়তা করে —দ্রুত, নিরাপদভাবে,এবং সহজভাবে।",
                      )}
                    </p>
                    <div>
                      <h3>
                        {t("How Koshaix Works", "কশাইক্স কিভাবে কাজ করে")}
                      </h3>
                      <ul>
                        <li>
                          <h4>
                            {t("Select Your Meat", "আপনার মাংস নির্বাচন করুন")}
                          </h4>
                          <p>
                            {t(
                              "Browse different categories and choose the meat products you need.",
                              "বিভিন্ন বিভাগ ব্রাউজ করুন এবং আপনার প্রয়োজনীয় মাংসের পণ্যগুলি নির্বাচন করুন।",
                            )}
                          </p>
                        </li>
                        <li>
                          <h4>
                            {t(
                              "Discover Nearby Shops",
                              "কাছাকাছি দোকান খুঁজুন",
                            )}
                          </h4>
                          <p>
                            {t(
                              "Koshaix instantly shows trusted meat shops available near your location.",
                              "কশাইক্স তাৎক্ষণিকভাবে আপনার অবস্থানের কাছাকাছি বিশ্বস্ত মাংসের দোকানগুলি প্রদর্শন করে।",
                            )}
                          </p>
                        </li>
                        <li>
                          <h4>{t("Connect & Purchase", "সংযোগ এবং কেনা")}</h4>
                          <p>
                            {t(
                              "Contact the shop directly, confirm availability, and get your fresh meat easily.",
                              "দোকানের সঙ্গে সরাসরি যোগাযোগ করুন, উপলব্ধিতা নিশ্চিত করুন, এবং আপনার তাজা মাংসটি সহজেই পান।",
                            )}
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
