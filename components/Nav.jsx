import styles from "../styles/Nav.module.scss";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/">Nau</Link>
        </li>
        <li>
          <Link href="/me">me</Link>
        </li>
        <li>
          <Link href="/projects">projects</Link>
        </li>
        <li>
          <Link href="/blog">blog</Link>
        </li>
      </ul>
    </nav>
  );
}
