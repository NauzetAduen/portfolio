import styles from "../styles/Nav.module.scss";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, memo } from "react";
import { useRouter } from "next/router";

function Nav() {
  const [color, setColor] = useState("#000");
  const route = useRouter().asPath;
  useEffect(() => {
    const handleScroll = () => {
      window.pageYOffset > window.innerHeight &&
      window.pageYOffset < window.innerHeight * 2
        ? setColor("#FFF")
        : setColor("#000");
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={styles.nav}>
      <ul style={{ color: color }}>
        <li>
          <Link href="/">
            <div className={styles.logoDiv}>
              <Image src="/favicon.ico" width="50px" height="50px" />
              <p className={styles.textLogo}>nau.</p>
            </div>
          </Link>
        </li>
        <li style={{ color: getColor(route, "/me") }}>
          <Link href="/me">me</Link>
        </li>
        <li style={{ color: getColor(route, "/projects") }}>
          <Link href="/projects">projects</Link>
        </li>
        <li style={{ color: getColor(route, "/blog") }}>
          <Link href="/blog">blog</Link>
        </li>
      </ul>
    </nav>
  );
}
export default memo(Nav);

function getColor(route, endpoint) {
  return route === endpoint ? "#a9a9a9" : null;
}
