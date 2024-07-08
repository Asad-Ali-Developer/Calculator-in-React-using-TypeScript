// src/components/Button.tsx
import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  value: string;
  onClick: (value: string) => void;
  operator?: boolean;
}

const StyledButton = styled.button<{ operator?: boolean }>`
  width: 20%;
  height: 60px;
  font-size: 1.5em;
  border: none;
  margin: 5px;
  border-radius: 50%;
  background: ${(props) => (props.operator ? '#f1a33c' : '#2f2f2f')};
  color: ${(props) => (props.operator ? '#fff' : '#fff')};
  cursor: pointer;
  font-weight: 600;
`;



const Button: React.FC<ButtonProps> = ({ value, onClick, operator }) => {
  return (
    <StyledButton className='styledBtn' onClick={() => onClick(value)} operator={operator}>
      {value}
    </StyledButton>
  );
};

export default Button;
