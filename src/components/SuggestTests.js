import React from 'react'

import '../styles/Pro/SuggestTests.scss'

import LabTestCard from './LabTestCard'

const SuggestTests = ({ suggestTests }) => {
    return (
        <div className='suggest-tests'>
            <h1 className='suggest-tests__heading'>Popular <span>Health Packages</span></h1>

            <div className="suggest-tests__cards-container">
                {
                    suggestTests.map(card => (<LabTestCard key={card.title} TestCard={card} />))
                }
            </div>
        </div>
    )
}

export default SuggestTests