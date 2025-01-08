import React from 'react'

import '../styles/SampleCollection.scss'

const SampleCollection = () => {
    const steps = [
        {
            description: 'Enter your Address & Preferred Time',
        },
        {
            description: 'Make the Payment',
        },
        {
            description: 'Our Executive will Confirm your Appointment',
        },
        {
            description: 'Get tested from the comfort of your home',
        },
        {
            description: 'Grab your Test Report',
        },
    ]
    return (
        <div className='sample-collection'>
            <div className="sample-collection__header">
                <h1>How <span>Medall’s</span> Home Sample Collection works?</h1>
                <p>Stay home and get tested from any place and time at Medall with these easy steps.</p>
            </div>
            <div className="sample-collection__steps-container">
                {
                    steps.map((step, index) => <div key={step.description} className="sample-collection__steps">
                        <div className="sample-collection__step-number">
                            <span>Step <br /> {index + 1}</span>
                        </div>
                        <p>{step.description}</p>
                    </div>)
                }
            </div>

        </div>
    )
}

export default SampleCollection