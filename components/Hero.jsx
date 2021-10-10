import styles from "../styles/Hero.module.scss";

export default function Hero() {
  return (
    <div className={styles.dividedDiv}>
      <div className={styles.info}>
        <blockquote className={styles.quote}>
          <p>“The journey of a thousand miles begins with a single step”</p>
          <p>– Lao-Tse</p>
        </blockquote>

        <p className={styles.intro}>
          Hello, I’m <span className={styles.name}>Nauzet</span>, a Software
          Engineer from the Canary Islands. I’m focusing on the frontend side of
          things.
        </p>
        <p className={styles.extraInfo}>
          Thanks for visiting my portfolio, where I share my ideas, goals and
          projects.
        </p>
      </div>
      <div></div>
    </div>
  );
}
