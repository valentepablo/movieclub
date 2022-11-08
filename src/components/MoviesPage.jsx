import Main from './Main';
import PopularMovies from './fetchComponents/movies/PopularMovies';
import TrendingMovies from './fetchComponents/movies/TrendingMovies';
import NowPlayingMovies from './fetchComponents/movies/NowPlayingMovies';
import TopRatedMovies from './fetchComponents/movies/TopRatedMovies';

const MoviesPage = () => {
  return (
    <Main>
      <div className='space-y-6'>
        <PopularMovies />
        <TrendingMovies />
        <NowPlayingMovies />
        <TopRatedMovies />
      </div>
    </Main>
  );
};

export default MoviesPage;
