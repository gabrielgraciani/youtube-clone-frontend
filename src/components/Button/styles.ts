import styled from 'styled-components';

interface ButtonStyledProps {
  login?: boolean;
}

export const Container = styled.button<ButtonStyledProps>`
  border-radius: ${props => (props.login ? '3px' : '50%')};
  border: ${props =>
    props.login ? `1px solid ${props.theme.colors.buttonLoginColors}` : '0'};
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  > svg {
    fill: ${props =>
      props.login
        ? props.theme.colors.buttonLoginColors
        : props.theme.colors.iconGrayToWhite};
  }

  &:active {
    background: ${props => props.theme.colors.buttonBackgroundActive};
  }

  span {
    display: block;
    margin-left: 7px;
    color: ${props => props.theme.colors.buttonLoginColors};
    font-weight: 500;
  }
`;
