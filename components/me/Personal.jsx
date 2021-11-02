import React from "react";
import generalStyles from "../../styles/Home.module.scss";
import styles from "../../styles/Personal.module.scss";

export default function Personal() {
  return (
    <div className={generalStyles.fullHeight}>
      <div className={styles.introTextDiv}>
        <div className={styles.group}>
          <div className={styles.textAndIndex}>
            <p className={styles.index}>04</p>
            <p className={styles.title}>Personal</p>
          </div>
          <p className={styles.text}>
            Did you know I have broken a lot of bones? Once I broke both of my
            shoulders, it was fantastic. I also have diabetes mellitus type 1.
            Despise all of this, I take care of myself.
          </p>
        </div>
        <div className={styles.group}>
          <div className={styles.textAndIndex}>
            <p className={styles.index}>05</p>
            <p className={styles.title}>Hobbies</p>
          </div>
          <p className={styles.text}>
            Lately, I'm playing a lot of{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
              href="https://www.chess.com/member/nowset"
            >
              chess
            </a>{" "}
            , and Im trying to buy a lefthanded guitar to learn piano. I also
            swin as a workout method.
          </p>
        </div>
        <div className={styles.group}>
          <div className={styles.textAndIndex}>
            <p className={styles.index}>06</p>
            <p className={styles.title}>Goals</p>
          </div>
          <p className={styles.text}>
            My main goal right now would be to improve as a software developer.
            I'm focus on frontend, but I would like to specialize in Flutter
            development.
          </p>
        </div>
      </div>
    </div>
  );
}
