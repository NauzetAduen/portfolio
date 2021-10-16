import styles from "../styles/Button.module.scss";
export default function Button({ children, onClick }) {
  return (
    <button onClick={onClick} className={styles.button}>
      {children}
    </button>
  );
}
