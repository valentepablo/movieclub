import { useState, useEffect } from 'react';
import Main from './Main';
import { API_BASE_URL, API_KEY, IMG_BASE_URL } from '../services/api';

const HomePage = () => {
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

  return (
    <Main>
      <div className='space-y-4'>
        <div>
          <p className='mb-1 font-semibold text-sm'>Peliculas populares</p>
          <div className='flex items-center gap-2 scroll-x-hidden'>
            {popularMovies.map((movie) => {
              return (
                <div key={movie.id} className='shrink-0 w-[108px]'>
                  <img
                    src={`${IMG_BASE_URL}${movie.poster_path}`}
                    alt={movie.original_title}
                    className='max-w-full'
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <p className='mb-1 font-semibold text-sm'>Peliculas populares</p>
          <div className='flex items-center gap-2 scroll-x-hidden'>
            {popularMovies.map((movie) => {
              return (
                <div key={movie.id} className='shrink-0 w-[108px]'>
                  <img
                    src={`${IMG_BASE_URL}${movie.poster_path}`}
                    alt={movie.original_title}
                    className='max-w-full'
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <p className='mb-1 font-semibold text-sm'>Peliculas populares</p>
          <div className='flex items-center gap-2 scroll-x-hidden'>
            {popularMovies.map((movie) => {
              return (
                <div key={movie.id} className='shrink-0 w-[108px]'>
                  <img
                    src={`${IMG_BASE_URL}${movie.poster_path}`}
                    alt={movie.original_title}
                    className='max-w-full'
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <p className='mb-1 font-semibold text-sm'>Peliculas populares</p>
          <div className='flex items-center gap-2 scroll-x-hidden'>
            {popularMovies.map((movie) => {
              return (
                <div key={movie.id} className='shrink-0 w-[108px]'>
                  <img
                    src={`${IMG_BASE_URL}${movie.poster_path}`}
                    alt={movie.original_title}
                    className='max-w-full'
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <p className='mb-1 font-semibold text-sm'>Peliculas populares</p>
          <div className='flex items-center gap-2 scroll-x-hidden'>
            {popularMovies.map((movie) => {
              return (
                <div key={movie.id} className='shrink-0 w-[108px]'>
                  <img
                    src={`${IMG_BASE_URL}${movie.poster_path}`}
                    alt={movie.original_title}
                    className='max-w-full'
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Main>
  );
};

export default HomePage;
