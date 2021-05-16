import React from 'react';

const VideoItem = ({video}) => {
    
    console.log(video)

    return(
        <div>
            <h3>{video.strTrack}</h3>
            <iframe 
                width="560" 
                height="315" 
                src={video.strMusicVid.replace("watch?v=", "embed/")} 
            ></iframe>
        </div>
    )

}

export default VideoItem;
