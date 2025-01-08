import React, { useState, useRef } from 'react'

import '../../styles/Corporate/WhyUs.scss'

// import react-slick carousel library
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Heart from '../../assets/icons/medall-heart.svg'

const WhyUs = () => {

    const [activeSlideNum, setActiveSlideNum] = useState(0);

    const customeSlider = useRef();

    const carouselSettings = {
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        arrows: false,
        afterChange: function (index) {
            if (index === 2) {
                setActiveSlideNum(2);
            } else if (index === 1) {
                setActiveSlideNum(1);
            } else {
                setActiveSlideNum(0)
            }
            console.log(index);
        }
    }

    // go to respective slide when clicked on buttons 
    function gotToSlide(slideNumber) {
        customeSlider.current.slickGoTo(slideNumber);
    }

    return (
        <div className='why-us'>
            <div className="why-us__info">
                <h1>Why Choose <span>Medall</span></h1>
                <p>With a legacy of precision and care, we at Medall offer tailored health solutions, fostering your employees well-being and empowering your business to thrive.
                </p>
                <div className="why-us__buttons-container">
                    <button onClick={() => { gotToSlide(0) }} className={activeSlideNum === 0 ? ' why-us__slide-tag-btn why-us__slide-tag-btn--active' : 'why-us__slide-tag-btn'}>Web Portal</button>

                    <button onClick={() => { gotToSlide(1) }} className={activeSlideNum === 1 ? 'why-us__slide-tag-btn why-us__slide-tag-btn--active' : 'why-us__slide-tag-btn'}>Customer Support</button>

                    <button onClick={() => { gotToSlide(2) }} className={activeSlideNum === 2 ? ' why-us__slide-tag-btn why-us__slide-tag-btn--active' : 'why-us__slide-tag-btn'}>Track Record</button>
                </div>
            </div>

            <div className="why-us__carousel-container">
                <Slider className='why-us__carousel' ref={customeSlider} {...carouselSettings}>
                    {/* Slide- 01   */}
                    <div className="why-us__slide">
                        <h2>Web Portal</h2>
                        <div className='why-us__slide-info'>
                            <p><img src={Heart} alt="heart" /> <span>Ease of appoinment booking</span></p>
                            <p><img src={Heart} alt="heart" /> <span>Online reports</span></p>
                            <p><img src={Heart} alt="heart" /> <span>Health risk assessment</span></p>
                            <p><img src={Heart} alt="heart" /> <span>MIS dashboard for HR . easy access to
                                your employee data</span></p>
                        </div>
                        <a href="#enquiry_formcorporate">Enquire Now</a>
                    </div>

                    {/* Slide- 02   */}
                    <div className="why-us__slide">
                        <h2>Customer Support</h2>
                        <div className='why-us__slide-info'>
                            <p><img src={Heart} alt="heart" /> <span>In-house 24/7 call center</span></p>
                            <p><img src={Heart} alt="heart" /> <span>Online and offline support</span></p>
                            <p><img src={Heart} alt="heart" /> <span>Trained and skilled executives</span></p>
                            <p><img src={Heart} alt="heart" /> <span>40% female technicians in most of our centre</span></p>
                            <p><img src={Heart} alt="heart" /> <span>Follow up care and advice</span></p>
                        </div>
                        <a href="#enquiry_formcorporate">Enquire Now</a>
                    </div>

                    {/* SLIDE- 03  */}
                    <div className="why-us__slide">
                        <h2>Track Record</h2>
                        <div className='why-us__slide-info'>
                            <p><img src={Heart} alt="heart" /> <span>NABL and other prestigious accrediations </span></p>
                            <p><img src={Heart} alt="heart" /> <span>10+ years of experience in diagnostics</span></p>
                            <p><img src={Heart} alt="heart" /> <span>500+ wellness corporate clients</span></p>
                            <p><img src={Heart} alt="heart" /> <span>2 lakh+ health checks a year</span></p>
                        </div>
                        <a href="#enquiry_formcorporate">Enquire Now</a>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default WhyUs