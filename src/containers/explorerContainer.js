import React, {useState, useEffect} from 'react';
import ArtistList from '../components/ArtistList';
import ArtistItem from '../components/ArtistItem';

const ExplorerContainer = () => {

    const [artists, setArtists] = useState([]);

    useEffect(() => {
        getArtists();
    }, []);

    const getArtists = function() {
        fetch('https://tastedive.com/api/similar?q=red+hot+chili+peppers')
        .then(res => res.json())
        .then(artists => setArtists(artists['Similar']['Results']))

    }


    return(
        <div>
            <h1>Similiar Artists</h1>
            <ArtistList artists={artists}/>
        </div>
    )

}

export default ExplorerContainer;