import { useState, useEffect } from 'react';
import { API_BASE_URL, API_KEY } from '../../../services/api';
import ScrollableSection from '../../ScrollableSection';

const NowPlayingMovies = () => {
  const [nowPlaying, setNowPlaying] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=es-AR&page=1&region=AR`)
      .then((res) => res.json())
      .then((data) => {
        const { results } = data;
        const movies = results.filter((element) => element.poster_path !== null);
        setNowPlaying(movies);
      });
  }, []);

  return <ScrollableSection list={nowPlaying} title='En cines' />;
};

export default NowPlayingMovies;
