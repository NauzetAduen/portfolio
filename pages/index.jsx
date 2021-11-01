import Head from "next/head";
import Hero from "../components/home/Hero";
import styles from "../styles/Home.module.scss";
import Nav from "../components/Nav";
import Latest from "../components/home/Latest";
import Contact from "../components/home/Contact";
import Footer from "../components/Footer";
import * as React from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export default function Home() {
  return (
    <>
      <Head>
        <title>Nauzet Hernández Portfolio</title>
        <meta name="description" content="Portfolio by Nauzet Hernández" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main>
        <div className={styles.fullHeight}>
          <Hero />
        </div>
        <div className={styles.fullHeight}>
          <Latest />
        </div>
        <div className={styles.halfHeight}>
          <Contact />
        </div>
        <div className={styles.thirdHeight}>
          <Footer />
        </div>
      </main>
    </>
  );
}
