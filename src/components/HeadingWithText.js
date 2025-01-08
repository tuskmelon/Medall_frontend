import React from 'react'

import '../styles/HeadingWithText.scss'

const HeadingWithText = ({ heading, text, secondDetail, thirdDetail }) => {
    return (
        <div className='heading-with-content'>
            <h1>{heading}</h1>
            <p>{text}</p>
            <p>{secondDetail}</p>
            <p>{thirdDetail}</p>
        </div>
    )
}

export default HeadingWithText