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
          <p className={styles.contactText}>
            Thank you for coming home. You can learn something about me, my
            projects or check my blog to know what I'm doing. Take your time,
            and contact me if you need freelancer work, consultation or just
            help.
          </p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://docs.google.com/forms/d/e/1FAIpQLScLEzzNHWDOEUxhgPkMX2iwQd5pWPS1losAx_HADVub1GX2Ng/viewform?usp=sf_link"
          >
            <button className={styles.submit}>
              <p className={styles.buttonText}>Contact me</p>
            </button>
          </a>
        </div>
        <div className={styles.imageDiv}>
          <Image src={WebsiteHosting} />
        </div>
      </div>
    </div>
  );
}
export default memo(Contact);
