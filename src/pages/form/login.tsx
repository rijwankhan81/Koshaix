// pages/login.tsx
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

export default function LoginPage() {
  const { t } = useLanguage();
  const router = useRouter();

  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError("");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: wire this up to your actual auth backend (NextAuth, Firebase, custom API, etc.)
    if (!form.email || !form.password) {
      setError(t("Please fill in all fields.", "সব ঘর পূরণ করুন।"));
      return;
    }
    router.push("/account");
  };

  return (
    <>
      <Head>
        <title>{t("Log In | Koshaix", "লগ ইন | Koshaix")}</title>
      </Head>

      <Header />

      <main className={styles.main}>
        <section className={styles.authSection}>
          <Container className={styles.authContainer}>
            <div className={styles.card}>
              <div className={styles.head}>
                <span className={styles.eyebrow}>
                  {t("Welcome Back", "স্বাগতম")}
                </span>
                <h1>{t("Log In to Koshaix", "কোশাইক্সে লগ ইন করুন")}</h1>
                <p>
                  {t(
                    "Access your wishlist, saved shops, and account settings.",
                    "আপনার উইশলিস্ট, সংরক্ষিত দোকান এবং অ্যাকাউন্ট সেটিংস দেখুন।",
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
                  <div className={styles.labelRow}>
                    <label>{t("Password", "পাসওয়ার্ড")}</label>
                    <Link href="/forgot-password" className={styles.forgotLink}>
                      {t("Forgot password?", "পাসওয়ার্ড ভুলে গেছেন?")}
                    </Link>
                  </div>
                  <div className={styles.passwordField}>
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={form.password}
                      onChange={handleChange}
                      placeholder={t(
                        "Enter your password",
                        "আপনার পাসওয়ার্ড লিখুন",
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

                <button type="submit" className={styles.submitBtn}>
                  {t("Log In", "লগ ইন করুন")}
                </button>
              </form>

              <p className={styles.switchText}>
                {t("Don't have an account?", "কোনো অ্যাকাউন্ট নেই?")}{" "}
                <Link href="/form/signup">{t("Sign Up", "সাইন আপ করুন")}</Link>
              </p>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
