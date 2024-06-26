import styles from './style';

export const footerLinks = [
  {
    title: 'Useful Links',
    links: [
      {
        name: 'Content',
        link: 'https://www.pdfai.com/content/',
      },
      {
        name: 'How it Works',
        link: 'https://www.pdfai.com/how-it-works/',
      },
      {
        name: 'Create',
        link: 'https://www.pdfai.com/create/',
      },
      {
        name: 'Explore',
        link: 'https://www.pdfai.com/explore/',
      },
      {
        name: 'Terms & Services',
        link: 'https://www.pdfai.com/terms-and-services/',
      },
    ],
  },
  {
    title: 'Community',
    links: [
      {
        name: 'Help Center',
        link: 'https://www.pdfai.com/help-center/',
      },
      {
        name: 'Partners',
        link: 'https://www.pdfai.com/partners/',
      },
      {
        name: 'Suggestions',
        link: 'https://www.pdfai.com/suggestions/',
      },
      {
        name: 'Blog',
        link: 'https://www.pdfai.com/blog/',
      },
      {
        name: 'Newsletters',
        link: 'https://www.pdfai.com/newsletters/',
      },
    ],
  },
  {
    title: 'Partner',
    links: [
      {
        name: 'Our Partner',
        link: 'https://www.pdfai.com/our-partner/',
      },
      {
        name: 'Become a Partner',
        link: 'https://www.pdfai.com/become-a-partner/',
      },
    ],
  },
];

export const socialMedia = [
  {
    id: 'social-media-1',
    icon: '/img/layout/instagram.svg',
    link: 'https://www.instagram.com/',
  },
  {
    id: 'social-media-2',
    icon: '/img/layout/facebook.svg',
    link: 'https://www.facebook.com/',
  },
  {
    id: 'social-media-3',
    icon: '/img/layout/twitter.svg',
    link: 'https://www.twitter.com/',
  },
  {
    id: 'social-media-4',
    icon: '/img/layout/linkedin.svg',
    link: 'https://www.linkedin.com/',
  },
];

export const clients = [
  {
    id: 'client-1',
    logo: '/img/layout/airbnb.png',
  },
  {
    id: 'client-2',
    logo: '/img/layout/binance.png',
  },
  {
    id: 'client-3',
    logo: '/img/layout/coinbase.png',
  },
  {
    id: 'client-4',
    logo: '/img/layout/dropbox.png',
  },
];

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} mb-8 w-full flex-col md:flex-row`}>
      <div className="mr-10 flex flex-[1] flex-col justify-start">
        <img
          src="/img/layout/pdfAI_B.png"
          alt="PDFAI"
          className="h-[72.14px] w-[266px] object-contain"
        />
        <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
          Bridging Ingenuity and Learning.
        </p>
      </div>

      <div className="mt-10 flex w-full flex-[1.5] flex-row flex-wrap justify-between md:mt-0">
        {footerLinks.map((footerlink) => (
          <div
            key={footerlink.title}
            className={`my-4 flex min-w-[150px] flex-col ss:my-0`}
          >
            <h4 className="font-poppins text-[18px] font-medium leading-[27px] text-white">
              {footerlink.title}
            </h4>
            <ul className="mt-4 list-none">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`cursor-pointer font-poppins text-[16px] font-normal leading-[24px] text-dimWhite hover:text-secondary ${
                    index !== footerlink.links.length - 1 ? 'mb-4' : 'mb-0'
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="flex w-full flex-col items-center justify-between border-t-[1px] border-t-[#3F3E45] pt-6 md:flex-row">
      <p className="text-center font-poppins text-[18px] font-normal leading-[27px] text-white">
        Copyright Ⓒ 2022 pdfai. All Rights Reserved.
      </p>

      <div className="mt-6 flex flex-row md:mt-0">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`h-[21px] w-[21px] cursor-pointer object-contain ${
              index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
