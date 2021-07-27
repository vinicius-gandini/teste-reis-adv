import React, { FormEvent, useEffect } from 'react';
import Input from '../../components/Input';

import pizza from '../../assets/pizza.png';

import { Container, Content, Pizzayo } from './styles';
import api from '../../services/api';
import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { signIn } = useAuth();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      await signIn({ username, password });
    } 
    catch(err) {
      console.log(err.response);
    }
  }

  return (
    <Container>
      <Pizzayo>
        <span>Pizza</span>
        <span>YO</span>
      </Pizzayo>
      <Content>
        <img src={pizza} alt="" />
        <p>Acesse sua conta</p>
        <form onSubmit={(e) => handleSubmit(e)}>
          <Input
            label="Usuário"
            placeholder="Informe o usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="password"
            label="Senha"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Entrar</button>
        </form>
        <Link to="/register">Criar uma conta</Link>
      </Content>
    </Container>
  );
};

export default Login;