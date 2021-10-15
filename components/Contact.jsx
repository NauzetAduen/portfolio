import styles from "../styles/Contact.module.scss";
import { memo } from "react";

function Contact() {
  return (
    <div className={styles.contact}>
      <div>
        <p className={styles.title}>Now that we're here</p>
      </div>
      <div className={styles.welcomeDiv}>
        <div className={styles.welcomeText}>
          Thank you for coming home. Now you should check my work and, possibly,
          my blog. After your visit, contact me if you please.
        </div>
        <div className={styles.personalCard}>
          <div className={styles.placeholder}>placeholder</div>
        </div>
      </div>
    </div>
  );
}
export default memo(Contact);
