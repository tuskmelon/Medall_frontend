import React from 'react'

import '../styles/MedallCards.scss'

// import image and icons 
import Monitor from '../assets/icons/monitor.svg'
import Technician from '../assets/icons/technician.svg'
import ConsultDoctor from '../assets/icons/consult-doctor.svg'
import Scooter from '../assets/icons/scooter.svg'
import CrowdHeart from '../assets/icons/crowd-heart.png'
import HealthRecordPad from '../assets/icons/health-record-pad.svg'
import Doctor from '../assets/images/lady-doctor.png'

const MedallCards = () => {
    const CardsColumnOne = [
        {
            icon: Monitor,
            description: 'India’s Largest Integrated Diagnostics'
        },
        {
            icon: Technician,
            description: 'Over 200+ Expert Pathologists & Radiologists'
        },
        {
            icon: ConsultDoctor,
            description: 'Trusted by 48000+ Network of Doctors & Hospitals'
        },
    ]
    const CardsColumnTwo = [
        {
            icon: Scooter,
            description: 'One-Stop Solution for all your Diagnostic Needs'
        },
        {
            icon: CrowdHeart,
            description: 'Over 10M+ People Served & 44M + Tests Taken'
        },
        {
            icon: HealthRecordPad,
            description: 'Fast and Accurate Test Report Results'
        },
    ]
    return (
        <div className='cards'>
            <div className="cards__header">
                <h2>What Sets <span>Medall</span> Apart !</h2>
                <p>Choosing us as your diagnostic center means you're choosing expertise, quality, advanced technology, and convenience all in one place. With our wide range of services and affordable prices, you're getting the highest quality of care possible. So why settle for less when you can have it all with us?
                </p>
            </div>
            <div className="cards__details">
                <div className="cards__first-column">
                    {
                        CardsColumnOne.map((card, index) => (<div key={card.icon} className="cards__card" data-aos="fade-down"
                            data-aos-delay={index * 100}
                            data-aos-offset="100">
                            <img src={card.icon} loading="lazy" alt="monitor icon" />
                            <p>{card.description}</p>
                        </div>))
                    }
                </div>
                <div className="cards__mid-image">
                    <img src={Doctor} alt="doctor" />
                </div>
                <div className="cards__last-column">
                    {
                        CardsColumnTwo.map((card, index) => (<div key={card.icon} className="cards__card" data-aos="fade-down"
                            data-aos-delay={index * 100}
                            data-aos-offset="100">
                            <img src={card.icon} loading="lazy" alt="monitor icon" />
                            <p>{card.description}</p>
                        </div>))
                    }
                </div>
            </div>
        </div>
    )
}

export default MedallCards