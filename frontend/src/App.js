import{ React, useEffect, useState} from "react"
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

function App() {
  
  const [datas, setdata] = useState([]);

  // const getData = async () => {
  //   await axios.get("http://127.0.0.1:8000/api/data")
  //   .then(response => {setdata(response.data)})
  //   .then(error => console.log(error))
  // }
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
    <div className="box">
       
      {datas.map(e => {

        return (
          <div> {e.name} </div>
        )
      })}
    </div>
  );
}

export default App;
