// pages/shop.tsx
import { Container } from "react-bootstrap";
import { FaHandSparkles } from "react-icons/fa";
import { GiWheat, GiKnifeFork } from "react-icons/gi";
import Divider from "../divider";
import styles from "./page.module.scss";
import { useLanguage } from "@/context/LanguageContext";

export default function Choose() {
  const { t } = useLanguage();
  return (
    <>
      <section className={styles.whychoose}>
        <Container className={styles.container}>
          <div className={styles.head}>
            <h2>{t("Why Choose Us", "আমাদের কেন বেছে নিয়েছেন")}</h2>
            <h3>{t("EXCEPTIONAL quality", "বিশেষ মান")}</h3>
            <Divider />
          </div>
          <div className={styles.row}>
            <div className={styles.item}>
              <div className={styles.icon}>
                <GiWheat />
              </div>
              <h2>{t("Farm Fresh Quality", "ফার্ম ফ্রেশ কুয়ালিটি")}</h2>
              <p>
                {t(
                  "Sourced directly from trusted farms for the best taste and freshness.",
                  "বিশ্বস্ত খামার থেকে সরাসরি সম্পাদন করে সবচেয়ে ভালো স্বাদ এবং তাজা প্রদান করে।",
                )}
              </p>
            </div>

            <div className={styles.item}>
              <div className={styles.icon}>
                <FaHandSparkles />
              </div>
              <h2>{t("Hygienic Processing", "হাইজিনিক প্রসেসিং")}</h2>
              <p>
                {t(
                  "Processed in clean, temperature-controlled environments.",
                  "পরিষ্কার, তাপমাত্রা নিয়ন্ত্রিত পরিবেশে প্রসেস করা হয়।",
                )}
              </p>
            </div>

            <div className={styles.item}>
              <div className={styles.icon}>
                <GiKnifeFork />
              </div>
              <h2>{t("Expert Cuts", "বিশেষজ্ঞ কাট")}</h2>
              <p>
                {t(
                  "Perfectly cut by professionals for your cooking needs.",
                  "আপনার রান্নার প্রয়োজনে বিশেষজ্ঞদের দ্বারা সংগঠিতভাবে কাটা হয়।",
                )}
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
