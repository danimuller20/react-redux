
//? 3-Criando um Reducer para receber e manipular uma action
import Redux from 'react-redux';

const defaultState = {
  login: false
};

const reducer = (state = defaultState, action) => {
  // Change code below this line
if(action.type === 'LOGIN') {
  return {login: true}
} else {
  return state;
}
  // Change code above this line
};

const store = Redux.createStore(reducer);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};