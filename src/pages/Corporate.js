import React from 'react'

import CorporateHero from '../components/Corporate/CorporateHero'
import CorporateServices from '../components/Corporate/CorporateServices'
import Networks from '../components/Corporate/Networks'
import CorporateCustomer from '../components/CorporateCustomer'
import Enquiry from '../components/Enquiry'
import WhyUs from '../components/Corporate/WhyUs'
import ImageWithTextCorporate from '../components/Corporate/ImageWithTextCorporate'

const Corporate = () => {
    return (
        <>
            <CorporateHero />
            <CorporateServices highLightedHeading="For Corporate" heading="Our Services" description="Your success starts with your Team's Health" />
            <Networks />
            <CorporateCustomer />
            <Enquiry highLightedHeading="Corporate" heading="Enquiry" description="Please fill the form below  to get a call back from Medall" />
            <WhyUs />
            <ImageWithTextCorporate />
        </>
    )
}

export default Corporate