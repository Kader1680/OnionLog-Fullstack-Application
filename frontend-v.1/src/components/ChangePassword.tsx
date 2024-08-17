
import { Link } from 'react-router-dom'
import Input from './Input'

const ChangePassword = () => {
  return (
    <div className='bg-slate-100 w-full h-screen flex justify-center items-center'>
       <div className='bg-white px-6 py-8 w-[26rem] rounded-xl shadow'>
        <div className='flex flex-col justify-center items-center mb-10'>
          <img src='https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg' alt="profil" className='w-[5rem] h-[5rem]  rounded-full mb-4' />
          <div className='py-1'>
            <h5 className=' font-medium text-[1.1rem]'>Log in as  Ayyoub Benslimane</h5>
            <p className='text-gray-500'>ayyoub@gmail.com <span>.</span> <Link to='/' className='text-blue-600 underline'>Not you?</Link></p>
          </div>
        </div>
        <form className='flex flex-col gap-6' >
          <Input type='password' placeholder='password' className=' placeholder:text-gray-800 focus:placeholder:text-gray-400 duration-300 py-3' />
          <button className='bg-blue-600 text-white py-3 text-lg rounded-lg'>Log In</button>
        </form>
        <div className='pt-8 pb-4 text-center'>
          <Link to='/forgot-password' className='text-blue-600 underline'>Forgot account? </Link>
        </div>
       </div>
      
    </div>
  )
}

export default ChangePassword