//? 10-Por que nunca modificar um state?

import Redux from 'react-redux';

const ADD_TO_DO = 'ADD_TO_DO';

// A list of strings representing tasks to do:
const todos = [
  'Go to the store',
  'Clean the house',
  'Cook dinner',
  'Learn to code',
];

const immutableReducer = (state = todos, action) => {
  switch(action.type) {
    case ADD_TO_DO:
      // Don't mutate state here or the tests will fail
      return [...state, action.todo]
    default:
      return state;
  }
};

const addToDo = (todo) => {
  return {
    type: ADD_TO_DO,
    todo
  }
}

const store = Redux.createStore(immutableReducer);
console.log(store.getState());

/* output = ['Vá para a loja',
'Limpe a casa',
'Cozinhar o jantar',
'Aprenda a codificar'] */

store.dispatch(addToDo('test'));

/* output = 
['Vá para a loja',
'Limpe a casa',
'Cozinhar o jantar',
'Aprenda a codificar',
'test,'] */
