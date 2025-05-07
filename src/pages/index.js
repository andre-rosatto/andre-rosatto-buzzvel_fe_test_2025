import Head from 'next/head';
import { Geist, Geist_Mono } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import IntroSection from '@/components/IntroSection';
import ScreenSection from '@/components/ScreenSection';
import QuotesSection from '@/components/QuotesSection';
import MeetSection from '@/components/MeetSection';
import CounterSection from '@/components/CounterSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FeaturesSection from '@/components/FeaturesSection';
import JoinSection from '@/components/JoinSection';
import DemoSection from '@/components/DemoSection';
import Fader from '@/components/Fader';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>uteach</title>
        <meta
          name='description'
          content="Nextjs website created as a Single Page Application for the education company uteach as part of Buzzvel's front-end technical challenge 2025"
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div
        className={`${styles.container} ${geistSans.variable} ${geistMono.variable}`}
      >
        <Navbar />
        <main className={styles.contentContainer}>
          <Fader>
            <IntroSection />
          </Fader>
          <Fader from='left'>
            <ScreenSection />
          </Fader>
          <Fader>
            <QuotesSection />
          </Fader>
          <Fader from='left'>
            <MeetSection />
          </Fader>
          <Fader>
            <CounterSection />
          </Fader>
          <Fader from='left'>
            <TestimonialsSection />
          </Fader>
          <Fader>
            <FeaturesSection />
          </Fader>
          <Fader from='left'>
            <JoinSection />
          </Fader>
          <Fader>
            <DemoSection />
          </Fader>
        </main>
        <Footer />
      </div>
    </>
  );
}
