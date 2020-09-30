import React, { useEffect, useState } from 'react';
import SearchHeader from './components/search-header/SearchHeader';
import Results from './components/results/Results';
import { useQueryParams } from './hooks/useQueryParams';

const Search = () => {
    const [searchResults, setSearchResults] = useState(undefined);
    const params = useQueryParams();
    const { q, sort, language } = params;

    const doSearch = async () => {
        if (q && q.length > 0) {
            const results = await fetch(`https://api.github.com/search/repositories?q=${encodeURIComponent(q)}${language ? `+language:${language}` : ''}&sort=${encodeURIComponent(sort)}`);

            if (results.ok) {
                const json = await  results.json();
                setSearchResults(json);
            }
        }
    }
    useEffect(() => {
        doSearch();
    }, [params]);

    return (<div className="search">
        <SearchHeader query={q}/>
        <Results results={searchResults} />
        </div>);
}

export default Search;