import React from 'react';
import { FaPowerOff } from 'react-icons/fa';

import { Container, Header, Content } from './styles';

const Pizzas: React.FC = () => {


  return (
    <Container>
      <Header>
        <div>
          <p>{`Bem vindo, \n Vinicius`}</p>
          <FaPowerOff size={24} color="#ed4c4c" />
        </div>
        <button type="button">Adicionar Pizza</button>
      </Header>
      <Content />
    </Container>
  );
}

export default Pizzas;