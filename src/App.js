import './App.css';
import MyComponent from './components/MyComponent';

function App() {
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
      </div>
    </div>
  );
}

export default App;
