import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { useQueryParams } from '../../hooks/useQueryParams';
import { getSearchUrlFromParams } from '../../utils/utils';

const SearchHeader = ({query}) => {
    const [seachQuery, setSearchQuery] = useState(query);
    const params = useQueryParams();
    const history = useHistory();


    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            const newParams = {
                ...params,
                q: event.target.value,
                page: '1',
            }
            history.push(getSearchUrlFromParams(newParams));
        }
    };

    const handleChange = (event) => {
        setSearchQuery(event.target.value);
    }

    return (<div className="search-header">
        <input
            className="search-header-input"
            autoComplete="off"
            type="search"
            id="search-github"
            aria-label="Press enter to search GitHub repositories"
            placeholder="Search GitHub"
            onKeyDown={handleKeyDown}
            onChange={handleChange}
            value={seachQuery}>
        </input>
    </div>);
}

export default SearchHeader;