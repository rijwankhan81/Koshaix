import Head from "next/head";
import Link from "next/link";
import { useMemo, useState } from "react";
import styles from "./blogs.module.scss";
import Header from "@/layout/header";
import Footer from "@/layout/footer";
import { Container } from "react-bootstrap";
import NextImage from "@/hooks/NextImage";
import { IoTimeOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";

import { blogPosts as postsFromFile, BlogPost } from "@/constants/blogs";
import { GetStaticProps } from "next";
import BlogCard from "@/component/blogs";
import Choose from "@/component/whychooseus";
import { useLanguage } from "@/context/LanguageContext";

function formatDateISOToReadable(isoDate: string) {
  try {
    const d = new Date(isoDate);
    // Use a stable format: "12 March 2024" (locale independent because we select 'en-GB' explicitly)
    return new Intl.DateTimeFormat("en-GB", {
      day: "numeric",
      month: "short", // "Mar" — use "long" for "March"
      year: "numeric",
    }).format(d);
  } catch {
    return isoDate;
  }
}

type Props = {
  posts: BlogPost[];
};

const POSTS_PER_PAGE = 9;

export default function BlogPage({ posts }: Props) {
  const { t } = useLanguage();

  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const categories = useMemo(() => {
    const unique = new Map<string, string>();
    posts.forEach((p) => {
      if (p.category) unique.set(p.category, p.categoryBn || p.category);
    });
    return Array.from(unique.entries()); // [en, bn][]
  }, [posts]);

  const featuredPost = posts[0];
  const remainingPosts = posts.slice(1);

  const filteredPosts = remainingPosts.filter((p) => {
    const categoryMatch =
      activeCategory === "all" || p.category === activeCategory;
    const searchMatch =
      !search.trim() ||
      (p.title ?? "").toLowerCase().includes(search.toLowerCase());
    return categoryMatch && searchMatch;
  });

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = filteredPosts.slice(
    startIndex,
    startIndex + POSTS_PER_PAGE,
  );

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };

  return (
    <>
      <Head>
        <title>{t("Blogs | Koshaix", "ব্লগ | কোশাইক্স")}</title>
        <meta
          name="description"
          content={t(
            "Guides, recipes, and fresh insights from the Koshaix team.",
            "কোশাইক্স টিমের গাইড, রেসিপি এবং নতুন ধারণা।",
          )}
        />
      </Head>

      <Header />

      <main className={styles.main}>
        {/* BANNER */}
        <section className={styles.banner}>
          <Container className={styles.container}>
            <span className={styles.breadcrumb}>
              {t("Home", "হোম")} <span>/</span> {t("Blog", "ব্লগ")}
            </span>
            <h1>{t("The Koshaix Blog", "কোশাইক্স ব্লগ")}</h1>
            <p>
              {t(
                "Recipes, buying guides, and fresh insights on meat, straight from our team.",
                "মাংস নিয়ে রেসিপি, কেনার গাইড এবং নতুন ধারণা, সরাসরি আমাদের টিমের কাছ থেকে।",
              )}
            </p>
          </Container>
        </section>

        {/* FEATURED POST */}
        {featuredPost && (
          <section className={styles.featuredSection}>
            <Container>
              <Link
                href={`/blog/${featuredPost.slug}`}
                className={styles.featuredCard}
              >
                <div className={styles.featuredImage}>
                  <NextImage
                    src={featuredPost.image || ""}
                    alt={featuredPost.title}
                    className={styles.image}
                  />
                  <span className={styles.featuredCut} aria-hidden="true" />
                </div>
                <div className={styles.featuredContent}>
                  <span className={styles.featuredTag}>
                    {t("Latest", "সর্বশেষ")}
                  </span>
                  <span className={styles.category}>
                    {t(
                      featuredPost.category ?? "",
                      featuredPost.categoryBn ?? "",
                    )}
                  </span>
                  <h2>
                    {t(featuredPost.title ?? "", featuredPost.titleBn ?? "")}
                  </h2>
                  <p>
                    {t(
                      featuredPost.excerpt ?? "",
                      featuredPost.excerptBn ?? "",
                    )}
                  </p>
                  <div className={styles.featuredMeta}>
                    <IoTimeOutline />
                    <span>{formatDateISOToReadable(featuredPost.date)}</span>
                  </div>
                </div>
              </Link>
            </Container>
          </section>
        )}

        {/* FILTER BAR */}
        <section className={styles.filterBar}>
          <Container className={styles.filterInner}>
            <div className={styles.categoryTabs}>
              <button
                className={`${styles.tab} ${activeCategory === "all" ? styles.tabActive : ""}`}
                onClick={() => handleCategoryChange("all")}
              >
                {t("All", "সব")}
              </button>
              {categories.map(([en, bn]) => (
                <button
                  key={en}
                  className={`${styles.tab} ${activeCategory === en ? styles.tabActive : ""}`}
                  onClick={() => handleCategoryChange(en)}
                >
                  {t(en, bn)}
                </button>
              ))}
            </div>

            <div className={styles.searchBox}>
              <IoSearch />
              <input
                type="text"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setCurrentPage(1);
                }}
                placeholder={t("Search articles...", "আর্টিকেল খুঁজুন...")}
              />
            </div>
          </Container>
        </section>

        {/* GRID */}
        <section className={styles.scandown}>
          <div className={styles.wrap}>
            <Container>
              {paginatedPosts.length > 0 ? (
                <div className={styles.blog}>
                  {paginatedPosts.map((p) => (
                    <BlogCard key={p.id} post={p} />
                  ))}
                </div>
              ) : (
                <div className={styles.noPosts}>
                  <h3>
                    {t("No articles found", "কোনো আর্টিকেল পাওয়া যায়নি")}
                  </h3>
                  <p>
                    {t(
                      "Try a different category or search term.",
                      "ভিন্ন ক্যাটাগরি বা সার্চ শব্দ চেষ্টা করুন।",
                    )}
                  </p>
                </div>
              )}

              {totalPages > 1 && (
                <div className={styles.pagination}>
                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                    disabled={currentPage === 1}
                  >
                    {t("Prev", "পূর্ববর্তী")}
                  </button>

                  {Array.from({ length: totalPages }, (_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentPage(index + 1)}
                      className={
                        currentPage === index + 1 ? styles.activePage : ""
                      }
                    >
                      {index + 1}
                    </button>
                  ))}

                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                    }
                    disabled={currentPage === totalPages}
                  >
                    {t("Next", "পরবর্তী")}
                  </button>
                </div>
              )}
            </Container>
          </div>
        </section>

        <Choose />
      </main>
      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  // create stable, pre-formatted date strings at build time
  const posts = postsFromFile.map((post) => ({
    ...post,
    formattedDate: formatDateISOToReadable(post.date),
  }));

  return {
    props: {
      posts,
    },
  };
};
