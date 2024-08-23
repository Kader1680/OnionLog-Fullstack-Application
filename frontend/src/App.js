import{ React, useEffect, useState, useRef} from "react"

import './App.css';
import axios from 'axios'
import Navbar from "./components/navbar";
import Post from "./components/post";

import { BrowserRouter, Routes, Route, Router} from 'react-router-dom';



import VideoPlayer from "./components/vedioPlayer";
import Home from "./pages/home";
import CreateFile from "./pages/createFile";


import SingIn from "./pages/auth/SingIn";
import LogIn from "./pages/auth/LogIn";
function App() {
  
  const [datas, setdata] = useState([]);

   
  useEffect(() => {
    
    
    const fetchData = async () => {
      try {
          const res = await axios.get("http://127.0.0.1:8000/api/all");
           setdata(res.data.data)
      } catch (error) {
          console.error("Error fetching data:", error);
      }
      }

  // Call the function
  fetchData();

    
  }, []);

  const getVideoUrl = (path) => {
    return `http://127.0.0.1:8000/upload/${path}`;
    };




 



  return (


    <BrowserRouter>
    <div class="app md:flex   ">
       
        <Navbar />
         
        <Routes>
        
                <Route path="/" element={<Home />} />
                <Route path="/post" element={<Post  />} />
                <Route path="/vedios" element={<VideoPlayer  />} />
                <Route path="/upload" element={<CreateFile  />} />
                <Route path="/login" element={<LogIn/>} />
                <Route path="/signin" element={<SingIn  />} />
          
              
            
        </Routes>
    </div>


    












</BrowserRouter>
   
    
  );
}

export default App;
