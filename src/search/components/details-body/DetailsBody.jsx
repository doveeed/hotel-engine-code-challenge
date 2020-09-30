import React from "react";

const DetailsBody = ({ item }) => {
  const { full_name, ...others } = item;

  const getValue = (value) => {
    if (typeof value === "object") {
      return JSON.stringify(value);
    }

    return `${value}`;
  };

  const getLabelFromKey = (key) => {
    return `${key.substring(0, 1).toUpperCase()}${key.substring(1)}:`.replace(
      "_",
      " "
    );
  };
  return (
    <div className="details-body">
      <div className="details-body-title">{full_name}</div>
      <div className="details-body-list">
        {" "}
        {Object.entries(others).map(([key, value]) => (
          <div key={key} className="details-body-list-item">
            <div className="details-body-list-item-key">
              {getLabelFromKey(key)}
            </div>
            <div className="details-body-list-item-value">
              {getValue(value)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailsBody;
