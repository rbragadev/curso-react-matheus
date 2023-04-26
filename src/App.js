import './App.css';

import CarDetails from './components/CarDetails';

function App() {
  //const name = 'Raphael';

  return (
    <div className="App">
      <CarDetails brand="vw" km={100000} color="azul"></CarDetails>
    </div>
  );
}

export default App;
