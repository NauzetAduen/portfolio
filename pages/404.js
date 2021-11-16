import Head from "next/head";
import Nav from "../components/Nav";

import generalStyles from "../styles/Home.module.scss";
import styles from "../styles/404.module.scss";

export default function index() {
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
          <div className={styles.twoRows}>
            <div className={styles.oops}>OOOOPS!</div>
            <div className={styles.number}>404</div>
          </div>
        </div>
      </main>
    </>
  );
}
