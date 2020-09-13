import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import AppProvider from './hooks';

import GlobalStyles from './styles/GlobalStyles';

import Layout from './Layout';

const App: React.FC = () => {
  return (
    <Router>
      <AppProvider>
        <Layout />
        <GlobalStyles />
      </AppProvider>
    </Router>
  );
};

export default App;
