// Billing.tsx

import React from 'react';
import Button from './Button';
import styles, { layout } from './style';

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img
        src="/img/layout/kids-160168_1280.png"
        alt="billing"
        className="relative z-[5] h-[100%] w-[100%]"
      />

      {/* gradient start */}
      <div className="white__gradient absolute -left-1/2 top-0 z-[3] h-[50%] w-[50%] rounded-full" />
      <div className="pink__gradient absolute -left-1/2 bottom-0 z-[0] h-[50%] w-[50%] rounded-full" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Meet the Team Behind <br className="hidden sm:block" />
        <p className="text-lg">United for the Future of Learning</p>
      </h2>
      <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>
        Our team is composed of passionate EdTech specialists, developers, and
        educators who are collectively dedicated to enhancing learning
        experiences through technological innovations
      </p>

      <div className="mt-6 flex flex-row flex-wrap sm:mt-10">
        <Button styles={`mt-10`} text="More..." href="" />
      </div>
    </div>
  </section>
);

export default Billing;
