import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='fixed bg-dark-blue shadow-md top-0 inset-x-0'>
      <ul className='flex items-center justify-center gap-12 text-sm py-5'>
        <li className='text-slate-200'>
          <Link to='/'>Inicio</Link>
        </li>
        <li>
          <Link to='/series'>Series</Link>
        </li>
        <li>
          <Link to='/peliculas'>Peliculas</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
