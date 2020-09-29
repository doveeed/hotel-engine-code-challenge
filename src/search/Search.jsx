import React, { useEffect, useState } from 'react';
import queryString from 'query-string'
import SearchHeader from './components/search-header/SearchHeader';
import Results from './components/results/Results';

const Search = ({ location }) => {
    const [searchResults, setSearchResults] = useState(undefined);
    const { search } = location;
    const params = queryString.parse(search);
    const { q } = params;

    const doSearch = async () => {
        if (q && q.length > 0) {
            const results = await fetch(`https://api.github.com/search/repositories?q=${q}`);

            if (results.ok) {
                const json = await  results.json();
                setSearchResults(json);
            }
        }
    }
    useEffect(() => {
        doSearch();
    }, [q]);

    return (<div>
        <div>Search</div>
        <SearchHeader query={q}/>
        <Results results={searchResults} />
        </div>);
}

export default Search;