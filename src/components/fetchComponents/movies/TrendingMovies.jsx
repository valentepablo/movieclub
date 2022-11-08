import { useState, useEffect } from 'react';
import { API_BASE_URL, API_KEY } from '../../../services/api';
import ScrollableSection from '../../ScrollableSection';

const TrendingMovies = () => {
  const [mostVotedMovies, setMostVotedMovies] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/trending/movie/week?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        const { results } = data;
        const movies = results.map((element) => element);
        setMostVotedMovies(movies);
      });
  }, []);

  return <ScrollableSection list={mostVotedMovies} title='Peliculas en tendencia' />;
};

export default TrendingMovies;
