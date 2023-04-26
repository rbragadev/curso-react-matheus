import './App.css';

import CarDetails from './components/CarDetails';

function App() {
  const cars = [
    { id: 1, brand: 'ford', color: 'azul', KM: 0 },
    { id: 2, brand: 'vw', color: 'vermelho', KM: 234 },
    { id: 3, brand: 'renault', color: 'verde', KM: 150000 },
  ];

  return (
    <div className="App">
      {cars.map((car) => (
        <CarDetails brand={car.brand} color={car.color} km={car.KM} />
      ))}
    </div>
  );
}

export default App;
