import React from 'react';
import './App.css';
import { TmaProvider } from './components/tma/provider';
import { Me } from './components/tma/me';
import Home from './components/tma/home'; 
function App() {
  return (
    <>
      <TmaProvider>
        <Me />
      </TmaProvider>
      <Home /> 
    </>
  );
}

export default App;
