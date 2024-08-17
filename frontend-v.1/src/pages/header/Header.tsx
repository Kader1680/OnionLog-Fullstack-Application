import { NavLink } from "react-router-dom";
import logo from "../../image/logo.png";
import { link1 } from "../../data/data";
import { FaSearch, FaFacebookMessenger } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useState } from "react";
const Header = () => {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);
  const [changeSearch, setChangeSearch] = useState<boolean>(true);
  const [message, setMessage] = useState<number>(1);
  const [notifiction, setNotifiction] = useState<number>(0);

  return (
    <header className='w-full fixed top-0 z-[9999] shadow '>
      <div className='w-full h-16 flex items-center  gap-9 bg-[#fff] px-2 sm:px-6'>
       
          
         
         { changeSearch ? (
        <div className='flex items-center  w-[23.75rem] h-full'>
            <NavLink to='/'>
            <img src={logo} alt='logo' className='w-[8rem] h-[8rem] object-contain ' />
          </NavLink>
            <button className="w-12 h-12 bg-[#f2f4f7] hover:bg-gray-200 duration-300 rounded-full flex justify-center items-center" onClick={()=>setChangeSearch(!changeSearch)}>
              <FaSearch className='text-lg text-gray-800' />
              </button>
        </div>
      ):( 
      <div className="flex items-center gap-4  w-[23.75rem] h-full">
            <button className="w-12 h-12 hover:bg-[#f2f4f7]  duration-300 rounded-full flex items-center justify-center" onClick={()=>setChangeSearch(!changeSearch)}>
              <FaArrowLeftLong />
            </button>
             <div className=" relative flex items-center ">
                <input
                  type='text'
                  className=' py-2 rounded-full px-10 placeholder:text-sm  placeholder:text-neutral-800  focus:placeholder:text-gray-400 w-full  outline-none border border-gray-400'
                  placeholder='Search OnionLog ...'
                />
                <FaSearch className=' absolute left-3 text-sm text-gray-800' />
             </div>
            </div>
          )} 
           
         
       
        <nav className='h-full hidden sm:flex '>
          <ul className='flex items-center justify-evenly gap-4 h-full'>
            {link1.map((link) => (
              <li
                key={link.name}
                className=' h-full flex justify-center items-center  relative'
              >
                <NavLink
                  to={link.hash}
                  className={({ isActive }) => ` ${
                    isActive
                      ? "border-b-[2.5px] border-[#2563EB] text-[#2563EB] h-full "
                      : " hover:rounded-md hover:bg-[#f2f4f7] hover:text-[#2563EB]"
                  } duration-200 w-[8rem]
                     py-2.5 flex items-center justify-center  `}
                  onMouseEnter={() => setHoveredButton(link.name)}
                  onMouseLeave={() => setHoveredButton(null)}
                >
                  <link.icon className='text-[1.8rem] ' />
                </NavLink>
                <div
                  className={`z-50 absolute mb-2 -bottom-[2.36rem] left-1/2 transform -translate-x-1/2 text-sm bg-neutral-800 text-white px-3 py-1 rounded ${
                    hoveredButton === link.name ? "block" : "hidden"
                  } duration-300`}
                >
                  {link.name}
                </div>
              </li>
            ))}
          </ul>
        </nav>
        <div className='flex-shrink-0 flex items-center justify-end gap-4 pr-2 flex-1'>
          <button
            className='w-12 h-12 bg-[#f2f4f7] hover:bg-gray-200 duration-300 rounded-full flex justify-center items-center relative'
            onMouseEnter={() => setHoveredButton("Messenger")}
            onMouseLeave={() => setHoveredButton(null)}
          >
            <FaFacebookMessenger className='text-[1.3rem] text-sky-500' />

            {message !== 0 && (
              <span className='bg-[#FF3131] text-white text-[0.6rem] w-4 h-4 rounded-full flex justify-center items-center absolute top-0 right-0'>
                {message}{" "}
              </span>
            )}

            <div
              className={`z-50 absolute mb-2 -bottom-11 left-1/2 transform -translate-x-1/2 text-sm bg-neutral-800 text-white px-1.5 py-1 rounded ${
                hoveredButton === "Messenger" ? "block" : "hidden"
              } duration-300`}
            >
              Messenger
            </div>
          </button>
          <button
            className='w-12 h-12 bg-[#f2f4f7] hover:bg-gray-200 duration-300 rounded-full flex justify-center items-center relative'
            onMouseEnter={() => setHoveredButton("Notifications")}
            onMouseLeave={() => setHoveredButton(null)}
          >
            <IoNotifications className='text-[1.3rem] text-yellow-400' />
            {notifiction !== 0 && (
              <span className='bg-[#FF3131] text-white text-[0.6rem] w-4 h-4 rounded-full flex justify-center items-center absolute top-0 right-0'>
                {notifiction}{" "}
              </span>
            )}
            <div
              className={`z-50 absolute mb-2 -bottom-11 left-1/2 transform -translate-x-1/2 text-sm bg-neutral-800 text-white px-1.5 py-1 rounded ${
                hoveredButton === "Notifications" ? "block" : "hidden"
              } duration-300`}
            >
              Notifications
            </div>
          </button>
          <div className='relative'>
            <img
              src='https://upload.wikimedia.org/wikipedia/commons/4/48/Outdoors-man-portrait_%28cropped%29.jpg'
              alt='profile'
              className='w-12 h-12 rounded-full'
              loading='lazy'
              onMouseEnter={() => setHoveredButton("Account")}
              onMouseLeave={() => setHoveredButton(null)}
            />
            <div
              className={`z-50 absolute mb-2 -bottom-11 left-1/2 transform -translate-x-1/2 text-sm bg-neutral-800 text-white px-1.5 py-1 rounded ${
                hoveredButton === "Account" ? "block" : "hidden"
              } duration-300`}
            >
              Account
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
