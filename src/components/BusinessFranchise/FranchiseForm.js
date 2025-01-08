import React, { useRef, useState } from 'react'
import { toast } from 'react-toastify'

import '../../styles/BusinessFranchise/FranchiseForm.scss'

import API from '../../api'
import emailjs from "@emailjs/browser";

const FranchiseForm = () => {
    const [franchiseRequestDetails, setFranchiseRequestDetails] = useState({
        name: '',
        email: '',
        mobile: '',
        message: ''
    })
    const [isInputFocused, setIsInputFocused] = useState(false)

    const form = useRef()

    const handleInputFocus = () => {
        setIsInputFocused(true)
    }
    const notifyFormSubmited = () =>
        toast('☎️ We will contact you soon. Thanks!', { draggable: true })
    const notifyErrorFormSubmission = () =>
        toast('❗ Try Again, Form Submission Failed', { draggable: true })

    const handleFranchiseRequest = async e => {
        e.preventDefault()
        e.stopPropagation()
        const franchiseRequestData = {
            name: franchiseRequestDetails.name,
            email: franchiseRequestDetails.email,
            mobileNumber: franchiseRequestDetails.mobile,
            message: franchiseRequestDetails.message
        }
        await API.post('/api/franchise-requests/', franchiseRequestData)
            .then(res => {
                notifyFormSubmited()
                console.log(res, 'Franchise Request Form Submitted Successfully')
                emailjs
                    .sendForm(
                        "service_0oasjlf",
                        "template_ktu268l",
                        form.current,
                        "rTLTYSVz3244NPRYw"
                    )
                    .then(
                        (result) => {
                            console.log("Mail send==>", result.text);
                        },
                        (error) => {
                            console.log("Mail send==>", error.text);
                        }
                    );

            })
            .catch(err => {
                notifyErrorFormSubmission()
                console.log(err, 'Error Submitting Franchise Request Form')
            })
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
        <div className='franchise-form' id='enquiry_formfranchise'>
            <div className='franchise-form__header' id='formredirect'>
                <h1>
                    <span>Franchise</span> Enquiry
                </h1>
            </div>
            <div className='franchise-form__container'>
                <div className='franchise-form__inner-container'>
                    <form ref={form} onSubmit={handleFranchiseRequest}>
                        <div className='franchise-form__input-group'>
                            <label htmlFor='applicantName'>Your Name</label>
                            <input
                                type='text'
                                name='name'
                                id='applicantName'
                                placeholder='Enter Your Name'
                                value={franchiseRequestDetails.name}
                                // onChange={e =>
                                //   setFranchiseRequestDetails({
                                //     ...franchiseRequestDetails,
                                //     name: e.target.value
                                //   })
                                // }
                                onChange={e =>
                                    handleInputChange(
                                        e,
                                        setFranchiseRequestDetails,
                                        franchiseRequestDetails,
                                        'name'
                                    )
                                }
                                onPaste={e =>
                                    handlePaste(
                                        e,
                                        setFranchiseRequestDetails,
                                        franchiseRequestDetails,
                                        'name'
                                    )
                                }
                                required
                                pattern='[A-Za-z\s]+'
                            />
                        </div>

                        <div className='franchise-form__input-group'>
                            <label htmlFor='applicantEmail'>Your E-Mail Address*</label>
                            <input
                                name='email'
                                type='email'
                                id='applicantEmail'
                                placeholder='Enter Your Mail Address'
                                value={franchiseRequestDetails.email}
                                onChange={e =>
                                    setFranchiseRequestDetails({
                                        ...franchiseRequestDetails,
                                        email: e.target.value
                                    })
                                }
                                required
                            />
                        </div>

                        <div className='franchise-form__input-group'>
                            <label htmlFor='mobileNumber'>Mobile Number</label>
                            <input
                                type='text'
                                name='number'
                                id='mobileNumber'
                                onFocus={handleInputFocus}
                                placeholder='Enter Your Mobile Number'
                                pattern='[0-9]{10}'
                                maxLength={10}
                                required
                                value={franchiseRequestDetails.mobile}
                                onChange={e => {
                                    let value = e.target.value
                                    if (value.startsWith('0')) {
                                        value = value.slice(1)
                                    }
                                    setFranchiseRequestDetails({
                                        ...franchiseRequestDetails,
                                        mobile: value
                                    })
                                }}
                            />
                        </div>
                        {franchiseRequestDetails.mobile.length >= 1 ? (
                            <>
                                {' '}
                                {isInputFocused &&
                                    !/^\d{10}$/.test(franchiseRequestDetails.mobile) && (
                                        <p
                                            style={{
                                                marginLeft: '6px',
                                                marginTop: '-9px',
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

                        <div className='franchise-form__input-group'>
                            <label htmlFor='message'>Message</label>
                            <textarea
                                maxLength={250}
                                type='text'
                                name='msg'
                                id='message'
                                placeholder='Enter Your Message'
                                value={franchiseRequestDetails.message}
                                onChange={e =>
                                    setFranchiseRequestDetails({
                                        ...franchiseRequestDetails,
                                        message: e.target.value
                                    })
                                }
                                required
                            />
                        </div>

                        <button className='franchise-form__submit-button' type='submit'>
                            Submit
                        </button>
                    </form>

                    <div className='franchise-form__image'>
                        <img
                            src='https://medallwebsite.s3.ap-south-1.amazonaws.com/FranchisePage/FranchiseEnquiryImg.jpg'
                            loading='lazy'
                            alt='franchise'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FranchiseForm
