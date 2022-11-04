import { HomeIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const BottomNav = () => {
  return (
    <nav className='fixed bg-dark py-2 bottom-0 inset-x-0'>
      <ul className='flex items-center justify-center gap-16 text-xs px-4'>
        <li className='flex flex-col justify-center items-center'>
          <HomeIcon className='w-6 h-6' />
          Inicio
        </li>

        <li className='flex flex-col justify-center items-center'>
          <MagnifyingGlassIcon className='w-6 h-6' />
          Buscar
        </li>
      </ul>
    </nav>
  );
};

export default BottomNav;
