import { InputHTMLAttributes, useId } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  type?: string;
  className?: string;
  label?: string;
};

const Input = ({ type = "text", className, label, ...props }: InputProps) => {
  const id = useId();

  return (
    <>
      {label && (
    //     <div className="border border-gray-400 outline-none  py-2.5 px-2 rounded-lg flex items-center justify-between flex-1 " >
    //       <label htmlFor={id} className="ms-2 text-sm font-medium text-gray-400 dark:text-gray-500">{label} </label>
    //     <input id={id} type={type} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600 " {...props}/>
        
    // </div>
        <label
          htmlFor={id}
          className={`border border-gray-400 outline-none  py-2.5 px-2 rounded-lg flex items-center justify-between flex-1  has-[:checked]:bg-indigo-50 has-[:checked]:text-indigo-900 has-[:checked]:ring-indigo-200 ${className}`}
        >
          {label}
          <input type={type} id={id} {...props}  />
        </label>
      )}
      {!label && (
        <input
          type={type}
          className={`border border-gray-400 outline-none  py-2.5 px-4 rounded-lg ${className}`}
          {...props}
        />
      )}
    </>
  );
};

export default Input;
