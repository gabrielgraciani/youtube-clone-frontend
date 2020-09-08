import React from 'react';
import { FaBars, FaSearch } from 'react-icons/fa';

import { Container } from './styles';
import Logo from '../Logo';
import Button from '../Button';

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  return (
    <Container>
      <div className="header-item left">
        <div className="menu">
          <Button>
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
        <div className="item">icon</div>
        <div className="item">icon</div>
        <div className="login">
          <button type="button" onClick={toggleTheme}>
            mudar tema
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Header;
