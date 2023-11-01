'use client';
import React, { useEffect, ReactNode, useState } from 'react';
import Modal from 'react-modal';
import AppWrappers from './AppWrappers';

export default function RootLayout({ children }: { children: ReactNode }) {
  const [value, setValue] = useState('Initial value');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      Modal.setAppElement('#root');
    }
  }, []);

  return (
    <html lang="en">
      <body id={'root'} className="dark">
        <AppWrappers>{children}</AppWrappers>
      </body>
    </html>
  );
}
