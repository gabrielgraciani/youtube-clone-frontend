import styled from 'styled-components';

export const Container = styled.div`
  height: 56px;
  width: 100%;
  padding: 0 16px;
  background: ${props => props.theme.colors.backgroundHeader};
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${props => props.theme.colors.primary};
  font-size: 1.6rem;

  .header-item {
    display: flex;
    align-items: center;
  }

  .left {
    .logo {
      display: flex;
      margin-left: 16px;
      img {
        width: 80px;
        height: 24px;
      }
    }
  }

  .center {
    width: 40%;
    .search {
      width: 100%;
      display: flex;

      input {
        padding: 0 5px;
        flex-grow: 1;
        border: 1px solid
          ${props => props.theme.colors.backgroundFormInputBorder};
        border-right: 0;
        background: ${props => props.theme.colors.backgroundFormInput};
      }
      button {
        padding: 5px 22px;
        border: 1px solid
          ${props => props.theme.colors.backgroundFormInputBorder};
        background: ${props => props.theme.colors.backgroundFormButton};

        > svg {
          fill: ${props => props.theme.colors.iconGrayToGray};
        }
      }
    }
  }
`;
