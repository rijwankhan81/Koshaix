import Head from "next/head";
import styles from "./contact.module.scss";
import Header from "@/layout/header";
import Footer from "@/layout/footer";
import { Container } from "react-bootstrap";
import NextImage from "@/hooks/NextImage";
import { useLanguage } from "@/context/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
  return (
    <>
      <Head>
        <title>{t("Contact Us | Koshaix", "যোগাযোগ করুন | Koshaix")}</title>
      </Head>
      <Header />
      <main className={styles.main}>
        <section className={styles.banner}>
          <Container className={styles.container}>
            <div className={styles.content}>
              <h2>{t("Contact Us", "যোগাযোগ করুন")}</h2>
            </div>
          </Container>
        </section>
        <section className={styles.message}>
          <div className={styles.wrap}>
            <Container>
              <div className={styles.row}>
                <div className={styles.image}>
                  <NextImage src={"/images/contact.webp"} alt={""} />
                </div>
                <div className={styles.content}>
                  <h2>{t("Send Us a Message", "আমাদের বার্তা পাঠান")}</h2>
                  <p className={styles.desc}>
                    {t(
                      "Fill out the form and we'll get back to you within 24 hours.",
                      "ফর্মটি পূরণ করুন এবং 24 ঘন্টার মধ্যে আপনার সংযোগের জন্য আমরা ফিরে আসব।",
                    )}
                  </p>
                  <div className={styles.formWrapper}>
                    <form action="" className={styles.form}>
                      <div className={styles.field}>
                        <label>{t("Full Name", "পুরনা নাম")}</label>
                        <input type="text" />
                      </div>
                      <div className={styles.field}>
                        <label>{t("Phone Number", "ফোন নম্বর")}</label>
                        <input type="tel" />
                      </div>
                      <div className={styles.field}>
                        <label>{t("Email Address", "ইমেইল ঠিকানা")}</label>
                        <input type="email" />
                      </div>
                      <div className={styles.field}>
                        <label>{t("Message", "বার্তা")}</label>
                        <textarea
                          name=""
                          id=""
                          placeholder={t(
                            "Tell us how we can help...",
                            "আমাদের কিভাবে সাহায্য করতে পারি?",
                          )}
                        ></textarea>
                      </div>
                      <div className={styles.btn}>
                        <button>{t("Submit Message", "বার্তা জমা দিন")}</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
