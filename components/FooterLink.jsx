import styles from "../styles/Footer.module.scss";

export default function FooterLink({ url, text }) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className={styles.footerLink}
      href={url}
    >
      {text}
    </a>
  );
}
