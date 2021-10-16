import styles from "../styles/Latest.module.scss";
import stylesButton from "../styles/Button.module.scss";

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
            Lorem ipsum whatevah Error sintarsis, Lorem ipsum whatevah Error
            sintarsis, Lorem ipsum whatevah Error sintarsis , Lorem ipsum
            whatevah Error sintarsis, Lorem ipsum whatevah Error sintarsis. 123.
          </p>
          <button className={stylesButton.button}>more</button>
        </div>
      </div>
      <div className={styles.creationReverse}>
        <div className={styles.subcreationText}>
          <p className={styles.creationTitle}>Second Lorem Ipsun</p>
          <p>
            Lorem ipsum whatevah Error sintarsis, Lorem ipsum whatevah Error
            sintarsis, Lorem ipsum whatevah Error sintarsis , Lorem ipsum
            whatevah Error sintarsis, Lorem ipsum whatevah Error sintarsis. 123.
          </p>
          <button className={stylesButton.button}>more</button>
        </div>
        <div className={styles.subcreation}>
          <div className={styles.placeholder}>Image</div>
        </div>
      </div>
      <div className={styles.seeMore}>
        <button className={stylesButton.longButton}>See more</button>
      </div>
    </div>
  );
}

export default memo(Latest);
