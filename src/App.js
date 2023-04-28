import { useState } from 'react';
import './App.css';
import MyComponent from './components/MyComponent';

function App() {
  const n = 9;
  const [redTitle] = useState(false);

  return (
    <div className="App">
      <h1>React com CSS</h1>
      <div>
        <MyComponent></MyComponent>
        <p>Este paragrafo é do app</p>
        <p className="my-comp-paragraph">Este é o paragrafo 2</p>
        <p
          style={{
            color: 'yellow',
            backgroundColor: 'black',
            borderTop: '2px solid red',
          }}
        >
          Este elemento foi estilizado inline
        </p>
        <h2 style={n < 10 ? { color: 'purple' } : { color: 'magenta' }}>
          Css Dinamico
        </h2>
        <h2 className={redTitle ? 'red-title' : 'title'}>Classe dinamica</h2>
      </div>
    </div>
  );
}

export default App;
