import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

import { changeUser } from '../../redux/slice/userSlice';
import {
  loginGetToken,
  registerUser,
  getDatas,
} from '../../utils/api';

function FormLogin(): JSX.Element {
  const router = useRouter();
  const dispatch = useDispatch();
  const [name, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [typeForm, setTypeForm] = useState('login');
  const [error, setError] = useState('');

  const handleDatas = async () => {
    let token = '';
    if (typeForm === 'register') {
      if (!name || !email || !password) {
        alert('Preencha todos os campos');
        return;
      }
      token = await registerUser('user/register', {
        name,
        email,
        password,
      })

      if (+token === 409) {
        alert('E-mail já cadastrado')
        return;
      }

      if (token) {
        localStorage.setItem('user', JSON.stringify({ token, email, name }));
        const userDatas = await getDatas('user/message', token);

        dispatch(changeUser(userDatas));
        router.push('/home');
      }

    } if (typeForm === 'login') {

      if (!email || !password) {
        alert('Preencha todos os campos')
        return;
      }
      token = await loginGetToken('user/login', {
        email,
        password,
      })

      if (!token || +token === 404) {
        setError('Not found');
        return;
      }

    }
    if (token) {
      localStorage.setItem('user', JSON.stringify({ token, email, name }));
      const userDatas = await getDatas('user/message', token);

      dispatch(changeUser(userDatas));
      router.push('/home');
    }
  }

  return (
    <div>
      <form>
        {typeForm === 'register'
          && (<div className="form-group">
            <label htmlFor="userName">Nome</label>
            <input
              type="text"
              className="form-control"
              id="userName"
              placeholder="Digite se nome"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>)
        }
        <div className="form-group">
          <label htmlFor="userEmail">Email</label>
          <input
            type="text"
            className="form-control"
            id="userEmail"
            placeholder="Digite se e-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div id="buttonsFormLogin">
          <button
            id="btnFirst"
            type="button"
            className="btn"
            onClick={handleDatas}
          >
            {typeForm === 'login' ? 'Login' : 'Registre-se'}
          </button>
          <button
            id="buttonRegister"
            type="button"
            className="btn"
            onClick={() => setTypeForm(typeForm === "login" ? "register" : "login")}
          >
            {typeForm === 'login' ? 'Registre-se' : 'Login'}
          </button>
        </div>
      </form>
      {error && <p>{'Usuário ou senha incorreto'}</p>}
    </div>
  )
}

export default FormLogin
