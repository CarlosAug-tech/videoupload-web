import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { signUpRequest } from '../../store/modules/auth/actions';

import { MdPerson, MdMail, MdLock } from 'react-icons/md';

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();

    dispatch(signUpRequest(name, email, password));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Cadastrar-se</h2>

      <div>
        <input
          type="text"
          placeholder=" "
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <label htmlFor="">Nome:</label>
        <MdPerson size={20} color={'#fff'} />
        <span>
          <i></i>
        </span>
      </div>
      <div>
        <input
          type="email"
          placeholder=" "
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <label htmlFor="">E-mail:</label>
        <MdMail size={20} color={'#fff'} />
        <span>
          <i></i>
        </span>
      </div>
      <div>
        <input
          type="password"
          placeholder=" "
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <label htmlFor="">Senha:</label>
        <MdLock size={20} color={'#fff'} />
        <span>
          <i></i>
        </span>
      </div>

      <button type="submit">Acessar</button>
      <Link to="/signIn">Já possui conta? Faça seu acesso!</Link>
    </form>
  );
}
