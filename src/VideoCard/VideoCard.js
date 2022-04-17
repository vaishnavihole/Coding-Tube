import React from 'react'
import './VideoCard.css'

function VideoCard(props) { 

    const keywordsMap = {
        'JavaScript': 'bg-warning text-dark',
        'React':  'bg-info text-dark',
        'Node.js': 'bg-primary'
    }
    return (
        <div className="video-card-container">
        <img src={props.thumbnail} 
           
         className="video-card-thumbnail"/>

         <h6 className="video-card-title">{props.title}</h6>
          <p className="video-card-description">{props.description}</p>
          <p>
              {props.keywords.map(keyword =>{
              return <span className={`badge rounded-pill ${keywordsMap[keyword]} me-2`}>{keyword}</span>
              })
          }
          </p>
                    
        </div>
    )
}

export default VideoCard