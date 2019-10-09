import React from 'react';
import Header from './components/commons/Header/Header'
import Routes from './routes'
import { Provider } from 'react-redux';
import store from './store';


export default function App () {
  return (
    <Provider store = { store }>
      <div className="App">
        <Header />
        <Routes />
      </div>
    </Provider>
  );
}


