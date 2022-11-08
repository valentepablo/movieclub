import { useState, useEffect } from 'react';
import { API_BASE_URL, API_KEY } from '../../../services/api';
import ScrollableSection from '../../ScrollableSection';

const TrendingSeries = () => {
  const [trendingSeries, setTrendingSeries] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/trending/tv/week?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        const { results } = data;
        const series = results.map((element) => element);
        setTrendingSeries(series);
      });
  }, []);

  return <ScrollableSection list={trendingSeries} title='Series en tendencia' />;
};

export default TrendingSeries;
