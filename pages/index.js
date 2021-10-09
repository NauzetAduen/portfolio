import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Hero";
import Styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nauzet Hernández Portfolio</title>
        <meta name="description" content="Portfolio by Nauzet Hernández" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={Styles.fullHeight}>
        <Hero />
      </div>
      <div className={Styles.fullHeight}>cocaina</div>
    </>
  );
}
