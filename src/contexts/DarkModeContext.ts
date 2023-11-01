import React, { createContext, useContext, useState } from 'react';

interface ContextDarkMode {
  value: boolean;
  setValue: (value: boolean) => void;
}

const DarkModeContext = createContext<ContextDarkMode>({
  value: true,
  setValue: () => {},
});
