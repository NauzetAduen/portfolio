// import React from "react";
import Styles from "../styles/Hero.module.scss";
export default function Hero() {
  return (
    <div className={Styles.dividedDiv}>
      <div className={Styles.info}>
        <blockquote className={Styles.quote}>
          <p>“The journey of a thousand miles begins with a single step”</p>
          <p>– Lao-Tse</p>
        </blockquote>

        <p className={Styles.intro}>
          Hello, I’m <span className={Styles.name}>Nauzet</span>, a Software
          Engineer from the Canary Islands. I’m focusing on the frontend side of
          things.
        </p>
        <p>
          Thanks for visiting my portfolio, where I share my ideas, goals and
          projects.
        </p>
      </div>
      <div></div>
    </div>
  );
}
