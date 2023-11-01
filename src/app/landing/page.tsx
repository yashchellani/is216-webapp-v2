'use client';

import Billing from 'components/landing/Billing';
import Business from 'components/landing/Bussiness';
import CardDeal from 'components/landing/CardDeal';
import Clients from 'components/landing/Clients';
import CTA from 'components/landing/Cta';
import Footer from 'components/landing/Footer';
import Hero from 'components/landing/Hero';
import LandingHeader from 'components/landing/LandingHeader';
import Stats from 'components/landing/Stats';
import styles from 'components/landing/style';
import Testimonials from 'components/landing/Testimonials';

const Landing = () => (
  <div className="w-full overflow-hidden bg-dimWhite dark:bg-primary xl:px-10">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <LandingHeader />
      </div>
    </div>

    <div className={`bg-dimWhite dark:bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div
      className={`bg-dimWhite dark:bg-primary ${styles.paddingX} ${styles.flexCenter}`}
    >
      <div className={`${styles.boxWidth}`}>
        {/* <Stats /> */}
        <Business />
        <Billing />
        <CardDeal />
        {/* <Testimonials /> */}
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default Landing;
