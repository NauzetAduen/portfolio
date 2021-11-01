import Image from "next/image";
import { memo } from "react";

import WebsiteHosting from "../../public/WebsiteHosting.svg";
import styles from "../../styles/Contact.module.scss";

function Contact() {
  return (
    <div className={styles.contact}>
      <p className={styles.title}>Now that we're here</p>
      <div className={styles.welcomeDiv}>
        <div className={styles.form}>
          <div className={styles.labelDiv}>
            <label htmlFor="emailInput" className={styles.label}>
              email
            </label>
            <input
              className={styles.input}
              placeholder="your@email.com"
              id="emailInput"
            ></input>
          </div>
          <div className={styles.labelDiv}>
            <label htmlFor="messageTextarea" className={styles.label}>
              message
            </label>
            <textarea
              className={styles.textArea}
              autoFocus
              id="messageTextarea"
              placeholder="Thank you for coming home. You can learn something about me, my projects or check my blog to know what I'm doing. Take your time, and contact me if you need freelancer work, consultation or just help."
            ></textarea>
          </div>
          <button className={styles.submit}>Submit</button>
        </div>
        <div className={styles.imageDiv}>
          <Image src={WebsiteHosting} />
        </div>
      </div>
    </div>
  );
}
export default memo(Contact);
