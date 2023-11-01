import styles from './style';
import Button from './Button';
import { AiOutlineBug } from 'react-icons/ai';

const CTA = () => (
  <div>
    <section
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} bg-black-gradient-2 box-shadow flex-col rounded-[20px] sm:flex-row`}
    >
      <div className="flex flex-1 flex-col">
        <h2 className="ont-poppins w-full text-[32px] font-semibold leading-[66.8px] text-white xs:text-[36px] xs:leading-[76.8px]">
          Weaving Technology and Learning into a Cohesive Journey
        </h2>
        <p className={`${styles.paragraph}  mt-5`}>
          In the bustling realm of technology and education, [Your Company Name]
          sprouted from a seed of curiosity and an eagerness to enhance the
          learning experience for every individual.
        </p>
      </div>

      <div className={`${styles.flexCenter} ml-0 mt-10 sm:ml-10 sm:mt-0`}>
        <img
          src="/img/layout/story_01.png"
          alt="Story 01"
          className="transition-200 h-[100px] w-[100px] transform rounded-full border-4 border-white object-cover shadow-lg transition-transform hover:scale-105 hover:border-pink-500 hover:shadow-2xl"
        />
      </div>
    </section>

    <section
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} bg-black-gradient-2 box-shadow flex-col rounded-[20px] sm:flex-row`}
    >
      <div className="flex flex-1 flex-col">
        <h2 className="ont-poppins w-full text-[32px] font-semibold leading-[66.8px] text-white xs:text-[36px] xs:leading-[76.8px]">
          Merging Ideas with Reality
        </h2>
        <p className={`${styles.paragraph}  mt-5`}>
          to seamlessly integrate cutting-edge AI technology with an interactive
          and user-friendly platform that not only supports but enhances the
          learning journey of every user. In the light of seemingly
          insurmountable challenges
        </p>
      </div>

      <div className={`${styles.flexCenter} ml-0 mt-10 sm:ml-10 sm:mt-0`}>
        <img
          src="/img/layout/story_02.png"
          alt="Story 02"
          className="transition-200 h-[100px] w-[100px] transform rounded-full border-4 border-white object-cover shadow-lg transition-transform hover:scale-105 hover:border-pink-500 hover:shadow-2xl"
        />
      </div>
    </section>

    <section
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} bg-black-gradient-2 box-shadow flex-col rounded-[20px] sm:flex-row`}
    >
      <div className="flex flex-1 flex-col">
        <h2 className="ont-poppins w-full text-[32px] font-semibold leading-[66.8px] text-white xs:text-[36px] xs:leading-[76.8px]">
          Bridging Learning and Technology
        </h2>
        <p className={`${styles.paragraph}  mt-5`}>
          Our AI Chat, document management, and easy-sharing features were
          engineered with a singular purpose: to cultivate a space where
          learning becomes an interactive and seamless experience.
        </p>
      </div>

      <div className={`${styles.flexCenter} ml-0 mt-10 sm:ml-10 sm:mt-0`}>
        <img
          src="/img/layout/story_03.png"
          alt="Story 03"
          className="transition-200 h-[100px] w-[100px] transform rounded-full border-4 border-white object-cover shadow-lg transition-transform hover:scale-105 hover:border-pink-500 hover:shadow-2xl"
        />
      </div>
    </section>
  </div>
);

export default CTA;
