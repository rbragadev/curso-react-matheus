import './App.css';
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
      <h2>Forms</h2>
      <MyForm
        user={{
          name: 'Raphael',
          email: 'raphael@gmail.com',
          bio: 'Sou programador',
          role: 'admin',
        }}
      ></MyForm>
    </div>
  );
}

export default App;
