import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import MainContainer from './components/MainContainer';

function App() {
  return (
    <Router>
      <div className='text-slate-400'>
        <Header />
        <Routes>
          <Route path='/' element={<MainContainer />} />
        </Routes>
        <BottomNav />
      </div>
    </Router>
  );
}

export default App;
