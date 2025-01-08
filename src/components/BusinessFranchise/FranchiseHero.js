import React from 'react'

import '../../styles/BusinessFranchise/FranchiseHero.scss'

import Employees from '../../assets/images/lab-employees.jpg'
// import Heart from '../../assets/icons/medall-heart.svg'

const FranchiseHero = () => {
    // const advantages = [
    //     {
    //         text: "Superior ROI"
    //     },
    //     {
    //         text: "Good Profit Margin"
    //     },
    //     {
    //         text: "Strong Network"
    //     },
    //     {
    //         text: "Operational Guidance"
    //     },
    //     {
    //         text: "Franchise Format"
    //     },
    // ]
    return (
        <div className='franchise-hero'>
            <div className="franchise-hero__details">
                <h1>Join Hands With <span>India’s Leading Integrated Diagnostics</span></h1>
                <p>Be a part of Medall Diagnostics in shaping a healthier world and achieve your entrepreneurial dreams. As our franchisee partner, you'll play a vital role in providing access to high-quality diagnostic services and empowering individuals to take charge of their health. Together we can make a real difference in the lives of people everywhere!
                </p>
                {/* <ul>
                    {
                        advantages.map(advantage => <li><img src={Heart} alt="medall heart" /><span>{advantage.text}</span></li>
                        )
                    }
                </ul> */}
            </div>
            <img className='franchise-hero__image' src={Employees} alt="employees" />
        </div>
    )
}

export default FranchiseHero