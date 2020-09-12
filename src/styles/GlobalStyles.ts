import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html{
    font-size: 62.5%;
  }
  html, body, #root {
    height: 100%;
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.primary}
  }

  #root{
    display:flex;
    flex-direction:column;
    width:100%;
  }

  *, button, input {
    border: 0;
    outline: 0;
    font-family: 'Roboto', sans-serif;
  }

  button{
    cursor:pointer;
    border:0;
    outline:0;
    background:transparent;
  }
  :root {
    --white: #fff;
    --black: #000;
    --red: #f00;
  }
`;

export const Container = styled.div`
  display: grid;

  grid-template-columns: 24rem auto;
  grid-template-rows: 5.6rem auto;

  grid-template-areas:
    'HEADER HEADER'
    'MENU MAIN';

  height: 100vh;

  &.openMenu {
    grid-template-columns: 0 100vw;
  }

  @media screen and (max-width: 525px) {
    grid-template-columns: 0 auto;

    &.openMenu {
      grid-template-columns: 100vw 0;
    }
  }
`;
