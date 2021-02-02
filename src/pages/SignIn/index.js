import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { MdMail, MdLock } from 'react-icons/md';

import { signInRequest } from '../../store/modules/auth/actions';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();

    dispatch(signInRequest(email, password));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Fazer Login</h2>

      <div>
        <input
          type="email"
          placeholder=" "
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <label htmlFor="">E-mail</label>
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
        <label htmlFor="">Senha</label>
        <MdLock size={20} color={'#fff'} />
        <span>
          <i></i>
        </span>
      </div>

      <button type="submit">Acessar</button>
      <Link to="/register">Não possui conta? Faça seu cadastro!</Link>
    </form>
  );
}
