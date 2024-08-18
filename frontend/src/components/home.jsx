import React from 'react'
import Navbar from './navbar'
import Post from './post'
import Target from './target'

function Home() {
  return (
    <div className=" md:grid md:grid-cols-2  ">
       
      
       <div className=" md:col-span-3">
           <Post />
       </div>
       <div className=" md:col-span-1"> 
           <Target />
       </div>
           
  
  
</div>
  )
}

export default Home