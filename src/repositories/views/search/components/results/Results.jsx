import React from "react";
import { useHistory } from "react-router-dom";
import ResultsHeader from "../results-header/ResultsHeader";
import ResultsList from "../results-list/ResultsList";
import ResultsSelector from "../results-selector/ResultsSelector";
import { useQueryParams } from "../../hooks/useQueryParams";
import { getSearchUrlFromParams } from "../../utils/utils";
import { LANGUAGE_OPTIONS } from "../../utils/constants";
import Pagination from "../pagination/Pagination";

const Results = ({ results }) => {
  const params = useQueryParams();
  const { language } = params;
  const history = useHistory();

  const handleLanguageChange = (value) => {
    const newParams = {
      ...params,
      language: value,
      page: "1",
    };
    history.push(getSearchUrlFromParams(newParams));
  };

  return (
    <div className="results">
      {results ? (
        <>
          <ResultsSelector
            onChange={handleLanguageChange}
            className="hide-on-mobile"
            value={language}
            options={LANGUAGE_OPTIONS}
            labelText="Language"
            id="language-list"
          />
          <div className="results-main">
            <ResultsHeader total={results.total_count} />
            {results && results.items && <ResultsList items={results.items} />}
            <Pagination totalItems={results.total_count} />
          </div>
        </>
      ) : (
        <div className="results-prompt">
          {" "}
          Type in search bar and press "Enter" to search GitHub repositories
        </div>
      )}
    </div>
  );
};

export default Results;
