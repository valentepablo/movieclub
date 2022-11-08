import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import HomePage from './components/HomePage';
import SeriesPage from './components/SeriesPage';
import MoviesPage from './components/MoviesPage';

function App() {
  return (
    <Router>
      <div className='text-zinc-400'>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='series' element={<SeriesPage />} />
          <Route path='peliculas' element={<MoviesPage />} />
        </Routes>
        <BottomNav />
      </div>
    </Router>
  );
}

export default App;
