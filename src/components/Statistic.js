import React, { useState, useEffect } from 'react'

import Heart from '../assets/icons/heart.svg'
// import WorldMap from '../assets/images/world-map.gif'

import '../styles/Statistic.scss'

const Statistic = () => {

    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {

        const handleScroll = () => {
            setScrollPosition(window.scrollY);
            // console.log(scrollPosition)
        };

        window.addEventListener('scroll', handleScroll);

        const counters = document.querySelectorAll(".statistic__count");

        counters.forEach((counter) => {
            counter.innerText = "0";

            const updateCounter = () => {
                const target = +counter.getAttribute("data-target");
                const c = +counter.innerText;

                const increment = target / 200;
                // console.log(increment);

                if (c < target) {
                    counter.innerText = `${Math.ceil(c + increment)}`;
                    setTimeout(updateCounter, 1);

                } else {
                    counter.innerText = target;
                }
            };

            if (scrollPosition > 500) {
                updateCounter();
            }

        });

        // return () => {
        //     window.removeEventListener('scroll', handleScroll);
        // };
    },
        [scrollPosition])


    return (
        <div className='statistic'>

            <h1 className='statistic__header'>Experts who <span>care</span> <img src={Heart} alt="" /></h1>

            <p className='statistic__description-mobile'>As India's largest Integrated Diagnostic Service, with 200+ experienced pathologists and radiologists, we offer 1300+ pathology tests and 800+ radiology studies. Medall has state-of-the-art centralized referral laboratories as well as a wide network of satellite laboratories across India.</p>

            <div className="statistic__container">
                <div className="statistic__details">
                    <p className='statistic__description'>As India's largest Integrated Diagnostic Service, with 200+ experienced pathologists and radiologists, we offer 1300+ pathology tests and 800+ radiology studies. Medall has state-of-the-art centralized referral laboratories as well as a wide network of satellite laboratories across India.</p>
                    <div className="statistic__data">
                        <div className="statistic__tests">
                            <h4><span className='statistic__count' data-target="44">44</span>M <sup>+</sup></h4>
                            <p>Test Taken</p>
                        </div>
                        <div className="statistic__customer">
                            <h4><span className='statistic__count' data-target="10">10</span>M <sup>+</sup></h4>
                            <p>People Served</p>
                        </div>
                        <div className="statistic__locations">
                            <h4><span className='statistic__count' data-target="7500">7500</span><sup>+</sup></h4>
                            <p>Customer Touch Points

                            </p>
                        </div>
                    </div>
                    <a href="#most-selling-packages">Take control of your health</a>
                </div>

                <div className="statistic__world-map">
                    {/* <img src={WorldMap} alt="world map" /> */}
                    <video width="100%" height="100%" playsInline webkit-playsinline="true" loop autoPlay muted>
                        <source type="video/mp4" src="https://medall.s3.ap-south-1.amazonaws.com/India+map_Medall_A.mp4" />
                    </video>
                </div>
            </div>
        </div>
    )
}

export default Statistic