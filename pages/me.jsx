import Head from "next/head";
import Introduction from "../components/me/Introduction";
import Personal from "../components/me/Personal";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function me() {
  return (
    <>
      <Head>
        <title>Nauzet Hernández Portfolio</title>
        <meta name="description" content="Portfolio by Nauzet Hernández" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main>
        <Introduction />
        <Personal />
        <Footer />
      </main>
    </>
  );
}
