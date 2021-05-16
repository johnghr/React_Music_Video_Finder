import React, {useState, useEffect} from 'react';
import ArtistList from '../components/ArtistList';
import ArtistItem from '../components/ArtistItem';
import SearchForm from '../components/SearchForm';
import VideoDisplay from '../components/VideoDisplay'

const ExplorerContainer = () => {

    const [artists, setArtists] = useState([]);
    const [artistId, setArtistId] = useState("")
    const [artistVideos, setArtistVideos] = useState([]);

    useEffect(() => {
        getArtists();
    }, []);

    const getArtists = function(queryToSubmit) {
        fetch(`https://tastedive.com/api/similar?q=${queryToSubmit}&k=413338-musicvid-TBPO1GFE`)
        .then(res => res.json())
        .then(artists => {setArtists(artists['Similar']['Results'])})

    }

    const onArtistClick = function(artist) {
        const formattedArtistName = artist.Name.split(" ").join("_").toLowerCase()
        getArtistId(formattedArtistName)    
    }

    const getArtistId = function(artistName){
        fetch(`https://theaudiodb.com/api/v1/json/1/search.php?s=${artistName}`)
        .then(res => res.json())
        .then(responseJson => {
            if(responseJson.artists === null){
                alert("no artists were found")
            } else {
               setArtistId(responseJson.artists[0].idArtist)
               getArtistVideos(responseJson.artists[0].idArtist) 
            } 
        });
    }
    
    const getArtistVideos = function(artistId){
        fetch(`https://theaudiodb.com/api/v1/json/1/mvid.php?i=${artistId}`)
        .then(res => res.json())
        .then(responseJson => {
            if(responseJson.mvids === null){
                alert("no videos were found")
            } else {
                setArtistVideos(responseJson.mvids)
            }
        })
    }

    return(
        <div>
            <h1>Similiar Artists</h1>
            <SearchForm onSearchSubmit={(queryToSubmit) => getArtists(queryToSubmit)}/>
            <ArtistList artists={artists} onArtistClick={onArtistClick}/>
            <VideoDisplay artistVideos={artistVideos}/>
            
        </div>
    )

}

export default ExplorerContainer;