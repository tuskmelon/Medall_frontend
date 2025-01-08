import React from 'react'

import '../../styles/LabTests/ImageWithTextLab.scss'

import Kidneys from '../../assets/images/labTests/kidneys.jpg'

const ImageWithTextLab = () => {
    return (
        <div className='image-with-text-lab'>
            <h1>Kidneys</h1>
            <div className="image-with-text-lab__content">
                <img src={Kidneys} loading="lazy" alt="Kidneys" />
                <p>Kidneys are undoubtedly one of the most important organs of our body, performing blood filtration. The kidneys filter waste from the blood and produce urine. Without proper kidney functioning, our body cannot survive. Hence, attention should be paid to ensure they are in good health at all times. Any signs of dysfunction or disease should be checked with a doctor immediately.
                    Kidney tests are usually performed in clinics or hospitals, but certain preliminary tests can be conducted at home before you consult a doctor. If you want to easily get kidney tests done at home, a simple blood test or urine test can be conducted from home.</p>
            </div>
        </div>
    )
}

export default ImageWithTextLab