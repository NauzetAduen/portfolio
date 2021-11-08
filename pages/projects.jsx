import Head from "next/head";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import generalStyles from "../styles/Home.module.scss";
import styles from "../styles/Projects.module.scss";
import CodeChallenge from "../assets/code_challenge.png";
import Diabetiary from "../assets/diabetiary.png";
import HikingApp from "../assets/hiking_app.png";
import Image from "next/image";

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
        <div className={generalStyles.fullHeight}>
          <div className={styles.twoColumns}>
            <div className={styles.imageColumn}>
              <Image src={CodeChallenge} />
            </div>
            <div className={styles.textColumn}>
              Application which allows users to search for places using the
              Foursquare API, view their search results and view the individual
              details of each search result. I use Clean Architecture by Uncle
              Bob adapted by ResoCoder, and I use package by feature as a code
              organisation. I used the 'TDD metodology' to test each layer of
              the app but I didn't implement any UI test. You have a typeahead
              pattern, uses geolocation, allows you to like venues and shows a
              GoogleMap view.
            </div>
          </div>
        </div>
        <div className={generalStyles.fullHeight}>
          <div className={styles.twoColumns + " " + styles.darkBackground}>
            <div className={styles.textColumn + " " + styles.lightText}>
              Diabetiary, an app for diabetic patients. This app will simplify
              the user interface in order to help the user to understand how the
              illness is working, in order to fix it or keep it right. It's
              based on a tipical diabetic journal that you show to your doctor.
              Theme, fonts and general UI/UX design may change. Work In
              Progress.
            </div>
            <div className={styles.imageColumn}>
              <Image src={Diabetiary} />
            </div>
          </div>
        </div>

        <div className={generalStyles.fullHeight}>
          <div className={styles.twoColumns}>
            <div className={styles.imageColumn}>
              <Image src={HikingApp} />
            </div>
            <div className={styles.textColumn}>
              This was my Final University Project. Users can create hiking
              trails and events, share, like and rate them. The backend was
              Firebase, which helped me to create a completely reactive app. I
              Learned the Flutter framework, the Dart Programming Language and
              the cloud firestore ecosystem.
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
}
