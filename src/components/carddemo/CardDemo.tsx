import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { RiPlayFill } from 'react-icons/ri';

const FirstCard: React.FC = () => {
  return (
    <Link
      href="#"
      className="group rounded-lg bg-white p-4 transition-all  hover:bg-gray-300 dark:bg-main-lg dark:hover:bg-main-lgHover"
    >
      <div className="relative mb-4">
        <Image
          src="https://cdn.discordapp.com/attachments/1043267593441656924/1045822509620138066/image.png"
          width={200}
          height={350}
          alt="Album"
          className="mx-auto rounded drop-shadow-2xl"
        />
        <button
          className="text-gray absolute bottom-4 right-7 mx-auto translate-y-2
            rounded-full bg-main-green p-3 text-3xl opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100"
        >
          <RiPlayFill />
        </button>
      </div>
      <div>
        <h5 className="mb-2 font-medium text-gray-800 dark:text-gray-100">
          Today&#39;s Top Hits
        </h5>
        <p className="text-xs text-gray-800 dark:text-gray-400">
          Taylor Swift is on top of the Hottest 50!
        </p>
      </div>
    </Link>
  );
};
const SecondCard: React.FC = () => {
  return (
    <Link
      href="#"
      className="group rounded-lg bg-white p-4 transition-all  hover:bg-gray-300 dark:bg-main-lg dark:hover:bg-main-lgHover"
    >
      <div className="relative mb-4">
        <Image
          src="https://cdn.discordapp.com/attachments/1043267593441656924/1045822562543861760/image.png"
          width={200}
          height={350}
          alt="Album"
          className="mx-auto rounded drop-shadow-2xl"
        />
        <button className="text-gray absolute bottom-4 right-7 translate-y-2 rounded-full bg-main-green p-3 text-3xl opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100">
          <RiPlayFill />
        </button>
      </div>
      <div>
        <h5 className="mb-2 font-medium text-gray-800 dark:text-gray-100">
          RapCaviar
        </h5>
        <p className="text-xs text-gray-800 dark:text-gray-400 ">
          Music from Drake, 21 Savage, Lil Uzi Vert and more.
        </p>
      </div>
    </Link>
  );
};

const ThirdCard: React.FC = () => {
  return (
    <Link
      href="#"
      className="group rounded-lg bg-white p-4 transition-all  hover:bg-gray-300 dark:bg-main-lg dark:hover:bg-main-lgHover"
    >
      <div className="relative mb-4">
        <Image
          src="https://cdn.discordapp.com/attachments/1043267593441656924/1045822644630593576/image.png"
          width={200}
          height={350}
          alt="Album"
          className="mx-auto rounded drop-shadow-2xl"
        />
        <button className="text-gray absolute bottom-4 right-7 translate-y-2 rounded-full bg-main-green p-3 text-3xl opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100">
          <RiPlayFill />
        </button>
      </div>
      <div>
        <h5 className="mb-2 font-medium text-gray-800 dark:text-gray-100">
          All Out 2010s
        </h5>
        <p className="text-xs text-gray-800 dark:text-gray-400 ">
          The biggest songs of the 2010s.
        </p>
      </div>
    </Link>
  );
};

const FourthCard: React.FC = () => {
  return (
    <Link
      href="#"
      className="group rounded-lg bg-white p-4 transition-all  hover:bg-gray-300 dark:bg-main-lg dark:hover:bg-main-lgHover"
    >
      <div className="relative mb-4">
        <Image
          src="https://cdn.discordapp.com/attachments/1043267593441656924/1045845888255410226/image.png"
          width={200}
          height={350}
          alt="Album"
          className="mx-auto rounded drop-shadow-2xl"
        />
        <button className="text-gray absolute bottom-4 right-7 translate-y-2 rounded-full bg-main-green p-3 text-3xl opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100">
          <RiPlayFill />
        </button>
      </div>
      <div>
        <h5 className="mb-2 font-medium text-gray-800 dark:text-gray-100">
          Rock Classics
        </h5>
        <p className="text-xs text-gray-800 dark:text-gray-400 ">
          Rock legends & epic songs that continue to inspire generations. Cover:
          Guns N&#39; Roses
        </p>
      </div>
    </Link>
  );
};

const FifthCard: React.FC = () => {
  return (
    <Link
      href="#"
      className="group rounded-lg bg-white p-4 transition-all  hover:bg-gray-300 dark:bg-main-lg dark:hover:bg-main-lgHover"
    >
      <div className="relative mb-4">
        <Image
          src="https://cdn.discordapp.com/attachments/1043267593441656924/1045822793092169759/image.png"
          width={200}
          height={350}
          alt="Album"
          className="mx-auto rounded drop-shadow-2xl"
        />
        <button className="text-gray absolute bottom-4 right-7 translate-y-2 rounded-full bg-main-green p-3 text-3xl opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100">
          <RiPlayFill />
        </button>
      </div>
      <div>
        <h5 className="mb-2 font-medium text-gray-800 dark:text-gray-100">
          Sleep
        </h5>
        <p className="text-xs text-gray-800 dark:text-gray-400 ">
          Gentle ambient piano to help you fall asleep.
        </p>
      </div>
    </Link>
  );
};

const SixthCard: React.FC = () => {
  return (
    <Link
      href="#"
      className="group rounded-lg bg-white p-4 transition-all  hover:bg-gray-300 dark:bg-main-lg dark:hover:bg-main-lgHover"
    >
      <div className="relative mb-4">
        <Image
          src="https://cdn.discordapp.com/attachments/1043267593441656924/1045822846997368912/image.png"
          width={200}
          height={350}
          alt="Album"
          className="mx-auto rounded drop-shadow-2xl"
        />
        <button className="text-gray absolute bottom-4 right-7 translate-y-2 rounded-full bg-main-green p-3 text-3xl opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100">
          <RiPlayFill />
        </button>
      </div>
      <div>
        <h5 className="mb-2 font-medium text-gray-800 dark:text-gray-100">
          DayDreamer
        </h5>
        <p className="text-xs text-gray-800 dark:text-gray-400 ">
          Drift away with enthralling instrumentals.
        </p>
      </div>
    </Link>
  );
};

const SeventhCard: React.FC = () => {
  return (
    <Link
      href="#"
      className="group rounded-lg bg-white p-4 transition-all  hover:bg-gray-300 dark:bg-main-lg dark:hover:bg-main-lgHover"
    >
      <div className="relative mb-4">
        <Image
          src="https://cdn.discordapp.com/attachments/1043267593441656924/1045823483445268550/image.png"
          width={200}
          height={350}
          alt="Album"
          className="mx-auto rounded drop-shadow-2xl"
        />
        <button className="text-gray absolute bottom-4 right-7 translate-y-2 rounded-full bg-main-green p-3 text-3xl opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100">
          <RiPlayFill />
        </button>
      </div>
      <div>
        <h5 className="mb-2 font-medium text-gray-800 dark:text-gray-100">
          Peaceful Piano
        </h5>
        <p className="text-xs text-gray-800 dark:text-gray-400 ">
          Relax and indulge with beautiful piano pieces
        </p>
      </div>
    </Link>
  );
};

const EighthCard: React.FC = () => {
  return (
    <Link
      href="#"
      className="group rounded-lg bg-white p-4 transition-all  hover:bg-gray-300 dark:bg-main-lg dark:hover:bg-main-lgHover"
    >
      <div className="relative mb-4">
        <Image
          src="https://cdn.discordapp.com/attachments/1043267593441656924/1045823483747250237/image.png"
          width={200}
          height={350}
          alt="Album"
          className="mx-auto rounded drop-shadow-2xl"
        />
        <button className="text-gray absolute bottom-4 right-7 translate-y-2 rounded-full bg-main-green p-3 text-3xl opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100">
          <RiPlayFill />
        </button>
      </div>
      <div>
        <h5 className="mb-2 font-medium text-gray-800 dark:text-gray-100">
          Deep Focus
        </h5>
        <p className="text-xs text-gray-800 dark:text-gray-400 ">
          Keep calm and focus with ambient and post-rock music.
        </p>
      </div>
    </Link>
  );
};

const NinthCard: React.FC = () => {
  return (
    <Link
      href="#"
      className="group rounded-lg bg-white p-4 transition-all  hover:bg-gray-300 dark:bg-main-lg dark:hover:bg-main-lgHover"
    >
      <div className="relative mb-4">
        <Image
          src="https://cdn.discordapp.com/attachments/1043267593441656924/1045849052371243039/image.png"
          width={200}
          height={350}
          alt="Album"
          className="mx-auto rounded drop-shadow-2xl"
        />
        <button className="text-gray absolute bottom-4 right-7 translate-y-2 rounded-full bg-main-green p-3 text-3xl opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100">
          <RiPlayFill />
        </button>
      </div>
      <div>
        <h5 className="mb-2 font-medium text-gray-800 dark:text-gray-100">
          Instrumental Study
        </h5>
        <p className="text-xs text-gray-800 dark:text-gray-400 ">
          Focus with soft study music in the background.
        </p>
      </div>
    </Link>
  );
};

const TenthCard: React.FC = () => {
  return (
    <Link
      href="#"
      className="group rounded-lg bg-white p-4 transition-all  hover:bg-gray-300 dark:bg-main-lg dark:hover:bg-main-lgHover"
    >
      <div className="relative mb-4">
        <Image
          src="https://cdn.discordapp.com/attachments/1043267593441656924/1045849102044364861/image.png"
          width={200}
          height={350}
          alt="Album"
          className="mx-auto rounded drop-shadow-2xl"
        />
        <button className="text-gray absolute bottom-4 right-7 translate-y-2 rounded-full bg-main-green p-3 text-3xl opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100">
          <RiPlayFill />
        </button>
      </div>
      <div>
        <h5 className="mb-2 font-medium text-gray-800 dark:text-gray-100">
          chill lofi study beats
        </h5>
        <p className="text-xs text-gray-800 dark:text-gray-400 ">
          The perfect study beats. Find your focus, crush your productivity.
        </p>
      </div>
    </Link>
  );
};

const EleventhCard: React.FC = () => {
  return (
    <Link
      href="#"
      className="group rounded-lg bg-white p-4 transition-all  hover:bg-gray-300 dark:bg-main-lg dark:hover:bg-main-lgHover"
    >
      <div className="relative mb-4">
        <Image
          src="https://cdn.discordapp.com/attachments/1043267593441656924/1045823484070203422/image.png"
          width={200}
          height={350}
          alt="Album"
          className="mx-auto rounded drop-shadow-2xl"
        />
        <button className="text-gray absolute bottom-4 right-7 translate-y-2 rounded-full bg-main-green p-3 text-3xl opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100">
          <RiPlayFill />
        </button>
      </div>
      <div>
        <h5 className="mb-2 font-medium text-gray-800 dark:text-gray-100">
          Mood Booster
        </h5>
        <p className="text-xs text-gray-800 dark:text-gray-400 ">
          Get happy with today&#39;s dose of feel-good songs!
        </p>
      </div>
    </Link>
  );
};

const TwelfthCard: React.FC = () => {
  return (
    <Link
      href="#"
      className="group rounded-lg bg-white p-4 transition-all  hover:bg-gray-300 dark:bg-main-lg dark:hover:bg-main-lgHover"
    >
      <div className="relative mb-4">
        <Image
          src="https://cdn.discordapp.com/attachments/1043267593441656924/1045823484397375619/image.png"
          width={200}
          height={350}
          alt="Album"
          className="mx-auto rounded drop-shadow-2xl"
        />
        <button className="text-gray absolute bottom-4 right-7 translate-y-2 rounded-full bg-main-green p-3 text-3xl opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100">
          <RiPlayFill />
        </button>
      </div>
      <div>
        <h5 className="mb-2 font-medium text-gray-800 dark:text-gray-100">
          Feelin&#39; Good
        </h5>
        <p className="text-xs text-gray-800 dark:text-gray-400 ">
          Feel good with this positively timeless playlist!
        </p>
      </div>
    </Link>
  );
};

const ThirteenthCard: React.FC = () => {
  return (
    <Link
      href="#"
      className="group rounded-lg bg-white p-4 transition-all  hover:bg-gray-300 dark:bg-main-lg dark:hover:bg-main-lgHover"
    >
      <div className="relative mb-4">
        <Image
          src="https://cdn.discordapp.com/attachments/1043267593441656924/1045823484707745802/image.png"
          width={200}
          height={350}
          alt="Album"
          className="mx-auto rounded drop-shadow-2xl"
        />
        <button className="text-gray absolute bottom-4 right-7 translate-y-2 rounded-full bg-main-green p-3 text-3xl opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100">
          <RiPlayFill />
        </button>
      </div>
      <div>
        <h5 className="mb-2 font-medium text-gray-800 dark:text-gray-100">
          Dark & Stormy
        </h5>
        <p className="text-xs text-gray-800 dark:text-gray-400 ">
          Beautifully dark, dramatic tracks.
        </p>
      </div>
    </Link>
  );
};

const FourteenthCard: React.FC = () => {
  return (
    <Link
      href="#"
      className="group rounded-lg bg-white p-4 transition-all  hover:bg-gray-300 dark:bg-main-lg dark:hover:bg-main-lgHover"
    >
      <div className="relative mb-4">
        <Image
          src="https://cdn.discordapp.com/attachments/1043267593441656924/1045868770176008293/image.png"
          width={200}
          height={350}
          alt="Album"
          className="mx-auto rounded drop-shadow-2xl"
        />
        <button className="text-gray absolute bottom-4 right-7 translate-y-2 rounded-full bg-main-green p-3 text-3xl opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100">
          <RiPlayFill />
        </button>
      </div>
      <div>
        <h5 className="mb-2 font-medium text-gray-800 dark:text-gray-100">
          Feel Good Piano
        </h5>
        <p className="text-xs text-gray-800 dark:text-gray-400 ">
          Happy vibes for an upbeat morning.
        </p>
      </div>
    </Link>
  );
};

const FifteenthCard: React.FC = () => {
  return (
    <Link
      href="#"
      className="group rounded-lg bg-white p-4 transition-all  hover:bg-gray-300 dark:bg-main-lg dark:hover:bg-main-lgHover"
    >
      <div className="relative mb-4">
        <Image
          src="https://cdn.discordapp.com/attachments/1043267593441656924/1045823485106196531/image.png"
          width={200}
          height={350}
          alt="Album"
          className="mx-auto rounded drop-shadow-2xl"
        />
        <button className="text-gray absolute bottom-4 right-7 translate-y-2 rounded-full bg-main-green p-3 text-3xl opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100">
          <RiPlayFill />
        </button>
      </div>
      <div>
        <h5 className="mb-2 font-medium text-gray-800 dark:text-gray-100">
          Start Nowhere
        </h5>
        <p className="text-xs text-gray-800 dark:text-gray-400 ">Sam Hunt</p>
      </div>
    </Link>
  );
};

const SixteenthCard: React.FC = () => {
  return (
    <Link
      href="#"
      className="group rounded-lg bg-white p-4 transition-all  hover:bg-gray-300 dark:bg-main-lg dark:hover:bg-main-lgHover"
    >
      <div className="relative mb-4">
        <Image
          src="https://cdn.discordapp.com/attachments/1043267593441656924/1045823485563383839/image.png"
          width={200}
          height={350}
          alt="Album"
          className="mx-auto rounded drop-shadow-2xl"
        />
        <button className="text-gray absolute bottom-4 right-7 translate-y-2 rounded-full bg-main-green p-3 text-3xl opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100">
          <RiPlayFill />
        </button>
      </div>
      <div>
        <h5 className="mb-2 font-medium text-gray-800 dark:text-gray-100">
          This Is What I Mean
        </h5>
        <p className="text-xs text-gray-800 dark:text-gray-400 ">Stormzy</p>
      </div>
    </Link>
  );
};

const SeventeenthCard: React.FC = () => {
  return (
    <Link
      href="#"
      className="group rounded-lg bg-white p-4 transition-all  hover:bg-gray-300 dark:bg-main-lg dark:hover:bg-main-lgHover"
    >
      <div className="relative mb-4">
        <Image
          src="https://cdn.discordapp.com/attachments/1043267593441656924/1045823485945057412/image.png"
          width={200}
          height={350}
          alt="Album"
          className="mx-auto rounded drop-shadow-2xl"
        />
        <button className="text-gray absolute bottom-4 right-7 translate-y-2 rounded-full bg-main-green p-3 text-3xl opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100">
          <RiPlayFill />
        </button>
      </div>
      <div>
        <h5 className="mb-2 font-medium text-gray-800 dark:text-gray-100">
          Love Sux (Deluxe)
        </h5>
        <p className="text-xs text-gray-800 dark:text-gray-400 ">
          Avril Lavigne
        </p>
      </div>
    </Link>
  );
};

const EighteenthCard: React.FC = () => {
  return (
    <Link
      href="#"
      className="group rounded-lg bg-white p-4 transition-all  hover:bg-gray-300 dark:bg-main-lg dark:hover:bg-main-lgHover"
    >
      <div className="relative mb-4">
        <Image
          src="https://cdn.discordapp.com/attachments/1043267593441656924/1045871840041644062/image.png"
          width={200}
          height={350}
          alt="Album"
          className="mx-auto rounded drop-shadow-2xl"
        />
        <button className="text-gray absolute bottom-4 right-7 translate-y-2 rounded-full bg-main-green p-3 text-3xl opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100">
          <RiPlayFill />
        </button>
      </div>
      <div>
        <h5 className="mb-2 font-medium text-gray-800 dark:text-gray-100">
          Dreamers [Music from the FIFA World Cup Qatar 2022 Official
          Soundtrack]
        </h5>
        <p className="text-xs text-gray-800 dark:text-gray-400 ">
          Jung Kook, BTS
        </p>
      </div>
    </Link>
  );
};

export {
  FirstCard,
  SecondCard,
  ThirdCard,
  FourthCard,
  FifthCard,
  SixthCard,
  SeventhCard,
  EighthCard,
  NinthCard,
  TenthCard,
  EleventhCard,
  TwelfthCard,
  ThirteenthCard,
  FourteenthCard,
  FifteenthCard,
  SixteenthCard,
  SeventeenthCard,
  EighteenthCard,
};
