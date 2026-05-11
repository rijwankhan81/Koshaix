import Head from "next/head";
import styles from "./blogs.module.scss";
import Header from "@/layout/header";
import Footer from "@/layout/footer";
import { Container } from "react-bootstrap";

import { blogPosts as postsFromFile, BlogPost } from "@/constants/blogs";
import { GetStaticProps } from "next";
import BlogCard from "@/component/blogs";
import Choose from "@/component/whychooseus";

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
export default function BlogPage({ posts }: Props) {
  return (
    <>
      <Head>
        <title>Blogs | Koshaix</title>
      </Head>
      <Header />
      <main className={styles.main}>
        <section className={styles.banner}>
          <Container className={styles.container}>
            <div className={styles.content}>
              <h2>Blogs</h2>
            </div>
          </Container>
        </section>
        <section className={styles.scandown}>
          <div className={styles.wrap}>
            <Container>
              <div className={styles.blog}>
                {posts.map((p) => (
                  <BlogCard key={p.id} post={p} />
                ))}
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
