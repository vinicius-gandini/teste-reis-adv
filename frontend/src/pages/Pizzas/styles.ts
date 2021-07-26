import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Header = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;

  p {
    font-size: 3em;
  }
`;

export const Content = styled.div`
  width: 90%;
  height: 80%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;