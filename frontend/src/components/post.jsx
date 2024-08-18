import React from 'react'
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
  return (

   
    <div>

 
          {



            images.map(image => (

<div class=" ms-5 grid grid-cols-2 gap-3">
                <div class="w-80 bg-white p-3">
                <img class="h-52 w-full object-cover" src={image} />
                <ul class="mt-3 flex flex-wrap">
                    <li class="mr-auto">
                    <a href="#" class="flex text-gray-400 hover:text-gray-600">
                        <svg class="mr-0.5" style={{ width:"24px",height:"24px" }} viewBox="0 0 24 24">
                        <path fill="currentColor" d="M21,12L14,5V9C7,10 4,15 3,20C5.5,16.5 9,14.9 14,14.9V19L21,12Z" />
                        </svg>
                        1
                    </a>
                    </li>
                    <li class="mr-2">
                    <a href="#" class="flex text-gray-400 hover:text-gray-600">
                        <svg class="mr-0.5"  style={{ width:"24px",height:"24px" }} viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z" />
                        </svg>
                        24
                    </a>
                    </li>
                    <li class="mr-2">
                    <a href="#" class="flex text-gray-400 hover:text-gray-600">
                        <svg class="mr-0.5"  style={{ width:"24px",height:"24px" }} viewBox="0 0 24 24">
                        <path fill="currentColor" d="M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22V22H9Z" />
                        </svg>
                        3
                    </a>
                    </li>
                    <li>
                    <a href="#" class="flex text-gray-400 hover:text-gray-600">
                        <svg class="mr-0.5"  style={{ width:"24px",height:"24px" }}  viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
                        </svg>
                        3
                    </a>
                    </li>
                </ul>
                </div>

            </div>
    ))
          }
            

             
    </div>
  )
}

export default Post