import { createStore} from 'redux';

function ReducerCreateStore() {
  //* Os reducers são responsáveis por manipular a store seguindo as 
  //* regras definidas pelas actions. Os reducers são importantes para 
  //* evitar a manipulação direta da store e facilitam a manutenção do código.
  const reducer = (state = 5) => {
    return state;
  }
  // Redux methods are available from a Redux object
  // For example: Redux.createStore()
  // Define the store here:
  const store = createStore(reducer)
  const { getState } = store;
  return (
    <p>
      {getState()}
    </p>
  );
}

export default ReducerCreateStore;
