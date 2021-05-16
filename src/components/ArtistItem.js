import React from 'react';

const ArtistItem = ({artist, onArtistClick}) => {

    const handleClick = function(){
        onArtistClick(artist);
    }

    return (
        <li onClick={handleClick}>{artist.Name}</li>
    )

}

export default ArtistItem;