import React,{useState,useEffect} from 'react'
import VideoCard from './../VideoCard/VideoCard';
import './Home.css'
import IcoSearch from './ico-search.png'
import {Link} from 'react-router-dom';

import axios from 'axios';

function Home() {
   

  const [videoData, setVideoData] =useState([]);

  useEffect(() => {

    axios.get('http://localhost:5000/videos/all').then(res => {
      setVideoData(res.data);
   })
    
  }, [])
     
         return (
         <div className="container">
         <div className="title-container">
           <h1 className="text-center">Coding Tube</h1>
          </div>

          <div className="search-bar">
          <img src={IcoSearch} className="ico-search" alt="search" />
          <input type="text" className="input-search" placeholder="Search" />
          </div>
          
    
         <div className="row">
           {
             videoData.map(video => {
               return (
                 <div className="col-md-4">
                     <Link to={`/player/${video.videUrl}`} className="text-decoration-none">
                 <VideoCard
                         key={video.id}
                        title={video.title}
                        description={video.description}
                        channel={video.channel}
                        thumbnail={`https://i.ytimg.com/vi/${video.videoUrl}/maxresdefault.jpg`}
                        keywords={video.keywords}
                        videUrl={video.videUrl}
                        />
                        </Link>
                        </div>
               )
             })
            }
         </div>
         </div>
       );
        }    

export default Home