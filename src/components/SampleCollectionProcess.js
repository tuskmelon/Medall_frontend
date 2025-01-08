import React from 'react'

import '../styles/SampleCollectionProcess.scss'

import Message from '../assets/icons/pop-up-message.svg'
import CustomerService from '../assets/icons/customer-service.svg'
import HomeDelivery from '../assets/icons/home-delivery.svg'
import DebitCard from '../assets/icons/debit-card.svg'
import Reports from '../assets/icons/reports.svg'

const SampleCollectionProcess = () => {
    const steps = [
        {
            icon: Message,
            description: 'Enter your address and prefered time'
        },
        {
            icon: DebitCard,
            description: 'Make online payment on website or at your home'
        },
        {
            icon: CustomerService,
            description: 'Our executive will confirm your appointment'
        },
        {
            icon: HomeDelivery,
            description: 'Get tested at the comfort of your home'
        },
        {
            icon: Reports,
            description: 'Get your test report'
        },
    ]
    return (
        <div className='test-process'>
            <div className="test-process__header">
                <h1>How <span>Medall’s</span> Home Sample Collection works?</h1>
                {/* <p>Stay home and get tested from any place and time at Medall with these easy steps.</p> */}
                <p>Book an appointment with us and get tested at the comfort of your home with these easy steps.</p>
            </div>

            <div className="test-process__icon-with-text-container">
                <ul>
                    <div className="test-process__line"></div>
                    {
                        steps.map((step, index) => <li key={step.description}>
                            <span data-aos="zoom-in"><img src={step.icon} alt="" /></span>
                            <h4 data-aos="fade-up">Step {index + 1}</h4>
                            <p data-aos="fade-up">{step.description}</p>
                        </li>)
                    }

                </ul>
            </div>
        </div>
    )
}

export default SampleCollectionProcess