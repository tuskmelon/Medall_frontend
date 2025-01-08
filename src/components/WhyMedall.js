import React, { useState, useEffect, useRef } from 'react'

// import react-slick carousel library
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import '../styles/WhyMedall.scss'

// import MRI from '../assets/images/mri.jpg'
import Check from '../assets/icons/check-circle.svg'

const WhyMedall = () => {
    // Highlighting Text Based on Dispalyed Slide 
    const [activeClassNameNameForTextOne, setActiveClassNameForTextOne] = useState('');
    const [activeClassNameNameForTextTwo, setActiveClassNameForTextTwo] = useState('');
    const [activeClassNameNameForTextThree, setActiveClassNameForTextThree] = useState('');
    const [activeClassNameNameForTextFour, setActiveClassNameForTextFour] = useState('');

    // Creating ref to Slider 
    const verticalSlider = useRef();

    // Creating ref for targeting video
    const topNotch = useRef();
    const unbeatable = useRef();
    const staff = useRef();
    const caring = useRef();

    useEffect(() => {

        if (window.innerWidth >= 940) {
            window.addEventListener('scroll', () => {

                if (document.getElementById('why-medall__details') !== null) {
                    const TextDetailsContainer = document.getElementById('why-medall__details').getBoundingClientRect();

                    // Getting each slide 
                    const slideOne = document.getElementById('why-medall__slide-one').getBoundingClientRect();
                    // const slideTwo = document.getElementById('why-medall__slide-two').getBoundingClientRect();
                    const slideThree = document.getElementById('why-medall__slide-three').getBoundingClientRect();
                    const slideFour = document.getElementById('why-medall__slide-four').getBoundingClientRect();

                    if (TextDetailsContainer.top - slideOne.top < 180) {
                        // Adding "active" modifier in className, if Position difference of Text-Content-Box and Slide is less than 300 
                        setActiveClassNameForTextOne('active');
                        setActiveClassNameForTextTwo('');
                        setActiveClassNameForTextThree('');
                        setActiveClassNameForTextFour('');

                    } else if (TextDetailsContainer.top - slideOne.top > 180) {
                        setActiveClassNameForTextTwo('active');
                        setActiveClassNameForTextOne('');
                        setActiveClassNameForTextThree('');
                        setActiveClassNameForTextFour('');
                    }
                    else {
                        setActiveClassNameForTextOne('');
                        setActiveClassNameForTextTwo('');
                        setActiveClassNameForTextThree('');
                        setActiveClassNameForTextFour('');
                    }

                    if (slideThree.top - TextDetailsContainer.top < 170) {
                        setActiveClassNameForTextThree('active');
                        setActiveClassNameForTextOne('');
                        setActiveClassNameForTextTwo('');
                        setActiveClassNameForTextFour('');
                    }

                    if (slideFour.top - TextDetailsContainer.top < 170) {
                        setActiveClassNameForTextFour('active');
                        setActiveClassNameForTextOne('');
                        setActiveClassNameForTextTwo('');
                        setActiveClassNameForTextThree('');
                    }
                }
            })

        }


        // Showing Video according to Active Text 
        if (activeClassNameNameForTextOne === 'active') {
            verticalSlider.current.slickGoTo(0);
            topNotch.current.play();
            unbeatable.current.pause();
            staff.current.pause();
        }

        else if (activeClassNameNameForTextTwo === 'active') {
            verticalSlider.current.slickGoTo(1);
            unbeatable.current.play();
            topNotch.current.pause();
            staff.current.pause();
        }

        else if (activeClassNameNameForTextThree === 'active') {
            verticalSlider.current.slickGoTo(2);
            staff.current.play();
            topNotch.current.pause();
            unbeatable.current.pause();
        } else if (activeClassNameNameForTextFour === 'active') {
            verticalSlider.current.slickGoTo(3);
            caring.current.play();
            staff.current.pause();
            topNotch.current.pause();
            unbeatable.current.pause();
        } else {
            topNotch.current.pause();
            unbeatable.current.pause();
            staff.current.pause();
        }

    }, [activeClassNameNameForTextOne, activeClassNameNameForTextTwo, activeClassNameNameForTextThree, activeClassNameNameForTextFour]);


    // go to respective slide when clicked on Text
    function gotToSlide(slideNumber) {
        verticalSlider.current.slickGoTo(slideNumber);
    }

    // making side text Active when moved slider by hovering
    function activeSlide(num) {
        if (num === 0) {
            setActiveClassNameForTextOne('active');
            setActiveClassNameForTextTwo('');
            setActiveClassNameForTextThree('');
        } else if (num === 1) {
            setActiveClassNameForTextTwo('active');
            setActiveClassNameForTextOne('');
            setActiveClassNameForTextThree('');
        } else if (num === 2) {
            setActiveClassNameForTextThree('active');
            setActiveClassNameForTextOne('');
            setActiveClassNameForTextTwo('');
        } else if (num === 3) {
            setActiveClassNameForTextFour('active');
            setActiveClassNameForTextOne('');
            setActiveClassNameForTextTwo('');
            setActiveClassNameForTextThree('');
        }
    }

    const carouselSettings = {
        ref: verticalSlider,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        vertical: true,
        verticalSwiping: true,
        arrows: false,
        speed: 500,
        infinite: false,
        afterChange: (current) => activeSlide(current),
        responsive: [
            {
                breakpoint: 940,
                settings: {
                    vertical: false,
                    dots: true,
                    verticalSwiping: false,
                    autoplay: true,
                }
            },
        ]
    }

    return (
        <div>
            <h2 className='why-medall-header-mobile'>Why Choose <span>Medall ?</span></h2>
            <div className='why-medall' id="why-medall">
                <div className="why-medall__slider-container">
                    <Slider className="why-medall__slider" {...carouselSettings}>
                        <span className='why-medall__video-container'>
                            <video className="why-medall__video" ref={topNotch} playsInline webkit-playsinline="true" loop muted >
                                <source type="video/mp4" src="https://medall.s3.ap-south-1.amazonaws.com/millionlives.mp4" />
                            </video>
                            <p>
                                <img src={Check} alt="check icon" />
                                <span>In-house doctors expertised in Pathology and Radiology</span>
                            </p>
                        </span>

                        <span className='why-medall__video-container'>
                            <video className="why-medall__video" ref={unbeatable} playsInline webkit-playsinline="true" loop muted >
                                <source type="video/mp4" src="https://medall.s3.ap-south-1.amazonaws.com/radiologyvideo.mp4" />
                            </video>
                            <p>
                                <img src={Check} alt="check icon" />
                                <span>Diagnostic Radiology with people-centric care</span>
                            </p>
                        </span>

                        <span className='why-medall__video-container'>
                            <video className="why-medall__video" ref={staff} playsInline webkit-playsinline="true" loop muted >
                                <source type="video/mp4" src="https://medall.s3.ap-south-1.amazonaws.com/Staff_.mp4" />
                            </video>
                            <p>
                                <img src={Check} alt="check icon" />
                                <span>Laboratory with state-of-the-art-technology</span>
                            </p>
                        </span>

                        <span className='why-medall__video-container'>
                            <video className="why-medall__video" ref={caring} playsInline webkit-playsinline="true" loop muted >
                                <source type="video/mp4" src="https://medall.s3.ap-south-1.amazonaws.com/network.mp4" />
                            </video>
                            <p>
                                <img src={Check} alt="check icon" />
                                <span>Growing network with more than 7500+ touch points to serve you better</span>
                            </p>
                        </span>
                    </Slider>
                    <div className="why-medall__slider-hidden">
                        <div id='why-medall__slide-one'></div>
                        <div id='why-medall__slide-two'></div>
                        <div id='why-medall__slide-three'></div>
                        <div id='why-medall__slide-four'></div>
                    </div>
                </div>
                <div className="why-medall__details" id='why-medall__details'>
                    <h2>Why Choose <span>Medall ?</span></h2>
                    <ul>
                        <li className={`why-medall__slide-text why-medall__slide-text--${activeClassNameNameForTextOne}`} onClick={() => { gotToSlide(0); setActiveClassNameForTextOne('active'); setActiveClassNameForTextTwo(''); setActiveClassNameForTextThree(''); setActiveClassNameForTextFour('') }}>
                            <img src={Check} alt="check icon" />
                            <span>In-house doctors expertised in Pathology and Radiology</span>
                        </li>

                        <li className={`why-medall__slide-text why-medall__slide-text--${activeClassNameNameForTextTwo}`} onClick={() => { gotToSlide(1); setActiveClassNameForTextTwo('active'); setActiveClassNameForTextOne(''); setActiveClassNameForTextThree(''); setActiveClassNameForTextFour('') }}>
                            <img src={Check} alt="check icon" />
                            <span>Diagnostic Radiology with people-centric care</span>
                        </li>

                        <li className={`why-medall__slide-text why-medall__slide-text--${activeClassNameNameForTextThree}`} onClick={() => { gotToSlide(2); setActiveClassNameForTextThree('active'); setActiveClassNameForTextOne(''); setActiveClassNameForTextTwo(''); setActiveClassNameForTextFour('') }}>
                            <img src={Check} alt="check icon" />
                            <span>Laboratory with state-of-the-art-technology</span>
                        </li>

                        <li className={`why-medall__slide-text why-medall__slide-text--${activeClassNameNameForTextFour}`} onClick={() => { gotToSlide(3); setActiveClassNameForTextFour('active'); setActiveClassNameForTextOne(''); setActiveClassNameForTextTwo(''); setActiveClassNameForTextThree('') }}>
                            <img src={Check} alt="check icon" />
                            <span>Growing network with more than 7500+ touch points to serve you better</span>
                        </li>
                    </ul>
                </div>
                <div className='why-medall__overflow-hider' id="why-medall__overflow-hider"></div>
                <div className='why-medall__overflow-hider-bottom' id="why-medall__overflow-hider-bottom"></div>
            </div>
        </div>
    )
}

export default WhyMedall