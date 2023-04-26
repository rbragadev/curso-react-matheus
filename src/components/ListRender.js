import React, { useState } from 'react';
const ListRender = () => {
  const [list] = useState(['Matheus', 'Pedro', 'Josias', 'Maria']);

  const [users] = useState([
    { id: 1, name: 'Raphael', age: 33 },
    { id: 2, name: 'Leandro', age: 32 },
  ]);

  return (
    <div>
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {' '}
            Nome: {user.name} - idade {user.age}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListRender;
