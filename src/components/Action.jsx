function StoreGetState () {
  //* As actions, como o nome indica, são as possíveis ações que seu sistema
  //* pode executar na store. Elas atuam como uma regra de negócio para manter
  //* os dados dos estados da aplicação e as suas mudanças previsíveis e 
  //* consistentes. É bem comum ouvirmos que as actions são intenções (grave
  //* esse termo) de mudança de estado (para usar um termo mais técnico).
  
  const action = ({type: 'LOGIN'})
  return (
    <p>
      {action}
    </p>
  );
}

export default StoreGetState;



