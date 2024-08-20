import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

function SignIn() {

const navigate = useNavigate()

 const [firstname, setfirstname] = useState();
 const [lastname, setlastname] = useState();
 const [gender, setgender] = useState();
 const [email, setemail] = useState();
 const [username, setusername] = useState();
 const [password, setpassword] = useState();
 
 const handelForm = async (e) => {
    e.preventDefault();
    try {
        const req = await axios.post("http://127.0.0.1:8000/api/signin", {firstname, lastname, email, username, password})
        if (req.data.message === 'User Added Succesfully') {
            navigate("/post")
        }else{
            navigate("/signin")

        }
    } catch (error) {
        console.log(error)
    }
 }
  return (
    <div class="bg-white h-fit p-8 rounded shadow-md max-w-md w-full mx-auto">
    <h2 class="text-2xl font-bold mb-4 text-center">Welcome To OnionLog</h2>

    <form onSubmit={handelForm} method="POST">
        <div class="grid grid-cols-2 gap-4">
            <div>
                <label for="firstName" class="block text-sm font-medium text-gray-700">First Name</label>
                <input onChange={(e)=>{setfirstname(e.target.value)}} type="text" id="firstName" name="firstname" class="mt-1 p-2 w-full border rounded-md outline-none"  />
            </div>
            <div>
                <label for="lastName" class="block text-sm font-medium text-gray-700">Last Name</label>
                <input onChange={(e)=>{setlastname(e.target.value)}} type="text" id="lastName" name="lastname" class="mt-1 p-2 w-full border rounded-md outline-none "  />
            </div>
        </div>

        <div class="mt-4">
            <label for="email" class="block text-sm font-medium text-gray-700">Adresse email</label>
            <input onChange={(e)=>{setemail(e.target.value)}}   type="email" id="email" name="email" class="mt-1 p-2 w-full border rounded-md outline-none"  />
        </div>


        <div class="mt-4">
            <label for="email" class="block text-sm font-medium text-gray-700">Username</label>
            <input onChange={(e)=>{setusername(e.target.value)}}  type="text" id="username" name="username" class="mt-1 p-2 w-full border rounded-md outline-none"  />
        </div>

        <div class="mt-4">
            <label for="password" class="block text-sm font-medium text-gray-700">Mot de passe</label>
            <input autoComplete='new-password'  onChange={(e)=>{setpassword(e.target.value)}} type="password" id="password" name="password" class="mt-1 p-2 w-full border rounded-md outline-none" />
        </div>

        <div class="mt-6">
            <button style={{ backgroundColor:"#004BBB" }} type="submit" class="w-full p-3   text-white rounded-md">Sign In</button>
        </div>

        <div class="mt-6">
            <Link to="/signin">
               <button style={{ color:"#004BBB", border:"2px solid #004BBB" }}   class="w-full p-3 bg-white rounded-md  ">I have Account</button>
            </Link>
        </div>
    </form>
</div>
  )
}

export default SignIn