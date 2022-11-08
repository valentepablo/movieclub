import { useRef } from 'react';
import { IMG_BASE_URL } from '../services/api';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

const ScrollableSection = ({ list, title }) => {
  const scrollSection = useRef();

  let scrollAmount = 0;

  const scrollLeft = () => {
    let scrollPerClick = scrollSection.current.firstChild.clientWidth + 200;
    scrollSection.current.scrollTo({
      left: (scrollAmount -= scrollPerClick),
      behavior: 'smooth',
    });

    if (scrollAmount < 0) {
      scrollAmount = 0;
    }
  };

  const scrollRight = () => {
    let scrollPerClick = scrollSection.current.firstChild.clientWidth + 200;

    if (scrollAmount <= scrollSection.current.scrollWidth - scrollSection.current.clientWidth) {
      scrollSection.current.scrollTo({
        left: (scrollAmount += scrollPerClick),
        behavior: 'smooth',
      });
    }
  };
  return (
    <div className='md:relative'>
      <p className='mb-1 md:mb-2 font-semibold text-slate-200 md:text-2xl'>{title}</p>
      <div ref={scrollSection} className='flex items-center gap-2 scroll-x-hidden md:gap-2 md:py-2'>
        {list.map((element) => {
          return (
            <div key={element.id} className='shrink-0 w-[108px] md:w-[200px] md:shadow-md'>
              <img
                src={`${IMG_BASE_URL}${element.poster_path}`}
                alt={element.original_title}
                className='max-w-full rounded'
              />
            </div>
          );
        })}
      </div>
      <div className='hidden absolute left-0 right-0 top-1/2 md:flex justify-between text-white'>
        <button onClick={scrollLeft}>
          <ChevronLeftIcon className='w-10 h-10 hover:scale-105' />
        </button>
        <button onClick={scrollRight}>
          <ChevronRightIcon className='w-10 h-10 hover:scale-105' />
        </button>
      </div>
    </div>
  );
};

export default ScrollableSection;

{
  /* <div className='flex items-center gap-2 scroll-x-hidden md:gap-2'>
        {list.map((element) => {
          return (
            <div key={element.id} className='shrink-0 w-[108px] md:w-[200px]'>
              <img
                src={`${IMG_BASE_URL}${element.poster_path}`}
                alt={element.original_title}
                className='max-w-full rounded'
              />
            </div>
          );
        })}
      </div> */
}
