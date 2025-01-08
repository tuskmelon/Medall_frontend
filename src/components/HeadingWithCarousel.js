import React from 'react'
import '../styles/HeadingWithCarousel.scss'

// import react-slick carousel library
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeadingWithCarousel = ({ labData }) => {
    const carouselSettings = {
        dots: true,
        slidesToShow: 3.2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        initialSlide: 1,
        arrow: false,
        responsive: [
            {
                breakpoint: 613,
                settings: {
                    slidesToShow: 1,
                }
            },

        ]
    }

    return (
        <div className='heading-with-carousel'>
            <div className="heading-with-carousel__header">
                <h1>{labData[0].title} <span>{labData[0].colourTitle}</span></h1>
                {/* <h3>{labData[0].subTitle}</h3> */}
            </div>
            <div className="heading-with-carousel__carousel-container">
                <Slider className='heading-with-carousel__carousel'  {...carouselSettings}>
                    {
                        labData[1].map(slide => <div className='heading-with-carousel__slide' key={slide.slideTitle}>
                            {/* <h3>{slide.slideTitle}</h3> */}
                            {/* <p>{slide.slideDescription}</p> */}
                            <img src={slide.slideImage} alt="" />
                        </div>)
                    }
                </Slider>
            </div>

        </div>
    )
}

export default HeadingWithCarousel