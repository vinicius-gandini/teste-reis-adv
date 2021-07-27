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
    color: rgba(0, 0, 0, 0.6);
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
  }

  svg {
    cursor: pointer;
  }
`;

export const Content = styled.div`
  width: 90%;
  height: 80%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const AddPizzaButton = styled.button`
  border: 0;
  border-radius: 16px;
  background: #ed4c4c;
  color: #fff;
  padding: 1rem;
  transition: all 0.3s;

  &:hover {
    background: #008000;
    filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.5));
  }
`;

export const Card = styled.div`
  width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);
  margin: 1rem;
  border-radius: 16px;
  padding: 1rem;
  position: relative;
  border: 4px solid transparent;
  cursor: pointer;
  transition: all 0.2s;
  background: #f2f2f2;

  &:hover {
    border: 4px solid #ed4c4c;

    div:last-child {
      transform: translateY(0px);
      visibility: visible;
    }
  }

  img {
    width: 100%;
    height: 200px;
    border-radius: 16px;
    object-fit: fill;
  }
`;

export const PizzaName = styled.p`
  width: 100%;
  font-size: 1.25rem;
  margin: 0.5rem 0;
`;

export const PizzaDescription = styled.p`
  width: 100%;
  font-size: 0.75rem;
  margin: 0.25rem 0;
`;

export const PizzaPrice = styled.p`
  width: 100%;
  font-size: 2rem;
  color: #008000;
  font-weight: bold;
  position: absolute;
  bottom: 0;
  left: 0;
  margin: 1rem;
`;

export const DeletePizzaOp = styled.div`
  width: fit-content;
  border-radius: 50%;
  padding: 1rem;
  border: 2px solid transparent;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.3);
  position: absolute;
  bottom: 0;
  right: 0;
  margin-bottom: 1rem;
  margin-right: 1rem;
  transform: translateY(50px);
  visibility: hidden;
  transition: transform 0.2s, visibility 0.05s;

  &:hover {
    border: 2px solid #ed4c4c;
    box-shadow: 0px 0px 4px rgba(237, 76, 76, 1);
  }
`;