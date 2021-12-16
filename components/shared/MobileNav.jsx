import { memo, useEffect, useState } from "react";
import styles from "../../styles/Nav.module.scss";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
    </div>
  );
}
