import React from 'react';
import {
  MdMenu,
  MdSearch,
  MdVideoCall,
  MdNotifications,
  MdAccountCircle,
  MdMoreVert,
} from 'react-icons/md';
import { Link } from 'react-router-dom';

import { useMenu } from '../../hooks/useMenu';

import { Container } from './styles';
import Logo from '../Logo';
import Button from '../Button';

interface HeaderProps {
  toggleTheme(): void;
}

const Header = ({ toggleTheme }: HeaderProps) => {
  const { handleClickMenu } = useMenu();

  return (
    <Container>
      <div className="header-item left">
        <div className="menu">
          <Button onClick={handleClickMenu}>
            <MdMenu size={25} />
          </Button>
        </div>
        <Link to="/" className="logo">
          <Logo />
        </Link>
      </div>

      <div className="header-item center">
        <div className="search">
          <input type="text" placeholder="Pesquisar" />
          <button type="button">
            <MdSearch size={20} />
          </button>
        </div>
      </div>

      <div className="header-item right">
        <Button onClick={() => console.log('click')}>
          <MdVideoCall size={25} />
        </Button>
        <Button onClick={() => console.log('click')}>
          <MdNotifications size={25} />
        </Button>
        <Button onClick={() => console.log('click')}>
          <MdMoreVert size={25} />
        </Button>
        <div className="login">
          <Button onClick={toggleTheme} login>
            <MdAccountCircle size={25} />
            <span>FAZER LOGIN</span>
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Header;
