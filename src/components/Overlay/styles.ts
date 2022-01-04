import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.gradient};
  opacity: 0.75;
  transition: 0.5s;
  left: 0;
  bottom: 0;
  &:hover {
    opacity: 0.3;
  }
`;

export default Container;
