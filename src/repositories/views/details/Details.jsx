import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import DetailsBody from "./components/details-body/DetailsBody";
import DetailsHeader from "./components/details-header/DetailsHeader";
const Details = () => {
  const history = useHistory();
  const { state } = useLocation();

  if (!state || !state.repository) {
    history.push("/search");
  }

  return (
    <div className="details">
      <DetailsHeader />
      <DetailsBody item={state.repository} />
    </div>
  );
};

export default Details;
