import React from 'react';

import Logo from '../../assets/logo.svg';
import { Container } from './styles';

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  return (
    <Container>
      <div className="header-item left">
        <div className="menu">menu</div>
        <div className="logo">
          <img src={Logo} alt="Youtube" />
        </div>
      </div>

      <div className="header-item center">
        <div className="search">search</div>
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
