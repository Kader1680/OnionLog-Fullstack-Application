import SideHeaderHome from "./SideHeaderHome";
import SideContactHome from "./SideContactHome";
import MainHome from "./MainHome";
const Home = () => {

  return (
    <section className='mt-16 bg-[#f2f4f7] w-full  h-screen  flex gap-1 '>
      <aside className='  bg-white w-[380px] h-full  dark:bg-black dark:text-gray-50'>
        <SideHeaderHome />
      </aside>
      <div className='w-full grid grid-cols-9 '>
        <div className='w-full h-full col-span-7 '>
          <MainHome/>
        </div>
        <aside className='  bg-white w-[300px] col-span-2 fixed right-0 h-full py-4 px-2 dark:bg-black dark:text-gray-50 dark:hover:text-neutral-800 duration-200'>
        <SideContactHome />
        </aside>
      </div>
    </section>
  );
};

export default Home;
