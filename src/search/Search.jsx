import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'
import queryString from 'query-string'
import SearchHeader from './components/search-header/SearchHeader';
import Results from './components/results/Results';

const Search = () => {
    const [searchResults, setSearchResults] = useState(undefined);
    const { search } = useLocation();
    const params = queryString.parse(search);
    const { q, sort } = params;

    const doSearch = async () => {
        if (q && q.length > 0) {
            const results = await fetch(`https://api.github.com/search/repositories?q=${encodeURIComponent(q)}&sort=${encodeURIComponent(sort)}`);

            if (results.ok) {
                const json = await  results.json();
                setSearchResults(json);
            }
        }
    }
    useEffect(() => {
        doSearch();
    }, [q, sort]);

    return (<div className="search">
        <SearchHeader query={q}/>
        <Results results={searchResults} />
        </div>);
}

export default Search;