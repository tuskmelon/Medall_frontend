import React from 'react'

import '../styles/CorporateCustomer.scss'

// import company logos 
import Ranault from '../assets/images/corporateCustomers/ranault.png'
import RoyalEnfield from '../assets/images/corporateCustomers/royal-enfield.png'
import saintGobain from '../assets/images/corporateCustomers/saint-gobain.png'
import solora from '../assets/images/corporateCustomers/solara.png'
import madraspharam from '../assets/images/corporateCustomers/madraspharam.png'
import hdfc from '../assets/images/corporateCustomers/hdfcclient.png'
import star from '../assets/images/corporateCustomers/starclient.png'
import suntv from '../assets/images/corporateCustomers/suntv.png'
import sunpharam from '../assets/images/corporateCustomers/sunpharam.png'
import siemens from '../assets/images/corporateCustomers/siemens.svg'
import american from '../assets/images/corporateCustomers/american.svg'
import india from '../assets/images/corporateCustomers/ti-india.svg'
import hindu from '../assets/images/corporateCustomers/the-hindu.svg'


const CorporateCustomer = () => {
    const companyLogoRowOne = [
        {
            logo: RoyalEnfield
        },
        {
            logo: Ranault
        },
        {
            logo: hdfc
        },
        {
            logo: saintGobain
        },
        {
            logo: solora
        },
        {
            logo: madraspharam
        },
        {
            logo: star
        },
        // {
        //     logo: saintGobain
        // },
        {
            logo: RoyalEnfield
        },
        {
            logo: Ranault
        },
    ];

    const companyLogoRowTwo = [

        {
            logo: suntv
        },
        {
            logo: siemens
        },
        {
            logo: sunpharam
        },
        {
            logo: american
        },
        {
            logo: hindu
        },
        // {
        //     logo: american
        // },
        {
            logo: suntv
        },
        {
            logo: india
        },
        {
            logo: siemens
        }, {
            logo: suntv
        }, {
            logo: hindu
        },
    ];

    return (
        <div className='corporate-customer'>
            <div className="corporate-customer__header">
                <h1><span>Our Corporate </span>Customers</h1>
            </div>
            <div className="corporate-customer__marquee">
                {
                    companyLogoRowOne.map((logo, index) => <div key={index} className="corporate-customer__marquee-item">
                        <img src={logo.logo} loading="lazy" alt="company logo" />
                    </div>)
                }
            </div>

            <div className="corporate-customer__marquee">
                {
                    companyLogoRowTwo.map((logo, index) => <div key={index * 20} className="corporate-customer__marquee-item corporate-customer__marquee-item--row-two">
                        <img src={logo.logo} loading="lazy" alt="company logo" />
                    </div>)
                }
            </div>
        </div >
    )
}

export default CorporateCustomer