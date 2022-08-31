import React, { useState } from 'react';

function FormLogin(): JSX.Element {
  const [name, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [typeForm, setTypeForm] = useState('login');

  const loginAndRegister = async () => {
    let token = '';
    if (typeForm === 'register') {
      if (!name || !email || !password) {
        alert('Preencha todos os campos');
        return;
      }
      // token = await creatRegister('user/register', {
      //   name,
      //   email,
      //   password,
      // });
      // if (+token === 409) {
      //   alert('E-mail já cadastrado');
      //   return;
      // }

    } if (typeForm === 'login') {

      if (!email || !password) {
        alert('Preencha todos os campos');
        return;
      }
      // token = await login('user/login', {
      //   email,
      //   password,
      // });

      // if (!token || +token === 500) {
      //   setError('Not found');
      //   return;
      // }

    }
    // if (token) {
    //   console.log('final');
    //   localStorage.setItem('user', JSON.stringify({ token, email, name }));
    //   const arrUsers = await getAllUser('user/', token);
    //   const dataCryptonApi = await getDataApiMercBTC();

    //   setDataCryptApi(dataCryptonApi);
    //   setDataUser(arrUsers);
    //   nav('/home');
    // }
  };

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
            onClick={loginAndRegister}
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
    </div>
  );
}

export default FormLogin;
