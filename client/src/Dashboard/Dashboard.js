import React, {useEffect} from 'react'
import "./Dashboard.css"

import {Navigate, useNavigate} from 'react-router-dom'
import Swal from 'sweetalert2'

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
                     <input type="text" className="form-control" id="title" placeholder="Enter Title" />
                      </div>

                      <div className='mb-4'>
                     <label htmlFor="Description">Description</label>
                     <textarea className="form-control" id="description" row="4" placeholder="Enter Description" />
                      </div>

                      <div className='mb-4'>
                     <label htmlFor="channel">Channel</label>
                     <input type="text" className="form-control" id="channel" placeholder="Enter Channel" />
                      </div>

                      <div className='mb-4'>
                     <label htmlFor="keywords">Keywords</label>
                     <input type="text" className="form-control" id="keywords" placeholder="Enter Keywords" />
                      </div>

                      <div className='mb-4'>
                     <label htmlFor="videoUrl">VideoUrl</label>
                     <input type="text" className="form-control" id="videoUrl" placeholder="Enter VideoUrl" />
                      </div>

                      <button type="button" className="btn btn-success btn-lg btn-add-video " >
                      Add Video
                      </button>
                  </form>
              </div>

             
     </div>
     
    )
}

export default Dashboard