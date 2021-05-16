import React from 'react';
import VideoItem from './VideoItem'

const VideoDisplay = ({artistVideos}) => {

    const videoItems = artistVideos.map((video, index) => {
        return <VideoItem video={video} key={index}/>
    })

    return(
        <div>
            <ul>
                {videoItems}
            </ul>
        </div>
    )

}

export default VideoDisplay;