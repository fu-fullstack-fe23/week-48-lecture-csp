import React from 'react'
import { useState } from 'react';
import axios from 'axios';

function LoginForm() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(username, password);
        try {
          const response = await axios.post('https://jmjp2tbay6.execute-api.eu-north-1.amazonaws.com/auth/login?key=key-55lks', {
            username: username,
            password: password
          });

          console.log('response', response);

          if(response.status === 201) {
            saveTokenToSessionStorage(response.headers.authorization);
          }

        } catch (error) {
          console.log('API Error:', error.response ? error.response.data : error.message);
        }
      }

    const saveTokenToSessionStorage = (token) => {
      sessionStorage.setItem('token', token);
    }
  

  return (
    <form>
        <input onChange={(e) => setUsername(e.target.value)} type="text" placeholder='uname' />
        <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder='pword' />
        <button onClick={handleSubmit}>Login</button>
      </form>
  )
}

export default LoginForm
