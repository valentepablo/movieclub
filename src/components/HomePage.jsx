import Main from './Main';
import PopularMovies from './fetchComponents/movies/PopularMovies';
import TrendingMovies from './fetchComponents/movies/TrendingMovies';
import PopularSeries from './fetchComponents/series/PopularSeries';
import TrendingSeries from './fetchComponents/series/TrendingSeries';

const HomePage = () => {
  return (
    <Main>
      <div className='space-y-6'>
        <PopularMovies />
        <TrendingMovies />
        <PopularSeries />
        <TrendingSeries />
      </div>
    </Main>
  );
};

export default HomePage;
