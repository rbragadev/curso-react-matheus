import './App.css';

import ExecuteFunction from './components/ExecuteFunction';

function showMessage() {
  console.log('Evento do componente pai');
}

function App() {
  return (
    <div className="App">
      <ExecuteFunction myFunction={showMessage}></ExecuteFunction>
    </div>
  );
}

export default App;
