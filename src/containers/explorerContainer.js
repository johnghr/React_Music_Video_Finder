import React, {useState, useEffect} from 'react';
import ArtistList from '../components/ArtistList';
import ArtistItem from '../components/ArtistItem';
import SearchForm from '../components/SearchForm';

const ExplorerContainer = () => {

    const [artists, setArtists] = useState([]);

    useEffect(() => {
        getArtists();
    }, []);

    const getArtists = function(query) {
        fetch(`https://tastedive.com/api/similar?q=`+ {query} +`k=413338-musicvid-TBPO1GFE`)
        .then(res => res.json())
        .then(artists => setArtists(artists['Similar']['Results']))

    }

    return(
        <div>
            <h1>Similiar Artists</h1>
            <SearchForm onSearchSubmit={(query) => getArtists(query)}/>
            <ArtistList artists={artists}/>
        </div>
    )

}

export default ExplorerContainer;