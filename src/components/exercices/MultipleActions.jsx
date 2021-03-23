//? 4-Criando um reducer que aceita actions de tipos distintos

import Redux from 'react-redux';

const defaultState = {
  authenticated: false
};

//* Realiza multiplas ações
const authReducer = (state = defaultState, action) => {
  // Change code below this line
  switch (action.type) {
    case 'LOGIN':
      return {authenticated: true}
    case 'LOGOUT':
      return {authenticated: false}
    default:
      return state
  }
  // Change code above this line
};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: 'LOGIN'
  }
};

const logoutUser = () => {
  return {
    type: 'LOGOUT'
  }
};
