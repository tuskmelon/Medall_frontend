import React from 'react'

import '../../styles/BusinessFranchise/Process.scss'

import Form from '../../assets/images/form.png'
import Discussion from '../../assets/images/discussion.png'
import Letter from '../../assets/images/discussion.png'
import AgreementForm from '../../assets/images/agreement-form.png'
import Dashboard from '../../assets/images/dashboard.png'
import Location from '../../assets/images/location.png'
import Timeline from '../../assets/images/timeline.png'
import Checkbook from '../../assets/images/checkbook.png'


const Process = () => {
    return (
        <div className='process'>
            <div className="process__header">
                <h1><span>Way</span> Forward</h1>
            </div>
            <div className="process__timeline-container">
                <div className="process__timeline-row">
                    <img src={Form} loading='lazy' alt="form" data-aos="fade-right" />
                    <div className="process__step-info" data-aos="fade-right">
                        <h3>Step 2 </h3>
                        <p>Evaluate critical parameters for setting up the business</p>
                    </div>

                    <img src={Discussion} loading='lazy' alt="discussion" data-aos="fade-right" />
                    <div className="process__step-info" data-aos="fade-right">
                        <h3>Step 4 </h3>
                        <p>Choosing the location of your choice</p>
                    </div>

                    <img src={Letter} loading='lazy' alt="letter" data-aos="fade-right" />
                    <div className="process__step-info" data-aos="fade-right">
                        <h3>Step 6</h3>
                        <p>Meet project coordinators to finalise and commit to project timelines/ payment milestones</p>
                    </div>

                    <img src={AgreementForm} loading='lazy' alt="letter" data-aos="fade-right" />
                    <div className="process__step-info" data-aos="fade-right">
                        <h3>Step 8</h3>
                        <p>Execution of project timelines and payment of the balance and Launch</p>
                    </div>
                </div>

                {/* TIMELINE- VERTICAL LINE  */}

                <div className="process__vertical-line-container">
                    <div className="process__vertical-line">
                        <div className="process__dots"></div>
                        <div className="process__dots"></div>
                        <div className="process__dots"></div>
                        <div className="process__dots"></div>
                        <div className="process__dots"></div>
                        <div className="process__dots"></div>
                        <div className="process__dots"></div>
                        {/* <div className="process__dots"></div> */}
                    </div>
                </div>

                {/* TIMELINE- VERTICAL END  */}

                <div className="process__timeline-row">
                    <div className="process__step-info process__step-info--margin" data-aos="fade-left">
                        <h3>Step 1 </h3>
                        <p>Filling the franchise profile form for evaluation by Medall</p>
                    </div>

                    <img src={Dashboard} loading='lazy' alt="discussion" data-aos="fade-left" />
                    <div className="process__step-info" data-aos="fade-left">
                        <h3>Step 3 </h3>
                        <p>Detailed information session with Medall franchise/ sales team</p>
                    </div>

                    <img src={Location} loading='lazy' alt="letter" data-aos="fade-left" />
                    <div className="process__step-info" data-aos="fade-left">
                        <h3>Step 5</h3>
                        <p>Signing the Letter of Acceptance</p>
                    </div>

                    <img src={Timeline} loading='lazy' alt="letter" data-aos="fade-left" />
                    <div className="process__step-info" data-aos="fade-left">
                        <h3>Step 7</h3>
                        <p>Signing the Franchise Agreement</p>
                    </div>
                    <img src={Checkbook} loading='lazy' alt="checkbook" data-aos="fade-left" />
                </div>
            </div>

            <div className="process__description">
                <a href="#enquiry_formfranchise"> Enquire Now </a>
            </div>

        </div>
    )
}

export default Process