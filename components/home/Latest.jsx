import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { memo, useState } from "react";

import CodeChallenge from "../../assets/code_challenge.png";
import FlutterPortfolio from "../../assets/flutter_portfolio.png";
import WebsiteDesign from "../../public/WebsiteDesign.svg";
import stylesButton from "../../styles/Button.module.scss";
import styles from "../../styles/Latest.module.scss";

function Latest() {
  const [showImage, setShowImage] = useState(WebsiteDesign);
  // const [show02, setShow02] = useState(false);
  return (
    <div className={styles.latest}>
      <p className={styles.title}>Latest creations</p>
      <div className={styles.columns}>
        <div className={styles.svgColumn}>
          <Image src={showImage} />
        </div>
        <div className={styles.creationsColumn}>
          <div
            className={styles.creation}
            onMouseEnter={() => {
              setShowImage(CodeChallenge);
            }}
            onMouseLeave={() => {
              setShowImage(WebsiteDesign);
            }}
          >
            <div className={styles.subcreation}>
              <div className={styles.digit}>01</div>
              {/* {show01 && (
                <div className={styles.notHidden}>
                  <Image src={CodeChallenge} />
                </div>
              )} */}
            </div>
            <div className={styles.subcreationText}>
              <p className={styles.creationTitle}>Code Challenge for ADE</p>
              <p className={styles.creationDesc}>
                This challenge help me land a job as a Flutter developer in ADE.
              </p>
            </div>
          </div>
          <div
            className={styles.creation}
            onMouseEnter={() => {
              setShowImage(FlutterPortfolio);
            }}
            onMouseLeave={() => {
              setShowImage(WebsiteDesign);
            }}
          >
            <div className={styles.subcreation}>
              <div className={styles.digit}>02</div>
              {/* {show02 && <div className={styles.notHidden}>02</div>} */}
              {/* {show02 && (
                <div className={styles.notHidden}>
                  <Image src={FlutterPortfolio} />
                </div>
              )} */}
            </div>
            <div className={styles.subcreationText}>
              <p className={styles.creationTitle}>Portfolio</p>
              <p className={styles.creationDesc}>
                This project was made with NextJs as a learning experience.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.seeMore}>
        <Link href="/projects">
          <button className={stylesButton.longButton}>
            See more projects
            <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default memo(Latest);
