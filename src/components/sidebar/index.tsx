/* eslint-disable */

import { HiX } from 'react-icons/hi';
import Links from './components/Links';

import SidebarCard from 'components/sidebar/components/SidebarCard';
import { IRoute } from 'types/navigation';
import React, { useEffect } from 'react';

function Sidebar(props: { routes: IRoute[]; [x: string]: any }) {
  const { routes, open, setOpen } = props;
  const [darkmode, setDarkmode] = React.useState(
    document.body.classList.contains('dark'),
  );
  const [logoSrc, setLogoSrc] = React.useState(
    darkmode ? '/img/layout/pdfAI_B.png' : '/img/layout/pdfAI_W.png',
  );

  const observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
      // 检查是否有 classList 的变化
      if (
        mutation.type === 'attributes' &&
        mutation.attributeName === 'class'
      ) {
        const isDarkMode = document.body.classList.contains('dark');
        setLogoSrc(
          isDarkMode ? '/img/layout/pdfAI_B.png' : '/img/layout/pdfAI_W.png',
        );
      }
    }
  });

  observer.observe(document.body, { attributes: true });

  return (
    <div
      className={`sm:none duration-175 linear fixed !z-50 flex min-h-full flex-col bg-white pb-10 shadow-2xl shadow-white/5 transition-all dark:!bg-navy-800 dark:text-white md:!z-50 lg:!z-50 xl:!z-0 ${
        open ? 'translate-x-0' : '-translate-x-96 xl:translate-x-0'
      }`}
    >
      <span
        className="absolute right-4 top-4 block cursor-pointer xl:hidden"
        onClick={() => setOpen(false)}
      >
        <HiX />
      </span>

      <div className={`mt-[50px] flex h-2.5 items-center`}>
        <a
          href="/"
          className="ml-1 mt-1  font-poppins text-[26px] font-bold uppercase text-navy-700 dark:text-white"
        >
          <img src={logoSrc} alt="PDF.AI" className="h-[100px] w-[255px]" />
        </a>
      </div>

      <div className="mb-7 mt-[58px] h-px bg-gray-300 dark:bg-white/30" />
      {/* Nav item */}

      <ul className="mb-auto pt-1">
        <Links routes={routes} />
      </ul>

      <div className="flex justify-center">
        <SidebarCard />
      </div>
    </div>
  );
}

export default Sidebar;
