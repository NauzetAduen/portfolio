import styles from "../styles/Footer.module.scss";
import { memo } from "react";
const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <div>
          <p className={styles.footerTitle}>Links</p>
          <p>Github</p>
          <p>Linkedin</p>
          <p>Linkedin</p>
        </div>
        <div>
          <p className={styles.footerTitle}> Support </p>
          <p> email </p>
          <p> phone </p>
          <p> Privacy policy</p>
        </div>
      </div>
      <div>
        <p>Nau</p>
        <p>c 2021</p>
      </div>
    </>
  );
};
export default memo(Footer);
