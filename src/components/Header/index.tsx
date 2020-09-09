import React from 'react';
import {
  FaBars,
  FaSearch,
  FaVideo,
  FaEllipsisV,
  FaUserCircle,
} from 'react-icons/fa';

import { Container } from './styles';
import Logo from '../Logo';
import Button from '../Button';

interface HeaderProps {
  toggleTheme(): void;
}

const Header = ({ toggleTheme }: HeaderProps) => {
  return (
    <Container>
      <div className="header-item left">
        <div className="menu">
          <Button onClick={() => console.log('click')}>
            <FaBars size={20} />
          </Button>
        </div>
        <div className="logo">
          <Logo />
        </div>
      </div>

      <div className="header-item center">
        <div className="search">
          <input type="text" placeholder="Pesquisar" />
          <button type="button">
            <FaSearch size={13} />
          </button>
        </div>
      </div>

      <div className="header-item right">
        <Button onClick={() => console.log('click')}>
          <FaVideo size={20} />
        </Button>
        <Button onClick={() => console.log('click')}>
          <FaEllipsisV size={20} />
        </Button>
        <div className="login">
          <Button onClick={toggleTheme} login>
            <FaUserCircle size={20} />
            <span>FAZER LOGIN</span>
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Header;
