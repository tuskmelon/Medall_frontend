import React from 'react'

import '../../styles/Corporate/ImageWithTextCorporate.scss'

import Girl from '../../assets/images/girl-in-field.jpg'

const ImageWithTextCorporate = () => {
    return (
        <div className='image-with-text-corporate'>
            <div className="image-with-text-corporate__header">
                <h1><span>Medall</span> Mind Corporate</h1>
                {/* <h3>Lorem ipsum dolor sit amet consectetur. Dis sed volutpat et tempor pharetra at libero et eget. Mollis condimentum id iaculis tincidunt scelerisque in. Mauris lacinia nunc in sem consequat</h3> */}

                <div className="image-with-text-corporate__details">
                    <div className="image-with-text-corporate__text-info">
                        <h3>Medall Mind, an integral part of Medall Healthcare, specializes in behavioral health services.</h3>
                        <p>For over a decade, we've served diverse settings, including educational institutions and corporate companies. Our core values revolve around advocacy, empowerment, education, and mental health support.</p>
                        <a href="https://mind.medall.in/" target='blank'>Visit Medall Mind</a>
                    </div>

                    <img src={Girl} alt="girl" className="image-with-text-corporate__image" />
                </div>
            </div>
        </div>
    )
}

export default ImageWithTextCorporate