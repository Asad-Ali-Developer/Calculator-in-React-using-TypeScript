// src/App.tsx
import React from 'react';
import Calculator from './Components/Calculator';
import MyNavbar from './Components/Navbar';

const App: React.FC = () => {
  return (
    <>
    
      <MyNavbar />

        <div className="App">
          <Calculator />
        </div>

    </>
  );
};

export default App;
