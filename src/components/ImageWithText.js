import React from 'react'

import '../styles/ImageWithText.scss'

import SampleCollection from '../assets/images/home-sample-collection.jpg'

import Heart from "../assets/icons/medall-heart-dark.svg"

const ImageWithText = () => {
    const facility = [

        {
            text: "Trained Technicians"
        },
        {
            text: "Special vein finder will be used"
        },
        {
            text: "Trusted Lab"
        },
        {
            text: "Flexible timings"
        },
        {
            text: "Timely reports"
        },

    ]
    return (
        <div className='image-with-text'>
            <h1 className='image-with-text__title-mobile' data-aos="fade-up" >Free <span>Sample</span> Collection at <span>your</span> <span>Comfort</span>
                <sup>*</sup>
            </h1>

            <figure>
                <img src={SampleCollection} loading="lazy" alt="pharmacist" />
            </figure>
            <div className="image-with-text__details">
                <h1 data-aos="fade-up" >Free <span>Sample</span> Collection at <span>your</span> <span>Comfort</span> <sup>*</sup></h1>
                <ul data-aos="fade-up" data-aos-delay="100">
                    {
                        facility.map(data => <li key={data.text}>
                            <img src={Heart} loading="lazy" alt="medall heart" />
                            <p>{data.text}</p>
                        </li>
                        )
                    }
                </ul>
                <a data-aos="fade-up" data-aos-delay="200" href="#form_redirect">Book Your Test </a>
            </div>
        </div>
    )
}

export default ImageWithText