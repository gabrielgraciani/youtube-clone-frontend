import styled from 'styled-components';
import { darken, lighten } from 'polished';

interface SideMenuProps {
  open?: boolean;
  active?: boolean;
}

// export const Item = styled.div<SideMenuProps>`
//   display: flex;
//   align-items: center;
//   width: 100%;
//   cursor: pointer;
//   user-select: none;

//   svg {
//     margin-bottom: 5px;

//     fill: ${props => props.active && 'var(--red)'};
//   }

//   span {
//     color: ${props => props.active && 'var(--red)'};
//   }

//   &:hover {
//     background: ${props =>
//       props.active
//         ? darken(0.1, props.theme.colors.sideMenuItemHover)
//         : props.theme.colors.sideMenuItemHover};
//   }

//   &:active {
//     background: ${props => darken(0.2, props.theme.colors.sideMenuItemActive)};
//   }

//   background: ${props =>
//     props.active ? props.theme.colors.sideMenuItemActive : 'transparesnt'};
// `;

// export const Container = styled.div<SideMenuProps>`
//   grid-area: MENU;

//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: flex-start;
//   height: 100%;
//   background: ${props => props.theme.colors.backgroundHeader};
//   width: ${props => (props.open ? '240px' : '70px')};

//   ${Item} {
//     flex-direction: ${props => (props.open ? 'row' : 'column')};
//     justify-content: ${props => (props.open ? 'flex-start' : 'center')};
//     padding: ${props => (props.open ? '8px 0 8px 25px' : '15px 0')};

//     span {
//       margin-left: ${props => (props.open ? '25px' : '0px')};
//       font-size: ${props => (props.open ? '1.4rem' : '1rem')};
//     }
//   }
// `;

export const Container = styled.menu<SideMenuProps>`
  grid-area: MENU;

  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.backgroundHeader};
  padding: 1.2rem 0;
  overflow-y: hidden;

  &:hover {
    overflow-y: scroll;

    ::-webkit-scrollbar {
      width: 0px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: ${props => props.theme.colors.buttonBackgroundActive};
      height: 56px;
    }
    ::-webkit-scrollbar-track {
      background-color: transparent;
    }
  }
`;

export const List = styled.ul`
  h3 {
    font-size: 1.4rem;
    font-weight: 500;
    letter-spacing: 0.007px;
    padding: 0.8rem 2.4rem;
    text-transform: uppercase;
  }

  & + & {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    margin-top: 1.2rem;
    padding-top: 1.2rem;
  }
`;

export const ListItem = styled.li<SideMenuProps>`
  width: 100%;
  user-select: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 100%;
  min-height: 40px;
  padding: 0 2.4rem;
  font-size: 1.4rem;
  line-height: 1.8rem;

  span {
    width: 75%;
    display: block;
    margin-left: 2.4rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: ${props =>
      props.theme.title === 'light' && props.active && 'var(--red)'};
  }

  svg {
    fill: ${props =>
      props.theme.title === 'light' && props.active && 'var(--red)'};
  }

  &:hover {
    background: ${props =>
      // eslint-disable-next-line no-nested-ternary
      props.active
        ? props.theme.title === 'light'
          ? darken(0.1, props.theme.colors.sideMenuItemHover)
          : lighten(0.1, props.theme.colors.sideMenuItemHover)
        : props.theme.colors.sideMenuItemHover};
  }

  &:active {
    background: ${props =>
      props.theme.title === 'light'
        ? darken(0.2, props.theme.colors.sideMenuItemActive)
        : lighten(0.2, props.theme.colors.sideMenuItemActive)};
  }

  background: ${props =>
    props.active ? props.theme.colors.sideMenuItemActive : 'transparesnt'};
`;

export const AvatarChannel = styled.div`
  width: 24px;
  height: 24px;

  border-radius: 50%;

  background-color: #606060;
`;

export const Footer = styled.footer`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  margin-top: 1.2rem;
  padding-top: 1.2rem;

  div {
    padding: 1.6rem 2.4rem 0;

    > span {
      display: inline-block;
      text-decoration: none;
      white-space: nowrap;
      font-size: 1.3rem;
      font-weight: 500;
      line-height: 1.8rem;
      cursor: pointer;

      &:not(:last-child) {
        margin-right: 8px;
      }
    }
  }
`;
