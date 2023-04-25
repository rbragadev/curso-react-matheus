import './App.css';
import Events from './components/Events';
import FirstComponent from './components/FirstComponent';
import MyComponent from './components/MyComponent';
import TemplateExpressions from './components/TemplateExpressions';

function App() {
  return (
    <div className="App">
      <FirstComponent></FirstComponent>
      <TemplateExpressions></TemplateExpressions>
      <MyComponent></MyComponent>
      <Events></Events>
    </div>
  );
}

export default App;
