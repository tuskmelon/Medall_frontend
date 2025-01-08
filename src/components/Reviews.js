import React from 'react'

import '../styles/Reviews.scss'

// import icons and images
import Star from '../assets/icons/star.svg'
import StarOutline from '../assets/icons/star-outline.svg'
import clientprofile from '../assets/images/customers/clientprofile.png'

const Reviews = (props) => {
    const sliderTopColumnCards = [
        {
            title: 'I like this diagnostics centre very much this is the finest place for scans and staff is very kind to the patient one of the staff named sindhu she is awesome in her duty',
            profilePic: clientprofile,
            name: 'dhivin Nathan',
            date: '13 june 2023',
            rating: 5
        },
        {
            title: 'Mr.Guna Lab technician has been really supportive and understanding of patients concerns and the patient career.  Very helpful and tries his best to cater to the needs of the patients',
            profilePic: clientprofile,
            name: 'bala mani',
            date: '25 may 2023',
            rating: 4
        },
        {
            title: 'I went to Medall beasant nagar. It was good experience and everyone in the centre is very did a good job. Especially BMD TECHNICIAN Sindhu did a very good job',
            profilePic: clientprofile,
            name: 'venkatesan ganapathi',
            date: '18 aug 2022',
            rating: 5
        },
        {
            title: 'I had a great experience from start to finish of my procedure for MRI. staff was very friendly and everything went smoothly. Miss Sindhu did a good job taking care of getting my information and helping me through the wait process.',
            profilePic: clientprofile,
            name: 'Nisha Chelaka',
            date: '02 april 2023',
            rating: 4
        },
        {
            title: 'Really a good place to go for all type of scans. It will be bit rush. Mr. Anand is soo caring and respectful towards the patients.',
            profilePic: clientprofile,
            name: 'Sanjai P G',
            date: '9 sept 2023',
            rating: 4
        },
    ];
    const sliderbottomColumnCards = [
        {
            title: 'blood work without pain and made me comfortable with his friendly approach. ',
            profilePic: clientprofile,
            name: 'karthik',
            date: '25 may 2022',
            rating: 5
        },
        {
            title: 'today I took CT Angiogram in Adyar Medall Scan center  , I really Thanks to Mr.Sudhakar He helped well , And Sindhu Also treat well ...',
            profilePic: clientprofile,
            name: 'Balaji Bab',
            date: '18 sep 2023',
            rating: 5
        },
        {
            title: 'Lab technician Guna is really very professional and friendly. Thank you for a great service',
            profilePic: clientprofile,
            name: 'Aravind Rajaraman',
            date: '20 june 2023',
            rating: 4
        },
        {
            title: 'Overall a good experience and very helpful and service by Guna- lab technician',
            profilePic: clientprofile,
            name: 'Prashanth R',
            date: '13 feb 2023',
            rating: 5
        },
    ];


    return (
        <div className='reviews'>
            <h1 className='reviews__heading'>{props.heading ? 'Client Review' : <>What Our Clients Say <span>About Us</span></>}</h1>

            <div className="reviews__slider reviews__slider--top">
                {
                    sliderTopColumnCards.map(review => <div key={review.title} className="reviews__card">
                        <p className='reviews__text'>{review.title}</p>
                        <div className="reviews__customer-details">
                            <div className="reviews__customer-info">
                                <img src={review.profilePic} loading="lazy" alt="profile pic" />
                                <div className='reviews__customer-detail'>
                                    <h4>{review.name}</h4>
                                    <p>{review.date}</p>
                                </div>
                            </div>
                            <p className='reviews__rating'>
                                {[...Array(review.rating)].map(star => {
                                    return (
                                        <img src={Star} alt="star" />
                                    );
                                })}
                                {[...Array(5 - review.rating)].map(star => {
                                    return (
                                        <img src={StarOutline} alt="star" />
                                    );
                                })}
                            </p>
                        </div>
                    </div>)
                }
            </div>

            {/* Second column of Slider  */}
            <div className="reviews__slider reviews__slider--bottom" style={{ display: props.display }}>
                {
                    sliderbottomColumnCards.map(review => <div key={review.title} className="reviews__card">
                        <p className='reviews__text'>{review.title}</p>
                        <div className="reviews__customer-details">
                            <div className="reviews__customer-info">
                                <img src={review.profilePic} loading="lazy" alt="profile pic" />
                                <div className='reviews__customer-detail'>
                                    <h4>{review.name}</h4>
                                    <p>{review.date}</p>
                                </div>
                            </div>
                            <p className='reviews__rating'>
                                {[...Array(review.rating)].map(star => {
                                    return (
                                        <img src={Star} alt="star" />
                                    );
                                })}
                                {[...Array(5 - review.rating)].map(star => {
                                    return (
                                        <img src={StarOutline} alt="star" />
                                    );
                                })}
                            </p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}

export default Reviews