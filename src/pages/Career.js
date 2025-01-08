import React from 'react'
import CareerHero from '../components/Career/CareerHero'
import LifeAtCompany from '../components/Career/LifeAtCompany'
import Benefits from '../components/Career/Benefits'
// import JobOpening from '../components/Career/JobOpening'
import JobForm from '../components/Career/JobForm'
import Testimonial from '../components/Career/Testimonial'

const Career = () => {
    return (
        <>
            <CareerHero />
            <LifeAtCompany />
            <Benefits />
            {/* <JobOpening /> */}
            <JobForm />
            <Testimonial />
        </>
    )
}

export default Career