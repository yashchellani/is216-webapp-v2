import React from 'react';
import Link from 'next/link';

const Button = ({ styles, text, href }) => (
  <Link
    href={href}
    className={`bg-blue-gradient rounded-[10px] px-6 py-4 font-poppins text-[18px] font-medium 
  text-primary outline-none ${styles} 
  transition-200 transform border-2 border-white object-cover shadow-lg transition-transform hover:scale-105 hover:border-blue-500 hover:shadow-2xl`}
  >
    {text}
  </Link>
);

export default Button;
