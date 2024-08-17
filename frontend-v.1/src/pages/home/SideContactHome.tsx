import React, { useState } from "react";
import StatusUser from "../../components/StatusUser";
import { messages } from "../../data/data";
import { FaSearch } from "react-icons/fa";
const SideContactHome = () => {
  const [active, setActive] = useState<boolean>(false);
  const handleMouseEnter = () => {
    setActive(true);
    console.log('enter mouse')
  };

  const handleMouseLeave = () => {
    setActive(false);
    console.log('leave mouse')
  };
  return (
    < >
      <div className='flex justify-between mb-2 '>
        <h5 className='font-semibold text-gray-500 text-[1.2rem] dark:text-gray-50'>Contacts</h5>
        <button className='w-9 h-9 bg-[#f2f4f7] hover:bg-gray-200  duration-300 rounded-full flex justify-center items-center'>
          <FaSearch className=' text-gray-800 ' />
        </button>
      </div>
      <hr />
      <div className={`flex flex-col gap-2 h-[88%] pb-6 cursor-pointer p-2 ${active?' overflow-y-auto':''}`} onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        {messages.map((message, index) => (
          <StatusUser key={index} {...message} />
        ))}
      </div>
    </>
  );
};

export default SideContactHome;
