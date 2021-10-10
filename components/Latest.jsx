import styles from "../styles/Latest.module.scss";
export default function Latest() {
  return (
    <div className={styles.latest}>
      <div>
        <p className={styles.title}>Latest creations</p>
      </div>
      <div className={styles.creation}>
        <div className={styles.subcreation}>a</div>
        <div className={styles.subcreation}>b</div>
      </div>
      <div className={styles.creation}>
        <div className={styles.subcreation}>a</div>
        <div className={styles.subcreation}>b</div>
      </div>
    </div>
  );
}
