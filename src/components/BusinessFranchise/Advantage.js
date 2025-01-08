import React, { useState, useRef } from 'react'

import '../../styles/BusinessFranchise/Advantage.scss'

// import react-slick carousel library
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Advantage = () => {

    const [activeSlideNum, setActiveSlideNum] = useState(0)

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
            }
            else if (index === 3) {
                setActiveSlideNum(3);
            } else if (index === 4) {
                setActiveSlideNum(4);
            } else if (index === 5) {
                setActiveSlideNum(5);
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

    // Adantages list 
    const advantages = [
        {
            title: "Superior ROI",
            description: "We guarantee a loftier ROI with strong brand trust, expert support, advanced AI driven technology, efficiency, multiple revenue streams, and community connections."
        },
        {
            title: "Good Profit Margin",
            description: "At Medall Diagnostics, we promise robust profit margins, driven by efficient operations, diverse services, and growing demand, ensuring you a stupendous financial success."
        },
        {
            title: "Strong Network",
            description: "We take pride in possessing a robust network, uniting entrepreneurs, healthcare professionals, and communities. Together, we amplify success, innovation, and healthcare excellence."
        },
        {
            title: "Operational Guidance",
            description: "Rely on Medall's expert operational guidance for seamless setup and success in your diagnostic franchise venture. Your success is our priority."
        },
        {
            title: "Franchise Format",
            description: "With a trusted brand and advanced diagnostics, Medall Diagnostic center offers success and full support. Kickstart your entrepreneurial journey.",
            descriptionOther: "Ready to embark on your entrepreneurial journey with Medall? Join our trusted healthcare network today."
        },
    ]

    return (
        <div className='advantage'>
            <div className="advantage__info">
                <h1>Advantage of <span>Medall</span></h1>

                <div className="advantage__buttons-container">
                    <button onClick={() => { gotToSlide(0) }} className={activeSlideNum === 0 ? ' advantage__slide-tag-btn advantage__slide-tag-btn--active' : 'advantage__slide-tag-btn'}>{advantages[0].title}</button>

                    <button onClick={() => { gotToSlide(1) }} className={activeSlideNum === 1 ? 'advantage__slide-tag-btn advantage__slide-tag-btn--active' : 'advantage__slide-tag-btn'}>{advantages[1].title}</button>

                    <button onClick={() => { gotToSlide(2) }} className={activeSlideNum === 2 ? ' advantage__slide-tag-btn advantage__slide-tag-btn--active' : 'advantage__slide-tag-btn'}>{advantages[2].title}</button>

                    <button onClick={() => { gotToSlide(3) }} className={activeSlideNum === 3 ? ' advantage__slide-tag-btn advantage__slide-tag-btn--active' : 'advantage__slide-tag-btn'}>{advantages[3].title}</button>

                    <button onClick={() => { gotToSlide(4) }} className={activeSlideNum === 4 ? ' advantage__slide-tag-btn advantage__slide-tag-btn--active' : 'advantage__slide-tag-btn'}>{advantages[4].title}</button>
                </div>
                <a className='advantage__enquiry-btn' href="#enquiry_formfranchise">Enquire Now</a>
            </div>

            <div className="advantage__carousel-container">
                <Slider className='advantage__carousel' ref={customeSlider} {...carouselSettings}>
                    {/* Slides  */}
                    {
                        advantages.map(advantage => <div className="advantage__slide" key={advantage.title}>
                            <h2>{advantage.title}</h2>
                            <p>{advantage.description}</p>
                        </div>)
                    }
                </Slider>
            </div>
        </div>
    )
}

export default Advantage