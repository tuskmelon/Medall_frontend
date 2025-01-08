import React from 'react'

import '../styles/Certificates.scss'

import Shield from '../assets/icons/shield-tick.svg'
import NABL from '../assets/logos/NABL.png'
import Lab from '../assets/images/lab.jpg'

const Certificates = () => {
    return (
        <div className='certificate'>
            <h2 className='certificate__header'>Certificates</h2>
            <div className='certificate__container'>
                <div className='certificate__info'>
                    <p><img src={Shield} loading="lazy" alt="icon" /><span>NABL</span> Accredited  </p>
                    <img src={NABL} loading="lazy" alt="NABL logo" />
                </div>
                <div className="certificate__image-container">
                    <img src={Lab} loading="lazy" data-aos="zoom-in-up" alt="lab" />
                </div>
            </div>
        </div>
    )
}

export default Certificates