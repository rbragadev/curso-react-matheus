import './App.css';
import City from './assets/city.jpg';
import ManageData from './components/ManageData';

function App() {
  return (
    <div className="App">
      <div>
        <ManageData></ManageData>
      </div>
      <div>
        {/* imagem em public */}
        <img src="/img1.jpg" alt="paisagem" />
      </div>
      <div>
        <img src={City} alt="cidade" />
      </div>
    </div>
  );
}

export default App;
