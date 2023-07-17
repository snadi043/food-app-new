import React from 'react';
import './App.module.css';
import Header from './components/Layout/Header/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

const App = () => {
  return (
    <Cart>
      <Header/>
      <main>
        <Meals/>
      </main>
    </Cart>
  );
}

export default App;
