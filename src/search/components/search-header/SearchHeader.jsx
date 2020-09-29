import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

const SearchHeader = ({query}) => {
    const history = useHistory();
    const [seachQuery, setSearchQuery] = useState(query);

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            history.push(`/search?q=${encodeURIComponent(event.target.value)}`)
        }
    };

    const handleChange = (event) => {
        setSearchQuery(event.target.value);
    }

    return (<div className="search-header">
        <input
            className="search-header-input"
            autocomplete="off"
            type="search"
            id="search-github"
            aria-label="Press enter to search GitHub repositories"
            placeholder="Search GitHub"
            onKeyDown={handleKeyDown}
            onChange={handleChange}
            value={seachQuery}>
        </input>
    </div>);
}

export default SearchHeader;