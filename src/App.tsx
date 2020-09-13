import React, { useCallback } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';

import usePersistedState from './hooks/usePersistedState';
import AppProvider from './hooks';

import GlobalStyles, { Container } from './styles/GlobalStyles';
import light from './styles/themes/light';
import dark from './styles/themes/dark';

import Routes from './routes';

import Header from './components/Header';
import SideMenu from './components/SideMenu';

const App: React.FC = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === 'light' ? dark : light);
  }, [theme.title, setTheme]);

  return (
    <Router>
      <AppProvider>
        <ThemeProvider theme={theme}>
          <Container>
            <Header toggleTheme={toggleTheme} />

            <SideMenu />

            <Routes />
          </Container>
          <GlobalStyles />
        </ThemeProvider>
      </AppProvider>
    </Router>
  );
};

export default App;
