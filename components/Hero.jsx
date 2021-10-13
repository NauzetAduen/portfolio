import styles from "../styles/Hero.module.scss";

export default function Hero() {
  return (
    <div className={styles.dividedDiv}>
      <div className={styles.info}>
        <p className={styles.name}>Nauzet Hernandez</p>
        <p className={styles.intro}>
          Hello, I’m Nau, a Software Engineer from the Canary Islands. I’m
          focusing on the frontend side of things.
        </p>
      </div>
      <div></div>
    </div>
  );
}
