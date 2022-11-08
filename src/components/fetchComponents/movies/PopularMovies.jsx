import { useState, useEffect } from 'react';
import { API_BASE_URL, API_KEY } from '../../../services/api';
import ScrollableSection from '../../ScrollableSection';

const PopularMovies = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/movie/popular?api_key=${API_KEY}&language=es-AR&page=1&region=AR`)
      .then((res) => res.json())
      .then((data) => {
        const { results } = data;
        const movies = results.map((movie) => movie);
        setPopularMovies(movies);
      });
  }, []);

  return <ScrollableSection list={popularMovies} title='Peliculas populares' />;
};

export default PopularMovies;
