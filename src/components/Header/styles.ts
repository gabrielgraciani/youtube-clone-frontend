import styled from 'styled-components';

export const Container = styled.div`
  height: 56px;
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
`;
