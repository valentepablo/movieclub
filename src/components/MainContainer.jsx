import { useState, useEffect } from 'react';
import { API_BASE_URL, API_KEY, IMG_BASE_URL } from '../services/api';

const MainContainer = () => {
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
    <main className='bg-dark-blue min-h-screen py-[60px]'>
      <div className='px-2 py-2'>
        <p className='mb-1 font-semibold text-sm'>Peliculas populares</p>
        <div className='flex items-center gap-2 scroll-x-hidden'>
          {popularMovies.map((movie) => {
            return (
              <div key={movie.id} className='shrink-0 w-[108px] bg-red-500'>
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

      <div className='px-2 py-2'>
        <p className='mb-1 font-semibold text-sm'>Peliculas populares</p>
        <div className='flex items-center gap-2 scroll-x-hidden'>
          {popularMovies.map((movie) => {
            return (
              <div key={movie.id} className='shrink-0 w-[108px] bg-red-500'>
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

      <div className='px-2 py-2'>
        <p className='mb-1 font-semibold text-sm'>Peliculas populares</p>
        <div className='flex items-center gap-2 scroll-x-hidden'>
          {popularMovies.map((movie) => {
            return (
              <div key={movie.id} className='shrink-0 w-[108px] bg-red-500'>
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

      <div className='px-2 py-2'>
        <p className='mb-1 font-semibold text-sm'>Peliculas populares</p>
        <div className='flex items-center gap-2 scroll-x-hidden'>
          {popularMovies.map((movie) => {
            return (
              <div key={movie.id} className='shrink-0 w-[108px] bg-red-500'>
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
    </main>
  );
};

export default MainContainer;
