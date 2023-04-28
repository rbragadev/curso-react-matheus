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
      </div>
    </div>
  );
}

export default App;
