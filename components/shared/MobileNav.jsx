import { memo, useEffect, useState } from "react";
import styles from "../../styles/Nav.module.scss";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from "next/image";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.mobileNav}>
      <div className={styles.visible}>
        <Link href="/">
          <div className={styles.logoDiv}>
            <Image src="/favicon.ico" width="50px" height="50px" />
            <p className={styles.textLogo}>nau.</p>
          </div>
        </Link>
        <div className={styles.icon}>
          {isOpen ? (
            <FontAwesomeIcon
              icon={faTimes}
              size="1x"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FontAwesomeIcon
              icon={faBars}
              size="1x"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {isOpen && (
        <nav className={styles.linkListMobile}>
          <ul style={{ color: "white" }}>
            <li>
              <Link href="/">home</Link>
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
      )}
    </div>
  );
}
