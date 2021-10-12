import styles from "../styles/Nav.module.scss";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/">NAU</Link>
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
