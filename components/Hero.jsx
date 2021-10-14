import styles from "../styles/Hero.module.scss";
import Image from "next/image";
import checkout from "../public/Checkout.svg";
export default function Hero() {
  return (
    <div className={styles.dividedDiv}>
      <div className={styles.info}>
        <p className={styles.name}>Nauzet Hernández</p>
        <p className={styles.intro}>
          Software Engineer from the Canary Islands.
        </p>
        <p className={styles.intro}>Focused on the Frontend side of things. </p>
        <p className={styles.intro}>Flutter Advocate.</p>
      </div>
      <div className={styles.heroImage}>
        <Image src={checkout} width="1000vw" height="" />
      </div>
    </div>
  );
}
