import React from 'react'
import VideoCard from './../VideoCard/VideoCard';
import './Home.css'
import IcoSearch from './ico-search.png'
import {Link} from 'react-router-dom';

function Home() {
    const videoData = [
        {
          id: 1,
          title: 'Introduction to React',
          description: 'This is the best video ever',
          channel: 'John Doe',
          thumbnail: 'https://picsum.photos/200/300?random=1',
          keywords: ['JavaScript', 'React', 'Node.js'],
          videoUrl: 'bMknfKXIFA8'
        },
          
         {
          id: 2,
          title: 'Introduction to C Programming',
          description: 'This is the best video ever',
          channel: 'John Doe',
          thumbnail: 'https://picsum.photos/200/300?random=2',
          keywords: ['JavaScript', 'React', 'Node.js'],
          videoUrl: 'hdI2bqOjy3c'
        },
    
        {
          id: 3,
          title: 'Introduction to JavaScprit',
          description: 'This is the best video ever',
          channel: 'John Doe',
          thumbnail: 'https://picsum.photos/200/300?random=3',
          keywords: ['JavaScript', 'React', 'Node.js'],
          videoUrl: '9VIiLJL0H4Y'
        }
      ];
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