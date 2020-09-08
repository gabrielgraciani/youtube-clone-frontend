import styled from 'styled-components';

export const Container = styled.button`
  border-radius: 50%;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  > svg {
    fill: ${props => props.theme.colors.iconGrayToWhite};
  }
`;
