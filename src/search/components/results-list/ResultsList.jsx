import React from 'react';
import ResultsItem from '../results-item/ResultsItem';

const ResultsList = ({items}) => {
    return (
        <div className="results-list">{
            items && items.map((item) => (<ResultsItem key={item.id} item={item} />)
        )}</div>
    );
}

export default ResultsList;