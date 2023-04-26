import { useState } from 'react';
import './App.css';

import ShowUserName from './components/ShowUserName';

function App() {
  //const name = 'Raphael';
  const [userName] = useState('Maria');
  return (
    <div className="App">
      <ShowUserName name={userName}></ShowUserName>
    </div>
  );
}

export default App;
