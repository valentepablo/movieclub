import { useState, useEffect } from 'react';
import { API_BASE_URL, API_KEY } from '../../../services/api';
import ScrollableSection from '../../ScrollableSection';

const PopularSeries = () => {
  const [popularSeries, setPopularSeries] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/tv/popular?api_key=${API_KEY}&language=es-AR&page=1`)
      .then((res) => res.json())
      .then((data) => {
        const { results } = data;
        const series = results.map((element) => element);
        setPopularSeries(series);
      });
  }, []);

  return <ScrollableSection list={popularSeries} title='Series populares' />;
};

export default PopularSeries;
