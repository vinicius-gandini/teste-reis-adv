import React, { FormEvent, useEffect } from 'react';
import Input from '../../components/Input';

import cutter from '../../assets/cutter.png';

import { Container, Content } from './styles';
import api from '../../services/api';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Register: React.FC = () => {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      await api.post('users', {name, username, password});
      history.push('/');
    } 
    catch(err) {
      console.log(err.response);
    }
  }

  return (
    <Container>
      <Content>
        <img src={cutter} alt="" />
        <p>Crie sua conta</p>
        <form onSubmit={(e) => handleSubmit(e)}>
          <Input
            label="Nome"
            placeholder="Informe seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            label="Usuário"
            placeholder="Informe o usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="password"
            label="Senha"
            placeholder="Digite a senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Cadastrar</button>
        </form>
      </Content>
    </Container>
  );
};

export default Register;