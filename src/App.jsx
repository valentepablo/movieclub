import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import HomePage from './components/HomePage';
import SeriesPage from './components/SeriesPage';

function App() {
  return (
    <Router>
      <div className='text-slate-400'>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='series' element={<SeriesPage />} />
        </Routes>
        <BottomNav />
      </div>
    </Router>
  );
}

export default App;
