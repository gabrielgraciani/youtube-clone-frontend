import styled from 'styled-components';

export const Container = styled.div`
  height: 56px;
  background: ${props => props.theme.colors.black};
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.white};
  font-size: 1.6rem;
`;
