import React, { useState, useRef } from 'react'

import '../../styles/BusinessFranchise/SideMenuCarousel.scss'

// import react-slick carousel library
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Heart from '../../assets/icons/medall-heart.svg'
import Laptop from '../../assets/icons/laptop.svg'
import TodoPad from '../../assets/icons/todo-pad.svg'
import MagnifyingGlass from '../../assets/icons/magnifying-glass.svg'
import Graph from '../../assets/icons/graph-chart.svg'
import Monitor from '../../assets/icons/monitor-with-location.svg'
import procure from '../../assets/icons/procurement.svg'

const SideMenuCarousel = () => {

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
        // responsive=[{

        // }]
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
            // console.log(index);
        }
    }

    // go to respective slide when clicked on buttons 
    function gotToSlide(slideNumber) {
        customeSlider.current.slickGoTo(slideNumber);
    }

    const slides = [
        {
            title: 'Setup Support',
            info: [
                {
                    text: 'Site Selection'
                },
                {
                    text: 'Layout & BOQ '
                },
                {
                    text: 'Branding support - Vendor introduction & Creatives'
                },
            ]
        },
        {
            title: 'Marketing and Sales Support',
            info: [
                {
                    text: 'Recruiting & training of centre operations team'
                },
                {
                    text: 'Sales Planning and analysis'
                },
                {
                    text: 'Doctor mapping in the assigned territory'
                },
                {
                    text: 'Marketing support for camps/regular Promotions/ filter on products'
                }
                // {
                //     text: 'Marketing support for camps/regular Promotions/ filter on products'
                // }
            ]
        },
        {
            title: 'Clinical Support',
            info: [
                {
                    text: 'Lab sample processing in NABL Accrediated Labs'
                },
                {
                    text: 'Standardised Consumables'
                },
                {
                    text: 'Quality Audits'
                },
                {
                    text: 'Interactions of senior Pathologist / Radiologists With your referal Doctors'
                },
                {
                    text: 'Digital reporting through experienced pathologists'
                },
                {
                    text: 'Accurate results with quicker TAT'
                },
            ]
        },
        {
            title: 'Training & Operational Support',
            info: [
                {
                    text: 'Initial staff recruitment'
                },
                {
                    text: '3-5 days for in-person training for the franchise and staff'
                },
                {
                    text: 'Monthly governance meeting'
                },
                {
                    text: 'Standardised and process driven operations'
                },
                {
                    text: 'Online appointment scheduling'
                },
            ]
        },
        {
            title: 'Logistics & IT Support',
            info: [
                {
                    text: 'Logistics support to bring the lab sample to Medall lab'
                },
                {
                    text: 'Robust billing software'
                },
                {
                    text: 'Business Analytics, MIS, Cost Management System, Procurement System'
                },
                // {
                //     text: 'Marketing support for camps/regular Promotions/ filter on products'
                // }
            ]
        },
        {
            title: 'Procurement & Inventory Support',
            info: [
                {
                    text: 'Quality Products at Medall Pricing'
                },
                {
                    text: 'Procurement process to be captured in Medall'
                },
                {
                    text: 'Purchase Portal (MPMS)'
                },
                {
                    text: 'Pre analytics and stationery to be purchased through Medall authorised distributors'
                }
            ]
        },
    ]

    return (
        <div className='side-menu-carousel'>
            <div className="side-menu-carousel__header">
                <h1>Support <span>From Medall</span></h1>
            </div>

            <div className="side-menu-carousel__container">
                <div className="side-menu-carousel__menu-bar">
                    <ul>
                        <li onClick={() => { gotToSlide(0) }} className={activeSlideNum === 0 ? ' side-menu-carousel__menu-item side-menu-carousel__menu-item--active' : 'side-menu-carousel__menu-item'}>
                            <span >
                                <img src={Laptop} alt="support" />
                            </span>
                            <p> Setup Support</p>
                        </li>
                        <li onClick={() => { gotToSlide(1) }} className={activeSlideNum === 1 ? ' side-menu-carousel__menu-item side-menu-carousel__menu-item--active' : 'side-menu-carousel__menu-item'}>
                            <span>
                                <img src={TodoPad} alt="laptop" />
                            </span>
                            <p>Marketing and Sales Support</p>
                        </li>
                        <li onClick={() => { gotToSlide(2) }} className={activeSlideNum === 2 ? ' side-menu-carousel__menu-item side-menu-carousel__menu-item--active' : 'side-menu-carousel__menu-item'}>
                            <span>
                                <img src={MagnifyingGlass} alt="magnifying glass" />
                            </span>
                            <p>Clinical Support</p>
                        </li>
                        <li onClick={() => { gotToSlide(3) }} className={activeSlideNum === 3 ? ' side-menu-carousel__menu-item side-menu-carousel__menu-item--active' : 'side-menu-carousel__menu-item'}>
                            <span>
                                <img src={Graph} alt="graph" />
                            </span>
                            <p>Training & Operational Support</p>
                        </li>
                        <li onClick={() => { gotToSlide(4) }} className={activeSlideNum === 4 ? ' side-menu-carousel__menu-item side-menu-carousel__menu-item--active' : 'side-menu-carousel__menu-item'}>
                            <span>
                                <img src={Monitor} alt="monitor" />
                            </span>
                            <p>Logistics & IT Support</p>
                        </li>
                        <li onClick={() => { gotToSlide(5) }} className={activeSlideNum === 5 ? ' side-menu-carousel__menu-item side-menu-carousel__menu-item--active' : 'side-menu-carousel__menu-item'}>
                            <span>
                                <img src={procure} alt="procure" />
                            </span>
                            <p>Procurement & Inventory Support</p>
                        </li>
                    </ul>
                </div>


                {/* Slider  */}
                <div className="side-menu-carousel__carousel-container">

                    <Slider className='side-menu-carousel__carousel' ref={customeSlider} {...carouselSettings}>

                        {/* SLIDE-01     */}
                        {
                            slides.map(slide => <div className="side-menu-carousel__slide" key={slide.title}>
                                <h2>{slide.title}</h2>

                                <ul>
                                    {
                                        slide.info.map(description => <li key={description.text}>
                                            <img src={Heart} alt="medall heart" />
                                            <p>{description.text}</p>
                                        </li>)
                                    }
                                </ul>
                                <a className='side-menu-carousel__enquiry-btn' href="#enquiry_formfranchise">Enquire Now</a>
                            </div>)
                        }
                    </Slider>
                </div>
            </div>
        </div >
    )
}

export default SideMenuCarousel
