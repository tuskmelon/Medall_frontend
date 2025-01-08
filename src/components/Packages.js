import React from 'react'
import { Link } from 'react-router-dom'

// import react-slick carousel library
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import '../styles/Packages.scss'

const Packages = ({ packageCards, packageHeader }) => {

    const carouselSettings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows: false,
        responsive: [
            {
                breakpoint: 1295,
                settings: {
                    slidesToShow: 2.8,
                }
            },
            {
                breakpoint: 1177,
                settings: {
                    slidesToShow: 2.6,
                }
            },
            {
                breakpoint: 994,
                settings: {
                    slidesToShow: 2.4,
                }
            },
            {
                breakpoint: 810,
                settings: {
                    slidesToShow: 2.2,
                }
            },
            {
                breakpoint: 751,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 674,
                settings: {
                    slidesToShow: 1.7,
                }
            },
            {
                breakpoint: 618,
                settings: {
                    slidesToShow: 1.4,
                    initialSlide: 0,
                }
            },
            {
                breakpoint: 545,
                settings: {
                    slidesToShow: 1,
                    initialSlide: 0,
                }
            },
        ]
    }

    return (
        <div className='packages' id='most-selling-packages'>
            <div className="packages__header" >
                <h2>{packageHeader.title}</h2>
                <h3>{packageHeader.subTitle}</h3>
            </div>
            <div className="packages__cards-container">
                <Slider className='packages__carousel' {...carouselSettings}>
                    {
                        packageCards.map(card => <div key={card.packName} className='packages__slide'>
                            <div className="packages__card">
                                <div className="packages__card-text-content">
                                    <h4>{card.title}</h4>
                                    <h5>{card.packName}</h5>
                                    <ul>
                                        <li style={{ display: (card.packName === "Premium" || card.packName === "Pro") ? "none" : "" }}>Physician Consultation</li>
                                    </ul>
                                    <p><span className="rupee_sign">₹</span>{card.priceToDisplay}/-{card.priceMark}</p>
                                    <Link to={card.packagePageLink}>Book Now</Link>
                                </div>
                                <img src={card.thumbnail} loading="lazy" alt="members" />
                            </div>
                        </div>)
                    }
                </Slider>
            </div>
            <div className="packages__side-image">
                {/* <img src={Leaf} alt="leaf" /> */}
            </div>
        </div>
    )
}

export default Packages