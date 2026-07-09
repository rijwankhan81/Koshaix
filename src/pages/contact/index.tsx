// pages/contact.tsx
import { useState } from "react";
import styles from "./contact.module.scss";
import { Container } from "react-bootstrap";
import Head from "next/head";
import Link from "next/link";
import Header from "@/layout/header";
import Footer from "@/layout/footer";
import { useLanguage } from "@/context/LanguageContext";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiClock,
  FiShoppingBag,
} from "react-icons/fi";
import { FaCheckCircle } from "react-icons/fa";

export default function ContactPage() {
  const { t } = useLanguage();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: wire this up to your actual contact/email backend or API route
    setSubmitted(true);
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <>
      <Head>
        <title>{t("Contact | Koshaix", "যোগাযোগ | Koshaix")}</title>
        <meta
          name="description"
          content={t(
            "Get in touch with the Koshaix team — questions, feedback, or partnership inquiries.",
            "কোশাইক্স টিমের সাথে যোগাযোগ করুন — প্রশ্ন, মতামত, বা পার্টনারশিপ সংক্রান্ত।",
          )}
        />
      </Head>

      <Header />

      <main className={styles.main}>
        {/* BANNER */}
        <section className={styles.banner}>
          <Container className={styles.container}>
            <span className={styles.breadcrumb}>
              {t("Home", "হোম")} <span>/</span> {t("Contact", "যোগাযোগ")}
            </span>
            <h1>{t("Get In Touch", "যোগাযোগ করুন")}</h1>
            <p>
              {t(
                "Questions, feedback, or want to partner with us? We'd love to hear from you.",
                "প্রশ্ন, মতামত, বা আমাদের সাথে পার্টনারশিপ করতে চান? আমরা আপনার কথা শুনতে চাই।",
              )}
            </p>
          </Container>
        </section>

        {/* CONTACT */}
        <section className={styles.contactSection}>
          <Container>
            <div className={styles.wrapper}>
              {/* LEFT: INFO */}
              <div className={styles.infoCol}>
                <div className={styles.infoCard}>
                  <span className={styles.infoIcon}>
                    <FiPhone />
                  </span>
                  <div>
                    <h4>{t("Call Us", "আমাদের কল করুন")}</h4>
                    <p>+880 1XXX-XXXXXX</p>
                  </div>
                </div>

                <div className={styles.infoCard}>
                  <span className={styles.infoIcon}>
                    <FiMail />
                  </span>
                  <div>
                    <h4>{t("Email Us", "ইমেইল করুন")}</h4>
                    <p>support@koshaix.com</p>
                  </div>
                </div>

                <div className={styles.infoCard}>
                  <span className={styles.infoIcon}>
                    <FiMapPin />
                  </span>
                  <div>
                    <h4>{t("Visit Us", "আমাদের ঠিকানা")}</h4>
                    <p>
                      {t("Panipat, Haryana, India", "পানিপথ, হরিয়ানা, ভারত")}
                    </p>
                  </div>
                </div>

                <div className={styles.infoCard}>
                  <span className={styles.infoIcon}>
                    <FiClock />
                  </span>
                  <div>
                    <h4>{t("Support Hours", "সহায়তার সময়")}</h4>
                    <p>
                      {t(
                        "Mon – Sat, 9AM – 8PM",
                        "সোম – শনি, সকাল ৯টা – রাত ৮টা",
                      )}
                    </p>
                  </div>
                </div>

                {/* SELLER CALLOUT */}
                <div className={styles.sellerCard}>
                  <span className={styles.sellerIcon}>
                    <FiShoppingBag />
                  </span>
                  <h4>
                    {t("Are You a Shop Owner?", "আপনি কি একজন দোকান মালিক?")}
                  </h4>
                  <p>
                    {t(
                      "This form is for general questions. To list your meat shop on Koshaix, use our dedicated seller application instead.",
                      "এই ফর্মটি সাধারণ প্রশ্নের জন্য। কোশাইক্সে আপনার মাংসের দোকান তালিকাভুক্ত করতে, আমাদের নির্দিষ্ট বিক্রেতা আবেদন ফর্ম ব্যবহার করুন।",
                    )}
                  </p>
                  <Link href="/for-sellers" className={styles.sellerBtn}>
                    {t("List Your Shop", "আপনার দোকান তালিকাভুক্ত করুন")}
                  </Link>
                </div>
              </div>

              {/* RIGHT: FORM */}
              <div className={styles.formCol}>
                {submitted ? (
                  <div className={styles.successBox}>
                    <FaCheckCircle />
                    <h3>{t("Message Sent!", "বার্তা পাঠানো হয়েছে!")}</h3>
                    <p>
                      {t(
                        "Thanks for reaching out. Our team will get back to you shortly.",
                        "যোগাযোগ করার জন্য ধন্যবাদ। আমাদের টিম শীঘ্রই আপনার সাথে যোগাযোগ করবে।",
                      )}
                    </p>
                    <button onClick={() => setSubmitted(false)}>
                      {t("Send Another Message", "আরেকটি বার্তা পাঠান")}
                    </button>
                  </div>
                ) : (
                  <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.formRow}>
                      <div className={styles.field}>
                        <label>{t("Full Name", "পুরো নাম")}</label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder={t("Your name", "আপনার নাম")}
                        />
                      </div>
                      <div className={styles.field}>
                        <label>{t("Email Address", "ইমেইল ঠিকানা")}</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder={t("you@example.com", "you@example.com")}
                        />
                      </div>
                    </div>

                    <div className={styles.formRow}>
                      <div className={styles.field}>
                        <label>{t("Phone Number", "ফোন নম্বর")}</label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder={t("Optional", "ঐচ্ছিক")}
                        />
                      </div>
                      <div className={styles.field}>
                        <label>{t("Subject", "বিষয়")}</label>
                        <input
                          type="text"
                          name="subject"
                          required
                          value={form.subject}
                          onChange={handleChange}
                          placeholder={t(
                            "What's this about?",
                            "এটি কী সম্পর্কে?",
                          )}
                        />
                      </div>
                    </div>

                    <div className={styles.field}>
                      <label>{t("Message", "বার্তা")}</label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        placeholder={t(
                          "Tell us how we can help...",
                          "আমরা কীভাবে সাহায্য করতে পারি বলুন...",
                        )}
                      />
                    </div>

                    <button type="submit" className={styles.submitBtn}>
                      {t("Send Message", "বার্তা পাঠান")}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
