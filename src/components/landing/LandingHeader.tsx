import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { RiMoonFill, RiSunFill } from 'react-icons/ri';

export const navLinks = [
  {
    id: 'home',
    title: 'Course AI',
  },
  {
    id: 'features',
    title: 'Features',
  },
  {
    id: 'product',
    title: 'About Us',
  },
];

interface NavLink {
  id: string;
  title: string;
}

const LandingHeader: React.FC = () => {
  const [toggle, setToggle] = useState(false);
  const router = useRouter();
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
    <nav className="navbar sticky top-0 flex w-full items-center justify-between py-6">
      <img src={logoSrc} alt="PDF.AI" className="h-[100px] w-[255px]" />
      <ul className="hidden flex-1 list-none items-center justify-end sm:flex">
        {navLinks.map((el: NavLink, index: number) => (
          <li
            key={el.id}
            className={`mr-5 font-bold font-bold text-gray-500 transition duration-300
            hover:scale-105 hover:text-gray-700 dark:hover:text-white  md:mr-10`}
          >
            <a href={`#${el.id}`}>{el.title}</a>
          </li>
        ))}

        <div className="grab-5 flex items-center">
          <button
            className="text-black hover:text-black rounded-xl bg-white px-4 py-2 font-bold transition duration-300 hover:scale-105  hover:bg-gray-300"
            onClick={(): void => router.push('/auth/sign-in')}
          >
            Sign In
          </button>

          {/* <div
                className="cursor-pointer text-gray-600 pl-5"
                onClick={() => {
                  if (darkmode) {
                    document.body.classList.remove('dark');
                    setDarkmode(false);
                  } else {
                    document.body.classList.add('dark');
                    setDarkmode(true);
                  }
                }}
              >
                {darkmode ? (
                  <RiSunFill className="h-4 w-4 text-gray-600 dark:text-white" />
                ) : (
                  <RiMoonFill className="h-4 w-4 text-gray-600 dark:text-white" />
                )}
              </div> */}
        </div>
      </ul>

      <div className="flex flex-1 items-center justify-end md:hidden">
        <img
          src={toggle ? '/img/layout/close.svg' : '/img/layout/menu.svg'}
          alt="menu"
          className="h-[28px] w-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${
            toggle ? 'flex' : 'hidden'
          } bg-black-gradient sidebar absolute right-0 top-20 mx-4 my-2 min-w-[140px] rounded-xl p-6`}
        >
          <ul className="flex flex-1 list-none flex-col items-start justify-start space-y-2">
            {navLinks.map((el: NavLink, index: number) => (
              <li
                key={el.id}
                className={`mr-10 font-bold font-bold text-gray-500 transition
                  duration-300 hover:scale-105 hover:text-gray-700  dark:hover:text-white`}
              >
                <a href={`#${el.id}`}>{el.title}</a>
              </li>
            ))}

            {/* <button
                className="rounded-xl px-4 py-2 font-bold transition duration-300 text-gray-500 hover:text-gray-700 dark:hover:text-white  hover:scale-105"
                onClick={(): void => router.push("/auth/sign-up")}>
                Sign Up
              </button> */}
            <button
              className="text-black hover:text-black justify-start rounded-xl bg-white  px-4 py-2 font-bold transition duration-300 hover:scale-105  hover:bg-gray-300"
              onClick={(): void => router.push('/auth/sign-in')}
            >
              Sign In
            </button>

            <div
              className="cursor-pointer justify-start text-gray-600 "
              onClick={() => {
                if (darkmode) {
                  document.body.classList.remove('dark');
                  setDarkmode(false);
                } else {
                  document.body.classList.add('dark');
                  setDarkmode(true);
                }
              }}
            >
              {darkmode ? (
                <RiSunFill className="h-6 w-6 text-gray-600 dark:text-white" />
              ) : (
                <RiMoonFill className="h-6 w-6 text-gray-600 dark:text-white" />
              )}
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default LandingHeader;
