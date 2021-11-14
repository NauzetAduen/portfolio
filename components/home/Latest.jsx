import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { memo } from "react";

import WebsiteDesign from "../../public/WebsiteDesign.svg";
import stylesButton from "../../styles/Button.module.scss";
import styles from "../../styles/Latest.module.scss";

function Latest() {
  return (
    <div className={styles.latest}>
      <p className={styles.title}>Latest creations</p>
      <div className={styles.columns}>
        <div className={styles.svgColumn}>
          <Image src={WebsiteDesign} />
        </div>
        <div className={styles.creationsColumn}>
          <div className={styles.creation}>
            <div className={styles.subcreation}>
              <div className={styles.digit}>01</div>
            </div>
            <div className={styles.subcreationText}>
              <p className={styles.creationTitle}>Code Challenge for ADE</p>
              <p className={styles.creationDesc}>
                This challenge help me land a job as a Flutter developer in ADE.
              </p>
            </div>
          </div>
          <div className={styles.creation}>
            <div className={styles.subcreation}>
              <div className={styles.digit}>02</div>
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
