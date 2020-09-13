import React from 'react';

import { MenuProvider } from './useMenu';

const AppProvider: React.FC = ({ children }) => (
  <MenuProvider>{children}</MenuProvider>
);

export default AppProvider;
