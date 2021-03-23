import { createStore} from 'redux';

function StoreGetState () {
  //* A store é onde o estado da sua aplicação fica registrado e protegido.
  //* As mudanças ou consultas feitas na store precisam estar definidas
  //* anteriormente numa action. Isso garante a integridade dos dados,
  //* como explicado anteriormente.
  const store = createStore(
    (state = 15) => state
  );

  // Change code below this line
  const currentState = store.getState()
  return (
    <p>
      {currentState}
    </p>
  );
}

export default StoreGetState;



