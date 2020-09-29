import React from 'react';

const ResultsList = ({items}) => {
    return (
        <div>{
            items && items.map(({id, full_name, description}) => (
                <div key={id}>
                    <hr></hr>
                    <div>{full_name}</div>
                    <div>{description}</div>
                </div>
        ))}</div>
    );
}

export default ResultsList;