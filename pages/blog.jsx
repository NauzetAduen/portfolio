import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Nav from "../components/shared/Nav";
import WIP from "../public/Logodesign.svg";
import styles from "../styles/Blog.module.scss";
import generalStyles from "../styles/Home.module.scss";

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
          <div className={styles.twoRows}>
            <Image src={WIP} />
            <div className={styles.wip}>
              <span className={styles.text}>Work in progress</span>
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
