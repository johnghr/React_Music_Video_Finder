import React, {useState} from 'react';

const SearchForm = ({onSearchSubmit}) => {

    const [query, setQuery] = useState("");

    const handleQueryChange = (event) => {
        setQuery(event.target.value)
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const queryToSubmit = query.split(" ").join("+");

        if (!queryToSubmit){
            return
        }

        onSearchSubmit(queryToSubmit);

        setQuery("");
    }

    return (
        
        <form onSubmit={handleFormSubmit}>
            <input 
                type="text"
                placeholder="Search artist"
                value={query}
                onChange={handleQueryChange}
            />
            <input 
                type="submit" 
                value="Submit artist"    
            />
        </form>
    )

}

export default SearchForm;

