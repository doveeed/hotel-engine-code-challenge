import React from 'react';
import { useHistory, useLocation } from "react-router-dom";
import queryString from 'query-string'
import ResultsSelector from '../results-selector/ResultsSelector';

const ResultsHeader = ({total}) => {
    const history = useHistory();
    const { search } = useLocation();
    const params = queryString.parse(search);
    const { q, sort } = params;

    const handleSort = (sortBy) => {
        history.push(`/search?q=${encodeURIComponent(q)}&sort=${sortBy ? sortBy : ''}`)
    }

    const handleLanguage = (language) => {
        history.push(`/search?q=${encodeURIComponent(q)}+language:${language}&sort=${sort ? sort : ''}`)
    }
    return (<div className="results-header">
        <div className="results-header-title">Showing {total} available repository results</div>
        <ResultsSelector value={'Best match'} options={[{value: '', text: 'Best match'}, {value: 'stars', text: 'Stars'}]} labelText="Sort" id="sort-selector" kind="select" />
        <ResultsSelector className="show-on-mobile" value={'Any'} options={[{value: '', text: 'Any'}, {value: 'javascript', text: 'JavaScript'}, {value: 'python', text: 'Python'}]} labelText="Language" id="language-selector" kind="select" />
        {/* <div> Filter: <button onClick={() => handleLanguage('python')}>Python</button><button  onClick={() => handleLanguage('javascript')}>JavaScript</button></div> */}
        {/* <div> Sort: <button onClick={() => handleSort('')}>Best match</button><button  onClick={() => handleSort('stars')}>Stars</button></div> */}
    </div>);
}

export default ResultsHeader;