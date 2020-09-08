import React, { useCallback } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';

import usePersistedState from './hooks/usePersistedState';

import GlobalStyles from './styles/GlobalStyles';
import light from './styles/themes/light';
import dark from './styles/themes/dark';

import Header from './components/Header';

const App: React.FC = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === 'light' ? dark : light);
  }, [theme.title, setTheme]);

  return (
    <ThemeProvider theme={theme}>
      <Header toggleTheme={toggleTheme} />
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default App;
