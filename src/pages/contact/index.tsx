import Head from "next/head";
import styles from "./contact.module.scss";
import Header from "@/layout/header";
import Footer from "@/layout/footer";
import { Container } from "react-bootstrap";
import NextImage from "@/hooks/NextImage";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us | Koshaix</title>
      </Head>
      <Header />
      <main className={styles.main}>
        <section className={styles.banner}>
          <Container className={styles.container}>
            <div className={styles.content}>
              <h2>Contact Us</h2>
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
                  <h2>Send Us a Message</h2>
                  <p className={styles.desc}>
                    Fill out the form and we'll get back to you within 24 hours.
                  </p>
                  <div className={styles.formWrapper}>
                    <form action="" className={styles.form}>
                      <div className={styles.field}>
                        <label>Full Name</label>
                        <input type="text" />
                      </div>
                      <div className={styles.field}>
                        <label>Phone Number</label>
                        <input type="tel" />
                      </div>
                      <div className={styles.field}>
                        <label>Email Address</label>
                        <input type="email" />
                      </div>
                      <div className={styles.field}>
                        <label>Message</label>
                        <textarea
                          name=""
                          id=""
                          placeholder="Tell us how we can help..."
                        ></textarea>
                      </div>
                      <div className={styles.btn}>
                        <button>Submit Message</button>
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
