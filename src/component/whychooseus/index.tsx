// component/whychooseus.tsx
import { Container } from "react-bootstrap";
import { FaHandSparkles } from "react-icons/fa";
import { GiWheat, GiKnifeFork } from "react-icons/gi";
import Divider from "../divider";
import styles from "./page.module.scss";
import { useLanguage } from "@/context/LanguageContext";

export default function Choose() {
  const { t } = useLanguage();

  const items = [
    {
      icon: <GiWheat />,
      title_en: "Farm Fresh Quality",
      title_bn: "ফার্ম ফ্রেশ কুয়ালিটি",
      desc_en:
        "Sourced directly from trusted farms for the best taste and freshness.",
      desc_bn:
        "বিশ্বস্ত খামার থেকে সরাসরি সংগ্রহ করা হয়, যা সেরা স্বাদ ও সতেজতা নিশ্চিত করে।",
    },
    {
      icon: <FaHandSparkles />,
      title_en: "Hygienic Processing",
      title_bn: "হাইজিনিক প্রসেসিং",
      desc_en: "Processed in clean, temperature-controlled environments.",
      desc_bn: "পরিষ্কার, তাপমাত্রা নিয়ন্ত্রিত পরিবেশে প্রসেস করা হয়।",
    },
    {
      icon: <GiKnifeFork />,
      title_en: "Expert Cuts",
      title_bn: "বিশেষজ্ঞ কাট",
      desc_en: "Perfectly cut by professionals for your cooking needs.",
      desc_bn:
        "আপনার রান্নার প্রয়োজন অনুযায়ী বিশেষজ্ঞদের দ্বারা নিখুঁতভাবে কাটা হয়।",
    },
  ];

  return (
    <section className={styles.whychoose}>
      <Container className={styles.container}>
        <div className={styles.head}>
          <span className={styles.eyebrow}>
            {t("Why Choose Us", "আমাদের কেন বেছে নিয়েছেন")}
          </span>
          <h2>
            {t("Exceptional Quality, Every Time", "প্রতিবার অসাধারণ মান")}
          </h2>
          <Divider />
        </div>

        <div className={styles.row}>
          {items.map((item) => (
            <div key={item.title_en} className={styles.item}>
              <span className={styles.iconCut} aria-hidden="true" />
              <div className={styles.icon}>{item.icon}</div>
              <h3>{t(item.title_en, item.title_bn)}</h3>
              <p>{t(item.desc_en, item.desc_bn)}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
