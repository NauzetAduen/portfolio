import Head from "next/head";
import Introduction from "../components/me/Introduction";
import Personal from "../components/me/Personal";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

import generalStyles from "../styles/Home.module.scss";
import styles from "../styles/Blog.module.scss";

export default function blog() {
  return (
    <>
      <Head>
        <title>Nauzet Hernández Portfolio</title>
        <meta name="description" content="Portfolio by Nauzet Hernández" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main>
        <div className={generalStyles.fullHeight}>
          <div className={styles.centeredDiv}>Work in progress</div>
        </div>
      </main>
    </>
  );
}
