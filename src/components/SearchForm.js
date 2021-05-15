import React, {useState} from 'react';

const SearchForm = (onSearchSubmit) => {

    const [submittedArtist, setSubmittedArtist] = useState("");

    const handleArtistChange = (event) => {
        setSubmittedArtist(event.target.value)
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const artistToSubmit = (submittedArtist) => {
            return submittedArtist.trim().replace(" ", "+");
        }

        onArtistSubmit({artistToSubmit})
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <input 
                type="text"
                placeholder="Search artist"
                value={artistToSubmit}
                onChange={handleArtistChange}
            />
        </form>
    )

}

export default SearchForm;