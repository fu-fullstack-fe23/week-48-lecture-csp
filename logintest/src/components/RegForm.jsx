import React from 'react'
import { useState } from 'react';
import axios from 'axios';

function RegForm() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleRegistration = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://jmjp2tbay6.execute-api.eu-north-1.amazonaws.com/auth/register?key=key-55lks', {
              username : username,
              password : password
            });
            console.log('response', response);
          } catch (error) {
            console.log('API Error:', error.response ? error.response.data : error.message);
          }
    }
  return (
    <form>
        <input onChange={(e) => setUsername(e.target.value)} type="text" placeholder='uname' />
        <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder='pword' />
        <button onClick={handleRegistration}>Register</button>
    </form>
  )
}

export default RegForm
