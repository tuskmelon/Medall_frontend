import React from 'react'

import { Link } from "react-router-dom";

import '../../styles/Career/JobOpening.scss'

// import icons 
import Experience from '../../assets/icons/experience.svg'
import Location from '../../assets/icons/pinned-location.svg'
import InformationFile from '../../assets/icons/information-file.svg'

const JobOpening = () => {
    const jobsList = [
        {
            role: 'Histo Pathology technician',
            experience: '2 Year Experience',
            location: 'Chennai, adyar',
            description: 'Lorem ipsum dolor sit amet consectetur. Quam nunc, ipsum dolor sit amet consectetuipsum dolor sit amet consectetu 01'
        },
        {
            role: 'Histo Pathology technician',
            experience: '2 Year Experience',
            location: 'Chennai, adyar',
            description: 'Lorem ipsum dolor sit amet consectetur. Quam nunc, ipsum dolor sit amet consectetuipsum dolor sit amet consectetu 02'
        },
        {
            role: 'Histo Pathology technician',
            experience: '2 Year Experience',
            location: 'Chennai, adyar',
            description: 'Lorem ipsum dolor sit amet consectetur. Quam nunc, ipsum dolor sit amet consectetuipsum dolor sit amet consectetu 03'
        },
        {
            role: 'Histo Pathology technician',
            experience: '2 Year Experience',
            location: 'Chennai, adyar',
            description: 'Lorem ipsum dolor sit amet consectetur. Quam nunc, ipsum dolor sit amet consectetuipsum dolor sit amet consectetu 04'
        },
        {
            role: 'Histo Pathology technician',
            experience: '2 Year Experience',
            location: 'Chennai, adyar',
            description: 'Lorem ipsum dolor sit amet consectetur. Quam nunc, ipsum dolor sit amet consectetuipsum dolor sit amet consectetu 05'
        },
        {
            role: 'Histo Pathology technician',
            experience: '2 Year Experience',
            location: 'Chennai, adyar',
            description: 'Lorem ipsum dolor sit amet consectetur. Quam nunc, ipsum dolor sit amet consectetuipsum dolor sit amet consectetu 06'
        },
    ];

    return (
        <div className='job'>
            <div className="job__header">
                <h1>Job Openings</h1>
                {/* <h3>Lorem ipsum dolor sit amet consectetur. Dis sed volutpat et tempor pharetra at libero et eget. Mollis condimentum id iaculis tincidunt scelerisque in. Mauris lacinia nunc in sem consequat</h3> */}
            </div>

            <div className="job__openings-card-container">
                {
                    jobsList.map((job, index) => <div className="job__card-box" key={job.description} data-aos="fade-down"
                        data-aos-delay={index * 100}>
                        <div className="job__card">
                            <h3 className="job__role-heading">
                                <p><span>Role</span> - {job.role}</p>
                            </h3>
                            <div className="job__details">
                                <p><img src={Experience} alt="icon" />{job.experience}</p>
                                <p><img src={Location} alt="icon" />{job.location}</p>
                                <p><img src={InformationFile} alt="icon" /><Link to="/all-job-opening" className='job__description'>{job.description}</Link></p>
                            </div>
                            <div className="job__know-more-btn-container">
                                <Link className='job__know-more-button' to="/careers/all-job-opening">Know More</Link>
                            </div>
                        </div>
                    </div>
                    )
                }
            </div>
        </div>
    )
}

export default JobOpening