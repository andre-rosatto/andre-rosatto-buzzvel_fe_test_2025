import { useEffect, useRef } from 'react';
import styles from './Fader.module.css';

export default function Fader({ from = 'right', children }) {
  const faderRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        faderRef.current.className += ` ${styles.visible} `;
        observer.unobserve(entry.target);
      }
    });
    if (faderRef.current) {
      observer.observe(faderRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`${styles.container} ${
        from === 'left' ? styles.fromLeft : styles.fromRight
      }`}
      ref={faderRef}
    >
      {children}
    </div>
  );
}
