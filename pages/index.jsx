import Head from "next/head";
import Hero from "../components/Hero";
import styles from "../styles/Home.module.scss";
import Nav from "../components/Nav";
import Latest from "../components/Latest";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nauzet Hernández Portfolio</title>
        <meta name="description" content="Portfolio by Nauzet Hernández" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <div className={styles.fullHeight}>
        <Hero />
      </div>
      <div className={styles.fullHeight}>
        <Latest />
      </div>
      <div className={styles.fullHeight}>
        <Contact />
      </div>
      <div className={styles.halfHeight}>
        <Footer />
      </div>
    </>
  );
}
