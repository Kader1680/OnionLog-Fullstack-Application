import { Link } from 'react-router-dom'
import notFound from '../image/404-computer.svg'

const NotFound = () => {
  return (
    <div className='w-full h-screen bg-slate-200 grid place-items-center '>
            <div className='text-center'>
                <img src={notFound} alt="404 Not Found"  />
                <div className='mt-6 mb-4'>
                    <h2 className='text-[#2563EB] text-[1.5rem] font-semibold leading-[2]'>404 Not Found</h2>
                    <p className='text-[2.25rem] text-neutral-900 font-bold leading-[2.3] dark:text-gray-700'>Whoops! That page doesn’t exist.</p>
                </div>
                <button className='bg-[#2563EB] px-8 py-2.5 text-white rounded border-none outline-none'> <Link to='/'>Back to home page</Link></button>
            </div>
    </div>
  )
}

export default NotFound