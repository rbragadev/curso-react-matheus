import { useState } from 'react';
const ConditionalRender = () => {
  const [x] = useState(true);

  const [name, setName] = useState('Joao');

  return (
    <div>
      <h1>Isso sera exibido?</h1>
      {x && <p>Se x for true, sim</p>}
      {!x && <p>Agora x é falso</p>}
      {name === 'Joao' ? (
        <div>
          <p>O nome é Joao</p>
        </div>
      ) : (
        <div>
          <p>Nome não encontrado</p>
        </div>
      )}
      <button onClick={() => setName('Raphael')}>Clique aqui</button>
    </div>
  );
};

export default ConditionalRender;
