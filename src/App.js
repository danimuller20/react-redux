import logo from './logo.svg';
import './App.css';
import ReducerCreateStore from './components/ReducerCreateStore';
import StoreGetState from './components/StoreGetState'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ReducerCreateStore />
        <StoreGetState />
      </header>
    </div>
  );
}

export default App;
