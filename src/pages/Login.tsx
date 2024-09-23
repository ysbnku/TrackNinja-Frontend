import React, { useEffect, useState } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { BASEURL } from '../constants';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
	let [state, setState] = useState({ error: false});

  return (
    <>
      <div className="flex align-items-center justify-content-center mt-8">
        <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
          <div className="text-center mb-5">
          <a href="/">
          <img src="/images/logo.png" alt="hyper" height={50} className="mb-3" />
          </a>
            <div className="text-900 text-3xl font-medium mb-3">Welcome</div>
            <span className="text-600 font-medium line-height-3">Don't have an account?</span>
            <a className="font-medium no-underline ml-2 text-blue-500 cursor-pointer" onClick={didTappedRegister}>Create today!</a>
          </div>

          <div>
            <label htmlFor="email" className="block text-900 font-medium mb-2">Email</label>
            <InputText invalid ={state.error} id="email" type="text" placeholder="Email address" className="w-full mb-3" onChange={(e) => setEmail(e.target.value)} />

            <label htmlFor="password" className="block text-900 font-medium mb-2">Password</label>
            <InputText invalid ={state.error} id="password" type="password" placeholder="Password" className="w-full mb-3" onChange={(e) => setPassword(e.target.value)} />

            <div className="flex align-items-center justify-content-between mb-6">
              <a className="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Forgot your password?</a>
            </div>
            <Button label="Sign In" icon="pi pi-user" className="w-full" onClick={didTappedLogin} />
          </div>
        </div>
      </div>
    </>
  );

  async function didTappedLogin() {
    await axios.post(BASEURL + '/login', {
      email: email,
      password: password
    })
      .then(response => {
        setState({error: false});
        localStorage.setItem('accountCode', response.data.accountCode);
        localStorage.setItem('sessionKey', response.data.sessionKey);
        window.open('/admin/userloglist', '_self');
      })
      .catch(error => {
				setState({error: true});
        console.error("Api request error:  ", error);
      });
  }

  function didTappedRegister() {
    window.open('/register', '_self')
  }

}

export default Login;