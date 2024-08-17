import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Login from '../components/Login'
import ForgotPassword from '../components/ForgotPassword'
import ChangePassword from '../components/ChangePassword'
import Register from '../components/Register'
import NotFound from '../components/NotFound'

const InscriptionApp = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/forgot-password' element={<ForgotPassword/>} />
        <Route path="/change-password"  element={<ChangePassword/>} />
        <Route path='/sing-up' element={<Register />} />
       <Route  path='*' element={<NotFound/>}/>
    
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default InscriptionApp