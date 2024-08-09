import{ React, useEffect, useState} from "react"
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import Navbar from "./components/navbar";
import Post from "./components/post";
import Target from "./components/target";

function App() {
  
  const [datas, setdata] = useState([]);

   
  useEffect(() => {
    
    
    const fetchData = async () => {
      try {
          const res = await axios.get("http://127.0.0.1:8000/api/data");
           setdata(res.data.data)
      } catch (error) {
          console.error("Error fetching data:", error);
      }
      }

  // Call the function
  fetchData();

    
  }, []);

  
  return (

    <div>
         <div className=" grid grid-cols-5  ">
         <div className=" col-span-1">
             <Navbar />
         </div>
         <div className=" col-span-3">
             <Post />
         </div>
         <div className=" col-span-1"> 
            <Target />
         </div>
            
           
           
         </div>
          <h1 className=" mt-5 mb-5  text-red-500  text-center">DFDFDFD</h1>

          <div className="box b">
              {datas.map(e => {

                return (
                  <div> {e.name} </div>
                )
              })}
          </div>
    </div>
    
  );
}

export default App;
