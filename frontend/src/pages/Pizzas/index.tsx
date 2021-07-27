import React, { useCallback, useEffect, useState } from 'react';
import { FaPowerOff, FaRegTrashAlt } from 'react-icons/fa';
import { useAuth } from '../../context/AuthContext';
import api from '../../services/api';
import AddPizza from '../AddPizza';

import {
  Container,
  Header,
  AddPizzaButton,
  Content,
  Card,
  PizzaName,
  PizzaDescription,
  PizzaPrice,
  DeletePizzaOp
} from './styles';

interface PizzaProps {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
}

const Pizzas: React.FC = () => {
  const [pizzas, setPizzas] = useState<PizzaProps[]>([]);
  const { signOut, user, setShowAddPizza, showAddPizza } = useAuth();
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleDeletePizza = useCallback(async (id: string) => {
    try {
      setShowDeleteModal(true);
      await api.delete(`pizzas/${id}`);
      setShowDeleteModal(false);
    } catch (err) {
      console.log(err.response);
    }
  }, []);

  useEffect(() => {
    async function getPizzas() {
      const response = await api.get('pizzas');
      setPizzas(response.data);
    }
    getPizzas();
  }, [showDeleteModal, showAddPizza])

  return (
    <>
      <Container>
        <Header>
          <div>
            <p>{`Bem vindo, \n ${user}`}</p>
            <FaPowerOff size={24} color="#ed4c4c" onClick={signOut} />
          </div>
          <AddPizzaButton type="button" onClick={() => setShowAddPizza(true)}>Adicionar Pizza</AddPizzaButton>
        </Header>
        <Content>
          {pizzas.map(pizza => (
            <Card key={pizza.id}>
              <img src={pizza.image} alt="" />
              <PizzaName>{pizza.name}</PizzaName>
              <PizzaDescription>{pizza.description}</PizzaDescription>
              <PizzaPrice>{`R$ ${pizza.price.replace('.', ',')}`}</PizzaPrice>
              <DeletePizzaOp onClick={() => handleDeletePizza(pizza.id)}>
                <FaRegTrashAlt size={24} color="#ed4c4c" />
              </DeletePizzaOp>
            </Card>
          ))}
        </Content>
      </Container>

      {showAddPizza && <AddPizza />}
    </>
  );
}

export default Pizzas;