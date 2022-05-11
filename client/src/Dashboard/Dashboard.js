import React, {useEffect,useState} from 'react'
import "./Dashboard.css"

import {Navigate, useNavigate} from 'react-router-dom'
import Swal from 'sweetalert2'
import axios from 'axios';

function Dashboard() {

     let navigate = useNavigate();
    useEffect(() => {
        if(!localStorage.getItem('email') || !localStorage.getItem('fullName'))
        {
            Swal.fire({
                title:'Error!',
                text:'Login First..😭',
                icon: 'error',
                confirmButtonText: 'Login',
             }).then(() => {
                 navigate("/login")
                 })
                }
   }, []); 


   const [title,setTitle] = useState("")
   const [description,setDescription] = useState("")
   const [channel,setChannel] = useState("")
   const [keywords,setKeywords] = useState("")
   const [videoUrl,setVideoUrl] = useState("")

   async function addVideo(){
       const response = await axios.post("/videos/add",{
           id: Math.floor(Math.random() * 1000000),
           title: title,
           description: description,
           channel: channel,
           keywords: keywords,
           videoUrl: videoUrl,
       })

       if(response)
       {
           Swal.fire({
               title: 'Success',
               text:  'Video Added Successfully...🤗',
               icon:  'success',
              })
              navigate("/")
       }
       else{
           Swal.fire({
               title: 'Error',
               text: 'Video Not Added...😭',
               icon: 'error',
               confimButtonText: 'Try Again',
           })
       }
   }


    return (
        <div className='container'>
         <div className="title-container">
         <h1 className="text-center">Dashboard</h1>
         </div>
         <div>
             <button 
             className="btn btn-danger btn-sm"
             type="button"
             onClick={()=>{
                 localStorage.clear();
                 Swal.fire({
                     title: 'Logout!',
                     text: 'You Logged out...👍',
                     icon: 'success',
                 });

                 navigate("/login");
             }}
             >
            Logout</button>
         </div>
              <div>
                  <h2 className="text-center">Welcome <b>{localStorage.getItem('fullName')}</b>🙏</h2>
              </div>

              <div className='form-add-video'>
                  <h3 className="text-center">Add Video</h3>
                  <form>
                      <div className='mb-4'>
                     <label htmlFor="title">Title</label>
                     <input type="text" className="form-control" id="title" placeholder="Enter Title"
                     onChange={(e) => setTitle(e.target.value)}
                     />
                      </div>

                      <div className='mb-4'>
                     <label htmlFor="Description">Description</label>
                     <textarea className="form-control" id="description" row="4" placeholder="Enter Description" 
                     onChange={(e) => setDescription(e.target.value)}
                     ></textarea>
                      </div>

                      <div className='mb-4'>
                     <label htmlFor="channel">Channel</label>
                     <input type="text" className="form-control" id="channel" placeholder="Enter Channel"
                     onChange={(e) => setChannel(e.target.value)}
                     />
                      </div>

                      <div className='mb-4'>
                     <label htmlFor="keywords">Keywords</label>
                     <input type="text" className="form-control" id="keywords" placeholder="Enter Keywords"
                     onChange={(e) => setKeywords(e.target.value)}
                     />
                      </div>

                      <div className='mb-4'>
                     <label htmlFor="videoUrl">VideoUrl</label>
                     <input type="text" className="form-control" id="videoUrl" placeholder="Enter VideoUrl" 
                     onChange={(e) => setVideoUrl(e.target.value)}
                     />
                      </div>

                      <button type="button" className="custom-btn  btn-lg btn-add-video " 
                      onClick={addVideo}
                      >
                      Add Video
                      </button>
                  </form>
              </div>

             
     </div>
     
    )
}

export default Dashboard