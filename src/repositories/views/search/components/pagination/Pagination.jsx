import React from "react";
import { useHistory } from "react-router-dom";
import { useQueryParams } from "../../hooks/useQueryParams";
import { getSearchUrlFromParams } from "../../utils/utils";

const Pagination = ({ totalItems }) => {
  const params = useQueryParams();
  const { per_page, page } = params;

  const parsedPage = parseInt(page);
  const history = useHistory();

  const disableNext = totalItems - parsedPage * parseInt(per_page) <= 0;
  const disablePrevious = page === "1";

  const handlePreviousClick = () => {
    const newParams = {
      ...params,
      page: parsedPage - 1,
    };
    history.push(getSearchUrlFromParams(newParams));
  };

  const handleNextClick = () => {
    const newParams = {
      ...params,
      page: parsedPage + 1,
    };
    history.push(getSearchUrlFromParams(newParams));
  };

  return (
    <div className="pagination">
      <button
        onClick={handlePreviousClick}
        className="button"
        disabled={disablePrevious}
      >
        Previous
      </button>
      <div className="pagination-current">Current page: {parsedPage}</div>
      <button
        onClick={handleNextClick}
        className="button"
        disabled={disableNext}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
