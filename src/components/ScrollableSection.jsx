import { IMG_BASE_URL } from '../services/api';

const ScrollableSection = ({ list, title }) => {
  return (
    <div>
      <p className='mb-1 font-semibold text-sm'>{title}</p>
      <div className='flex items-center gap-2 scroll-x-hidden'>
        {list.map((element) => {
          return (
            <div key={element.id} className='shrink-0 w-[108px]'>
              <img
                src={`${IMG_BASE_URL}${element.poster_path}`}
                alt={element.original_title}
                className='max-w-full'
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ScrollableSection;
