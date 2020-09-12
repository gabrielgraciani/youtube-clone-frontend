import React, { useCallback, useState } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';

import usePersistedState from './hooks/usePersistedState';

import GlobalStyles, { Container } from './styles/GlobalStyles';
import light from './styles/themes/light';
import dark from './styles/themes/dark';

import Routes from './routes';

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
    <Router>
      <ThemeProvider theme={theme}>
        <Container>
          <Header
            toggleTheme={toggleTheme}
            handleChangeMenu={handleChangeMenu}
          />

          <SideMenu menuOpen={menuOpen} />

          <Routes />
        </Container>
        <GlobalStyles />
      </ThemeProvider>
    </Router>
  );
};

export default App;
