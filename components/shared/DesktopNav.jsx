import Image from "next/image";
import Link from "next/link";
import { memo } from "react";

import styles from "../../styles/Nav.module.scss";

function DesktopNav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/">
            <div className={styles.logoDiv}>
              <Image src="/favicon.ico" width="50px" height="50px" />
              <p className={styles.textLogo}>nau.</p>
            </div>
          </Link>
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
export default memo(DesktopNav);
