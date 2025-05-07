import SliderCard from '../SliderCard';
import styles from './TestimonialsSection.module.css';

export default function TestimonialsSection() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>What everyone says</h2>
          <div className={styles.buttonsContainer}>
            {/* left arrow */}
            <svg
              width='54'
              height='55'
              viewBox='0 0 54 55'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className={styles.button}
            >
              <g filter='url(#filter0_dd_1_11908)'>
                <rect
                  x='4'
                  y='3.5'
                  width='46'
                  height='46'
                  rx='23'
                  stroke='#EA580C'
                  strokeWidth='2'
                />
                <path
                  d='M33.5 26.5H21H33.5ZM21 26.5L27 20.5L21 26.5ZM21 26.5L27 32.5L21 26.5Z'
                  fill='#EA580C'
                />
                <path
                  d='M21 26.5L27 32.5M33.5 26.5H21H33.5ZM21 26.5L27 20.5L21 26.5Z'
                  stroke='#EA580C'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </g>
              <defs>
                <filter
                  id='filter0_dd_1_11908'
                  x='0'
                  y='0.5'
                  width='54'
                  height='54'
                  filterUnits='userSpaceOnUse'
                  colorInterpolationFilters='sRGB'
                >
                  <feFlood floodOpacity='0' result='BackgroundImageFix' />
                  <feColorMatrix
                    in='SourceAlpha'
                    type='matrix'
                    values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                    result='hardAlpha'
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation='1' />
                  <feColorMatrix
                    type='matrix'
                    values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0'
                  />
                  <feBlend
                    mode='normal'
                    in2='BackgroundImageFix'
                    result='effect1_dropShadow_1_11908'
                  />
                  <feColorMatrix
                    in='SourceAlpha'
                    type='matrix'
                    values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                    result='hardAlpha'
                  />
                  <feOffset dy='1' />
                  <feGaussianBlur stdDeviation='1.5' />
                  <feColorMatrix
                    type='matrix'
                    values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0'
                  />
                  <feBlend
                    mode='normal'
                    in2='effect1_dropShadow_1_11908'
                    result='effect2_dropShadow_1_11908'
                  />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='effect2_dropShadow_1_11908'
                    result='shape'
                  />
                </filter>
              </defs>
            </svg>

            {/* right arrow */}
            <svg
              width='54'
              height='55'
              viewBox='0 0 54 55'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className={styles.button}
            >
              <g filter='url(#filter0_dd_1_11909)'>
                <rect
                  x='4'
                  y='3.5'
                  width='46'
                  height='46'
                  rx='23'
                  stroke='#EA580C'
                  strokeWidth='2'
                />
                <path
                  d='M21 26.5H33.5H21ZM33.5 26.5L27.5 20.5L33.5 26.5ZM33.5 26.5L27.5 32.5L33.5 26.5Z'
                  fill='#EA580C'
                />
                <path
                  d='M33.5 26.5L27.5 32.5M21 26.5H33.5H21ZM33.5 26.5L27.5 20.5L33.5 26.5Z'
                  stroke='#EA580C'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </g>
              <defs>
                <filter
                  id='filter0_dd_1_11909'
                  x='0'
                  y='0.5'
                  width='54'
                  height='54'
                  filterUnits='userSpaceOnUse'
                  colorInterpolationFilters='sRGB'
                >
                  <feFlood floodOpacity='0' result='BackgroundImageFix' />
                  <feColorMatrix
                    in='SourceAlpha'
                    type='matrix'
                    values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                    result='hardAlpha'
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation='1' />
                  <feColorMatrix
                    type='matrix'
                    values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0'
                  />
                  <feBlend
                    mode='normal'
                    in2='BackgroundImageFix'
                    result='effect1_dropShadow_1_11909'
                  />
                  <feColorMatrix
                    in='SourceAlpha'
                    type='matrix'
                    values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                    result='hardAlpha'
                  />
                  <feOffset dy='1' />
                  <feGaussianBlur stdDeviation='1.5' />
                  <feColorMatrix
                    type='matrix'
                    values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0'
                  />
                  <feBlend
                    mode='normal'
                    in2='effect1_dropShadow_1_11909'
                    result='effect2_dropShadow_1_11909'
                  />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='effect2_dropShadow_1_11909'
                    result='shape'
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </div>

        <div className={styles.slider}>
          <SliderCard
            text='Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.'
            image='/assets/user1.webp'
            author='Hellen Jummy'
            occupation='Financial Counselor'
          />

          <SliderCard
            text='Odio rhoncus ornare ut quam. Molestie vel duis quis scelerisque ut id. In tortor turpis viverra sagittis ultrices nisi, nec tortor. Vestibulum, ultrices ultricies neque, hac ultricies dolor.'
            image='/assets/user2.webp'
            author='Ralph Edwards'
            occupation='Math Teacher'
          />

          <SliderCard
            text='Sagittis nunc egestas leo et malesuada urna risus. Morbi proin et cras aliquam. Diam tellus, amet, hac imperdiet. Tellus mi volutpat tellus, congue malesuada sit nisl donec a.'
            image='/assets/user3.webp'
            author='Hellena John'
            occupation='Psychology Student'
          />

          <SliderCard
            text='Sapien, sollicitudin et vitae id et laoreet sapien consectetur. Felis egestas egestas amet aliquam sit euismod. Pellentesque neque, sed ut volutpat. Ullamcorper in at nulla dignissim.'
            image='/assets/user4.webp'
            author='David Oshodi'
            occupation='Manager'
          />
        </div>
      </div>
    </section>
  );
}
