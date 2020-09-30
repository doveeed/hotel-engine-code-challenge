import React from "react";

const DetailsBody = ({ item }) => {
  const { name, owner,description, stargazers_count, language, ...others } = item;

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
      <div className="details-body-title"><div>{name}</div><div className="details-body-language">{language}</div></div>
      <div className="details-body-main">
      <div className="details-body-owner">
        <img src={owner.avatar_url} alt="Owner's avatar"></img>
      </div>
      <div className="details-body-list">
        <div  className="details-body-list-item">
            <div className="details-body-list-item-key">Owner:</div>
            <div className="details-body-list-item-value">{owner.login}</div>
        </div>
        <div  className="details-body-list-item">
            <div className="details-body-list-item-key">Stars:</div>
            <div className="details-body-list-item-value">{stargazers_count}</div>
        </div>
        <div  className="details-body-list-item">
            <div className="details-body-list-item-key">Description:</div>
            <div className="details-body-list-item-value">{description}</div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default DetailsBody;
