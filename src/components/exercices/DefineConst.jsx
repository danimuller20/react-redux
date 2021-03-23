
//? 5-Usando const para os action types

import Redux from 'react-redux';

const defaultState = {
  authenticated: false
};

//* Atribuir valores usados recorrentemente em uma const
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const authReducer = (state = defaultState, action) => {

  switch (action.type) {
    case LOGIN: 
      return {
        authenticated: true
      }
    case LOGOUT: 
      return {
        authenticated: false
      }
    default:
      return state;
  }

};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: LOGIN
  }
};

const logoutUser = () => {
  return {
    type: LOGOUT
  }
};
