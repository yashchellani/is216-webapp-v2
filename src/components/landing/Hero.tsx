import React from 'react';
import Button from './Button';
import GetStarted from './GetStarted';
import styles from './style';
const Hero = () => {
  return (
    <section
      id="home"
      className={`flex flex-col md:flex-row ${styles.paddingY}`}
    >
      <div
        className={`flex flex-1 flex-col items-start justify-start px-6 sm:px-16 xl:px-0`}
      >
        <div className="h-10"></div>

        <div className="flex w-full flex-row items-center justify-between">
          <h1 className="flex-1 font-poppins text-[52px] font-semibold leading-[75px] text-white ss:text-[72px] ss:leading-[100px]">
            <span className="text-gradient">Interactive AI Chat for</span>{' '}
          </h1>

          <div className="mr-0 hidden ss:flex md:mr-4">
            <GetStarted />
          </div>
        </div>
        <h1 className="w-full font-poppins text-[52px] font-semibold leading-[75px] text-white ss:text-[68px] ss:leading-[100px]">
          Engaging Learning
        </h1>
        <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>
          Our team of experts uses a methodology to Discuss and explore your
          learning materials with our smart AI, designed to understand the
          context of your study materials..
        </p>
        <div className="flex justify-start space-x-10">
          <Button styles={`mt-10`} text="Sign In" href="/auth/signin" />
          <Button styles={`mt-10`} text="Let's Start" href="/admin/default" />
        </div>
      </div>

      <div
        className={`flex flex-1 ${styles.flexCenter} relative  mb-10 mt-3 md:mr-0`}
      >
        <img
          src="/img/layout/robot.png"
          className="relative z-[2] h-auto w-full"
          alt="A description of the image"
        />
        <div className="pink__gradient absolute top-0 z-[0] h-[35%] w-[40%]" />
        <div className="white__gradient absolute bottom-40 z-[1] h-[80%] w-[80%] rounded-full" />
        <div className="blue__gradient absolute bottom-20 right-20 z-[0] h-[50%] w-[50%]" />
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
