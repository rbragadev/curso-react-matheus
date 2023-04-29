import { useState } from 'react';
import './MyForm.css';
const MyForm = ({ user }) => {
  const [name, setName] = useState(user ? user.name : '');
  const [email, setEmail] = useState(user ? user.email : '');
  const [bio, setBio] = useState(user ? user.bio : '');
  const [role, setRole] = useState(user ? user.role : '');

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('enviando o formulario');
    console.log(name, email, bio, role);
    resetSubmit();
  };

  const resetSubmit = () => {
    setName('');
    setEmail('');
    setBio('');
    setRole('');
  };

  //console.log(name);
  //console.log(email);

  return (
    <div>
      {' '}
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="name"
            id=""
            placeholder="digite o seu nome"
            onChange={handleName}
            value={name}
          />
        </div>

        <label htmlFor="email">
          <span>Email:</span>
          <input
            type="email"
            name="email"
            id=""
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>

        <textarea
          name="bio"
          onChange={(e) => {
            setBio(e.target.value);
          }}
          value={bio}
        ></textarea>
        <select
          name="role"
          onChange={(e) => {
            setRole(e.target.value);
          }}
        >
          <option value="admin">Administrador</option>
          <option value="user">Usuario</option>
        </select>
        <input type="submit" value="Enviar" />
        <button onClick={resetSubmit}>Resetar</button>
      </form>
    </div>
  );
};

export default MyForm;
