import { createGlobalStyle } from 'styled-components';

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
  *, button, input {
    border: 0;
    outline: 0;
    font-family: 'Roboto', sans-serif;
  }
  :root {
    --primary: #333;
    --secondary: #909090;

    --gray: #ccc;

    --white: #fff;
    --sweetWhite: #f8f8f8;

    --black: #000;

    --red: #f00;
  }
`;
