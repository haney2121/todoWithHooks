import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SWMovies = () => {
  const [num, setNum] = useState(1);
  const [movie, setMovie] = useState('');

  const url = `https://swapi.co/api/films/${num}`;

  useEffect(() => {
    const axiosFetch = async () => {
      const res = await axios.get(url);
      setMovie(res.data);
    }
    axiosFetch();
  }, [num, url]);

  return (
    <div>
      <h1>Pick A Movie</h1>
      <h4>{movie.title}</h4>
      <p>{movie.opening_crawl}</p>
      <select value={num} onChange={e => setNum(e.target.value)}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
      </select>
    </div>
  )
}

export default SWMovies;