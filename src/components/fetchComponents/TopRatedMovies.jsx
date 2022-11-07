import { useState, useEffect } from 'react';
import { API_BASE_URL, API_KEY } from '../../services/api';
import ScrollableSection from '../ScrollableSection';

const TopRatedMovies = () => {
  const [topRated, setTopRated] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=es-AR&page=1&region=AR`)
      .then((res) => res.json())
      .then((data) => {
        const { results } = data;
        const movies = results.map((element) => element);
        setTopRated(movies);
      });
  }, []);

  return <ScrollableSection list={topRated} title='Peliculas mas votadas' />;
};

export default TopRatedMovies;
