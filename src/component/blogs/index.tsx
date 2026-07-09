import Link from "next/link";
import Image from "next/image";
import styles from "./blogsCard.module.scss";
import { BlogPost } from "@/constants/blogs";
import { useLanguage } from "@/context/LanguageContext";
import { IoTimeOutline } from "react-icons/io5";

type Props = {
  post: BlogPost;
};

export default function BlogCard({ post }: Props) {
  const { t } = useLanguage();
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
              className={styles.image}
            />
          ) : (
            <div className={styles.placeholder} />
          )}
          <span className={styles.imageCut} aria-hidden="true" />

          {post.category && (
            <span className={styles.category}>
              {t(post.category, post.categoryBn || post.category)}
            </span>
          )}
        </div>
      </Link>

      <div className={styles.cardBody}>
        <h3 className={styles.title}>
          <Link href={`/blog/${post.slug}`}>
            {t(post.title ?? "", post.titleBn ?? "")}
          </Link>
        </h3>

        <p className={styles.excerpt}>
          {t(post.excerpt ?? "", post.excerptBn ?? "")}
        </p>

        <div className={styles.meta}>
          <div className={styles.author}>
            <span className={styles.authorAvatar}>
              {post.author?.charAt(0) ?? "K"}
            </span>
            <span>{post.author}</span>
          </div>
          <div className={styles.date}>
            <IoTimeOutline />
            <time dateTime={post.date}>{displayDate}</time>
          </div>
        </div>
      </div>
    </article>
  );
}
