import React, { useContext, useState } from 'react'

// import react-slick carousel library
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import '../styles/Radiology.scss'

// import Thumbnails 
// import CheckingXRay from '../assets/images/checking-xray.jpg'
// import CTScan from '../assets/images/ct-scan.jpg'
// import USG from '../assets/images/mrihome.jpg'
// import MRI from '../assets/images/usghome.jpg'

import { OpenRadiologyMenu } from '../context/OpenRadiologyMenu';

const Radiology = () => {
    const [nextArrowColor, setNextArrowColor] = useState('#B41E85');
    const [prevArrowColor, setPrevArrowColor] = useState('#AFAFAF');

    const openRadiologyMenu = useContext(OpenRadiologyMenu);

    const TestCards = [
        {
            thumbnail: 'https://medallwebsite.s3.ap-south-1.amazonaws.com/HomePage/X-ray.jpg',
            testName: 'X-ray',
            description: 'Book your X-ray now!',
            terms: '*T&C',
            price: 450,
            openMenuReference: 'openRadiologyXrayMenu'
        }, {
            thumbnail: 'https://medallwebsite.s3.ap-south-1.amazonaws.com/HomePage/USG.jpg',
            testName: 'USG (Ultrasound)',
            description: 'Book your Ultrasound now! ',
            terms: '*T&C',
            price: 560,
            openMenuReference: 'openRadiologyUsgMenu'
        },
        {
            thumbnail: 'https://medallwebsite.s3.ap-south-1.amazonaws.com/HomePage/CT.jpg',
            testName: 'CT Scan',
            description: 'Book your CT Scan now!',
            terms: '*T&C',
            price: 450,
            openMenuReference: 'openRadiologyCtMenu'
        },

        {
            thumbnail: "https://medallwebsite.s3.ap-south-1.amazonaws.com/HomePage/MRI.jpg",
            testName: 'MRI Scan',
            description: 'Book your MRI Scan now!',
            terms: '*T&C',
            price: 560,
            openMenuReference: 'openRadiologyMriMenu'
        },
    ]

    // Adding carousel functionlaity 
    //creating the ref
    const customeSlider = React.createRef();

    const carouselSettings = {
        dots: false,
        slidesToShow: 2.5,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        initialSlide: 0,
        arrow: false,
        infinite: false,
        afterChange: function (index) {
            if (index === 1) {
                setNextArrowColor('#AFAFAF');
                setPrevArrowColor('#B41E85');
            } else {
                setNextArrowColor('#B41E85');
                setPrevArrowColor('#AFAFAF');
            }
        },
        responsive: [
            {
                breakpoint: 1319,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 1109,
                settings: {
                    slidesToShow: 2.5,

                }
            },
            {
                breakpoint: 856,
                settings: {
                    slidesToShow: 2.2,
                }
            },
            {
                breakpoint: 749,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 692,
                settings: {
                    slidesToShow: 1.6,
                }
            },
            {
                breakpoint: 555,
                settings: {
                    slidesToShow: 1.4,
                }
            },
            {
                breakpoint: 420,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    }

    function previousSlide() {
        customeSlider.current.slickPrev();
    }

    function nextSlide() {
        customeSlider.current.slickNext();
    }

    const handleViewRedirect = (menuToOpen) => {
        window.scrollTo(0, 0);
        openRadiologyMenu.openRadiologyMenuReducerDispatch({ type: menuToOpen });
    }

    return (
        <div className='radiology'>
            <div className="radiology__container">
                <div className='radiology__slide-control-buttons'>
                    <button className="radiology__slide-left" onClick={() => previousSlide()}>
                        <svg width="63" height="20" viewBox="0 0 63 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M61 11.25C61.6904 11.25 62.25 10.6904 62.25 10C62.25 9.30964 61.6904 8.75 61 8.75V11.25ZM1.11612 9.11612C0.627964 9.60427 0.627964 10.3957 1.11612 10.8839L9.07107 18.8388C9.55922 19.327 10.3507 19.327 10.8388 18.8388C11.327 18.3507 11.327 17.5592 10.8388 17.0711L3.76777 10L10.8388 2.92893C11.327 2.44078 11.327 1.64932 10.8388 1.16117C10.3507 0.67301 9.55922 0.67301 9.07107 1.16117L1.11612 9.11612ZM61 8.75L2 8.75V11.25L61 11.25V8.75Z" fill={prevArrowColor} />
                        </svg>
                    </button>

                    <button className="radiology__slide-right" onClick={() => nextSlide()}>
                        <svg width="98" height="20" viewBox="0 0 98 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 8.75C1.30964 8.75 0.75 9.30964 0.75 10C0.75 10.6904 1.30964 11.25 2 11.25V8.75ZM96.8839 10.8839C97.372 10.3957 97.372 9.60427 96.8839 9.11612L88.9289 1.16117C88.4408 0.67301 87.6493 0.67301 87.1612 1.16117C86.673 1.64932 86.673 2.44078 87.1612 2.92893L94.2322 10L87.1612 17.0711C86.673 17.5592 86.673 18.3507 87.1612 18.8388C87.6493 19.327 88.4408 19.327 88.9289 18.8388L96.8839 10.8839ZM2 11.25H96V8.75H2V11.25Z" fill={nextArrowColor} />
                        </svg>
                    </button>
                </div>

                <div className="radiology__details">
                    <h2>Radiology  &  Imaging <span>Tests</span></h2>
                    <p>Radiology relies on cutting-edge imaging technologies to achieve precise diagnoses and treatments for a wide range of diseases and injuries. With state-of-the-art equipment and machinery, it can generate detailed images of internal structures, including bones, muscles, organs, and blood vessels, offering unparalleled accuracy in medical diagnostics.</p>
                </div>
                <div className="radiology__carousel-container">
                    <Slider className='radiology__carousel' ref={customeSlider} {...carouselSettings}>
                        {
                            TestCards.map(card => <div className="radiology__slide" key={card.description}>
                                <div className="radiology__test-card">
                                    <img src={card.thumbnail} loading="lazy" alt="thumbnail" />
                                    <div className="radiology__text-content">
                                        <h3>
                                            <p>{card.testName}</p>
                                            <p>Starting @ <span>&#8377;{card.price}/-*</span></p>
                                        </h3>
                                        <div className="termsdescp">
                                            <p className='radiology__card-description'>{card.description}</p>
                                            <p className='radiology__card-description'>{card.terms}</p>
                                        </div>
                                        <button onClick={() => handleViewRedirect(card.openMenuReference)}>View More</button>
                                    </div>
                                </div>
                            </div>
                            )
                        }
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Radiology
