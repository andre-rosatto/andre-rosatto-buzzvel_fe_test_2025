import Image from 'next/image';
import UnderlinedText from '../UnderlinedText';
import styles from './ScreenSection.module.css';
import Card from '../Card';

export default function ScreenSection() {
  return (
    <section className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>
          An&nbsp;
          <UnderlinedText text='all-in-one' />
          &nbsp;app that makes it easier
        </h2>
        <p className={styles.text}>
          Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
          suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices
          amet, dui sit suspendisse.
        </p>
        <ul className={styles.tickListContainer}>
          <li className={styles.tickListItem}>
            <svg
              width='24'
              height='25'
              viewBox='0 0 24 25'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className={styles.tickListItemTick}
            >
              <path
                d='M10.486 16.7461C10.3547 16.7464 10.2247 16.7207 10.1034 16.6706C9.98206 16.6205 9.87182 16.5469 9.779 16.4541L5.537 12.2111C5.44143 12.1189 5.36517 12.0087 5.31268 11.8867C5.26018 11.7647 5.23251 11.6335 5.23126 11.5007C5.23001 11.368 5.25522 11.2363 5.30542 11.1133C5.35561 10.9904 5.42978 10.8787 5.52361 10.7848C5.61744 10.6908 5.72903 10.6165 5.85189 10.5661C5.97475 10.5157 6.10641 10.4903 6.23919 10.4914C6.37197 10.4925 6.50321 10.5199 6.62525 10.5723C6.74729 10.6246 6.85769 10.7007 6.95 10.7961L10.485 14.3311L16.85 7.96813C17.0375 7.78049 17.2919 7.67502 17.5571 7.67493C17.8224 7.67483 18.0769 7.78012 18.2645 7.96763C18.4521 8.15514 18.5576 8.40951 18.5577 8.67478C18.5578 8.94005 18.4525 9.19449 18.265 9.38213L11.193 16.4541C11.1002 16.5469 10.9899 16.6205 10.8686 16.6706C10.7473 16.7207 10.6173 16.7464 10.486 16.7461Z'
                fill='#0F172A'
              />
            </svg>
            Est et in pharetra magna adipiscing ornare aliquam.
          </li>
          <li className={styles.tickListItem}>
            <svg
              width='24'
              height='25'
              viewBox='0 0 24 25'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className={styles.tickListItemTick}
            >
              <path
                d='M10.486 16.7461C10.3547 16.7464 10.2247 16.7207 10.1034 16.6706C9.98206 16.6205 9.87182 16.5469 9.779 16.4541L5.537 12.2111C5.44143 12.1189 5.36517 12.0087 5.31268 11.8867C5.26018 11.7647 5.23251 11.6335 5.23126 11.5007C5.23001 11.368 5.25522 11.2363 5.30542 11.1133C5.35561 10.9904 5.42978 10.8787 5.52361 10.7848C5.61744 10.6908 5.72903 10.6165 5.85189 10.5661C5.97475 10.5157 6.10641 10.4903 6.23919 10.4914C6.37197 10.4925 6.50321 10.5199 6.62525 10.5723C6.74729 10.6246 6.85769 10.7007 6.95 10.7961L10.485 14.3311L16.85 7.96813C17.0375 7.78049 17.2919 7.67502 17.5571 7.67493C17.8224 7.67483 18.0769 7.78012 18.2645 7.96763C18.4521 8.15514 18.5576 8.40951 18.5577 8.67478C18.5578 8.94005 18.4525 9.19449 18.265 9.38213L11.193 16.4541C11.1002 16.5469 10.9899 16.6205 10.8686 16.6706C10.7473 16.7207 10.6173 16.7464 10.486 16.7461Z'
                fill='#0F172A'
              />
            </svg>
            Tellus arcu sed consequat ac velit ut eu blandit.
          </li>
          <li className={styles.tickListItem}>
            <svg
              width='24'
              height='25'
              viewBox='0 0 24 25'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className={styles.tickListItemTick}
            >
              <path
                d='M10.486 16.7461C10.3547 16.7464 10.2247 16.7207 10.1034 16.6706C9.98206 16.6205 9.87182 16.5469 9.779 16.4541L5.537 12.2111C5.44143 12.1189 5.36517 12.0087 5.31268 11.8867C5.26018 11.7647 5.23251 11.6335 5.23126 11.5007C5.23001 11.368 5.25522 11.2363 5.30542 11.1133C5.35561 10.9904 5.42978 10.8787 5.52361 10.7848C5.61744 10.6908 5.72903 10.6165 5.85189 10.5661C5.97475 10.5157 6.10641 10.4903 6.23919 10.4914C6.37197 10.4925 6.50321 10.5199 6.62525 10.5723C6.74729 10.6246 6.85769 10.7007 6.95 10.7961L10.485 14.3311L16.85 7.96813C17.0375 7.78049 17.2919 7.67502 17.5571 7.67493C17.8224 7.67483 18.0769 7.78012 18.2645 7.96763C18.4521 8.15514 18.5576 8.40951 18.5577 8.67478C18.5578 8.94005 18.4525 9.19449 18.265 9.38213L11.193 16.4541C11.1002 16.5469 10.9899 16.6205 10.8686 16.6706C10.7473 16.7207 10.6173 16.7464 10.486 16.7461Z'
                fill='#0F172A'
              />
            </svg>
            Ullamcorper ornare in et egestas dolor orci.
          </li>
        </ul>
        <a href='#' className={styles.link}>
          <span className={styles.linkText} style={{ marginRight: '1rem' }}>
            Find more about the app
          </span>
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            preserveAspectRatio='none'
          >
            <path
              d='M15.586 10.657L11.636 6.70704C11.4538 6.51844 11.353 6.26584 11.3553 6.00364C11.3576 5.74144 11.4628 5.49063 11.6482 5.30522C11.8336 5.11981 12.0844 5.01465 12.3466 5.01237C12.6088 5.01009 12.8614 5.11088 13.05 5.29304L18.707 10.95C18.8002 11.0427 18.8741 11.1529 18.9246 11.2742C18.9751 11.3955 19.001 11.5256 19.001 11.657C19.001 11.7884 18.9751 11.9186 18.9246 12.0399C18.8741 12.1612 18.8002 12.2714 18.707 12.364L13.05 18.021C12.9578 18.1166 12.8474 18.1927 12.7254 18.2451C12.6034 18.2976 12.4722 18.3251 12.3394 18.3263C12.2066 18.3274 12.0749 18.3021 11.952 18.2519C11.8291 18.2016 11.7175 18.1273 11.6236 18.0334C11.5297 17.9395 11.4555 17.8279 11.4052 17.705C11.3549 17.5821 11.3296 17.4504 11.3307 17.3176C11.3319 17.1849 11.3595 17.0536 11.4119 16.9316C11.4643 16.8096 11.5405 16.6993 11.636 16.607L15.586 12.657H6C5.73478 12.657 5.48043 12.5517 5.29289 12.3641C5.10536 12.1766 5 11.9223 5 11.657C5 11.3918 5.10536 11.1375 5.29289 10.9499C5.48043 10.7624 5.73478 10.657 6 10.657H15.586Z'
              fill='#2563EB'
            />
          </svg>
        </a>
      </div>
      <div className={styles.screenImage}>
        {/* blob */}
        <svg
          width='421'
          height='495'
          viewBox='0 0 421 495'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className={styles.blob}
        >
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M71.4309 117.091C34.5396 160.186 2.84921 225.227 0.476409 293.654C-1.8964 362.081 34.1557 411.258 94.0521 451.518C206.439 527.061 349.148 491.222 388.755 433.889C425.75 380.338 430.185 338.448 402.955 277.055C375.724 215.662 357.081 172.204 362.967 117.354C368.767 63.3168 363.963 29.2738 331.75 13.7304C296.909 -3.08071 255.113 -5.39378 208.751 13.7302C161.452 33.2403 105.75 76.9996 71.4309 117.091Z'
            fill='#FB923C'
          />
        </svg>

        {/* particles */}
        <div className={styles.particlesContainer}>
          <Image
            src='/assets/particles.webp'
            alt='particles'
            fill
            sizes='(max-width: 875px) 125px, 279px'
            style={{ objectFit: 'contain' }}
          />
        </div>

        {/* screen image */}
        <div className={styles.screenImageContainer}>
          <Image
            src='/assets/screen.webp'
            alt='student with tablet'
            fill
            sizes='(max-width: 875px) 100%, 600px'
            style={{ objectFit: 'contain' }}
          />
        </div>

        {/* cards */}
        <div className={styles.cardsContainer}>
          <Card
            badgeType='featured'
            title='The map of mathematics'
            text='Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.'
          />
          <Card
            badgeType='popular'
            title='Design for how people think'
            text='Aliquam ut euismod condimentum elementum ultricies volutpat sit non.'
          />
          <Card
            badgeType='new'
            title='International & commercial law'
            text='Molestie integer eu arcu, mauris bibendum rhoncus imperdiet dui.'
          />
        </div>
      </div>
    </section>
  );
}
