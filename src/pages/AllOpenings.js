import React from 'react'

import '../styles/Career/AllOpenings.scss'
import { Link } from 'react-router-dom'

// import icons 
import Experience from '../assets/icons/experience.svg'
import Location from '../assets/icons/pinned-location.svg'
import InformationFile from '../assets/icons/information-file.svg'

const AllOpenings = () => {
    const jobsList = [
        {
            role: 'Histo Pathology technician',
            experience: '2 Year Experience',
            location: 'Chennai, adyar',
            description: 'Lorem ipsum dolor sit amet consectetur. Quam nunc tortor sit condimentum dolor. Vivamus leo elit nisl nibh magna adipiscing mauris. Sit metus sed laoreet quis aliquam interdum rhoncus non. Nisl nunc mauris tortor sed duis fringilla viverra fusce. Ultrices in volutpat velit in dignissim. At mi sollicitudin egestas urna. Mauris urna mollis nec sem dictum sed in et. In blandit mauris ac sit pretium nunc non. Eu enim euismod tellus eu. Non aliquet nec dignissim enim quis nibh. Felis pharetra nunc urna iaculis neque ut. Diam proin turpis nullam dictumst quis sit pretium laoreet id. Pharetra pharetra aliquet sed eget egestas. 01'
        },
        {
            role: 'Histo Pathology technician',
            experience: '2 Year Experience',
            location: 'Chennai, adyar',
            description: 'Lorem ipsum dolor sit amet consectetur. Quam nunc tortor sit condimentum dolor. Vivamus leo elit nisl nibh magna adipiscing mauris. Sit metus sed laoreet quis aliquam interdum rhoncus non. Nisl nunc mauris tortor sed duis fringilla viverra fusce. Ultrices in volutpat velit in dignissim. At mi sollicitudin egestas urna. Mauris urna mollis nec sem dictum sed in et. In blandit mauris ac sit pretium nunc non. Eu enim euismod tellus eu. Non aliquet nec dignissim enim quis nibh. Felis pharetra nunc urna iaculis neque ut. Diam proin turpis nullam dictumst quis sit pretium laoreet id. Pharetra pharetra aliquet sed eget egestas 02'
        },
        {
            role: 'Histo Pathology technician',
            experience: '2 Year Experience',
            location: 'Chennai, adyar',
            description: 'Lorem ipsum dolor sit amet consectetur ipsum dolor sit amet consectetuipsum dolor sit amet consectetu 03'
        },
        {
            role: 'Histo Pathology technician',
            experience: '2 Year Experience',
            location: 'Chennai, adyar',
            description: 'Lorem ipsum dolor sit amet consectetur. Quam nunc, Lorem ipsum dolor sit amet consectetur. Quam nunc, ipsum dolor sit amet consectetuipsum dolor sit amet consectetu 03 05ipsum dolor sit amet consectetuipsum dolor sit amet consectetu 04'
        },
        {
            role: 'Histo Pathology technician',
            experience: '2 Year Experience',
            location: 'Chennai, adyar',
            description: 'Lorem ipsum dolor sit amet consectetur. Quam nunc,  ipsum dolor sit amet consectetuipsum dolor sit amet consectetu 05'
        },
        {
            role: 'Histo Pathology technician',
            experience: '2 Year Experience',
            location: 'Chennai, adyar',
            description: 'Lorem ipsum dolor sit amet consectetur. Quam nunc, ipsum dolor sit amet consectetuipsum dolor sit amet consectetu 06'
        },
    ]

    return (
        <div className='all-openings'>
            <div className="all-openings__header">
                <h1>Job Description</h1>
                <h3>Lorem ipsum dolor sit amet consectetur. Dis sed volutpat et tempor pharetra at libero et eget. Mollis condimentum id iaculis tincidunt scelerisque in. Mauris lacinia nunc in sem consequat</h3>
            </div>
            <div className="all-openings__job-container">
                {
                    jobsList.map((job, index) => <div key={job.description} data-aos="fade-up"
                        data-aos-delay={index * 100} className="all-openings__card-box">
                        <div className="all-openings__card">
                            <div className="all-openings__card-header">
                                <h3><span>Role</span> - Histo Pathology technician</h3>
                                <Link to='/' className='all-openings__apply-button'>Apply Now</Link >
                            </div>
                            <div className="all-openings__card-job-description">
                                <div className="all-openings__tag-info">
                                    <p>Vaccancy-3</p>
                                    <p>Posted Date - 6 sep 2023</p>
                                </div>
                                <div className="all-openings__details">
                                    <p><img src={Experience} alt="icon" />{job.experience}</p>
                                    <p><img src={Location} alt="icon" />{job.location}</p>
                                    <p><img src={InformationFile} alt="icon" className='all-openings__description-icon' />
                                        {job.description}
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>)
                }

            </div>
        </div>
    )
}

export default AllOpenings