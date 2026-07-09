// pages/about.tsx
import styles from "./about.module.scss";
import { Container } from "react-bootstrap";
import Head from "next/head";
import Link from "next/link";
import Header from "@/layout/header";
import Footer from "@/layout/footer";
import NextImage from "@/hooks/NextImage";
import Choose from "@/component/whychooseus";
import { useLanguage } from "@/context/LanguageContext";
import { FaHandshake, FaLeaf, FaUsers, FaBolt } from "react-icons/fa";

const STEPS = [
  {
    num: "01",
    en_title: "Select Your Meat",
    bn_title: "আপনার মাংস নির্বাচন করুন",
    en_desc:
      "Browse different categories and choose the meat products you need.",
    bn_desc:
      "বিভিন্ন বিভাগ ব্রাউজ করুন এবং আপনার প্রয়োজনীয় মাংসের পণ্যগুলি নির্বাচন করুন।",
  },
  {
    num: "02",
    en_title: "Discover Nearby Shops",
    bn_title: "কাছাকাছি দোকান খুঁজুন",
    en_desc:
      "Koshaix instantly shows trusted meat shops available near your location.",
    bn_desc:
      "কোশাইক্স তাৎক্ষণিকভাবে আপনার অবস্থানের কাছাকাছি বিশ্বস্ত মাংসের দোকানগুলি প্রদর্শন করে।",
  },
  {
    num: "03",
    en_title: "Connect & Purchase",
    bn_title: "সংযোগ এবং কেনা",
    en_desc:
      "Contact the shop directly, confirm availability, and get your fresh meat easily.",
    bn_desc:
      "দোকানের সঙ্গে সরাসরি যোগাযোগ করুন, উপলব্ধতা নিশ্চিত করুন, এবং আপনার তাজা মাংসটি সহজেই পান।",
  },
];

const VALUES = [
  {
    icon: <FaHandshake />,
    en_title: "Trust First",
    bn_title: "বিশ্বাসই প্রথম",
    en_desc: "Every shop is verified before it ever reaches your screen.",
    bn_desc: "প্রতিটি দোকান আপনার স্ক্রিনে পৌঁছানোর আগেই যাচাই করা হয়।",
  },
  {
    icon: <FaLeaf />,
    en_title: "Freshness Matters",
    bn_title: "সতেজতাই গুরুত্বপূর্ণ",
    en_desc: "We surface what's genuinely fresh today, not just what's listed.",
    bn_desc:
      "আজ সত্যিকারের কী তাজা তা আমরা তুলে ধরি, শুধু তালিকাভুক্ত কিছু নয়।",
  },
  {
    icon: <FaUsers />,
    en_title: "Local Community",
    bn_title: "স্থানীয় সম্প্রদায়",
    en_desc: "We champion neighborhood shops instead of replacing them.",
    bn_desc: "আমরা পাড়ার দোকানগুলোকে প্রতিস্থাপন না করে সমর্থন করি।",
  },
  {
    icon: <FaBolt />,
    en_title: "Effortlessly Simple",
    bn_title: "সহজ ও ঝামেলাবিহীন",
    en_desc: "Three steps, no clutter, no middlemen slowing things down.",
    bn_desc: "তিনটি ধাপ, কোনো জটিলতা নেই, কোনো মধ্যস্থতাকারী নেই।",
  },
];

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <>
      <Head>
        <title>{t("About | Koshaix", "আমাদের সম্পর্কে | Koshaix")}</title>
        <meta
          name="description"
          content={t(
            "Learn how Koshaix connects customers with trusted local meat shops.",
            "কোশাইক্স কীভাবে গ্রাহকদের বিশ্বস্ত স্থানীয় মাংসের দোকানের সাথে সংযুক্ত করে তা জানুন।",
          )}
        />
      </Head>

      <Header />

      <main className={styles.main}>
        {/* BANNER */}
        <section className={styles.banner}>
          <Container className={styles.container}>
            <span className={styles.breadcrumb}>
              {t("Home", "হোম")} <span>/</span>{" "}
              {t("About Us", "আমাদের সম্পর্কে")}
            </span>
            <div className={styles.content}>
              <h1>{t("About Us", "আমাদের সম্পর্কে")}</h1>
            </div>
          </Container>
        </section>

        {/* INTRO */}
        <section className={styles.about}>
          <Container>
            <div className={styles.row}>
              <div className={styles.content}>
                <span className={styles.eyebrow}>
                  {t("Our Story", "আমাদের গল্প")}
                </span>
                <h2>
                  {t(
                    "Fresh Meat, Connected Locally",
                    "তাজা মাংস, স্থানীয়ভাবে সংযুক্ত",
                  )}
                </h2>
                <p className={styles.desc}>
                  {t(
                    "Koshaix is a smart platform that connects customers with trusted nearby meat shops in just a few clicks. We make it simple to explore fresh meat options, find local sellers around you, and connect directly with the shop of your choice.",
                    "কোশাইক্স একটি স্মার্ট প্ল্যাটফর্ম, যা মাত্র কয়েকটি ক্লিকেই গ্রাহকদের আশেপাশের বিশ্বস্ত মাংসের দোকানের সঙ্গে সংযুক্ত করে। আমরা তাজা মাংসের বিভিন্ন বিকল্প খুঁজে দেখা, আপনার কাছাকাছি থাকা স্থানীয় বিক্রেতাদের খুঁজে পাওয়া এবং আপনার পছন্দের দোকানের সঙ্গে সরাসরি যোগাযোগ করাকে সহজ করে তুলেছি।",
                  )}
                </p>
                <p className={styles.desc}>
                  {t(
                    "Whether you're looking for premium chicken, fresh mutton, quality beef, or ready-to-cook cuts, Koshaix helps you discover the best meat providers near your location — quickly, safely, and conveniently.",
                    "আপনি প্রিমিয়াম মুরগি, তাজা মাটন, মানসম্পন্ন গরুর মাংস, বা রেডি-টু-কুক কাট খুঁজছেন? কোশাইক্স আপনাকে আপনার অবস্থানের কাছাকাছি সেরা মাংস সরবরাহকারী খুঁজে দিতে সহায়তা করে — দ্রুত, নিরাপদে, এবং সহজে।",
                  )}
                </p>
              </div>

              <div className={styles.image}>
                <div className={styles.imageWrapper}>
                  <NextImage src="/images/bg3.webp" alt="Koshaix" />
                  <span className={styles.imageCut} aria-hidden="true" />
                </div>

                <div className={styles.statCard}>
                  <strong>500+</strong>
                  <span>{t("Verified Shops", "যাচাইকৃত দোকান")}</span>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* STATS BAR */}
        <section className={styles.statsBar}>
          <Container>
            <div className={styles.statsGrid}>
              <div className={styles.statItem}>
                <strong>500+</strong>
                <span>{t("Verified Shops", "যাচাইকৃত দোকান")}</span>
              </div>
              <div className={styles.statItem}>
                <strong>15+</strong>
                <span>{t("Cities Covered", "শহর কভার করা হয়েছে")}</span>
              </div>
              <div className={styles.statItem}>
                <strong>4.7★</strong>
                <span>{t("Average Rating", "গড় রেটিং")}</span>
              </div>
              <div className={styles.statItem}>
                <strong>8+</strong>
                <span>{t("Meat Categories", "মাংসের ক্যাটাগরি")}</span>
              </div>
            </div>
          </Container>
        </section>

        {/* HOW IT WORKS */}
        <section className={styles.howItWorks}>
          <Container>
            <div className={styles.head}>
              <span className={styles.eyebrow}>
                {t("Process", "প্রক্রিয়া")}
              </span>
              <h2>{t("How Koshaix Works", "কোশাইক্স কীভাবে কাজ করে")}</h2>
            </div>

            <div className={styles.steps}>
              {STEPS.map((step, i) => (
                <div key={step.num} className={styles.step}>
                  <span className={styles.stepNum}>{step.num}</span>
                  <h4>{t(step.en_title, step.bn_title)}</h4>
                  <p>{t(step.en_desc, step.bn_desc)}</p>
                  {i < STEPS.length - 1 && (
                    <span className={styles.connector} aria-hidden="true" />
                  )}
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* VALUES */}
        <section className={styles.values}>
          <Container>
            <div className={styles.head}>
              <span className={styles.eyebrow}>
                {t("What We Stand For", "আমরা যা বিশ্বাস করি")}
              </span>
              <h2>{t("Our Values", "আমাদের মূল্যবোধ")}</h2>
            </div>

            <div className={styles.valuesGrid}>
              {VALUES.map((v) => (
                <div key={v.en_title} className={styles.valueCard}>
                  <span className={styles.valueIcon}>{v.icon}</span>
                  <h4>{t(v.en_title, v.bn_title)}</h4>
                  <p>{t(v.en_desc, v.bn_desc)}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <Choose />

        {/* SELLER CTA */}
        <section className={styles.sellerCta}>
          <Container className={styles.sellerCtaInner}>
            <div>
              <h2>
                {t("Own a Meat Shop?", "আপনার কি একটি মাংসের দোকান আছে?")}
              </h2>
              <p>
                {t(
                  "Join Koshaix and get discovered by customers near you.",
                  "কোশাইক্সে যোগ দিন এবং আপনার কাছের গ্রাহকদের কাছে পৌঁছান।",
                )}
              </p>
            </div>
            <Link href="/for-sellers" className={styles.sellerCtaBtn}>
              {t("List Your Shop", "আপনার দোকান তালিকাভুক্ত করুন")}
            </Link>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
