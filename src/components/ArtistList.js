import React from 'react';
import ArtistItem from './ArtistItem'

const ArtistList = ({artists}) => {

    const artistItems = artists.map((artist, index) => {
        return <ArtistItem artist={artist} key={index}/>
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