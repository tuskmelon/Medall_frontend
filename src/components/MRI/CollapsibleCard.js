import React from 'react'

import Collapsible from 'react-collapsible';

import '../../styles/MRI/CollapsibleCard.scss'

const CollapsibleCard = ({ faqs }) => {
    return (
        <>
            {
                faqs.map(faq => <div className='collapsible-card'>
                    <Collapsible trigger={[`${faq.title}`, <h3 className='collapsible-card__highlighted-title'>{faq.highlightedTitle}</h3>, <span class="collapsible_span_mark">{faq.title.includes('Understanding') ? '' : '?'}</span>]} >
                        {
                            faq.description.map(answer => <p key={answer.text} className='faq__answer'>{answer.text}</p>)
                        }
                    </Collapsible >
                </div >
                )
            }
        </>
    )
}

export default CollapsibleCard