import { memo, useEffect, useState } from "react";
import styles from "../../styles/Nav.module.scss";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.mobileNav}>
      {isOpen ? (
        <FontAwesomeIcon
          icon={faTimes}
          size="2x"
          onClick={() => setIsOpen(false)}
        />
      ) : (
        <FontAwesomeIcon
          icon={faBars}
          size="2x"
          onClick={() => setIsOpen(true)}
        />
      )}

      {
        isOpen && (
          // <nav className={styles.nav}>
          <ul style={{ color: "white" }}>
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
        )
        // </nav>
      }
    </div>
  );
}
