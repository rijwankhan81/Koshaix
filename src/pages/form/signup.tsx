// pages/signup.tsx
import { useState } from "react";
import styles from "./auth.module.scss";
import { Container } from "react-bootstrap";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Header from "@/layout/header";
import Footer from "@/layout/footer";
import { useLanguage } from "@/context/LanguageContext";
import { FcGoogle } from "react-icons/fc";
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function SignupPage() {
  const { t } = useLanguage();
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [agreed, setAgreed] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError("");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: wire this up to your actual auth backend (NextAuth, Firebase, custom API, etc.)
    if (!form.name || !form.email || !form.password) {
      setError(
        t("Please fill in all required fields.", "সব আবশ্যক ঘর পূরণ করুন।"),
      );
      return;
    }
    if (form.password !== form.confirmPassword) {
      setError(t("Passwords do not match.", "পাসওয়ার্ড মিলছে না।"));
      return;
    }
    if (!agreed) {
      setError(
        t(
          "Please agree to the Terms & Privacy Policy.",
          "শর্তাবলী ও গোপনীয়তা নীতিতে সম্মত হন।",
        ),
      );
      return;
    }
    router.push("/account");
  };

  return (
    <>
      <Head>
        <title>{t("Sign Up | Koshaix", "সাইন আপ | Koshaix")}</title>
      </Head>

      <Header />

      <main className={styles.main}>
        <section className={styles.authSection}>
          <Container className={styles.authContainer}>
            <div className={styles.card}>
              <div className={styles.head}>
                <span className={styles.eyebrow}>
                  {t("Get Started", "শুরু করুন")}
                </span>
                <h1>
                  {t("Create Your Account", "আপনার অ্যাকাউন্ট তৈরি করুন")}
                </h1>
                <p>
                  {t(
                    "Save your favorite cuts and connect with local shops faster.",
                    "আপনার পছন্দের কাট সংরক্ষণ করুন এবং দ্রুত স্থানীয় দোকানের সাথে যোগাযোগ করুন।",
                  )}
                </p>
              </div>

              <button type="button" className={styles.googleBtn}>
                <FcGoogle />
                {t("Continue with Google", "Google দিয়ে চালিয়ে যান")}
              </button>

              <div className={styles.divider}>
                <span>{t("or", "অথবা")}</span>
              </div>

              <form className={styles.form} onSubmit={handleSubmit}>
                {error && <p className={styles.errorMsg}>{error}</p>}

                <div className={styles.field}>
                  <label>{t("Full Name", "পুরো নাম")}</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder={t("Your full name", "আপনার পুরো নাম")}
                  />
                </div>

                <div className={styles.formRow}>
                  <div className={styles.field}>
                    <label>{t("Email Address", "ইমেইল ঠিকানা")}</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                    />
                  </div>
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
                </div>

                <div className={styles.formRow}>
                  <div className={styles.field}>
                    <label>{t("Password", "পাসওয়ার্ড")}</label>
                    <div className={styles.passwordField}>
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        placeholder={t(
                          "Create a password",
                          "একটি পাসওয়ার্ড তৈরি করুন",
                        )}
                      />
                      <button
                        type="button"
                        className={styles.eyeBtn}
                        onClick={() => setShowPassword((v) => !v)}
                        aria-label={
                          showPassword ? "Hide password" : "Show password"
                        }
                      >
                        {showPassword ? <FiEyeOff /> : <FiEye />}
                      </button>
                    </div>
                  </div>
                  <div className={styles.field}>
                    <label>
                      {t("Confirm Password", "পাসওয়ার্ড নিশ্চিত করুন")}
                    </label>
                    <input
                      type={showPassword ? "text" : "password"}
                      name="confirmPassword"
                      value={form.confirmPassword}
                      onChange={handleChange}
                      placeholder={t(
                        "Re-enter password",
                        "পাসওয়ার্ড আবার লিখুন",
                      )}
                    />
                  </div>
                </div>

                <label className={styles.checkboxRow}>
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                  />
                  <span className={styles.checkboxBox} />
                  <span>
                    {t("I agree to the", "আমি সম্মত")}{" "}
                    <Link href="/terms">
                      {t("Terms of Service", "সেবার শর্তাবলী")}
                    </Link>{" "}
                    {t("and", "এবং")}{" "}
                    <Link href="/privacy">
                      {t("Privacy Policy", "গোপনীয়তা নীতি")}
                    </Link>
                  </span>
                </label>

                <button type="submit" className={styles.submitBtn}>
                  {t("Create Account", "অ্যাকাউন্ট তৈরি করুন")}
                </button>
              </form>

              <p className={styles.switchText}>
                {t("Already have an account?", "ইতিমধ্যে অ্যাকাউন্ট আছে?")}{" "}
                <Link href="/form/login">{t("Log In", "লগ ইন করুন")}</Link>
              </p>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
