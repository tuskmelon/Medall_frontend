import React from 'react'

// import components 
import MriImageWithDetails from '../components/MRI/MriImageWithDetails'
// import HeadingWithList from '../components/MRI/HeadingWithList'
import BookCallForm from '../components/BookCallForm'
import Scans from '../components/MRI/Scans'
// import FAQ from '../components/FAQ'
import TestBookingStep from '../components/TestBookingStep'
import CollapsibleCard from '../components/MRI/CollapsibleCard'

import '../styles/MRI/Mri.scss'

const Mri = ({ mriInfo }) => {

    return (
        <>
            <div className='mri'>
                <MriImageWithDetails mriInfo={mriInfo} />
                <div className="mri__details">
                    <div className="mri__book-call-form-container">
                        <BookCallForm scanDetails={mriInfo} />
                    </div>

                    {/* {
                            MRIDetails.map(scan => <HeadingWithList scanDetails={scan} key={scan.description} />)
                        } */}
                    <div className="mri__why-this-mri">
                        <h2>{mriInfo.imageWithInfo.title} <span>{mriInfo.imageWithInfo.highlightedTitle}?</span>
                        </h2>
                        {/* {
                            mriInfo.imageWithInfo.image !== '' && <img src={mriInfo.imageWithInfo.image} alt="thumbnail" />
                        } */}

                        {
                            mriInfo.imageWithInfo.description.map(eachDescription => <p key={eachDescription.text}>{eachDescription.text}</p>)
                        }
                        <div className="mri__faqs-container">
                            <CollapsibleCard faqs={mriInfo.faqs} />
                        </div>
                    </div>

                </div>
            </div>
            <TestBookingStep />
            <Scans scanType={mriInfo.type} />
            {/* <div className="mri__faq-container">
                <FAQ allFAQs={faqs} textAlign='center' />
            </div> */}
        </>
    )
}

export default Mri