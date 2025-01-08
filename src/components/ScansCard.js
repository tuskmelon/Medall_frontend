import React, { useContext } from 'react'

import '../styles/ScansCard.scss'

import { OpenRadiologyMenu } from '../context/OpenRadiologyMenu';

const ScansCard = ({ scanDetails }) => {

    const openRadiologyMenu = useContext(OpenRadiologyMenu);

    const handleViewRedirect = (menuToOpen) => {
        window.scrollTo(0, 0);
        openRadiologyMenu.openRadiologyMenuReducerDispatch({ type: menuToOpen });
        console.log(menuToOpen);
    }

    return (
        <div className='scan-card'>
            <div className="scan-card__inner-container">
                <div className="scan-card__test-card">
                    <img src={scanDetails.thumbnail} alt="thumbnail" />
                    <div className="scan-card__text-content">
                        <h3>
                            <p>{scanDetails.title}</p>
                            <p>Starting @ <span>&#8377;{scanDetails.startingPrice}/-*</span></p>
                        </h3>
                        <div className="scan-card__card-description-box">
                            <p>{scanDetails.description}</p>
                            <p>*T&C</p>
                        </div>
                    </div>
                    <button className='scan-card__view-btn' onClick={() => handleViewRedirect(scanDetails.openMenuReference)}>View More</button>
                </div>
            </div>
        </div>
    )
}

export default ScansCard