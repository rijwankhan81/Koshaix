// pages/blog/[slug].tsx

import Head from "next/head";
import Link from "next/link";
import { GetStaticPaths, GetStaticProps } from "next";
import { Container } from "react-bootstrap";

import styles from "./blogs.module.scss";

import Header from "@/layout/header";
import Footer from "@/layout/footer";
import NextImage from "@/hooks/NextImage";

import { blogPosts, BlogPost } from "@/constants/blogs";
import { IoTimeOutline } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import { FiFacebook, FiMail } from "react-icons/fi";
import { FaXTwitter, FaWhatsapp } from "react-icons/fa6";
import Choose from "@/component/whychooseus";
import { useLanguage } from "@/context/LanguageContext";

type Props = {
  post: BlogPost;
};

// crude but effective — strips tags, counts words, estimates minutes
function getReadingTime(html: string) {
  const text = html.replace(/<[^>]*>/g, " ");
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

export default function SingleBlogPage({ post }: Props) {
  const { t, lang } = useLanguage();

  let relatedPosts = blogPosts.filter(
    (item) => item.category === post.category && item.slug !== post.slug,
  );

  if (relatedPosts.length < 3) {
    const fallback = blogPosts.filter(
      (item) => item.slug !== post.slug && !relatedPosts.includes(item),
    );

    relatedPosts = [...relatedPosts, ...fallback];
  }

  relatedPosts = relatedPosts.slice(0, 3);

  const activeContent = t(post.content ?? "", post.contentBn ?? "");
  const readingTime = getReadingTime(activeContent);

  const formattedDate = new Intl.DateTimeFormat(
    lang === "bn" ? "bn-BD" : "en-US",
    { year: "numeric", month: "long", day: "numeric" },
  ).format(new Date(post.date));

  return (
    <>
      <Head>
        <title>{t(post.title ?? "", post.titleBn ?? "")}</title>
        <meta
          name="description"
          content={t(post.excerpt ?? "", post.excerptBn ?? "")}
        />
        <meta
          property="og:title"
          content={t(post.title ?? "", post.titleBn ?? "")}
        />
        <meta
          property="og:description"
          content={t(post.excerpt ?? "", post.excerptBn ?? "")}
        />
        <meta property="og:image" content={post.image} />
      </Head>

      <Header />

      <main className={styles.main}>
        {/* HERO */}
        <section className={styles.hero}>
          <div className={styles.heroImage}>
            <NextImage
              src={post.image || ""}
              alt={post.title}
              className={styles.image}
            />
            <div className={styles.overlay} />
          </div>

          <Container className={styles.heroInner}>
            <div className={styles.breadcrumb}>
              <Link href="/">{t("Home", "হোম")}</Link>
              <span>/</span>
              <Link href="/blog">{t("Blog", "ব্লগ")}</Link>
              <span>/</span>
              <span className={styles.breadcrumbCurrent}>
                {t(post.category ?? "", post.categoryBn ?? "")}
              </span>
            </div>

            <span className={styles.category}>
              {t(post.category ?? "", post.categoryBn ?? "")}
            </span>
            <h1>{t(post.title ?? "", post.titleBn ?? "")}</h1>

            <div className={styles.meta}>
              <span className={styles.metaItem}>
                <FaRegEdit /> {post.author}
              </span>
              <span className={styles.metaItem}>
                <IoTimeOutline /> {formattedDate}
              </span>
              <span className={styles.metaItem}>
                {readingTime} {t("min read", "মিনিট পড়া")}
              </span>
            </div>
          </Container>
        </section>

        {/* BODY */}
        <section className={styles.body}>
          <Container>
            <div className={styles.wrapper}>
              {/* ARTICLE */}
              <article className={styles.article}>
                <p className={styles.excerpt}>
                  {t(post.excerpt ?? "", post.excerptBn ?? "")}
                </p>

                <div
                  className={styles.content}
                  dangerouslySetInnerHTML={{ __html: activeContent }}
                />

                <div className={styles.shareRow}>
                  <span>
                    {t("Share this article", "এই আর্টিকেলটি শেয়ার করুন")}
                  </span>
                  <ul>
                    <li>
                      <a href="#" aria-label="Share on Facebook">
                        <FiFacebook />
                      </a>
                    </li>
                    <li>
                      <a href="#" aria-label="Share on X">
                        <FaXTwitter />
                      </a>
                    </li>
                    <li>
                      <a href="#" aria-label="Share on WhatsApp">
                        <FaWhatsapp />
                      </a>
                    </li>
                    <li>
                      <a href="#" aria-label="Share via Email">
                        <FiMail />
                      </a>
                    </li>
                  </ul>
                </div>
              </article>

              {/* SIDEBAR */}
              <aside className={styles.sidebar}>
                <div className={styles.authorCard}>
                  <span className={styles.authorAvatar}>
                    {post.author?.charAt(0) ?? "K"}
                  </span>
                  <h4>{post.author}</h4>
                  <p>
                    {t(
                      "Contributor at Koshaix, sharing guides on fresh meat and local sourcing.",
                      "কোশাইক্সে অবদানকারী, তাজা মাংস ও স্থানীয় সোর্সিং নিয়ে গাইড শেয়ার করেন।",
                    )}
                  </p>
                </div>

                <div className={styles.ctaCard}>
                  <h4>{t("Craving Fresh Meat?", "তাজা মাংস চান?")}</h4>
                  <p>
                    {t(
                      "Find a verified shop near you in seconds.",
                      "কয়েক সেকেন্ডে আপনার কাছের যাচাইকৃত দোকান খুঁজুন।",
                    )}
                  </p>
                  <Link href="/shop" className={styles.ctaBtn}>
                    {t("Browse Shops", "দোকান ব্রাউজ করুন")}
                  </Link>
                </div>
              </aside>
            </div>
          </Container>
        </section>

        {/* RELATED */}
        <section className={styles.relatedSection}>
          <Container>
            <div className={styles.relatedHead}>
              <span className={styles.eyebrow}>
                {t("Keep Reading", "আরও পড়ুন")}
              </span>
              <h2>{t("Recent Posts", "সাম্প্রতিক পোস্ট")}</h2>
              <p>
                {t(
                  "Explore more fresh insights, recipes, and premium meat guides.",
                  "আরও নতুন ধারণা, রেসিপি এবং প্রিমিয়াম মিট গাইড খুঁজে পাওয়া যাবে।",
                )}
              </p>
            </div>

            <div className={styles.relatedGrid}>
              {relatedPosts.map((item) => (
                <article key={item.id} className={styles.relatedCard}>
                  <Link
                    href={`/blog/${item.slug}`}
                    className={styles.relatedImageLink}
                  >
                    <div className={styles.relatedImage}>
                      <NextImage
                        src={item.image || ""}
                        alt={item.title}
                        className={styles.image}
                      />
                      <span className={styles.relatedCut} aria-hidden="true" />
                    </div>
                  </Link>

                  <div className={styles.relatedContent}>
                    <span className={styles.relatedCategory}>
                      {t(item.category ?? "", item.categoryBn ?? "")}
                    </span>
                    <h3>
                      <Link href={`/blog/${item.slug}`}>
                        {t(item.title ?? "", item.titleBn ?? "")}
                      </Link>
                    </h3>
                    <div className={styles.relatedDate}>
                      <IoTimeOutline />
                      <span>
                        {new Intl.DateTimeFormat(
                          lang === "bn" ? "bn-BD" : "en-US",
                          {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          },
                        ).format(new Date(item.date))}
                      </span>
                    </div>
                  </div>
                </article>
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
  const paths = blogPosts.map((post) => ({
    params: {
      slug: post.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = blogPosts.find((item) => item.slug === params?.slug);

  // SAFETY
  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
};
