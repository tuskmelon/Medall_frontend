import React, { useState, useRef } from 'react'

import '../../styles/Corporate/CorporateServices.scss'

// import images 
import BloodSample from '../../assets/icons/blood-sample.svg'
import Vaccination from '../../assets/icons/vaccination.svg'
import Fax from '../../assets/icons/fax.svg'
import PlayingKid from '../../assets/icons/playing-kid.svg'
import HealthCheckup from '../../assets/icons/health-checkup.svg'
// import Trophies from '../../assets/images/trophies.jpg'
// import Check from '../../assets/icons/check-square.svg'
import SampleCollection from '../../assets/images/sample-collection.jpg'
import Vaccine from '../../assets/images/vaccine.jpg'
import Consultation from '../../assets/images/consultation.jpg'
import BrightMind from '../../assets/images/bright-mind.jpg'
import measuringBP from '../../assets/images/measuring-bp.jpg'


// import react-slick carousel library
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CorporateServices = ({ heading, highLightedHeading, description }) => {

    // Creating ref to Slider 
    const customeSlider = useRef();

    // give gradient border to Active Perk Slide 
    const [activeSlide, setActiveSlide] = useState(0);

    const perks = [
        {
            icon: HealthCheckup,
            text: 'Health Checkup'
        },
        {
            icon: Fax,
            text: 'Teleconsultation'
        },
        {
            icon: PlayingKid,
            text: 'Medall Mind'
        },
        {
            icon: Vaccination,
            text: 'Vaccination'
        },
        {
            icon: BloodSample,
            text: 'Home Collection'
        },
    ];

    const Slides = [
        {
            image: measuringBP,
            title: 'Health Checkup',
            description: 'We offer various services of health checkup such as Pre-employment checks, annual health check ups and more at an affordable price.'
        },
        {
            image: Consultation,
            title: 'Teleconsultation',
            description: 'In order to increase accessibility, convenience and maintain the continuity of care, Medall offers Virtual consultation with expert doctors.',
        },
        {
            image: BrightMind,
            title: 'Medall Mind',
            description: 'Medall mind is a health division which is dedicated to helping people cope with mental health issues.',
        },
        {
            image: Vaccine,
            title: 'Vaccination',
            description: 'Vaccination from Medall covers Typhoid, Hepatitis BB, Tetanus and other diseases.',
        },
        {
            image: SampleCollection,
            title: 'Home Collection',
            description: 'At Medall, to ease people out from commutation, we offer safe and hassle-free collections at your place of convenience.',
        },
    ]


    const carouselSettings = {
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        arrow: false,
        centermode: true,
        afterChange: function (index) {
            if (index) {
                setActiveSlide(index);
            } else {
                setActiveSlide(0);
            }
            console.log(index);
        }
    }

    // go to respective slide when clicked on Perks
    function gotToSlide(slideNumber) {
        customeSlider.current.slickGoTo(slideNumber);
    }
    return (
        <div className='corporate-services'>
            <div className="corporate-services__container">
                <div className="corporate-services__header">
                    <h1>{heading} <span> {highLightedHeading}</span></h1>
                    <h3>{description}</h3>
                </div>
                <div className="corporate-services__perks-container">
                    {
                        perks.map((perk, index) => <div className='corporate-services__perk-box' key={perk.title} onClick={() => {
                            gotToSlide(index)
                        }}>
                            {
                                activeSlide === index ? <div className="corporate-services__active-perk"></div> : null
                            }
                            {
                                activeSlide !== index ? <div className="corporate-services__inactive-perk"></div> : null
                            }

                            <img src={perk.icon} alt="perk icon" />
                            <p>{perk.text}</p>
                        </div>)
                    }
                </div>

                {/* Carousel  */}
                <Slider className='corporate-services__carousel' ref={customeSlider} {...carouselSettings}>

                    {
                        Slides.map(slide => <div className="corporate-services__perk-slide" key={slide.title}>
                            <div className="corporate-services__slide-inner-box">
                                <img src={slide.image} alt="sample collection" className='corporate-services__perk-image' />
                                <div className="corporate-services__perk-info">
                                    <div>
                                        <h2>{slide.title}</h2>
                                        <p className="corporate-services__perk-description">{slide.description} </p>
                                    </div>
                                    <a className="corporate-services__contact-btn" href="#enquiry_formcorporate">Contact Us</a>
                                </div>
                            </div>
                        </div>)
                    }
                </Slider>
            </div>
        </div>
    )
}

export default CorporateServices