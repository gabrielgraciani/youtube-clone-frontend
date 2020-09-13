import styled from 'styled-components';

interface Props {
  openMenu: boolean;
}

export const Container = styled.div<Props>`
  display: grid;

  grid-template-columns: ${props =>
    props.openMenu ? '24rem auto' : '7rem auto'};
  grid-template-rows: 5.6rem auto;

  grid-template-areas:
    'HEADER HEADER'
    'MENU MAIN';

  height: 100vh;
`;
