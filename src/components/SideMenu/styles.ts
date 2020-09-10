import styled from 'styled-components';
import { darken } from 'polished';

interface SideMenuProps {
  open?: boolean;
  active?: boolean;
}

export const Item = styled.div<SideMenuProps>`
  display: flex;
  align-items: center;
  width: 100%;
  cursor: pointer;
  user-select: none;

  svg {
    margin-bottom: 5px;

    fill: ${props => props.active && 'var(--red)'};
  }

  span {
    color: ${props => props.active && 'var(--red)'};
  }

  &:hover {
    background: ${props =>
      props.active
        ? darken(0.1, props.theme.colors.sideMenuItemHover)
        : props.theme.colors.sideMenuItemHover};
  }

  &:active {
    background: ${props => darken(0.2, props.theme.colors.sideMenuItemActive)};
  }

  background: ${props =>
    props.active ? props.theme.colors.sideMenuItemActive : 'transparesnt'};
`;

export const Container = styled.div<SideMenuProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  background: ${props => props.theme.colors.backgroundHeader};
  width: ${props => (props.open ? '240px' : '70px')};

  ${Item} {
    flex-direction: ${props => (props.open ? 'row' : 'column')};
    justify-content: ${props => (props.open ? 'flex-start' : 'center')};
    padding: ${props => (props.open ? '15px 0 15px 25px' : '15px 0')};

    span {
      margin-left: ${props => (props.open ? '25px' : '0px')};
      font-size: ${props => (props.open ? '1.4rem' : '1rem')};
    }
  }
`;
