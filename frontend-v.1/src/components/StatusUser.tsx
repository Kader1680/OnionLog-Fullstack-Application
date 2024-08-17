
import { Message } from "../data/data";
const StatusUser = ({
  firstName,
  lastName,
  isActive,
  time,
  image,
}: Message) => {
 
  return (
    <div className='flex items-center gap-5  hover:bg-[#f2f3f4] px-2 py-1 rounded duration-300'>
      <div className=' relative w-[36px] h-[36px] '>
        <img
          src={image}
          alt={`${firstName} ${lastName}`}
          className='w-[36px] h-[36px] rounded-full  object-fill'
        />
        {isActive ? (
          <span className='w-2 h-2 rounded-full bg-green-600 absolute bottom-1 right-0'></span>
        ) : (
          <span className='bg-gray-200 rounded-xl text-[0.5rem] p-1 absolute -bottom-1 -right-4'>
            1min
          </span>
        )}
      </div>
      <strong className=' text-[1rem] font-light'>{`${firstName} ${lastName}`}</strong>
    </div>
  );
};

export default StatusUser;
