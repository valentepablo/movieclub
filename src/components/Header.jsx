import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className='fixed bg-darker shadow-md top-0 inset-x-0'>
      <ul className='flex items-center justify-center gap-12 text-sm py-5'>
        <li>
          <NavLink
            to='/'
            className={({ isActive }) =>
              isActive ? 'text-slate-200 font-semibold' : 'font-semibold'
            }>
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/series'
            className={({ isActive }) =>
              isActive ? 'text-slate-200 font-semibold' : 'font-semibold'
            }>
            Series
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/peliculas'
            className={({ isActive }) =>
              isActive ? 'text-slate-200 font-semibold' : 'font-semibold'
            }>
            Peliculas
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
