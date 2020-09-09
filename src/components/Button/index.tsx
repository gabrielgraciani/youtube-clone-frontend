import React from 'react';

import { Container } from './styles';

interface ButtonProps {
  children: React.ReactNode;
  onClick(): void;
  login?: boolean;
}

const Button = ({ children, onClick, login = false }: ButtonProps) => {
  return (
    <Container onClick={onClick} type="button" login={login}>
      {children}
    </Container>
  );
};

export default Button;
