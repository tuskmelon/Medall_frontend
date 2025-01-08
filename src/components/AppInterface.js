import React from 'react'

import '../styles/AppInterface.scss'

import PhoneNavigation from '../assets/images/phone-screen-navigation.png'
import AppUI from '../assets/images/app-interface.png'
import AppInterfaceCategory from '../assets/images/app-interface-category.png'
import PlayStore from '../assets/icons/google-play-badge.png'
import AppleStore from '../assets/icons/apple-store-badge.png'

const AppInterface = () => {
    return (
        <div className='app'>
            <div className="app__details">
                <h1>Know Your See your Reports from <span>Medall App</span></h1>
                <div className="app__download-links">
                    <p>Download our App</p>
                    <div className="app__store-links">
                        <a href="/" data-aos="fade-up">
                            <img src={PlayStore} alt="play store" />
                        </a>
                        <a href="/" data-aos="fade-up">
                            <img src={AppleStore} alt="Apple store" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="app__app-interfaces">
                <img src={PhoneNavigation} alt="mobile" data-aos="fade-up" />
                <img src={AppUI} alt="mobile" data-aos="fade-down" />
                <img src={AppInterfaceCategory} alt="mobile" data-aos="fade-up" />
            </div>
        </div>
    )
}

export default AppInterface