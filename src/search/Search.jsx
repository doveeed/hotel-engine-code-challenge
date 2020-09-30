import React, { useEffect, useState } from 'react';
import SearchHeader from './components/search-header/SearchHeader';
import Results from './components/results/Results';
import { useQueryParams } from './hooks/useQueryParams';
import SearchError from './components/search-error/SearchError';

const Search = () => {
    const [errorMessage, setErrorMessage] = useState();
    const [searchResults, setSearchResults] = useState(undefined);
    const params = useQueryParams();
    const { q, sort, language, page, per_page } = params;

    const doSearch = async () => {
        if (q && q.length > 0) {
            const results = await fetch(`https://api.github.com/search/repositories?q=${encodeURIComponent(q)}${language ? `+language:${language}` : ''}&sort=${encodeURIComponent(sort)}&page=${page}&per_page=${per_page}`);
            const json = await results.json();

            if (results.ok) {
                setSearchResults(json);
            } else {
                setErrorMessage(json.message);
            }  
        }
    }
    useEffect(() => {
        doSearch();
    }, [params]);

    return (<div className="search">
        { errorMessage && <SearchError message={errorMessage} onClose={()=> setErrorMessage(null)}/>}
        <SearchHeader query={q}/>
        <Results results={searchResults} />
        </div>);
}

export default Search;