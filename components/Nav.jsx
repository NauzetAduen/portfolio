import styles from "../styles/Nav.module.scss";
import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/">
            <div className={styles.logoDiv}>
              <Image
                className={styles.imageLogo}
                src="/favicon.ico"
                width="50px"
                height="50px"
              />
              <p className={styles.textLogo}>NAU</p>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/me">ME</Link>
        </li>
        <li>
          <Link href="/projects">PROJECTS</Link>
        </li>
        <li>
          <Link href="/blog">BLOG</Link>
        </li>
      </ul>
    </nav>
  );
}
