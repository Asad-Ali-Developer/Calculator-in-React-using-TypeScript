// src/components/Calculator.tsx
import React, { useState } from 'react';
import styled from 'styled-components';
import Display from './Display'

import Button from './Button';

const CalculatorWrapper = styled.div`
  width: 350px;
  margin: 50px 0;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Heading = styled.div`
  background-color: #fafafa;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
`


const Calculator: React.FC = () => {
  const [displayValue, setDisplayValue] = useState<string>('0');

  const handleButtonClick = (value: string) => {
    if (!isNaN(Number(value)) || value === ' ') {
      setDisplayValue((prev) => (prev === '0' ? value : prev + value));
    } else {
      switch (value) {
        case 'C':
          setDisplayValue('0');
          break;
        case '=':
          try {
            setDisplayValue(eval(displayValue).toString());
          } catch {
            setDisplayValue('Error');
          }
          break;
        default:
          if (!isNaN(Number(displayValue.slice(-1)))) {
            setDisplayValue((prev) => prev + value);
          }
      }
    }
  };

  return (
    <CalculatorWrapper>
      <Heading>Calculator in React TS</Heading>
      <Display value={displayValue} />

      <div>
        {['7', '8', '9', '/'].map((val) => (
          <Button key={val} value={val} onClick={handleButtonClick} operator={val === '/'} />
        ))}
      </div>

      <div>
        {['4', '5', '6', '*'].map((val) => (
          <Button key={val} value={val} onClick={handleButtonClick} operator={val === '*'} />
        ))}
      </div>

      <div>
        {['1', '2', '3', '-'].map((val) => (
          <Button key={val} value={val} onClick={handleButtonClick} operator={val === '-'} />
        ))}
      </div>

      <div>
        {['0', '.', '=', '+'].map((val) => (
          <Button key={val} value={val} onClick={handleButtonClick} operator={val === '+' || val === '='} />
        ))}
      </div>
      <div className='C-Btn'>
        <Button  value="C" onClick={handleButtonClick} operator />
      </div>
    </CalculatorWrapper>
  );
};

export default Calculator;
