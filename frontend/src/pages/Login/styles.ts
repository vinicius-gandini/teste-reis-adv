import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 2rem;
`;

export const Content = styled.div`
  width: 28rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 2.5rem 2rem;
  background: #f2f2f2;
  border-radius: 4px;
  box-shadow: 0px 1px 2px 2px rgba(0, 0, 0, 0.2);

  img {
    width: 120px;
    align-self: center;
  }
  p {
    margin-bottom: 2rem;
    font-size: 1.5rem;
    color: #008000;
  }
  form {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    button {
      min-width: 100px;
      margin-top: 2rem;
      width: fit-content;
      align-self: center;
      padding: 0.5rem;
      border-radius: 8px;
      border: 0;
      font-weight: bold;
      transition: background 0.3s, color 0.2s;
      background: #fff;
      box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.5);
      &:hover {
        background: #ed4c4c;
        color: #fff;
      }
    }
  }
  a {
    margin-top: 1rem;
    text-decoration: none;
    color: #ed4c4c;
    &:hover {
      color: #008000;
    }
  }
`;

export const Pizzayo = styled.div`
  margin-bottom: 2rem;

  span {
    font-size: 4em;
    font-weight: bold;
  }

  span:first-child {
    color: #ed4c4c;
  }

  span:last-child {
    color: #008000;
  }
`;