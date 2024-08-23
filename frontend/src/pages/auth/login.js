
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { FaEye, FaEyeSlash } from "react-icons/fa";

import logoGoogle from "../../assets/google-icon-logo-svgrepo-com.svg";
import logo from "../../assets/logo.png";

const LogIn = () => {
    const url = process.env.REACT_APP_LOGIN;
    // const navigate = useNavigate();
    const [form, setForm] = useState({
      email: "",
      password: "",
      isAccept: true,
    });
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({ email: "", password: "" });
    const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  
    const handleChangeForm = (event) => {
      event.preventDefault();
      const { name, value, type, checked } = event.target;
      setForm((prevForm) => ({
        ...prevForm,
        [name]: type === "checkbox" ? checked : value,
      }));
    };
  
    const handleVisiblePassword = () => {
      setIsVisiblePassword((prev) => !prev);
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      console.log(form)
      
      // try {
      //   const requset = await axios.post(url, form);
      //   if (!requset.data) {
      //     throw new Error("Error fetching data");
      //   }
      //   if (requset.data.message === "authentication sucsseful") {
      //     navigate("/home");
      //   }
      // } catch (error) {
      //     console.error('imposiable login : ')
      // }
    };
  return (
    <section className='w-full min-h-screen bg-color-spaces grid place-items-center'>
    <div className='bg-white w-[460px] flex flex-col gap-6 p-8 rounded-md shadow-md'>
      <div className='flex flex-col items-center justify-center'>
        <img src={logo} alt='Onionlog' className='w-64' />
        <h2 className='text-[1.7rem] font-medium py-1'>Welcome back</h2>
        <div className='text-center text-sm font-light text-gray-600 leading-tight'>
          <p>
            Glad to see you again{" "}
            <span className='text-[1rem]'>&#128075;</span>
          </p>
          <p>Login to your account below</p>
        </div>
      </div>
      <form className='w-full flex flex-col gap-6' onSubmit={handleSubmit}>
        <div className='relative group'>
          <label
            className={`absolute  left-3 -translate-y-1/2 px-1 text-sm font-medium transform ease-in-out duration-150 ${
              form.email !== ""
                ? "top-0 bg-white"
                : "top-1/2 group-hover:top-0 group-hover:bg-white"
            } z-[999]`}
          >
            Email
          </label>
          <input
            type='text'
            name='email'
            className={`w-full outline-none border "border-gray-400 shadow-gray-400  rounded-md py-2 px-4 transform ease-in-out duration-150 placeholder:invisible group-hover:placeholder:visible `}
            placeholder='user@mail.com'
            onChange={handleChangeForm}
            value={form.email}
          />
        </div>

        <div className='relative group'>
          <label
            className={`absolute  left-3 -translate-y-1/2 px-1 text-sm font-medium transform ease-in-out duration-300 ${
              form.password !== ""
                ? "top-0 bg-white"
                : "top-1/2 group-hover:-top-0 group-hover:bg-white"
            } z-[999]`}
          >
            Password
          </label>
          <input
            type={isVisiblePassword ? "text" : "password"}
            name='password'
            className={`w-full outline-none border "border-gray-400 shadow-gray-400  rounded-md py-2 px-4 transform ease-in-out duration-300 placeholder:invisible group-hover:placeholder:visible `}
            placeholder='**********'
            onChange={handleChangeForm}
            value={form.password}
          />
          {form.password !== "" && (
            <div className='absolute top-1/2 right-2 -translate-y-1/2 transform ease-in-out duration-150 text-gray-400 cursor-pointer'>
              {isVisiblePassword ? (
                <FaEye onClick={handleVisiblePassword} />
              ) : (
                <FaEyeSlash onClick={handleVisiblePassword} />
              )}
            </div>
          )}
        </div>

        <div className='flex items-center justify-between text-sm'>
          <div className='flex items-center gap-2 '>
            <input
              type='checkbox'
              name='isAccept'
              id='accept'
              defaultChecked={form.isAccept}
              onChange={handleChangeForm}
              className=' cursor-pointer'
            />
            <label htmlFor='accept' className=' cursor-pointer'>
              Remember me
            </label>
          </div>
          <NavLink to='/forgot-password' className='text-blue-500 underline'>
            Forgot password?
          </NavLink>
        </div>
        <button className='w-full text-[1.1rem] outline-none border-none bg-sky-400 rounded-md py-1.5 text-white hover:bg-sky-600 transform ease-in-out duration-150'>
          Login
        </button>
      </form>
      <div className='text-center text-sm'>
        <span>
          Don’t have an account?{" "}
          <NavLink
            to='/sign-up'
            className='text-blue-500 font-medium hover:underline'
          >
            Sign up for Free
          </NavLink>
        </span>
      </div>
      <div className='border-b border-gray-300 text-sm relative'>
        <span className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-white px-2 z-[999]'>
          OR
        </span>
      </div>
      <button className='w-full p-2 flex items-center justify-center gap-2 outline-none border border-gray-400 rounded-md shadow-gray-600 hover:bg-color-spaces duration-200 transform  ease-in-out'>
        <img src={logoGoogle} alt='Google logo' className='w-3' />
        <span className='text-sm font-normal'>Continue with Google</span>
      </button>
    </div>
  </section>
  )
}

export default LogIn



