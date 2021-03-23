//? 2-Enviando uma action para um reducer

import Redux from 'react-redux';

const store = Redux.createStore(
  (state = {login: false}) => state
);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};

//* Dispacha a açao para a store
store.dispatch(loginAction())