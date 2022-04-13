import React from 'react'
import './VideoCard.css'

function VideoCard() {
    return (
        <div className="video-card-container">
        <img src="https://i.ytimg.com/an_webp/Z68FFdyNYDg/mqdefault_6s.webp?du=3000&sqp=CIDx2pIG&rs=AOn4CLCU_viLG5SJ-jd5d_HPzkwZmy4y2Q"
         className="video-card-thumbnail"/>
         
         <h2>Video Title</h2>
        </div>
    )
}

export default VideoCard