import React, { useEffect, useState } from 'react'
import img from "../assets/162075206_225810312609696_4032364403423168364_n.jpg"
import img1 from "../assets/330183963_1602226880199258_487374466580715323_n.jpg"
import img2 from "../assets/342706107_253924597055948_7023570955713130742_n.jpg"
import img3 from "../assets/438574768_1082088382958941_4573858763030395615_n.jpg"
import img4 from "../assets/442686521_1643307949538996_4443887638661666874_n.jpg"
import img5 from "../assets/443839647_1487966375411053_2477903605427763825_n.jfif"
import img6 from "../assets/448467576_839087378108154_1980959117668863794_n.jpg"
import img7 from "../assets/449604953_345240498620766_6900252061090346698_n.jfif"
import img8 from "../assets/453818680_18454295443058217_2593797101975546678_n.jpg"
import img9 from "../assets/454385761_1181806163146272_602170987721164707_n.jpg"
import like from "../assets/like.png"
import comment from "../assets/chat.png"
import share from "../assets/send.png"
import axios from 'axios'
 
function Post() {
    const images = [
        img,
        img1, 
        img2 ,
        img3, 
        img4, 
        img5, 
        img6, 
        img7, 
        img8, 
        img9, 
        img7, 
      ]

const [posts, setposts] = useState([]);
useEffect(() => {
    const getPosts = async () => {
        try {
            const res = await axios.get("http://127.0.0.1:8000/api/posts")
            setposts((res.data.data))
        } catch (error) {
            console.log(error)
        }
    }
    
    getPosts()
}, []);
  return (

     
        <div>
 {
            posts.map(i => (

                <div  style={{ width:"50%"  }} class=" bg-white p-3 mt-4 mb-4 rounded-lg">
                <div className='usre flex items-center '>
                    <img width={40} height={40} className=' rounded-full' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiqKqjT_UA5oz0kIKqLUaXv_fbUDoov_9NhQ&s' />
                    <div className=' ms-2'>
                        <h3>Abdelkader</h3>
                        <p className=' font-bold'>@kader</p>
                    </div>
                </div>

                <h3 className=' pt-2 pb-2'> {i.content} </h3>


                <ul class="mt-3 flex ">

                <li class="mr-2">
                    <a href="#" class="flex text-gray-400 hover:text-gray-600">
                        <img width={20} height={10} src={like} />
                        24
                    </a>
                    </li>
                    <li class="mr-2">
                    <a href="#" class="flex text-gray-400 hover:text-gray-600">
                        <img width={20} height={10} src={comment} />

                        3
                    </a>
                    </li>
                    <li>
                    <a href="#" class="flex text-gray-400 hover:text-gray-600">
                        <img  width={20} height={6} src={share} />

                        3
                    </a>
                    </li>
                     



                </ul>
        </div>
            ))
        }
        </div>
       

             
   
  )
}

export default Post