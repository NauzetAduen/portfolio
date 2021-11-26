import Head from "next/head";
import Nav from "../components/Nav";
import Image from "next/image";

import generalStyles from "../styles/Home.module.scss";
import styles from "../styles/404.module.scss";
import lost from "../public/Lost.svg";

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
            <div className={styles.lost}>did you got lost?</div>
          </div>
        </div>
      </main>
    </>
  );
}
