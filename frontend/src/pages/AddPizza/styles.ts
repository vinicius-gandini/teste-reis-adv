import styled from 'styled-components';

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 592px;
  background: #fff;
  padding: 32px;
  position: relative;
  border-radius: 16px;


  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      width: 70%;
      height: 200px;
      object-fit: fill;
      border-radius: 16px;
    }
  }
`;

export const ImagePreview = styled.div`
  width: 100%fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  border: 0;
  background: transparent;
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