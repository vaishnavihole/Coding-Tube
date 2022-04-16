import React from 'react'
import './VideoCard.css'

function VideoCard(props) { 
    return (
        <div className="video-card-container">
        <img src={props.thumbnail} 
           
         className="video-card-thumbnail"/>

         <h6 className="video-card-title">{props.title}</h6>
          <p className="video-card-description">{props.description}</p>
                    
        </div>
    )
}

export default VideoCard