import React from 'react'

import Doctor from '../../assets/images/girl-doctor.jpg'

import '../../styles/Career/CareerHero.scss'

const CareerHero = () => {
    return (
        <div className='career-hero'>
            <div className="career-hero__text-details">
                <h1>Shape Your Future <span>   with Medall </span></h1>
                <p>Chart your path to a fulfilling career at Medall Diagnostic. Join us for a journey filled with innovation, growth, and purpose.
                </p>
                <a href="#form_redirectjobcareer" data-aos="fade-up" data-aos-offset="0">Contact Us</a>
            </div>
            <img className='career-hero__main-image' loading="lazy" data-aos="zoom-in" src={Doctor} alt="doctor" />
        </div>
    )
}

export default CareerHero