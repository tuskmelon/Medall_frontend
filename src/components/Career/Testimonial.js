import React from 'react'

// import react-slick carousel library
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import '../../styles/Career/Testimonial.scss'

// import images 
import Maheswaran from '../../assets/images/employee/Maheswaran.png'
import Venkat from '../../assets/images/employee/Venkatrayan.png'
import Mala from '../../assets/images/employee/Mala.png'
import SateshKumar from '../../assets/images/employee/Sateshkumar.png'
import Geetha from '../../assets/images/employee/Geetha.png'

const Testimonial = () => {

    // const testimonial = [
    //     {
    //         image: Shena,
    //         name: 'Venkatrayan TP',
    //         review: 'I am incredibly proud to be part of the Medall Diagnostics family.It's an honor to work with such a dedicated and compassionate team, where we make a meaningful impact on people's lives every day.',
    //     },
    //     {
    //         image: Mohan,
    //         name: 'Maheswaran R',
    //         review: ' I've found not just a workplace but a second home. The culture of collaboration, continuous learning, and support is remarkable. Our leadership team's vision and dedication to excellence motivate us to strive for the best.'
    //     },
    //     {
    //         image: Dharshini,
    //         name: 'Sateshkumar Raman',
    //         review: 'Medall has been a game-changer in my career. There are opportunities for professional development and growth at our company. It's a place where every employee's contribution is valued. I'm grateful to be part of this organisation.'
    //     },
    //     {
    //         image: Mohan,
    //         name: 'Mala S',
    //         review: 'Here teamwork and excellence is valued. Working here has been an inspiring journey, and I appreciate the trust and support I've received from my colleagues and leadership.',
    //     },
    //     {
    //         image: Shena,
    //         name: 'Geetha Lakshmi V',
    //         review: ' I'm grateful to be a part of Medall Diagnostics. It's a wonderful place to work because everyone here cares about each other and our patients. The company also supports our growth and learning, which is awesome.'
    //     },
    // ];
    const testimonial = [
        {
            image: Venkat,
            name: 'Venkatrayan TP',
            review: 'I am incredibly proud to be part of the Medall Diagnostics family. It\'s an honor to work with such a dedicated and compassionate team, where we make a meaningful impact on people\'s lives every day.',
        },
        {
            image: Maheswaran,
            name: 'Maheswaran R',
            review: 'I\'ve found not just a workplace but a second home. The culture of collaboration, continuous learning, and support is remarkable. Our leadership team\'s vision and dedication to excellence motivate us to strive for the best.'
        },
        {
            image: SateshKumar,
            name: 'Sateshkumar Raman',
            review: 'Medall has been a game-changer in my career. There are opportunities for professional development and growth at our company. It\'s a place where every employee\'s contribution is valued. I\'m grateful to be part of this organization.'
        },
        {
            image: Mala,
            name: 'Mala S',
            review: 'Here teamwork and excellence is valued. Working here has been an inspiring journey, and I appreciate the trust and support I\'ve received from my colleagues and leadership.',
        },
        {
            image: Geetha,
            name: 'Geetha Lakshmi V',
            review: 'I\'m grateful to be a part of Medall Diagnostics. It\'s a wonderful place to work because everyone here cares about each other and our patients. The company also supports our growth and learning, which is awesome.'
        },
    ];

    const carouselSettings = {
        dots: false,
        infinite: true,
        slidesToShow: 3.5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        centerMode: true,
        Response: [

            {
                breakpoint: 768, // Medium screens
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480, // Small screens
                settings: {
                    slidesToShow: 1,
                },
            },]

    }

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3.5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        centerMode: true,
        responsive: [
            {
                breakpoint: 900, // Medium screens
                settings: {
                    dots: false,
                    infinite: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 2500,
                    centerMode: true,
                },
            },
            {
                breakpoint: 768, // Medium screens
                settings: {
                    dots: false,
                    infinite: true,
                    slidesToShow: 2.5,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 2500,
                    centerMode: true,
                },
            },
            {
                breakpoint: 480, // Small screens
                settings: {
                    dots: false,
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 2500,
                    centerMode: true,
                },
            },
        ],
    };


    return (
        <div className='testimonial'>
            <div className="testimonial__header">
                <h1>What Our <span>Employees Feel About Medall</span></h1>
                {/* <h3>Lorem ipsum dolor sit amet consectetur. Dis sed volutpat et tempor pharetra at libero et eget. Mollis condimentum id iaculis tincidunt scelerisque in. Mauris lacinia nunc in sem consequat</h3> */}
            </div>

            <div className="testimonial__cards-container">
                <Slider className='testimonial__carousel' {...settings}  >
                    {
                        testimonial.map((testimonial, index) => <div className='testimonial__outer-card' key={index}>
                            <div className="testimonial__outer-card-box">
                                <div className='testimonial__card'>
                                    <img className='testimonial__employee-pic' loading="lazy" src={testimonial.image} alt="" />
                                    <h4>{testimonial.name}</h4>
                                    <p><span>{testimonial.review}</span></p>
                                </div>
                            </div>
                        </div>
                        )
                    }
                </Slider>
            </div>
        </div>
    )
}

export default Testimonial