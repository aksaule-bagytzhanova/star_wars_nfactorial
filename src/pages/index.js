import React, { useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`https://swapi.dev/api/people/?search=${query}`);
      setResults(response.data.results);
    } catch (error) {
      console.error('Error searching:', error);
    }
  };

  return (
    <div>
      <h1>Star Wars Search</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for characters, planets, ships..."
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {results.map((result) => (
          <li key={result.name}>
            <h2>{result.name}</h2>
            <p>Height: {result.height}</p>
            <p>Mass: {result.mass}</p>
            <p>Birth Year: {result.birth_year}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
