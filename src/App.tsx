import React, { useCallback, useState } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';

import usePersistedState from './hooks/usePersistedState';

import GlobalStyles from './styles/GlobalStyles';
import light from './styles/themes/light';
import dark from './styles/themes/dark';

import Header from './components/Header';
import SideMenu from './components/SideMenu';

const App: React.FC = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);
  const [menuOpen, setMenuOpen] = useState(true);

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === 'light' ? dark : light);
  }, [theme.title, setTheme]);

  const handleChangeMenu = useCallback(() => {
    setMenuOpen(!menuOpen);
  }, [menuOpen]);

  return (
    <ThemeProvider theme={theme}>
      <Header toggleTheme={toggleTheme} handleChangeMenu={handleChangeMenu} />

      <SideMenu menuOpen={menuOpen} />

      <GlobalStyles />
    </ThemeProvider>
  );
};

export default App;
