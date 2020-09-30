import React from "react";
import { useHistory } from "react-router-dom";
import ResultsSelector from "../results-selector/ResultsSelector";
import { useQueryParams } from "../../hooks/useQueryParams";
import { getSearchUrlFromParams } from "../../utils/utils";
import { LANGUAGE_OPTIONS, SORT_OPTIONS } from "../../utils/constants";

const ResultsHeader = ({ total }) => {
  const params = useQueryParams();
  const { sort, language } = params;
  const history = useHistory();

  const handleSort = (sort) => {
    const newParams = {
      ...params,
      sort,
      page: "1",
    };
    history.push(getSearchUrlFromParams(newParams));
  };

  const handleLanguage = (language) => {
    const newParams = {
      ...params,
      language,
      page: "1",
    };
    history.push(getSearchUrlFromParams(newParams));
  };

  return (
    <div className="results-header">
      <div className="results-header-title">
        Showing {total} available repository results
      </div>
      <ResultsSelector
        onChange={handleSort}
        value={sort}
        options={SORT_OPTIONS}
        labelText="Sort"
        id="sort-selector"
        kind="select"
      />
      <ResultsSelector
        onChange={handleLanguage}
        className="show-on-mobile"
        value={language}
        options={LANGUAGE_OPTIONS}
        labelText="Language"
        id="language-selector"
        kind="select"
      />
      {/* <div> Filter: <button onClick={() => handleLanguage('python')}>Python</button><button  onClick={() => handleLanguage('javascript')}>JavaScript</button></div> */}
      {/* <div> Sort: <button onClick={() => handleSort('')}>Best match</button><button  onClick={() => handleSort('stars')}>Stars</button></div> */}
    </div>
  );
};

export default ResultsHeader;
