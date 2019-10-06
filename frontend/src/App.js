import React from 'react';
import './App.css';

import logo from './assets/logo.svg';

import Routes from './routes';

function App() {
  return (
    <div className='container'>
      <img src={logo} alt='AirCnC'/>
      <div className='content'>
        <Routes />
      </div>
    </div>
  );
}

export default App;

/*
  Utiliza classname pq class é uma palavra reservada no js 
  for também é uma palavra reservada por isso htmlFor
*/