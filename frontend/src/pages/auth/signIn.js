import React from 'react'

function SignIn() {

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

    <form action="#" method="POST">
        <div class="grid grid-cols-2 gap-4">
            <div>
                <label for="firstName" class="block text-sm font-medium text-gray-700">Prénom</label>
                <input type="text" id="firstName" name="firstName" class="mt-1 p-2 w-full border rounded-md outline-none"  />
            </div>
            <div>
                <label for="lastName" class="block text-sm font-medium text-gray-700">Nom</label>
                <input type="text" id="lastName" name="lastName" class="mt-1 p-2 w-full border rounded-md outline-none "  />
            </div>
        </div>

        <div class="mt-4">
            <label for="email" class="block text-sm font-medium text-gray-700">Adresse email</label>
            <input type="email" id="email" name="email" class="mt-1 p-2 w-full border rounded-md outline-none"  />
        </div>


        <div class="mt-4">
            <label for="email" class="block text-sm font-medium text-gray-700">Username</label>
            <input type="text" id="username" name="username" class="mt-1 p-2 w-full border rounded-md outline-none"  />
        </div>

        <div class="mt-4">
            <label for="password" class="block text-sm font-medium text-gray-700">Mot de passe</label>
            <input type="password" id="password" name="password" class="mt-1 p-2 w-full border rounded-md outline-none" />
        </div>

        <div class="mt-6">
            <button style={{ backgroundColor:"#004BBB" }} type="submit" class="w-full p-3   text-white rounded-md">Sign In</button>
        </div>

        <div class="mt-6">
            <button style={{ color:"#004BBB", border:"2px solid #004BBB" }} type="submit" class="w-full p-3 bg-white rounded-md  ">Login</button>
        </div>
    </form>
</div>
  )
}

export default SignIn