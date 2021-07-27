import React, { TextareaHTMLAttributes } from 'react';

import { Container } from './styles';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  rows: number;
  cols: number;
  label: string;
}

const InputArea = (
  { rows, cols, label, ...rest }: TextAreaProps,
) => {
  return (
    <Container>
      <label>{label}</label>
      <textarea  rows={rows} cols={cols} {...rest} />
    </Container>
  );
};

export default InputArea;
