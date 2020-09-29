import React from 'react';
import ResultsHeader from '../results-header/ResultsHeader';
import ResultsList from '../results-list/ResultsList';
import ResultsSelector from '../results-selector/ResultsSelector';

const Results = ({results}) => {
    return (<div className="results">
        { results
            ? (
                <>
                 <ResultsSelector className="hide-on-mobile" value={''} options={[{value: 'java', text: 'Java'}, {value: 'javascript', text: 'JavaScript'}, {value: 'html', text: 'HTML'},{value: 'python', text: 'Python'}]} labelText="Language" id="language-list" />
                <div className="results-main">
                    <ResultsHeader total={results.total_count} />
                    { results && results.items && (<ResultsList items={results.items} />)}
                </div>
                </>
                )
            : <div className="results-prompt"> Press enter in search bar to search GitHub repositories</div>}
    </div>);
}

export default Results;