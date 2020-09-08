import React from 'react';

import { Container } from './styles';

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  return (
    <Container>
      <button type="button" onClick={toggleTheme}>
        mudar tema
      </button>
    </Container>
  );
};

export default Header;
