import Image from 'next/image';
import styles from './SliderCard.module.css';

export default function SliderCard({ text, image, author, occupation }) {
  return (
    <div className={styles.container}>
      <p className={styles.text}>{text}</p>
      <div className={styles.authorContainer}>
        <Image
          src={image}
          alt={author}
          width={64}
          height={64}
          className={styles.authorImage}
        />
        <div className={styles.authorText}>
          <span>{author}</span>
          <span className={styles.authorOccupation}>{occupation}</span>
        </div>
      </div>
    </div>
  );
}
