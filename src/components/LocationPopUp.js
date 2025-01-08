import React, { useState, useContext } from 'react'
import Select from "react-dropdown-select";

import LocationIcon from '../assets/icons/location-white.svg'
import Location from '../assets/icons/location.svg'
import Cross from '../assets/icons/cross-white.svg'

import '../styles/LocationPopUp.scss'

import { UserLocationContext } from '../context/UserLocation';

// User Location Context Handle 

// Location Selectoe Values 
const locations = [
    {
        value: 'chennai',
        label: "Chennai"
    },
    {
        value: 'banglore',
        label: "Banglore"
    },
    {
        value: 'andhraPradesh',
        label: "Andhra Pradesh"
    },
];

const LocationPopUp = () => {
    const userLocationContext = useContext(UserLocationContext);
    const [showLocationPopUp, setShowLocationPopUp] = useState(true);

    return (
        <>
            {
                showLocationPopUp && <div className='location-pop-up'>
                    <div className="location-pop-up__container">
                        <img className='location-pop-up__close-button' loading="lazy" onClick={() => setShowLocationPopUp(false)} src={Cross} alt="close" />
                        <h2>Select Your <img src={LocationIcon} alt="location" /> Location</h2>
                        <div className="location-pop-up__user-location" >
                            <div className="location-pop-up__location-icon">
                                <img src={Location} loading="lazy" alt="icon" />
                            </div>
                            {/* <input type="text" name="userLocation" value={userDistrict ? userDistrict : 'Fecthing Location...'} /> */}
                            <Select className='location-pop-up__location-selector' labelField="label" valueField="value" placeholder="Choose Location" options={locations} searchable={false} onChange={(values) => { userLocationContext.userLocationDispatch({ type: `${values[0].value}` }); console.log(values[0].value) }} />
                        </div>
                    </div>
                </div>
            }

        </>
    )

}

export default LocationPopUp