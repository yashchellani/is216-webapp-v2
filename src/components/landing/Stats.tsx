import React from 'react';
import styles from './style';

export const stats = [
  {
    id: 'stats-1',
    title: 'User Active',
    value: '3800+',
  },
  {
    id: 'stats-2',
    title: 'Trusted by Company',
    value: '230+',
  },
  {
    id: 'stats-3',
    title: 'Transaction',
    value: '$230M+',
  },
];

const Stats = () => (
  <section className={`${styles.flexCenter} mb-6 flex-row flex-wrap sm:mb-20`}>
    {stats.map((el, index) => (
      <div
        className={`m-3 flex flex-1 flex-row items-center justify-center`}
        key={el.id}
      >
        <h4 className="font-poppins text-[30px] font-semibold leading-[43px] text-white xs:text-[40px] xs:leading-[53px]">
          {el.value}
        </h4>
        <p className="text-gradient ml-3 font-poppins text-[15px] font-normal uppercase leading-[21px] xs:text-[20px] xs:leading-[26px]">
          {el.title}
        </p>
      </div>
    ))}
  </section>
);

export default Stats;
