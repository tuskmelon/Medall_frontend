import React from 'react'

import '../../styles/Prescription/UploadedFile.scss'

import FileChecked from '../../assets/icons/file-checked.png'

const UploadedFile = () => {
    return (
        <div className='upload-success'>
            <div className="upload-success__icon" data-aos="zoom-in-down">
                <img src={FileChecked} alt="file uploaded" />
            </div>
            <h3 data-aos="fade-up">Your File Has Been Uploaded</h3>
            <p data-aos="fade-up">Our team will contact you shortly !</p>
        </div>
    )
}

export default UploadedFile