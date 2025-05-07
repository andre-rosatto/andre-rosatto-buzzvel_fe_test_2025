import Image from 'next/image';
import UnderlinedText from '../UnderlinedText';
import styles from './IntroSection.module.css';

export default function IntroSection() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>
            <UnderlinedText text='Teach' />
            &nbsp;students worldwide
          </h2>
          <p className={styles.text}>
            Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend proin massa
            tincidunt viverra lectus pulvinar. Nunc ipsum est pellentesque
            turpis ultricies.
          </p>
          <div className={styles.buttonsContainer}>
            <a href='#' className={styles.button}>
              Sign Up Now
            </a>
            <a href='#' className={styles.link}>
              <svg
                width='24'
                height='25'
                viewBox='0 0 24 25'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M12 22.2662C6.47697 22.2662 1.99997 17.7892 1.99997 12.2662C1.99997 6.74317 6.47697 2.26617 12 2.26617C17.523 2.26617 22 6.74317 22 12.2662C22 17.7892 17.523 22.2662 12 22.2662ZM12 20.2662C14.1217 20.2662 16.1565 19.4233 17.6568 17.923C19.1571 16.4227 20 14.3879 20 12.2662C20 10.1444 19.1571 8.10961 17.6568 6.60932C16.1565 5.10903 14.1217 4.26617 12 4.26617C9.87824 4.26617 7.84341 5.10903 6.34312 6.60932C4.84282 8.10961 3.99997 10.1444 3.99997 12.2662C3.99997 14.3879 4.84282 16.4227 6.34312 17.923C7.84341 19.4233 9.87824 20.2662 12 20.2662ZM16.126 14.0122L12.071 16.9102C11.166 17.5562 9.94097 17.2992 9.33397 16.3342C9.11491 15.9833 8.99915 15.5778 8.99997 15.1642V9.36817C8.99997 8.20817 9.88297 7.26617 10.972 7.26617C11.363 7.26617 11.746 7.39017 12.071 7.62217L16.126 10.5202C17.031 11.1672 17.272 12.4722 16.666 13.4372C16.5251 13.6621 16.3416 13.8574 16.126 14.0122ZM10.972 9.36817V15.1642L15.027 12.2662L10.972 9.36817Z'
                  fill='#2563EB'
                />
              </svg>
              <span className={styles.linkText} style={{ marginLeft: '1rem' }}>
                View Demo
              </span>
            </a>
          </div>
          <div className={styles.footer}>
            <p className={`${styles.text} ${styles.footerText}`}>
              Trusted by leading companies
            </p>
            <div className={styles.footerIcons}>
              <Image
                src='/assets/company_icon_1.webp'
                width={25}
                height={32}
                alt='company 1'
              />
              <Image
                src='/assets/company_icon_2.webp'
                width={29}
                height={32}
                alt='company 2'
              />
              <Image
                src='/assets/company_icon_3.webp'
                width={32}
                height={32}
                alt='company 3'
              />
              <Image
                src='/assets/company_icon_4.webp'
                width={28}
                height={32}
                alt='company 4'
              />
              <Image
                src='/assets/company_icon_5.webp'
                width={33}
                height={32}
                alt='company 5'
              />
            </div>
          </div>
        </div>
        <div className={styles.studentsImage}>
          <Image
            src='/assets/students.webp'
            alt='students chatting'
            priority
            fill
            sizes='(max-width: 875px) 100%, auto'
          />
        </div>
      </div>
    </section>
  );
}
