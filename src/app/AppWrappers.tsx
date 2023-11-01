'use client';
import React, { ReactNode } from 'react';
import '/public/style/app.css';
import '/public/style/miniCalendar.css';
import '/public/style/index.css';

import dynamic from 'next/dynamic';

const _NoSSR = ({ children }) => <React.Fragment>{children}</React.Fragment>;

const NoSSR = dynamic(() => Promise.resolve(_NoSSR), {
  ssr: false,
});

export default function AppWrappers({ children }: { children: ReactNode }) {
  return <NoSSR>{children}</NoSSR>;
}
