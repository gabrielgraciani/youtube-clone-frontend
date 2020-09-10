import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secundary: string;

      backgroundHeader: string;
      background: string;

      iconGrayToGray: string;
      iconGrayToWhite: string;

      logo: string;

      buttonLoginColors: string;
      buttonBackgroundActive: string;

      backgroundFormInput: string;
      backgroundFormInputBorder: string;
      backgroundFormButton: string;

      sideMenuItemHover: string;
      sideMenuItemActive: string;
    };
  }
}
