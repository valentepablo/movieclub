const Main = ({ children }) => {
  return (
    <main className='bg-black md:bg-zinc-900 md:px-8 md:py-[90px] min-h-screen py-[70px] md:pb-10 px-2'>
      {children}
    </main>
  );
};

export default Main;
