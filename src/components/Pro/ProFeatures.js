import React from 'react'

import '../../styles/Pro/ProFeatures.scss'

// import icons 
import Fasting from '../../assets/icons/fasting.svg'
import Reports from '../../assets/icons/patient-reports.svg'
import DeliveryMan from '../../assets/icons/delivery-man.svg'
import Booking from '../../assets/icons/booking.svg'

// import components 
import ProCard from './ProCard'
import BookHomeVisitCard from '../BookHomeVisitCard'

const ProFeatures = () => {
    const features = [
        {
            icon: Fasting,
            text: 'Fasating No fasting Required'

        },
        {
            icon: Reports,
            text: 'Get Reports InWithin 24 Hrs'

        },
        {
            icon: DeliveryMan,
            text: 'Home Collection Available'

        },
        {
            icon: Booking,
            text: 'Test booked so far:10764+'

        },
    ]

    const parameters = [
        {
            title: 'Bone',
            list: [
                {
                    text: 'Calcium'
                },
                {
                    text: 'Phosphorous'
                },
                {
                    text: 'Magnesium'
                },
            ]
        },
        {
            title: 'Heart',
            list: [
                {
                    text: 'Lipid Profile'
                }
            ]
        },
        {
            title: 'Blood Picture',
            list: [
                {
                    text: 'Calcium'
                },
                {
                    text: 'Phosphorous'
                },
                {
                    text: 'Magnesium'
                }
            ]
        },
        {
            title: 'Thyroid',
            list: [
                {
                    text: 'Thyroid Profile'
                }
            ]
        },
        {
            title: 'Blood Sugar',
            list: [
                {
                    text: 'Glucose- Fasting or Random'
                },
                {
                    text: 'HbAIc (Glycosylated Haemoglobin) '
                },
            ]
        },
        {
            title: 'Kidney',
            list: [
                {
                    text: 'Creatinine'
                },
                {
                    text: 'Urea'
                },
                {
                    text: 'Uric Acid'
                },
                {
                    text: 'Blood Urea Nitrogen(BUN)'
                },
            ]
        },
    ];

    return (
        <div className='pro-features'>
            <div className="pro-features__container">
                <h1 className='pro-features__title'>Medall Health <span>Pro</span></h1>
                <div className="pro-features__rating">
                    &#9733; &#9733; &#9733; &#9733; &#9733; <span> &nbsp;4.1/5</span>
                </div>
                <p className='pro-features__description'>Quick Precise Reports, Reporting as per NABL ISO guidelines, Home Sample Collection, Free Doctor's Consultation</p>

                <div className="pro-features__test-names">
                    <h4>Also known as :</h4>
                    <p> CREAT, Blood Creatinine, Serum Creatinine</p>
                </div>
                <div className="pro-features__icon-with-text-container">
                    {
                        features.map(feature => <div key={feature.text} className="pro-features__icon-with-text">
                            <img src={feature.icon} alt="icon" />
                            <p>{feature.text}</p>
                        </div>)

                    }
                </div>

                <div className="pro-features__parameters">
                    <h3>6 Test parameter</h3>
                    <div className="pro-features__parameter-container">

                        {
                            parameters.map(parameter => <ul>
                                <h2>{parameter.title}</h2>
                                {
                                    parameter.list.map(item => <li><span>{item.text}</span></li>)
                                }
                            </ul>
                            )
                        }
                    </div>
                </div>
            </div>
            <div className="pro-features__pro-card-container">
                <ProCard />

                <BookHomeVisitCard />

                {/* <div className="pro-features__book-card">
                    <a href="/">Book a Home Visit Now</a>
                    <p>Book any blood test or health checkup and get tested at the comfort of your home</p>
                    <button>Give call</button>
                </div> */}
            </div>
        </div>
    )
}

export default ProFeatures