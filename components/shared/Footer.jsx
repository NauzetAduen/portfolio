import Image from "next/image";
import { memo } from "react";

import styles from "../../styles/Footer.module.scss";
import FooterLink from "./FooterLink";

const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <div>
          <p className={styles.footerTitle}>Links</p>
          <FooterLink url={"https://github.com/NauzetAduen"} text="Github" />
          <FooterLink
            url={
              "https://www.linkedin.com/in/nauzet-aduen-hern%C3%A1ndez-hern%C3%A1ndez-036b4118b/"
            }
            text="Linkedin"
          />
        </div>
        <div>
          <p className={styles.footerTitle}>Support</p>
          <FooterLink
            url="mailto:nauzet.aduen@gmail.com"
            text="nauzet.aduen@gmail.com"
          />
          <FooterLink url="tel:+34685472601" text="(+34) 685472601" />
          <FooterLink url="/privacy-policy" text="Privacy policy" />
        </div>
        <div>
          <p className={styles.footerTitle}> Copyright </p>
          <p className={styles.footerCopyright}>Nau Hdez &copy; 2021</p>
          <Image src="/favicon.ico" width="50px" height="50px" />
        </div>
      </div>
    </>
  );
};
export default memo(Footer);
