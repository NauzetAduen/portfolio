import styles from "../styles/Hero.module.scss";

export default function Hero() {
  return (
    <div className={styles.dividedDiv}>
      <div className={styles.info}>
        <p className={styles.name}>Nauzet Hernández</p>
        <p className={styles.intro}>
          Software Engineer from the Canary Islands. Focused on the Frontend
          side of things. Flutter Advocate.
        </p>
      </div>
      <div></div>
    </div>
  );
}
