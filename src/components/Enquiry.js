import React, { useState } from 'react'
import API from '../api'
import { toast } from 'react-toastify'

import '../styles/BusinessEnquiry/Enquiry.scss'

// import Notes from '../assets/images/notes.jpg'
import UploadFile from '../assets/icons/upload-file.svg'

import medallLogo from '../assets/logos/medall.png'

const Enquiry = ({ heading, highLightedHeading, description }) => {
  const [enquiryFormDetails, setEnquiryFormDetails] = useState({
    name: '',
    email: '',
    mobileNumber: '',
    message: ''
  })
  const [isInputFocused, setIsInputFocused] = useState(false)

  const handleInputFocus = () => {
    setIsInputFocused(true)
  }
  const notifyFormSubmited = () =>
    toast('☎️ We will contact you soon!', { draggable: true })
  const notifyErrorFormSubmission = () =>
    toast('❗ Try Again, Form Submission Failed', { draggable: true })

  const handleEnquiryForm = async e => {
    e.preventDefault()
    const customerData = {
      name: enquiryFormDetails.name,
      email: enquiryFormDetails.email,
      mobileNumber: enquiryFormDetails.mobileNumber,
      message: enquiryFormDetails.message
    }
    API.post('/api/corporate-queries', customerData)
      .then(res => {
        setEnquiryFormDetails({
          name: '',
          email: '',
          mobileNumber: '',
          message: ''
        })
        notifyFormSubmited()
      })
      .catch(err => notifyErrorFormSubmission())
  }

  const handleInputChange = (event, setState, state, type) => {
    const newValue = event.target.value.trimStart()
    setState({
      ...state,
      [type]: newValue
    })
  }

  const handlePaste = (event, setState, state, type) => {
    event.preventDefault()
    const pastedText = event.clipboardData.getData('text/plain')
    const cleanedText = pastedText.replace(/[^a-zA-Z]+/g, '')
    setState({
      ...state,
      [type]: cleanedText
    })
  }

  return (
    <div className='enquiry-form' id='enquiry_formcorporate'>
      <div className='enquiry-form__header'>
        <h1>
          <span>{highLightedHeading}</span> {heading}
        </h1>
        <p>{description}</p>
      </div>

      {/* Form  */}
      <div className='enquiry-form__container'>
        <div className='enquiry-form__inner-container'>
          <div className='enquiry-form__side-image'>
            <h2>For Corporate</h2>
            <p>
              For Any Corporate Queries, Please Contact - customercare@medall.in{' '}
            </p>
            <img
              src='https://medallwebsite.s3.ap-south-1.amazonaws.com/Corporate/Our+Corporate+enquiry.png'
              loading='lazy'
              alt='finding job'
            />
          </div>
          <div className='enquiry-form__company-logo'>
            <div className='enquiry-form__company-logo-inner-box'>
              <img src={medallLogo} loading='lazy' alt='logo' />
            </div>
          </div>
          <form onSubmit={handleEnquiryForm}>
            <div className='enquiry-form__input-group'>
              <label htmlFor='customerName'>Name*</label>
              <input
                type='text'
                id='customerName'
                placeholder='Enter Your Name'
                value={enquiryFormDetails.name}
                // onChange={e =>
                //   setEnquiryFormDetails({
                //     ...enquiryFormDetails,
                //     name: e.target.value
                //   })
                // }
                onChange={e =>
                  handleInputChange(
                    e,
                    setEnquiryFormDetails,
                    enquiryFormDetails,
                    'name'
                  )
                }
                onPaste={e =>
                  handlePaste(
                    e,
                    setEnquiryFormDetails,
                    enquiryFormDetails,
                    'name'
                  )
                }
                required
                pattern='[A-Za-z\s]+'
              />
            </div>

            <div className='enquiry-form__input-group'>
              <label htmlFor='customerEmail'>E-Mail*</label>
              <input
                type='email'
                id='customerEmail'
                placeholder='Enter Your Mail Address'
                value={enquiryFormDetails.email}
                onChange={e =>
                  setEnquiryFormDetails({
                    ...enquiryFormDetails,
                    email: e.target.value
                  })
                }
                required
              />
            </div>

            <div className='enquiry-form__input-group'>
              <label htmlFor='customerMobileNumber'>Mobile Number*</label>
              <input
                type='text'
                id='customerMobileNumber'
                pattern='[0-9]{10}'
                onFocus={handleInputFocus}
                maxLength={10}
                title='Enter 10 digit mobile number'
                placeholder='Enter Your Mobile Number'
                value={enquiryFormDetails.mobileNumber}
                onChange={e => {
                  let value = e.target.value
                  if (value.startsWith('0')) {
                    value = value.slice(1)
                  }
                  setEnquiryFormDetails({
                    ...enquiryFormDetails,
                    mobileNumber: value
                  })
                }}
                required
              />
            </div>
            {enquiryFormDetails.mobileNumber.length >= 1 ? (
              <>
                {' '}
                {isInputFocused &&
                  !/^\d{10}$/.test(enquiryFormDetails.mobileNumber) && (
                    <p
                      style={{
                        marginLeft: '10px',
                        marginTop: '-15px',
                        marginBottom: '5px',
                        color: '#F23A3A',
                        fontSize: '12px'
                      }}
                    >
                      Enter valid number
                    </p>
                  )}
              </>
            ) : (
              ''
            )}

            <div className='enquiry-form__input-group'>
              <label htmlFor='customerMessage'>Message*</label>
              <textarea
                maxLength={250}
                className='enquiry-form__message'
                type='text'
                name='companyCustomerMessage'
                id='customerMessage'
                placeholder='Describe in words'
                value={enquiryFormDetails.message}
                onChange={e =>
                  setEnquiryFormDetails({
                    ...enquiryFormDetails,
                    message: e.target.value
                  })
                }
                required
              ></textarea>
            </div>

            <button className='enquiry-form__submit-button' type='submit'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Enquiry
