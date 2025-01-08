import React, { useState, useEffect, useContext } from 'react'

import '../../styles/MRI/MriImageWithDetails.scss'
// import images 
// import BrainMRI from '../../assets/images/brain-mri.jpg'

// import icons 
// import Check from '../../assets/icons/businessmen-discussing.svg'
import { UserLocationContext } from '../../context/UserLocation';

const MriImageWithDetails = ({ mriInfo }) => {
    console.log(mriInfo);

    // Using UserLocationContext to change price based on user location
    const userLocationContext = useContext(UserLocationContext);
    const [scanPriceBasedOnLocation, setScanPriceBasedOnLocation] = useState();

    // Setting price of Tests based on selected location 
    useEffect(() => {
        if (userLocationContext.userLocationState === 'chennai') {
            setScanPriceBasedOnLocation(mriInfo.chennaiPrice);
        } else if (userLocationContext.userLocationState === 'banglore') {
            setScanPriceBasedOnLocation(mriInfo.banglorePrice);
        } else if (userLocationContext.userLocationState === 'andhraPradesh') {
            setScanPriceBasedOnLocation(mriInfo.andhraPradeshPrice);
        } else {
            setScanPriceBasedOnLocation(mriInfo.price);
        }
    })

    return (
        <div className='mri-image-with-details'>
            <div className="mri-image-with-details__container">
                <img className='mri-image-with-details__thumbnail' src={mriInfo.thumbnail} loading="lazy" alt="mri" data-aos="zoom-in" />

                <div className="mri-image-with-details__info-container">
                    <div className="mri-image-with-details__scan-info-box">
                        <div className="mri-image-with-details__title-box">
                            <h4>{mriInfo.type}</h4>
                            <p>{mriInfo.title} <span>{mriInfo.highlightType}</span></p>
                        </div>
                        <div className="mri-image-with-details__price-box">
                            <h4>Price Starts From</h4>
                            {
                                scanPriceBasedOnLocation === 'NA' ? <h5>Not available on seleted location</h5> : <p>₹{scanPriceBasedOnLocation}/-*</p>
                            }
                        </div>
                        <span className="mri-image-with-details__conditional-statement">*Prices may very based on centre & location</span>
                    </div>

                    <div className="mri-image-with-details__why-us-container">
                        <h2>Why Choose Medall</h2>
                        <ul>
                            {
                                mriInfo.iconWithText.map(properties => <li key={properties.text}>
                                    <span><img src={properties.icon} loading="lazy" alt="properties" /></span>
                                    <p>{properties.text}</p>
                                </li>)
                            }

                        </ul>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default MriImageWithDetails