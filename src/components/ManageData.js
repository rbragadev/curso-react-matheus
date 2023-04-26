import { useState } from 'react';const ManageData = () => {
  let someData = 10;

  let [number, setNumber] = useState(10);

  return (
    <>
      <div>
        <p> Valor: {someData}</p>
        <button onClick={() => (someData = 15)}>Mudar Variavel</button>
      </div>
      <div>
        <p>valor: {number}</p>
        <button onClick={() => setNumber(25)}>Mudar o state</button>
      </div>
    </>
  );
};

export default ManageData;
