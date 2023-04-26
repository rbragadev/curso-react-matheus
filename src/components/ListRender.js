import React, { useState } from 'react';
const ListRender = () => {
  const [list] = useState(['Matheus', 'Pedro', 'Josias', 'Maria']);

  const [users, setUsers] = useState([
    { id: 1, name: 'Raphael', age: 33 },
    { id: 2, name: 'Leandro', age: 32 },
    { id: 3, name: 'Maria', age: 32 },
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(users.length);

    setUsers((previousUsers) => {
      console.log(previousUsers);
      return previousUsers.filter((user) => randomNumber !== user.id);
    });
  };

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
      <button onClick={deleteRandom}>Delete random user</button>
    </div>
  );
};

export default ListRender;
