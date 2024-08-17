import { useState , useDeferredValue} from 'react'
import logo from '../image/logo.png'

import Input from './Input'
import { Link ,useNavigate } from 'react-router-dom'
interface UserProps{
  email:string; 
  password:string; 
}
const ForgotPassword = () => {
  const navigate =useNavigate() ; 
  const [email,setEmail]=useState<string>('')
  const [error,setError]=useState<boolean>(false)
  const deferredEmail = useDeferredValue(email) ; 
  const [user,setUser]=useState<UserProps>({email:'',password:''})

  const handleChangeLogin= (event:React.ChangeEvent<HTMLInputElement>)=>{
    event.preventDefault() ; 
    setUser({...user,[event.target.name]:event.target.value})

    
  }
  const handleChangeSearch = (event:React.ChangeEvent<HTMLInputElement>)=>{
    event.preventDefault() ; 
    setEmail(event.target.value)
    setError(false)
  }
  const handleSubmitSearch = ()=> {
    if ('ayyoub@gmail.com' === deferredEmail){
      console.log(deferredEmail)
      navigate('/change-password',{state:{key : deferredEmail}})
     
    }else{
      setError(true) ; 
    }
  }
  return (
    <main className='w-full h-screen relative overflow-hidden'>
       <header className='w-full flex justify-between items-center py-2 bg-white absolute top-0 ' >
     <div className=" flex-shrink-0 flex items-start justify-start"> <img src={logo} alt='logo' className='w-[12rem] object-contain' /></div>

      <div className=" flex-shrink-0  mr-4 ">
        <form className='flex items-center gap-2'>
          <Input placeholder='Email' name='email'  value={user.email} onChange={handleChangeLogin}/>
          <Input
            type='password'
            placeholder='Password'
            name='password'
            value={user.password}
            onChange={handleChangeLogin}
          />
          <button className=' bg-blue-500 text-white px-3 py-2.5 rounded-lg'>
            Log In
          </button>
        </form>
      </div>
    </header>
       <section className=' bg-slate-200 w-full h-full flex justify-center items-center'>

<div className='bg-white rounded-lg px-8 py-6 shadow'>
  <div>
    <h5 className=' font-semibold text-[1.6rem] mb-3'>Find Your Account </h5>
    <hr className='bg-gray-400 mb-4' />
   {error&& <div className='border border-red-600 rounded py-2 px-3'>
      <h6 className='text-[1.1rem] font-medium text-red-600'>No Search Results</h6>
      <p className='font-extralight'>your search did not return any results. Please try again <br/> with other information .</p>
    </div>}
  </div>
  <div className='w-full flex flex-col gap-4 mt-4'>
    <p className='text-[1.1rem] '>Please enter your email address to search for your acount </p>
   
      <Input  placeholder='Email address ... ' value={email} onChange={handleChangeSearch}  className='w-full placeholder:text-gray-800 focus:placeholder:text-gray-400 duration-300 mb-3'/>
    
    <hr />
  </div>
  <div className='flex justify-end items-center  gap-3 pt-4'>
    <button className=' bg-slate-200 px-4 py-1.5 rounded-md text-[1.1rem] font-medium hover:bg-slate-300 duration-300' onClick={()=>navigate('/')}><Link to='/'>Cancel</Link></button>
    <button className=' bg-blue-500   text-white px-4 py-1.5 rounded-md text-[1.1rem] font-medium hover:bg-blue-600 duration-300' type='submit' onClick={handleSubmitSearch}> Search</button>
  </div>
</div>
       </section>
        </main>
  )
}

export default ForgotPassword