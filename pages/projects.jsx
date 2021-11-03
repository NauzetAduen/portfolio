import Head from "next/head";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function projects() {
  return (
    <>
      <Head>
        <title>Nauzet Hernández Portfolio</title>
        <meta name="description" content="Portfolio by Nauzet Hernández" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main>
        <Footer />
      </main>
    </>
  );
}
