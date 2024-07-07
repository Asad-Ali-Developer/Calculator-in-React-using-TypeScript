// src/components/Display.tsx
import React from 'react';
import styled from 'styled-components';

const StyledDisplay = styled.div`
  height: 80px;
  background: #333;
  color: #fff;
  font-size: 2.5em;
  justify-content: right;
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
`;

interface DisplayProps {
  value: string;
}

const Display: React.FC<DisplayProps> = ({ value }) => {
  return <StyledDisplay>{value}</StyledDisplay>;
};

export default Display;
