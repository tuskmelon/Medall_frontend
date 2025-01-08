import React from 'react'

import '../../styles/MRI/HeadingWithList.scss'

const HeadingWithList = ({ scanDetails }) => {

    return (
        <div className='heading-with-list'>
            <h3>{scanDetails.heading}</h3>
            {
                scanDetails.description !== '' && <p>{scanDetails.description}</p>
            }
            <ul>
                {
                    scanDetails.infoList.map(listItem => <li key={listItem.heading}>{listItem.text} </li>)
                }
            </ul>
        </div>
    )
}

export default HeadingWithList