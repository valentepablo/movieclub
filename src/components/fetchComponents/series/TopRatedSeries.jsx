import { useState, useEffect } from 'react';
import { API_BASE_URL, API_KEY } from '../../../services/api';
import ScrollableSection from '../../ScrollableSection';

const TopRatedSeries = () => {
  const [topRatedSeries, setTopRatedSeries] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/tv/top_rated?&api_key=${API_KEY}&language=es-AR&page=1`)
      .then((res) => res.json())
      .then((data) => {
        const { results } = data;
        const series = results.filter((element) => element.original_language === 'en');
        setTopRatedSeries(series);
      });
  }, []);
  return <ScrollableSection list={topRatedSeries} title='Series mas votadas' />;
};

export default TopRatedSeries;
