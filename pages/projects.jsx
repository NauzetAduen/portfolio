import Head from "next/head";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import generalStyles from "../styles/Home.module.scss";
import styles from "../styles/Projects.module.scss";
import CodeChallenge from "../assets/code_challenge.png";
import Diabetiary from "../assets/diabetiary.png";
import HikingApp from "../assets/hiking_app.png";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { github } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
config.autoAddCss = false;

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
          <div className={styles.project}>
            <span className={styles.title}>Code Challenge</span>
            <div className={styles.twoColumns}>
              <div className={styles.imageColumn}>
                <Image src={CodeChallenge} />
              </div>
              <div className={styles.textColumn}>
                In this project I used the Foursquare API to show places. I did
                it with Flutter, using Clean Architecture and TDD.
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/NauzetAduen/coding-challenge"
                >
                  <button className={styles.button}>
                    Github
                    <FontAwesomeIcon icon={faGithub} size="1x" />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={generalStyles.fullHeight + " " + styles.darkBackground}>
          <div className={styles.project}>
            <span className={styles.title}>Diabetiary</span>
            <div className={styles.twoColumns}>
              <div className={styles.textColumn + " " + styles.lightText}>
                App which allow diabetes patients to organize their controls in
                groups like an autocontrol diary. As always, made with Flutter,
                Clean Arch and TDD. This project is somewhat abandoned.
              </div>
              <div className={styles.imageColumn}>
                <Image src={Diabetiary} />
              </div>
            </div>
          </div>
        </div>

        <div
          className={generalStyles.fullHeight + " " + styles.orangeBackground}
        >
          <div className={styles.project}>
            <span className={styles.title + " " + styles.darkText}>
              HikingApp - TFG
            </span>
            <div className={styles.twoColumns}>
              <div className={styles.imageColumn}>
                <Image src={HikingApp} />
              </div>
              <div className={styles.textColumn}>
                Final University Project to manage hikking trails and events.
                The backend was Firebase, which helped me to create a completely
                reactive app. Made with Flutter.
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/NauzetAduen/hiking_app_public"
                >
                  <button className={styles.darkButton}>
                    Github
                    <FontAwesomeIcon icon={faGithub} size="1x" />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
}
