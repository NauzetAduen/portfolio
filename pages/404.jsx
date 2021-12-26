import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Nav from "../components/shared/Nav";
import lost from "../public/Lost.svg";
import styles from "../styles/404.module.scss";
import generalStyles from "../styles/Home.module.scss";

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
            <Image src={lost} />
            <div className={styles.lost}>
              <span className={styles.fourHundred}>400+4</span>
              <span className={styles.backHome}>
                Resource not found, let's go back home.
              </span>

              <button className={styles.buttonHome}>
                <Link href="/">Home</Link>
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
