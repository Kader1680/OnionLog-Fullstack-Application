import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

function Login() {

 const navigate = useNavigate()
 const [email, setemail] = useState();
 const [password, setpassword] = useState();
 const handelForm = async (e) => {
    e.preventDefault();
    try {
        const req = await axios.post("http://127.0.0.1:8000/api/login", {email, password})
        if (req.data.message === 'authentication sucsseful') {
            navigate("/post")
        }else{
            navigate("/login")

        }
    } catch (error) {
        console.log(error)
    }
 }

  return (
 
<div class="bg-white h-fit p-8 rounded shadow-md max-w-md w-full mx-auto">
    <h2 class="text-2xl font-bold mb-4 text-center">Welcome To OnionLog</h2>

    <form onSubmit={handelForm}  method="POST">
         

        <div class="mt-4">
            <label for="email" class="block text-sm font-medium text-gray-700">Adresse email</label>
            <input onChange={(e)=>{setemail(e.target.value)}}  id="email" name="email"   class="mt-1 p-2 w-full border rounded-md outline-none"  />
        </div>
        <div class="mt-4">
            <label for="password" class="block text-sm font-medium text-gray-700">Mot de passe</label>
            <input  onChange={(e)=>{setpassword(e.target.value)}} type="password" id="password" name="password" class="mt-1 p-2 w-full border rounded-md outline-none" />
        </div>

        <div class="mt-6">
        
            <button style={{ backgroundColor:"#004BBB" }} type="submit" class="w-full p-3   text-white rounded-md">Login</button>
        </div>

        <div class="mt-6">
            <Link to="/signin">
            <button style={{ color:"#004BBB", border:"2px solid #004BBB" }}   class="w-full p-3 bg-white rounded-md  ">Sign In</button>
            </Link>
           
        </div>
    </form>
</div>

  )
}

export default Login