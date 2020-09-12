import styled from 'styled-components';
import { darken, lighten } from 'polished';

interface SideMenuProps {
  open?: boolean;
  active?: boolean;
}

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
  display: flex;
  user-select: none;
  align-items: center;
  cursor: pointer;
  min-height: 40px;
  font-size: 1.4rem;
  line-height: 1.8rem;

  span {
    width: 75%;
    display: block;
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

export const Container = styled.menu<SideMenuProps>`
  grid-area: MENU;

  width: ${props => (props.open ? '100%' : '70px')};
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

  ${ListItem} {
    padding: ${props => (props.open ? '0 2.4rem' : '13px 0')};
    flex-direction: ${props => (props.open ? 'row' : 'column')};
    text-align: ${props => (props.open ? 'left' : 'center')};

    span {
      margin-top: ${props => (props.open ? '0' : '5px')};
      margin-left: ${props => (props.open ? '2.4rem' : '0px')};
      font-size: ${props => (props.open ? '1.4rem' : '1rem')};
    }
  }
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
