import styles from './JoinSection.module.css';

export default function JoinSection() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div
          className={`${styles.thumbsDecoration} ${styles.thumbsDecorationFirst}`}
        ></div>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>Join a world of learning</h2>
          <p className={styles.text}>
            Malesuada ut aliquam at ac est nisi, interdum etiam dignissim.
            <br />
            Risuselit et fringilla habitant ut facilisi.
          </p>
          <a href='#' className={styles.button}>
            Sign Up Now
          </a>
        </div>
        <div
          className={`${styles.thumbsDecoration} ${styles.thumbsDecorationSecond}`}
        ></div>
      </div>
    </section>
  );
}
