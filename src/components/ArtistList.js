import React from 'react';
import ArtistItem from './ArtistItem'

const ArtistList = ({artists, onArtistClick}) => {

    const artistItems = artists.map((artist, index) => {
        return <ArtistItem artist={artist} key={index} onArtistClick={onArtistClick}/>
    })

    return (
        <div>
            <ul>
                {artistItems}
            </ul>
        </div>
    )

}

export default ArtistList;