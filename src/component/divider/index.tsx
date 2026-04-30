import styles from "@/styles/Home.module.scss";
export default function Divider() {
  return (
    <>
      <div className={styles.divider}>
        <span></span>
        <span className={styles.diamond}></span>
        <span className={styles.diamond}></span>
        <span className={styles.diamond}></span>
        <span></span>
      </div>
    </>
  );
}
