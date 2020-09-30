import React from "react";
import { useHistory, useLocation } from "react-router-dom";

const ResultsItem = ({ item }) => {
  const { full_name, description } = item;
  const history = useHistory();
  const { pathname, search } = useLocation();

  const handleNameClick = () => {
    history.push(`/details/${encodeURIComponent(full_name)}`, {
      repository: item,
      callbackPath: `${pathname}${search}`,
    });
  };

  return (
    <div className="results-item">
      <hr></hr>
      <div className="results-item-name" tabIndex="0" onClick={handleNameClick}>
        {full_name}
      </div>
      <div className="results-item-description">
        {description && description.length > 183
          ? `${description.substring(0, 180)}...`
          : description}
      </div>
    </div>
  );
};

export default ResultsItem;
