import styles from "../styles/Latest.module.scss";
import stylesButton from "../styles/Button.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

import { memo } from "react";

function Latest() {
  return (
    <div className={styles.latest}>
      <div>
        <p className={styles.title}>Latest creations</p>
      </div>
      <div className={styles.creation}>
        <div className={styles.subcreation}>
          <div className={styles.placeholder}>Image</div>
        </div>
        <div className={styles.subcreationText}>
          <p className={styles.creationTitle}>Code Challenge for ADE</p>
          <p>
            This challenge help me land a job as a Flutter developer in ADE.
          </p>
          <button className={stylesButton.button}>more</button>
        </div>
      </div>
      <div className={styles.creationReverse}>
        <div className={styles.subcreationText}>
          <p className={styles.creationTitle}>Portfolio</p>
          <p>This project was made with NextJs as a learning experience.</p>
          <button className={stylesButton.button}>more</button>
        </div>
        <div className={styles.subcreation}>
          <div className={styles.placeholder}>Image</div>
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
