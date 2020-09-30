import React from 'react';

const SearchError = ({message, onClose}) => {

    return (
        <div className="search-error">
            <div className="search-error-message">Error: {message} Refresh to try again.</div>
            <button onClick={onClose}>x</button>
        </div>
    );
}

export default SearchError;