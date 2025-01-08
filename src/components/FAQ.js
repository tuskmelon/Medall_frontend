import React from 'react'

import Collapsible from 'react-collapsible';

import '../styles/FAQ.scss'


const FAQ = ({ allFAQs, textAlign }) => {
    return (
        <div className='faq'>
            <div className="faq__container">
                <h2 style={{ textAlign: textAlign }}>Frequently asked questions (FAQs)</h2>
                {
                    allFAQs.map(faq => <div className="faq__collapsible-bar">
                        <Collapsible trigger={faq.question} >
                            <p className='faq__answer'>{faq.answer}</p>
                        </Collapsible>
                    </div>)
                }
            </div>
        </div>
    )
}

export default FAQ