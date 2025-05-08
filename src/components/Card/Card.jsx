import styles from './Card.module.css';

export default function Card({
  badgeType = 'new',
  title,
  text,
  linkHref = '#',
  responsive = true,
}) {
  const getBadge = () => {
    switch (badgeType) {
      case 'featured':
        return styles.badgeFeatured;
      case 'popular':
        return styles.badgePopular;
      default:
        return styles.badgeNew;
    }
  };

  const getBadgeText = () =>
    badgeType[0].toLocaleUpperCase() + badgeType.slice(1);

  return (
    <div
      className={`${styles.container} ${!responsive ? styles.fixedSize : ''}`}
    >
      <div className={styles.content}>
        <span className={`${styles.badge} ${getBadge()}`}>
          {getBadgeText()}
        </span>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.text}>{text}</p>
      </div>
      <a href={linkHref} className={styles.button}>
        Take Lesson
      </a>
    </div>
  );
}
