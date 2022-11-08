import Main from './Main';
import PopularSeries from './fetchComponents/series/PopularSeries';
import TopRatedSeries from './fetchComponents/series/TopRatedSeries';
import TrendingSeries from './fetchComponents/series/TrendingSeries';

const SeriesPage = () => {
  return (
    <Main>
      <div className='space-y-6'>
        <PopularSeries />
        <TrendingSeries />
        <TopRatedSeries />
      </div>
    </Main>
  );
};

export default SeriesPage;
