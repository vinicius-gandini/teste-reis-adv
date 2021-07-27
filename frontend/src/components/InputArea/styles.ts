import styled from 'styled-components';

export const Container = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  margin-bottom: 1rem;
  
  textarea {
    padding: 0.5rem;
    border-radius: 4px;
    border: none;
    margin-top: 1rem;
    border: 1px solid rgba(0, 0, 0, 0.3);
  }
`;