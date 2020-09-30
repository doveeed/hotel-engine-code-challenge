import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import DetailsBody from '../details-body/DetailsBody';
import DetailsHeader from '../details-header/DetailsHeader';
const Details = () => {
    const history = useHistory();
    const { state } = useLocation();

    if (!state || !state.repository) {
        history.push('/search')
    }

    const {repository} = state;
    return (
        <div className="details">
            <DetailsHeader />
            <DetailsBody item={repository} />
        </div>);
}

export default Details;