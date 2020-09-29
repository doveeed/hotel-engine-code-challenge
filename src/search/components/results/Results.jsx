import React from 'react';
import ResultsHeader from '../results-header/ResultsHeader';
import ResultsList from '../results-list/ResultsList';

const Results = ({results}) => {
    return (<div>
        { results
            ? (
                <div>
                    <ResultsHeader total={results.total_count} />
                    { results && results.items && (<ResultsList items={results.items} />)}
                </div>
                )
            : <div> Search for results</div>}
    </div>);
}

export default Results;