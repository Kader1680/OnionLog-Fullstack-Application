import { InputHTMLAttributes, useId } from "react";
import { FaCaretDown } from "react-icons/fa6";

type SelectProps = InputHTMLAttributes<HTMLSelectElement> & InputHTMLAttributes<HTMLSelectElement> & {
  options?: (string | number)[];
  
}
const Select = (
  { options, ...props }: SelectProps
) => {
  const id = useId();

  return (
    <div className='w-full relative '>
      <select
        {...props}
        id={id}
        className='w-full border border-gray-400 outline-none flex-1 py-1.5 rounded-lg hover:bg-slate-50 duration-300 appearance-none  px-8 font-normal text-gray-800 text-[0.9rem]'
       
      >
        {options?.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div className='bg-slate-200 w-5 h-full border border-gray-400 outline-none   absolute top-0 right-0  flex justify-center items-center rounded-r-lg'>
        <FaCaretDown className='text-sm text-gray-800  ' />
      </div>
    </div>
  );
};

export default Select;
