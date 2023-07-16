import { Fragment } from 'react';
import './App.module.css';
import Header from './components/Layout/Header/Header';
import Meals from './components/Meals/Meals';

const App = () => {
  return (
    <Fragment>
      <Header/>
      <main>
        <Meals/>
      </main>
    </Fragment>
  );
}

export default App;
