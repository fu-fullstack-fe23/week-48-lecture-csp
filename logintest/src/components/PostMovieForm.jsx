import React, { useState } from 'react';
import axios from 'axios';

function PostMovieForm() {
    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');
    const [director, setDirector] = useState('');
    const [genre, setGenre] = useState('');
    const [length, setLength] = useState('');

    const getTokenFromSessionStorage = () => {
        const token = sessionStorage.getItem('token') || '';
        return token;
    }

    const handlePostMovie = async (e) => {
        e.preventDefault();
        const token = getTokenFromSessionStorage();
        try {
            const response = await axios.post('https://jmjp2tbay6.execute-api.eu-north-1.amazonaws.com/movies?key=key-55lks', {
                title : title,
                year : parseInt(year),
                director : director,
                genre : genre,
                length : parseInt(length)
            }, {
                headers : {
                    Authorization : 'Bearer ' + token
                }
            });
            console.log('response', response);
        } catch (error) {
            console.log('API Error:', error.response ? error.response.data : error.message);
        }
    }

  return (
    <form>
        <input onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Title" />
        <input onChange={(e) => setYear(e.target.value)} type="number" placeholder="Year" />
        <input onChange={(e) => setDirector(e.target.value)} type="text" placeholder="director" />
        <input onChange={(e) => setGenre(e.target.value)} type="text" placeholder="Genre" />
        <input onChange={(e) => setLength(e.target.value)} type="number" placeholder="length" />
        <button onClick={handlePostMovie}>Add movie</button>
      </form>
  )
}

export default PostMovieForm
