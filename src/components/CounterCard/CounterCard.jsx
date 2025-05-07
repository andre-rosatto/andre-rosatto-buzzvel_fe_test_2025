import styles from './CounterCard.module.css';

export default function CounterCard({ icon, value, text }) {
  return (
    <div className={styles.container}>
      {icon}
      <span className={styles.value}>{value}</span>
      <span className={styles.text}>{text}</span>
    </div>
  );
}
