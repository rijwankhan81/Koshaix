// pages/for-sellers.tsx
import { useState } from "react";
import styles from "./for-sellers.module.scss";
import { Container } from "react-bootstrap";
import Head from "next/head";
import Header from "@/layout/header";
import Footer from "@/layout/footer";
import { useLanguage } from "@/context/LanguageContext";
import {
  FaCheckCircle,
  FaUsers,
  FaChartLine,
  FaShieldAlt,
  FaBolt,
} from "react-icons/fa";
import { FiUpload, FiX } from "react-icons/fi";

const BENEFITS = [
  {
    icon: <FaUsers />,
    en_title: "Reach More Customers",
    bn_title: "আরও গ্রাহকের কাছে পৌঁছান",
    en_desc:
      "Get discovered by people actively searching for meat shops near you.",
    bn_desc: "যারা আপনার কাছাকাছি মাংসের দোকান খুঁজছে তাদের কাছে পৌঁছান।",
  },
  {
    icon: <FaBolt />,
    en_title: "No Setup Hassle",
    bn_title: "কোনো ঝামেলা ছাড়াই সেটআপ",
    en_desc: "List your shop in minutes — no technical knowledge required.",
    bn_desc:
      "মিনিটের মধ্যে আপনার দোকান তালিকাভুক্ত করুন — কোনো প্রযুক্তিগত জ্ঞান লাগবে না।",
  },
  {
    icon: <FaShieldAlt />,
    en_title: "Verified Badge",
    bn_title: "যাচাইকৃত ব্যাজ",
    en_desc: "Build customer trust with a verified shop badge on your profile.",
    bn_desc: "আপনার প্রোফাইলে যাচাইকৃত ব্যাজ দিয়ে গ্রাহকের বিশ্বাস তৈরি করুন।",
  },
  {
    icon: <FaChartLine />,
    en_title: "Zero Commission",
    bn_title: "শূন্য কমিশন",
    en_desc:
      "Customers contact you directly — no middleman cutting into your margin.",
    bn_desc:
      "গ্রাহকরা সরাসরি আপনার সাথে যোগাযোগ করে — কোনো মধ্যস্থতাকারী আপনার লাভ কাটে না।",
  },
];

const PROCESS = [
  {
    num: "01",
    en_title: "Submit Your Details",
    bn_title: "আপনার তথ্য জমা দিন",
    en_desc: "Fill out the form below with your shop and contact information.",
    bn_desc: "নিচের ফর্মে আপনার দোকান ও যোগাযোগের তথ্য পূরণ করুন।",
  },
  {
    num: "02",
    en_title: "Get Verified",
    bn_title: "যাচাইকরণ সম্পন্ন করুন",
    en_desc:
      "Our team reviews and verifies your shop within 2–3 business days.",
    bn_desc:
      "আমাদের টিম ২–৩ কর্মদিবসের মধ্যে আপনার দোকান পর্যালোচনা ও যাচাই করে।",
  },
  {
    num: "03",
    en_title: "Start Getting Customers",
    bn_title: "গ্রাহক পেতে শুরু করুন",
    en_desc: "Your shop goes live and nearby customers can start reaching out.",
    bn_desc:
      "আপনার দোকান লাইভ হয়ে যায় এবং কাছের গ্রাহকরা যোগাযোগ শুরু করতে পারে।",
  },
];

const CATEGORY_OPTIONS = [
  { value: "chicken", en: "Chicken", bn: "চিকেন" },
  { value: "mutton", en: "Mutton", bn: "মাটন" },
  { value: "beef", en: "Beef", bn: "গরুর মাংস" },
  { value: "seafood", en: "Seafood", bn: "সামুদ্রিক খাবার" },
  { value: "multiple", en: "Multiple Categories", bn: "একাধিক ক্যাটাগরি" },
];

export default function ForSellersPage() {
  const { t } = useLanguage();

  const [form, setForm] = useState({
    shopName: "",
    ownerName: "",
    phone: "",
    email: "",
    address: "",
    category: "",
  });
  const [shopBanner, setShopBanner] = useState<File | null>(null);
  const [bannerPreview, setBannerPreview] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleBannerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    setShopBanner(file);

    if (bannerPreview) URL.revokeObjectURL(bannerPreview);
    setBannerPreview(file ? URL.createObjectURL(file) : null);
  };

  const removeBanner = () => {
    if (bannerPreview) URL.revokeObjectURL(bannerPreview);
    setShopBanner(null);
    setBannerPreview(null);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: wire this up to your actual seller-onboarding backend or API route
    // shopBanner (File) needs to be sent as multipart/form-data, e.g.:
    // const body = new FormData();
    // Object.entries(form).forEach(([key, value]) => body.append(key, value));
    // if (shopBanner) body.append("shopBanner", shopBanner);
    setSubmitted(true);
  };

  return (
    <>
      <Head>
        <title>
          {t(
            "List Your Shop | Koshaix",
            "আপনার দোকান তালিকাভুক্ত করুন | Koshaix",
          )}
        </title>
        <meta
          name="description"
          content={t(
            "List your meat shop on Koshaix and get discovered by customers near you.",
            "কোশাইক্সে আপনার মাংসের দোকান তালিকাভুক্ত করুন এবং কাছের গ্রাহকদের কাছে পৌঁছান।",
          )}
        />
      </Head>

      <Header />

      <main className={styles.main}>
        {/* BANNER */}
        <section className={styles.banner}>
          <Container className={styles.container}>
            <span className={styles.breadcrumb}>
              {t("Home", "হোম")} <span>/</span>{" "}
              {t("List Your Shop", "দোকান তালিকাভুক্ত করুন")}
            </span>
            <h1>
              {t(
                "Grow Your Meat Shop With Koshaix",
                "কোশাইক্সের সাথে আপনার দোকান বাড়ান",
              )}
            </h1>
            <p>
              {t(
                "Join hundreds of verified local shops already connecting with customers nearby — zero commission, zero hassle.",
                "শত শত যাচাইকৃত স্থানীয় দোকানের সাথে যোগ দিন যারা ইতিমধ্যে কাছের গ্রাহকদের সাথে সংযুক্ত — শূন্য কমিশন, শূন্য ঝামেলা।",
              )}
            </p>
          </Container>
        </section>

        {/* BENEFITS */}
        <section className={styles.benefits}>
          <Container>
            <div className={styles.benefitsGrid}>
              {BENEFITS.map((b) => (
                <div key={b.en_title} className={styles.benefitCard}>
                  <span className={styles.benefitIcon}>{b.icon}</span>
                  <h4>{t(b.en_title, b.bn_title)}</h4>
                  <p>{t(b.en_desc, b.bn_desc)}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* PROCESS */}
        <section className={styles.process}>
          <Container>
            <div className={styles.head}>
              <span className={styles.eyebrow}>
                {t("Simple Process", "সহজ প্রক্রিয়া")}
              </span>
              <h2>{t("Get Listed in 3 Steps", "৩ ধাপে তালিকাভুক্ত হন")}</h2>
            </div>

            <div className={styles.steps}>
              {PROCESS.map((step, i) => (
                <div key={step.num} className={styles.step}>
                  <span className={styles.stepNum}>{step.num}</span>
                  <h4>{t(step.en_title, step.bn_title)}</h4>
                  <p>{t(step.en_desc, step.bn_desc)}</p>
                  {i < PROCESS.length - 1 && (
                    <span className={styles.connector} aria-hidden="true" />
                  )}
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* SIGNUP FORM */}
        <section className={styles.formSection}>
          <Container>
            <div className={styles.formWrapper}>
              {submitted ? (
                <div className={styles.successBox}>
                  <FaCheckCircle />
                  <h3>{t("Application Received!", "আবেদন গৃহীত হয়েছে!")}</h3>
                  <p>
                    {t(
                      "Our team will review your shop details and reach out within 2–3 business days.",
                      "আমাদের টিম আপনার দোকানের তথ্য পর্যালোচনা করবে এবং ২–৩ কর্মদিবসের মধ্যে যোগাযোগ করবে।",
                    )}
                  </p>
                </div>
              ) : (
                <>
                  <div className={styles.head}>
                    <span className={styles.eyebrow}>
                      {t("Apply Now", "এখনই আবেদন করুন")}
                    </span>
                    <h2>
                      {t("List Your Shop", "আপনার দোকান তালিকাভুক্ত করুন")}
                    </h2>
                  </div>

                  <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.formRow}>
                      <div className={styles.field}>
                        <label>{t("Shop Name", "দোকানের নাম")}</label>
                        <input
                          type="text"
                          name="shopName"
                          required
                          value={form.shopName}
                          onChange={handleChange}
                          placeholder={t(
                            "e.g. Fresh Cut Meat House",
                            "যেমন: ফ্রেশ কাট মিট হাউস",
                          )}
                        />
                      </div>
                      <div className={styles.field}>
                        <label>{t("Owner Name", "মালিকের নাম")}</label>
                        <input
                          type="text"
                          name="ownerName"
                          required
                          value={form.ownerName}
                          onChange={handleChange}
                          placeholder={t("Your full name", "আপনার পুরো নাম")}
                        />
                      </div>
                    </div>

                    <div className={styles.formRow}>
                      <div className={styles.field}>
                        <label>{t("Phone Number", "ফোন নম্বর")}</label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={form.phone}
                          onChange={handleChange}
                          placeholder={t("+91 XXXXX-XXXXX", "+৯১ XXXXX-XXXXX")}
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
                          placeholder="you@example.com"
                        />
                      </div>
                    </div>

                    <div className={styles.field}>
                      <label>{t("Shop Address", "দোকানের ঠিকানা")}</label>
                      <input
                        type="text"
                        name="address"
                        required
                        value={form.address}
                        onChange={handleChange}
                        placeholder={t(
                          "Full shop address with area/city",
                          "এলাকা/শহরসহ দোকানের সম্পূর্ণ ঠিকানা",
                        )}
                      />
                    </div>

                    <div className={styles.field}>
                      <label>{t("Primary Category", "প্রধান ক্যাটাগরি")}</label>
                      <select
                        name="category"
                        required
                        value={form.category}
                        onChange={handleChange}
                      >
                        <option value="" disabled>
                          {t(
                            "Select a category",
                            "একটি ক্যাটাগরি নির্বাচন করুন",
                          )}
                        </option>
                        {CATEGORY_OPTIONS.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {t(opt.en, opt.bn)}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className={styles.field}>
                      <label>{t("Shop Banner", "দোকানের ব্যানার")}</label>
                      <span className={styles.fieldHint}>
                        {t(
                          "A wide photo of your shop front or a banner image (recommended 1200×400px)",
                          "আপনার দোকানের সামনের একটি চওড়া ছবি বা ব্যানার ছবি (প্রস্তাবিত ১২০০×৪০০ পিক্সেল)",
                        )}
                      </span>

                      {bannerPreview ? (
                        <div className={styles.bannerPreview}>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={bannerPreview} alt="Shop banner preview" />
                          <button
                            type="button"
                            className={styles.bannerRemoveBtn}
                            onClick={removeBanner}
                            aria-label={t("Remove banner", "ব্যানার সরান")}
                          >
                            <FiX />
                          </button>
                        </div>
                      ) : (
                        <label className={styles.bannerDropzone}>
                          <FiUpload />
                          <span>
                            {t(
                              "Click to upload banner",
                              "ব্যানার আপলোড করতে ক্লিক করুন",
                            )}
                          </span>
                          <span className={styles.bannerDropzoneHint}>
                            {t(
                              "PNG or JPG, up to 5MB",
                              "PNG বা JPG, সর্বোচ্চ ৫MB",
                            )}
                          </span>
                          <input
                            type="file"
                            accept="image/png, image/jpeg"
                            onChange={handleBannerChange}
                            hidden
                          />
                        </label>
                      )}
                    </div>

                    <button type="submit" className={styles.submitBtn}>
                      {t("Submit Application", "আবেদন জমা দিন")}
                    </button>
                  </form>
                </>
              )}
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
