import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Player } from '@lottiefiles/react-lottie-player';

import ThankYouGraphic from "../assets/lottie/thank-you.json"

import '../styles/Thanks.scss'

const Thanks = () => {
    let navigate = useNavigate();

    const navigateToHomePage = () => {
        navigate("/");
    }

    const downloadReceipt = () => {
        navigate("/receipt");
    }

    return (
        <div className='thanks'>
            <div className="thanks__lottie">
                <Player
                    src={ThankYouGraphic}
                    className="player"
                    loop
                    autoplay
                />
            </div>
            <p data-aos="fade-up" data-aos-offset="-2000" >We wil call you shortly.</p>

            <div className="thanks__btn-container">
                <button data-aos="fade-up" data-aos-offset="-2000" data-aos-delay="150" className='thanks__back-button' onClick={navigateToHomePage}>Go Back To Site</button>

                {/* <button data-aos="fade-up" data-aos-offset="-2000" data-aos-delay="200" className='thanks__back-button' onClick={downloadReceipt}>Download Receipt</button> */}
            </div>
        </div>
    )
}

export default Thanks