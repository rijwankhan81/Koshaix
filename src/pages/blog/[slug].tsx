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
import Choose from "@/component/whychooseus";

type Props = {
  post: BlogPost;
};

export default function SingleBlogPage({ post }: Props) {
  let relatedPosts = blogPosts.filter(
    (item) => item.category === post.category && item.slug !== post.slug,
  );

  if (relatedPosts.length < 3) {
    const fallback = blogPosts.filter(
      (item) => item.slug !== post.slug && !relatedPosts.includes(item),
    );

    relatedPosts = [...relatedPosts, ...fallback];
  }

  relatedPosts = relatedPosts.slice(0, 6);

  return (
    <>
      <Head>
        <title>{post.title}</title>

        <meta name="description" content={post.excerpt} />

        <meta property="og:title" content={post.title} />

        <meta property="og:description" content={post.excerpt} />

        <meta property="og:image" content={post.image} />
      </Head>

      <Header />

      <main className={styles.main}>
        <div className={styles.singleBlog}>
          <Container>
            <div className={styles.singleBlogWrap}>
              <section className={styles.blogDetail}>
                <div className={styles.hero}>
                  {/* HERO IMAGE */}
                  <div className={styles.heroImage}>
                    <NextImage
                      src={post.image || ""}
                      alt={post.title}
                      className={styles.image}
                    />
                  </div>

                  {/* OVERLAY */}
                  <div className={styles.overlay}>
                    <div className={styles.heroContent}>
                      <span className={styles.category}>{post.category}</span>
                      <h1>{post.title}</h1>
                      <div className={styles.meta}>
                        <div className={styles.author}>
                          <FaRegEdit />

                          <span>{post.author}</span>
                        </div>
                        <div className={styles.date}>
                          <IoTimeOutline />

                          <span>
                            {new Intl.DateTimeFormat("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            }).format(new Date(post.date))}
                          </span>
                        </div>
                      </div>
                      <p>{post.excerpt}</p>
                    </div>
                  </div>
                </div>

                <div className={styles.content}>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: post.content,
                    }}
                  />
                </div>
              </section>

              <section className={styles.relatedSection}>
                <div className={styles.relatedHead}>
                  <h2>Recent Posts</h2>
                  <p>
                    Explore more fresh insights, recipes, and premium meat
                    guides.
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
                        </div>
                      </Link>

                      <div className={styles.relatedContent}>
                        <h3>
                          <Link href={`/blog/${item.slug}`}>{item.title}</Link>
                        </h3>
                        <div className={styles.date}>
                          <span>
                            {new Intl.DateTimeFormat("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            }).format(new Date(item.date))}
                          </span>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            </div>
          </Container>
        </div>
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
