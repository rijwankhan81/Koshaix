import Link from "next/link";
import Image from "next/image";
import styles from "../../pages/blog/blogs.module.scss";
import { BlogPost } from "@/constants/blogs";

type Props = {
  post: BlogPost;
};

export default function BlogCard({ post }: Props) {
  const displayDate =
    post.formattedDate ?? new Date(post.date).toISOString().slice(0, 10);
  return (
    <article className={styles.card}>
      <Link
        href={`/blog/${post.slug}`}
        className={styles.cardImageLink}
        aria-label={post.title}
      >
        <div className={styles.cardImage}>
          {post.image ? (
            <Image
              src={post.image}
              alt={post.title}
              fill
              style={{ objectFit: "cover" }}
            />
          ) : (
            <div className={styles.placeholder} />
          )}
        </div>
      </Link>

      <div className={styles.cardBody}>
        {/* <span className={styles.category}>{post.category}</span> */}
        <h3 className={styles.title}>
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>
        <p className={styles.excerpt}>{post.excerpt}</p>

        <div className={styles.meta}>
          <div className={styles.author}>{post.author}</div>
          <div className={styles.date}>
            <time dateTime={post.date}>{displayDate}</time>
          </div>
        </div>
      </div>
    </article>
  );
}
