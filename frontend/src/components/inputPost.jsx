import React from 'react'
import like from "../assets/like.png"
import comment from "../assets/chat.png"
import share from "../assets/send.png"
import axios from 'axios'
function InputPost() {
  return (
    <div>
 
   
                   <div  style={{ width:"50%"  }} class=" bg-white p-3 mt-4 mb-4 rounded-lg">
                   <div className='usre flex items-center '>
                       <img width={40} height={40} className=' rounded-full' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiqKqjT_UA5oz0kIKqLUaXv_fbUDoov_9NhQ&s' />
                       <div className=' ms-2'>
                           <h3>Abdelkader</h3>
                           <p className=' font-bold'>@kader</p>
                       </div>
                   </div>
   
                   
                   <form>
                       <input />
                       
                   </form>
   
   
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
                
            
           </div>
          
  )
}

export default InputPost