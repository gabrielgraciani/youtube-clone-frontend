import React from 'react';

import { useMenu } from '../hooks/useMenu';

import Routes from '../routes';

import Header from '../components/Header';
import SideMenu from '../components/SideMenu';

import { Container } from './styles';

const Layout = () => {
  const { openMenu } = useMenu();
  return (
    <Container openMenu={openMenu}>
      <Header />

      <SideMenu />

      <Routes />
    </Container>
  );
};

export default Layout;
