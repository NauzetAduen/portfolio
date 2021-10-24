import styles from "../styles/Contact.module.scss";
import { memo } from "react";

function Contact() {
  return (
    <div className={styles.contact}>
      <p className={styles.title}>Now that we're here</p>
      <div className={styles.welcomeDiv}>
        <div className={styles.welcomeText}>
          Thank you for coming home. You can learn something about me, my
          projects or check my blog to know what I'm doing. Take your time, and
          contact me if you need freelancer work, consultation or just help.
        </div>
        <div className={styles.personalCard}>
          <div className={styles.cardItems}>
            <p>NAUZET HERNÁNDEZ</p>
            <p>(+34) 685472601 </p>
            <p>nauzet.aduen@gmail.com</p>
            <p>Flutter developer at ADE</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default memo(Contact);
