import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import AppProvider from './hooks';

import GlobalStyles, { Container } from './styles/GlobalStyles';

import Routes from './routes';

import Header from './components/Header';
import SideMenu from './components/SideMenu';

const App: React.FC = () => {
  return (
    <Router>
      <AppProvider>
        <Container>
          <Header />

          <SideMenu />

          <Routes />
        </Container>
        <GlobalStyles />
      </AppProvider>
    </Router>
  );
};

export default App;
