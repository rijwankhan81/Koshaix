import { Container } from "react-bootstrap";
import styles from "./newslatter.module.scss";
import { FiMail } from "react-icons/fi";
import { useLanguage } from "@/context/LanguageContext";

export default function Newsletter() {
  const { t } = useLanguage();
  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: wire this up to your actual newsletter/email service
  };

  return (
    <>
      {/* NEWSLETTER STRIP */}
      <div className={styles.newsletterStrip}>
        <Container className={styles.newsletterInner}>
          <div>
            <h3>{t("Never Miss Fresh Offers", "তাজা অফার মিস করবেন না")}</h3>
            <p>
              {t(
                "Get notified when new shops and seasonal cuts go live near you.",
                "আপনার কাছে নতুন দোকান ও মৌসুমি কাট চালু হলে জানুন।",
              )}
            </p>
          </div>
          <form
            className={styles.newsletterForm}
            onSubmit={handleNewsletterSubmit}
          >
            <FiMail className={styles.mailIcon} />
            <input
              type="email"
              required
              placeholder={t("Enter your email", "আপনার ইমেইল লিখুন")}
            />
            <button type="submit">{t("Subscribe", "সাবস্ক্রাইব করুন")}</button>
          </form>
        </Container>
      </div>
    </>
  );
}
