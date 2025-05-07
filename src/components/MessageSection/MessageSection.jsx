import styles from './MessageSection.module.css';

export default function MessageSection() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>Ready for your next project?</h2>
        <p className={styles.text}>
          Sit elit feugiat turpis sed integer integer accumsan turpis.
        </p>
        <form className={styles.form}>
          <label className={styles.label}>
            Email
            <input
              className={styles.input}
              type='email'
              required
              placeholder='Enter your email'
            />
          </label>
          <label className={styles.label}>
            Message
            <textarea
              className={styles.input}
              placeholder='What are you say?'
            />
          </label>
          <a href='#' className={styles.button}>
            Request Demo
          </a>
        </form>
      </div>
    </section>
  );
}
