import React from 'react';

import { MenuProvider } from './useMenu';
import { ThemeProvider } from './useTheme';

const AppProvider: React.FC = ({ children }) => (
  <ThemeProvider>
    <MenuProvider>{children}</MenuProvider>
  </ThemeProvider>
);

export default AppProvider;
