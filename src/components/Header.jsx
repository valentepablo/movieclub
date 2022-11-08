import { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

const Header = () => {
  const searchInput = useRef();
  const searchForm = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  const handleOpenInput = (e) => {
    console.log(e.currentTarget);
    console.log(searchForm.current);
    if (e.currentTarget === searchForm.current) {
      searchInput.current.classList.add('scale-x-100', 'opacity-100');
    } else {
      searchInput.current.classList.remove('scale-x-100', 'opacity-100');
    }
  };

  return (
    <header className='fixed bg-black shadow-md top-0 inset-x-0'>
      <div
        className='md:flex md:items-center md:justify-between md:px-8 md:mx-auto'
        onClick={handleOpenInput}>
        <ul className='flex items-center justify-center gap-8 text-sm py-5 md:text-base'>
          <li>
            <NavLink to='/' className={({ isActive }) => (isActive ? 'text-zinc-50' : '')}>
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to='/series' className={({ isActive }) => (isActive ? 'text-zinc-50' : '')}>
              Series
            </NavLink>
          </li>
          <li>
            <NavLink to='/peliculas' className={({ isActive }) => (isActive ? 'text-zinc-50' : '')}>
              Peliculas
            </NavLink>
          </li>
        </ul>
        <form ref={searchForm} className='hidden md:block relative' onSubmit={handleSubmit}>
          <button className='absolute z-10 right-2 inset-y-0 peer'>
            <MagnifyingGlassIcon className='text-white w-5 h-5' />
          </button>
          <input
            ref={searchInput}
            type='text'
            placeholder='Peliculas, series...'
            className='bg-transparent border py-1 pl-2 pr-9 scale-x-0 transition origin-right opacity-0'
          />
        </form>
      </div>
    </header>
  );
};

export default Header;
