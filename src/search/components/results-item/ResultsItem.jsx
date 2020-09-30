import React from 'react';

const ResultsItem = ({item}) => {
    const { full_name, description} = item;
    
    return (<div className="results-item">
        <hr></hr>
        <div className="results-item-name">{full_name}</div>
        <div className="results-item-description">{description && description.length > 183 ? `${description.substring(0, 180)}...`: description}</div>
    </div>);
}

export default ResultsItem;