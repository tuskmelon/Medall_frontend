import React from 'react'

import '../styles/TestBookingStep.scss'

// import icons 
import PopUpMessage from '../assets/icons/pop-up-message.svg'
import CustomerService from '../assets/icons/customer-service.svg'
import TestRecord from '../assets/icons/test-record.svg'

const TestBookingStep = () => {

    const steps = [
        {
            icon: PopUpMessage,
            textOne: 'Fill in your details & click the submit button',
            textTwo: 'OR',
            textThree: 'Call the above mentioned customer care number'
        },
        {
            icon: CustomerService,
            textOne: 'Our executive will reach out to you and understand your requirements and share the details',
            textTwo: '',
            textThree: ''
        },
        {
            icon: TestRecord,
            textOne: 'Your booking will be confirmed as per your preferred date & time slot',
            textTwo: '',
            textThree: ''
        },
    ]
    return (
        <div className='booking-steps'>
            <div className="booking-steps__container">
                <span className='booking-steps__line'></span>
                {
                    steps.map((step, index) => <div className="booking-steps__step" key={step.textOne}>
                        <div className='booking-steps__icon-box'>
                            <img src={step.icon} alt="icon" />
                        </div>
                        <h3>STEP {index + 1}</h3>
                        <p>{step.textOne}</p>
                        <p>{step.textTwo}</p>
                        <p>{step.textThree}</p>
                    </div>
                    )
                }

            </div>
        </div>
    )
}

export default TestBookingStep