import React, { InputHTMLAttributes } from 'react';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input: React.FC<InputProps> = ({ label, type, placeholder, ...rest }) => {
  return (
    <Container>
      {label}
      <input type={type} placeholder={placeholder} {...rest} />
    </Container>
  );
};

export default Input;