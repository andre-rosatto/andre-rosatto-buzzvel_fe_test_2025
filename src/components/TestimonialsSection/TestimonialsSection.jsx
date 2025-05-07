import Image from 'next/image';
import styles from './TestimonialsSection.module.css';

export default function TestimonialsSection() {
  return (
    <section className={styles.container}>
      <div className={styles.testimonial}>
        <svg
          width='48'
          height='48'
          viewBox='0 0 48 48'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className={styles.arrow}
        >
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M32.341 8.90901C33.2197 9.78769 33.2197 11.2123 32.341 12.091L20.432 24L32.341 35.909C33.2197 36.7877 33.2197 38.2123 32.341 39.091C31.4623 39.9697 30.0377 39.9697 29.159 39.091L15.659 25.591C14.7803 24.7123 14.7803 23.2877 15.659 22.409L29.159 8.90901C30.0377 8.03033 31.4623 8.03033 32.341 8.90901Z'
            fill='white'
          />
        </svg>

        <div className={styles.textContainer}>
          <p className={styles.text}>
            Id urna, nisl, ut quam. Diam suspendisse fringilla quam arcu mattis
            est velit in. Nibh in purus sit convallis phasellus ut. At vel erat
            ultricies commodo. Neque suspendisse a habitasse commodo.
          </p>
          <p className={styles.text}>
            Marie Poirot,
            <span className={styles.author}>Bigapp</span>
          </p>
          <div className={styles.pipsContainer}>
            <span className={`${styles.pip} ${styles.pipSelected}`}></span>
            <span className={styles.pip}></span>
            <span className={styles.pip}></span>
            <span className={styles.pip}></span>
            <span className={styles.pip}></span>
          </div>
        </div>

        <div className={styles.imageContainer}>
          <Image
            src='/assets/testimonial.webp'
            alt='testimonial author'
            fill
            sizes='(max-width: 875px) 125px, 100%'
            style={{ objectFit: 'contain' }}
          />
          <Image
            src='/assets/decoration.webp'
            alt='testimonial decoration'
            width={155}
            height={155}
            className={styles.decoration}
          />
        </div>

        <svg
          width='48'
          height='48'
          viewBox='0 0 48 48'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className={styles.arrow}
        >
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M15.659 8.90901C16.5377 8.03033 17.9623 8.03033 18.841 8.90901L32.341 22.409C33.2197 23.2877 33.2197 24.7123 32.341 25.591L18.841 39.091C17.9623 39.9697 16.5377 39.9697 15.659 39.091C14.7803 38.2123 14.7803 36.7877 15.659 35.909L27.568 24L15.659 12.091C14.7803 11.2123 14.7803 9.78769 15.659 8.90901Z'
            fill='#0F172A'
          />
        </svg>
      </div>
    </section>
  );
}
