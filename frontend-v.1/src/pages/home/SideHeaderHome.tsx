import React, { useEffect, useState } from "react";
import { allLinks } from "../../data/data";
import { NavLink, useNavigate } from "react-router-dom";
import { IoLogOutOutline, IoSunny } from "react-icons/io5";

import { FaMoon } from "react-icons/fa";
import App from "../../App";
type Theme = "dark" | "light";

const SideHeaderHome = () => {
  const [theme, setTheme] = useState<Theme>("light");
  const navigate = useNavigate()
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    window.localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };
  
  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") as Theme | null;
    if (localTheme) {
      setTheme(localTheme);
      document.documentElement.classList.toggle("dark", localTheme === "dark");
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);
 
  return (
    <div className=' fixed top-16 py-6 px-4 w-[300px]'>
      <div className='  w-full h-full'>
        <div className='flex  items-center gap-4 mb-6'>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/4/48/Outdoors-man-portrait_%28cropped%29.jpg'
            alt='profil'
            className='w-[36px] h-[36px] rounded-full '
          />
          <span className='text-[1.1rem] font-medium'>Ayyoub Benslimane</span>
        </div>
        <ul className='flex flex-col gap-3 w-full '>
          {allLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.hash}
              className='w-full flex gap-4 items-center hover:bg-[#f2f3f4] py-2 px-2 rounded duration-200 hover:text-blue-600'
            >
              <link.icon className=' text-[30px]' />
              <span className='text-[1.1rem] font-medium'>{link.name} </span>
            </NavLink>
          ))}
        </ul>

        <ul className='flex flex-col  w-full mt-2'>
          <li
            className='w-full flex gap-4 items-center hover:bg-[#f2f3f4] py-2 px-2 rounded duration-200 hover:text-blue-600'
            onClick={toggleTheme}
          >
            {theme === "light" ? (
              <IoSunny className=' text-[30px]' />
            ) : (
              <FaMoon className=' text-[26px]' />
            )}
            <span className='text-[1.1rem] font-medium'>
              {theme === "light" ? "Light" : "Dark"} Mode
            </span>
          </li>
          <li className='w-full flex gap-4 items-center hover:bg-[#f2f3f4] py-2 px-2 rounded duration-200 hover:text-blue-600' >
            <IoLogOutOutline className=' text-[30px]' />
            <span className='text-[1.1rem] font-medium' >Log Out </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideHeaderHome;
