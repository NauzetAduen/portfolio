import generalStyles from "../../styles/Home.module.scss";
import styles from "../../styles/Introduction.module.scss";
export default function Introduction() {
  return (
    <div className={generalStyles.fullHeight}>
      <div className={styles.introTextDiv}>
        <div className={styles.group}>
          <div className={styles.textAndIndex}>
            <p className={styles.index}>01</p>
            <p className={styles.title}>Who am I?</p>
          </div>
          <p className={styles.text}>
            Hi again, I’m Nauzet Hernández, I'm a software engineer working at{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
              href="https://adedelivered.com/"
            >
              ADE
            </a>{" "}
            and I live in Las Palmas de Gran Canaria, Spain.
          </p>
        </div>
        <div className={styles.group}>
          <div className={styles.textAndIndex}>
            <p className={styles.index}>02</p>
            <p className={styles.title}>Studies</p>
          </div>
          <p className={styles.text}>
            I’m, specifically, a computer engineer with a software engineering
            specification at{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
              href="https://www.ulpgc.es/"
            >
              ULPGC
            </a>
            . I've attended advanced courses in Flutter, Android and design.
          </p>
        </div>
        <div className={styles.group}>
          <div className={styles.textAndIndex}>
            <p className={styles.index}>03</p>
            <p className={styles.title}>Stack</p>
          </div>
          <p className={styles.text}>
            I'm a{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
              href="https://www.flutter.dev/"
            >
              Flutter
            </a>{" "}
            advocate, at work I use ReactJS and this portfolio was made with
            NextJS, so I consider myself a Frontend developer. Still, I have
            experience with backends like firebase.
          </p>
        </div>
      </div>
    </div>
  );
}
