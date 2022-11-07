import Main from './Main';
import PopularMovies from './fetchComponents/PopularMovies';
import TrendingMovies from './fetchComponents/TrendingMovies';
import NowPlayingMovies from './fetchComponents/NowPlayingMovies';
import TopRatedMovies from './fetchComponents/TopRatedMovies';

const HomePage = () => {
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

export default HomePage;
