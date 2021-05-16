import React from 'react';

const VideoItem = ({video}) => {

    return(
        <div>
            <iframe 
                width="560" 
                height="315" 
                src={video.strMusicVid.replace("watch?v=", "embed/")} 
            ></iframe>
        </div>
    )

}

export default VideoItem;

// https://www.youtube.com/embed/GWoLozCT8AE
// http://www.youtube.com/watch?v=GWoLozCT8AE