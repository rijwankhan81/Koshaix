// pages/account.tsx
import { useState } from "react";
import styles from "./account.module.scss";
import { Container } from "react-bootstrap";
import Head from "next/head";
import Link from "next/link";
import Header from "@/layout/header";
import Footer from "@/layout/footer";
import ProductCard from "@/component/ProductCard";
import { useLanguage } from "@/context/LanguageContext";
import { useWishlist } from "@/context/WishlistContext";
import {
  FaRegUser,
  FaRegHeart,
  FaCog,
  FaSignOutAlt,
  FaCamera,
} from "react-icons/fa";

type Tab = "profile" | "wishlist" | "settings";

export default function AccountPage() {
  const { t, lang, setLang } = useLanguage();
  const { wishlist } = useWishlist();

  const [activeTab, setActiveTab] = useState<Tab>("profile");
  const [saved, setSaved] = useState(false);

  // TODO: replace with real user data from your auth/session context
  const [profile, setProfile] = useState({
    name: "Rijwan Ahmed",
    email: "rijwan@example.com",
    phone: "+880 9XXXX-XXXXX",
    address: "Dhaka, Bangladesh",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfile((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: wire this up to your actual user/profile update API
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <>
      <Head>
        <title>{t("My Account | Koshaix", "আমার অ্যাকাউন্ট | Koshaix")}</title>
      </Head>

      <Header />

      <main className={styles.main}>
        {/* BANNER */}
        <section className={styles.banner}>
          <Container className={styles.container}>
            <span className={styles.breadcrumb}>
              {t("Home", "হোম")} <span>/</span>{" "}
              {t("My Account", "আমার অ্যাকাউন্ট")}
            </span>
            <h1>{t("My Account", "আমার অ্যাকাউন্ট")}</h1>
          </Container>
        </section>

        <section className={styles.accountSection}>
          <Container>
            <div className={styles.wrapper}>
              {/* SIDEBAR */}
              <aside className={styles.sidebar}>
                <div className={styles.userCard}>
                  <span className={styles.avatar}>
                    {profile.name.charAt(0)}
                    <button
                      type="button"
                      className={styles.avatarEdit}
                      aria-label={t("Change photo", "ছবি পরিবর্তন করুন")}
                    >
                      <FaCamera />
                    </button>
                  </span>
                  <h4>{profile.name}</h4>
                  <p>{profile.email}</p>
                </div>

                <nav className={styles.tabNav}>
                  <button
                    className={`${styles.tabBtn} ${activeTab === "profile" ? styles.tabActive : ""}`}
                    onClick={() => setActiveTab("profile")}
                  >
                    <FaRegUser /> {t("Profile", "প্রোফাইল")}
                  </button>
                  <button
                    className={`${styles.tabBtn} ${activeTab === "wishlist" ? styles.tabActive : ""}`}
                    onClick={() => setActiveTab("wishlist")}
                  >
                    <FaRegHeart /> {t("Wishlist", "উইশলিস্ট")}
                    {wishlist.length > 0 && (
                      <span className={styles.tabBadge}>{wishlist.length}</span>
                    )}
                  </button>
                  <button
                    className={`${styles.tabBtn} ${activeTab === "settings" ? styles.tabActive : ""}`}
                    onClick={() => setActiveTab("settings")}
                  >
                    <FaCog /> {t("Settings", "সেটিংস")}
                  </button>
                  <button type="button" className={styles.logoutBtn}>
                    <FaSignOutAlt /> {t("Log Out", "লগ আউট")}
                  </button>
                </nav>
              </aside>

              {/* CONTENT */}
              <div className={styles.content}>
                {/* PROFILE TAB */}
                {activeTab === "profile" && (
                  <div className={styles.panel}>
                    <h2>{t("Profile Information", "প্রোফাইল তথ্য")}</h2>
                    <p className={styles.panelDesc}>
                      {t(
                        "Update your personal details below.",
                        "নিচে আপনার ব্যক্তিগত তথ্য আপডেট করুন।",
                      )}
                    </p>

                    <form className={styles.form} onSubmit={handleSave}>
                      <div className={styles.formRow}>
                        <div className={styles.field}>
                          <label>{t("Full Name", "পুরো নাম")}</label>
                          <input
                            type="text"
                            name="name"
                            value={profile.name}
                            onChange={handleChange}
                          />
                        </div>
                        <div className={styles.field}>
                          <label>{t("Email Address", "ইমেইল ঠিকানা")}</label>
                          <input
                            type="email"
                            name="email"
                            value={profile.email}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className={styles.formRow}>
                        <div className={styles.field}>
                          <label>{t("Phone Number", "ফোন নম্বর")}</label>
                          <input
                            type="tel"
                            name="phone"
                            value={profile.phone}
                            onChange={handleChange}
                          />
                        </div>
                        <div className={styles.field}>
                          <label>{t("Address", "ঠিকানা")}</label>
                          <input
                            type="text"
                            name="address"
                            value={profile.address}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <button type="submit" className={styles.saveBtn}>
                        {t("Save Changes", "পরিবর্তনগুলো সংরক্ষণ করুন")}
                      </button>

                      {saved && (
                        <span className={styles.savedMsg}>
                          {t("Changes saved!", "পরিবর্তনগুলো সংরক্ষিত হয়েছে!")}
                        </span>
                      )}
                    </form>
                  </div>
                )}

                {/* WISHLIST TAB */}
                {activeTab === "wishlist" && (
                  <div className={styles.panel}>
                    <div className={styles.panelHead}>
                      <div>
                        <h2>{t("My Wishlist", "আমার উইশলিস্ট")}</h2>
                        <p className={styles.panelDesc}>
                          {wishlist.length > 0
                            ? `${wishlist.length} ${t("items saved", "টি আইটেম সংরক্ষিত")}`
                            : t(
                                "No items saved yet.",
                                "এখনো কোনো আইটেম সংরক্ষিত নেই।",
                              )}
                        </p>
                      </div>
                      {wishlist.length > 0 && (
                        <Link href="/wishlist" className={styles.viewAllLink}>
                          {t("View All", "সব দেখুন")} →
                        </Link>
                      )}
                    </div>

                    {wishlist.length > 0 ? (
                      <div className={styles.wishlistGrid}>
                        {wishlist.slice(0, 4).map((product) => (
                          <ProductCard
                            key={product.id}
                            product={{
                              ...product,
                              nameBn:
                                (product as any).nameBn ??
                                (product as any).name,
                            }}
                            hideWishlist
                          />
                        ))}
                      </div>
                    ) : (
                      <div className={styles.emptyState}>
                        <p>
                          {t(
                            "Browse the shop and tap the heart icon to save items here.",
                            "দোকান ব্রাউজ করুন এবং আইটেম সংরক্ষণ করতে হার্ট আইকনে ট্যাপ করুন।",
                          )}
                        </p>
                        <Link href="/shop" className={styles.emptyStateBtn}>
                          {t("Browse Shop", "দোকান ব্রাউজ করুন")}
                        </Link>
                      </div>
                    )}
                  </div>
                )}

                {/* SETTINGS TAB */}
                {activeTab === "settings" && (
                  <div className={styles.panel}>
                    <h2>{t("Settings", "সেটিংস")}</h2>
                    <p className={styles.panelDesc}>
                      {t(
                        "Manage your language and notification preferences.",
                        "আপনার ভাষা এবং বিজ্ঞপ্তি পছন্দ পরিচালনা করুন।",
                      )}
                    </p>

                    <div className={styles.settingRow}>
                      <div>
                        <h4>{t("Language", "ভাষা")}</h4>
                        <p>
                          {t(
                            "Choose your preferred language.",
                            "আপনার পছন্দের ভাষা নির্বাচন করুন।",
                          )}
                        </p>
                      </div>
                      <div className={styles.langSwitch}>
                        <button
                          className={lang === "en" ? styles.langActive : ""}
                          onClick={() => setLang("en")}
                        >
                          English
                        </button>
                        <button
                          className={lang === "bn" ? styles.langActive : ""}
                          onClick={() => setLang("bn")}
                        >
                          বাংলা
                        </button>
                      </div>
                    </div>

                    <div className={styles.settingRow}>
                      <div>
                        <h4>{t("Email Notifications", "ইমেইল বিজ্ঞপ্তি")}</h4>
                        <p>
                          {t(
                            "Get notified about offers and new shops near you.",
                            "অফার এবং নতুন দোকান সম্পর্কে বিজ্ঞপ্তি পান।",
                          )}
                        </p>
                      </div>
                      <label className={styles.toggleSwitch}>
                        <input type="checkbox" defaultChecked />
                        <span className={styles.toggleTrack} />
                      </label>
                    </div>

                    <div className={styles.dangerZone}>
                      <h4>{t("Danger Zone", "ঝুঁকিপূর্ণ এলাকা")}</h4>
                      <p>
                        {t(
                          "Deleting your account is permanent and cannot be undone.",
                          "আপনার অ্যাকাউন্ট মুছে ফেলা স্থায়ী এবং এটি ফিরিয়ে আনা যাবে না।",
                        )}
                      </p>
                      <button type="button" className={styles.deleteBtn}>
                        {t("Delete Account", "অ্যাকাউন্ট মুছুন")}
                      </button>
                    </div>
                  </div>
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
