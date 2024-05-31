import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Planets = () => {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlanets = async () => {
      try {
        const response = await axios.get('https://swapi.dev/api/planets/');
        setPlanets(response.data.results);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching planets:', error);
      }
    };
    fetchPlanets();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Star Wars Planets</h1>
      <ul>
        {planets.map((planet) => (
          <li key={planet.name}>
            <h2>{planet.name}</h2>
            <p>Climate: {planet.climate}</p>
            <p>Population: {planet.population}</p>
            <p>Terrain: {planet.terrain}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Planets;
