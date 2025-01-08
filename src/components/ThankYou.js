import React from 'react'
import { useNavigate } from 'react-router-dom';

import '../styles/ThankYou.scss'

import MedicalPattern from "../assets/images/medical-pattern.png"
import ThankYouText from "../assets/images/thank-you.svg"


const ThankYou = () => {
    let navigate = useNavigate();

    const navigateToHomePage = () => {
        navigate("/");
    }

    return (
        <div className='thank-you'>
            <img className='thank-you__med-pattern' src={MedicalPattern} data-aos="zoom-in" alt="medical pattern" />
            <img className='thank-you__gradient-text' src={ThankYouText} data-aos="fade-up" data-aos-delay="50" alt="thanks" />
            <p data-aos="fade-up" data-aos-offset="-2000" data-aos-delay="150">We wil call you shortly.</p>
            <button className='thank-you__back-button' onClick={navigateToHomePage}>Back To Home</button>
        </div>
    )
}

export default ThankYou