import React from 'react';
import {  useHistory, useLocation } from 'react-router-dom';

const DetailsHeader = () => {
    const history = useHistory();
    const { state } = useLocation();

    const handleBackButtonClick = () => {
        const backPath = state && state.callbackPath ? state.callbackPath : '/search';
        history.push(backPath)
    }

    return (<div className="header"><button className="button" onClick={handleBackButtonClick}>Back to list</button></div>);
}

export default DetailsHeader;