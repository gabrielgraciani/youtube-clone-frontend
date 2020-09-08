import styled from 'styled-components';

export const Svg = styled.svg`
  fill: blue;
  width: 80px;

  g:nth-child(n + 2) path {
    fill: ${props => props.theme.colors.logo};
  }
`;
