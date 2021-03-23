//? 12-Removendo itens de um array preservando a imutabilidade

import Redux from 'react-redux';
const immutableReducer = (state = [0,1,2,3,4,5], action) => {
  switch(action.type) {
    case 'REMOVE_ITEM':
      // Don't mutate state here or the tests will fail
      //? ...state.slice(0, 2) mantem os dois primeiros indices;
      //* [0, 1]
      return [...state.slice(0, action.index),
      ...state.slice(action.index + 1, state.length)]
      //* [...state.slice(0, 2), ...state.slice()] = [0, 1, 0, 1, 2, 3, 4, 5]
      //?  ...state.slice(2 + 1, 6) mantem do indice 3 até o final do array;
      //* [3, 4, 5]
    default:
      return state;
  }
};

const removeItem = (index) => {
  return {
    type: 'REMOVE_ITEM',
    index
  }
}

const store = Redux.createStore(immutableReducer);
store.dispatch(removeItem(2))
console.log(store.getState())

/*
output = [ 0, 1, 3, 4, 5 ]
*/