import React, { useState, useEffect, useRef } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import ReCAPTCHA from 'react-google-recaptcha'

import '../styles/BookCallForm.scss'

import Logo from '../assets/logos/medall.png'

const BookCallForm = ({ scanDetails }) => {
  // Setting Form values
  const [bookCallFormDetails, setBookCallFormDetails] = useState({
    name: '',
    mobile: '',
    testName: '',
    date: '',
    address: ''
  })
  const [isInputFocused, setIsInputFocused] = useState(false)
  const [buttonDisable, setButtonDisable] = useState(false)

  const handleInputFocus = () => {
    setIsInputFocused(true)
  }
  const notifyFormSubmited = () =>
    toast('☎️ We will contact you soon!', { draggable: true })
  const notifyErrorFormSubmission = () =>
    toast('❗ Try Again, Form Submission Failed', { draggable: true })
  const notifyForReCaptcha = () =>
    toast('❗ Please verify the reCAPTCHA!', { draggable: true })

  // Recaptcha Ref
  const recaptcha = useRef()

  let navigate = useNavigate()

  const [searchParams, setSearchParams] = useSearchParams();

  const handleBookCallForm = async e => {
    e.preventDefault()
    e.stopPropagation()
    // Sending Data to CRM Dashboard
    const MedallAPIToken = 'TWVkYWxsOlRXVmtZV3hzUURNeE1USjI='
    const bookingData = {
      FullName: bookCallFormDetails.name,
      homeCollectionDate: bookCallFormDetails.date,
      MobileNumber: bookCallFormDetails.mobile,
      EmailID: 'NA',
      testDetails: bookCallFormDetails.testName,
      utmCampaign: searchParams?.get('utm_campaign') ? searchParams?.get('utm_campaign') : "Medall Shop",
      utmMedium: searchParams?.get('utm_medium') ? searchParams?.get('utm_medium') : "Ecommerce Website",
      utmSource: searchParams?.get('utm_source') ? searchParams?.get('utm_source') : "organic",
      Address: bookCallFormDetails.address
    }

    // Check for capctha verification
    const captchaValue = recaptcha.current.getValue();
    // if (false) {
    if (!captchaValue) {
      notifyForReCaptcha();
    } else {
      setButtonDisable(true)

      // Send form data to CRM - Code Start
      await axios.post("https://medinfra.medallcorp.in/WebsiteAPI/api/HCLandingPageLoad", bookingData, {
        headers: {
          'Accept': 'application/json',
          'Authorization': `Basic ${MedallAPIToken}`,
          'Content-Type': 'application/json'
        }
      }).then(response => {
        if (response.data === "Success") {
          console.log(response, "Scan Booking form data sent to CRM");

          // Sending Data to LeadSquare API - Code Start
          const leadSquareUrl = 'https://api-in21.leadsquared.com/v2/ProspectActivity.svc/CreateCustom';
          const accessKey = 'u$r66791bf41480f4111abdee73031bab5d';
          const secretKey = 'e990c51e929a92c8dc9dbd5073548da11405c5ae';

          function getCurrentUTCDateTime() {
            const now = new Date();
            const year = now.getUTCFullYear();
            const month = String(now.getUTCMonth() + 1).padStart(2, '0'); // Months are zero-based
            const day = String(now.getUTCDate()).padStart(2, '0');
            const hours = String(now.getUTCHours()).padStart(2, '0');
            const minutes = String(now.getUTCMinutes()).padStart(2, '0');
            const seconds = String(now.getUTCSeconds()).padStart(2, '0');

            return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
          }

          const requestData = {
            "LeadDetails": [
              {
                "Attribute": "FirstName",
                "Value": bookCallFormDetails.name
              },
              {
                "Attribute": "Phone",
                "Value": bookCallFormDetails.mobile
              },
              {
                "Attribute": "mx_Zip",
                "Value": bookCallFormDetails.address
              },
              {
                "Attribute": "SearchBy",
                "Value": "Phone"
              }
            ],
            "Activity": {
              "ActivityEvent": 206,
              "ActivityNote": "Note for the activity",
              "ActivityDateTime": getCurrentUTCDateTime(),
              "Fields": [
                {
                  "SchemaName": "mx_Custom_2",
                  "Value": bookCallFormDetails.testName
                },
                {
                  "SchemaName": "mx_Custom_3",
                  "Value": bookCallFormDetails.date
                },
                {
                  SchemaName: "mx_Custom_5",
                  Value: searchParams?.get('utm_campaign') ? searchParams?.get('utm_campaign') : "Medall Shop",
                },
                {
                  SchemaName: "mx_Custom_6",
                  Value: searchParams?.get('utm_source') ? searchParams?.get('utm_source') : "organic",
                },
                {
                  SchemaName: "mx_Custom_7",
                  Value: searchParams?.get('utm_medium') ? searchParams?.get('utm_medium') : "Ecommerce Website",
                },
                {
                  SchemaName: "mx_Custom_8",
                  Value: "X-RAY & Scans Form"
                }
              ]
            }
          };
          const headers = {
            'Content-Type': 'application/json'
          };
          axios.post(leadSquareUrl, requestData, {
            headers: headers,
            params: {
              accessKey: accessKey,
              secretKey: secretKey
            }
          })
            .then(response => {
              if (response.data.Status === "Success") {
                setButtonDisable(false);

                setBookCallFormDetails({ ...bookCallFormDetails, name: '', mobile: '', date: '', address: '' });
                notifyFormSubmited();
                navigate("/thank-you");
                recaptcha.current.reset();
                console.log(response, "Success!, Form details sent to Leadsquare.");
              } else {
		setButtonDisable(false);

                recaptcha.current.reset();
                notifyErrorFormSubmission();
              }
            })
            .catch(error => {
	      setButtonDisable(false);

              recaptcha.current.reset();
              notifyErrorFormSubmission();
              console.error(error, "Error in sending form details to leadSquare");
            });

          // Sending Data to LeadSquare API - Code END
        }
      }).catch(error => {
	setButtonDisable(false)
        
	recaptcha.current.reset();
        notifyErrorFormSubmission();
        console.error(error, "Error sending Booking Form data to server");
      });
    }
    // Send form data to CRM - Code END
  }

  useEffect(() => {
    setBookCallFormDetails({
      ...bookCallFormDetails,
      testName: scanDetails.title
    })
  }, [scanDetails.title])

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
    <div className='book-call-form'>
      <div className='book-call-form__outer-box'>
        <form onSubmit={handleBookCallForm} className='book-call-form__form'>
          <div className='book-call-form__header'>
            <img src={Logo} alt='medall logo' />
            <p>GET A CALL BACK</p>
          </div>
          <div>
            <div className='book-call-form__input-group'>
              <label htmlFor='book-call-form__uploader-name'>NAME*</label>
              {/* <input type="text" id='book-call-form__uploader-name' placeholder='Please Provide Your Name' value={bookCallFormDetails.name} onChange={(e) => setBookCallFormDetails({ ...bookCallFormDetails, name: e.target.value })} required /> */}
              <input
                type='text'
                id='book-call-form__uploader-name'
                placeholder='Please Provide Your Name'
                value={bookCallFormDetails.name}
                // onChange={e =>
                //   setBookCallFormDetails({
                //     ...bookCallFormDetails,
                //     name: e.target.value
                //   })
                // }
                onChange={e =>
                  handleInputChange(
                    e,
                    setBookCallFormDetails,
                    bookCallFormDetails,
                    'name'
                  )
                }
                onPaste={e =>
                  handlePaste(
                    e,
                    setBookCallFormDetails,
                    bookCallFormDetails,
                    'name'
                  )
                }
                required
                pattern='[A-Za-z\s]+'
              />
            </div>

            <div className='book-call-form__input-group'>
              <label htmlFor='book-call-form__mobile-number'>
                Mobile Number*
              </label>
              <input
                type='text'
                id='book-call-form__mobile-number'
                onFocus={() => handleInputFocus('number')}
                pattern='[0-9]{10}'
                maxLength={10}
                title='Enter 10 Digit Mobile NumberE'
                placeholder='Enter Your Mobile Number'
                value={bookCallFormDetails.mobile}
                onChange={e => {
                  let value = e.target.value
                  if (value.startsWith('0')) {
                    value = value.slice(1)
                  }
                  setBookCallFormDetails({
                    ...bookCallFormDetails,
                    mobile: value
                  })
                }}
                required
              />
            </div>
            {bookCallFormDetails.mobile.length >= 1 ? (
              <>
                {' '}
                {isInputFocused &&
                  !/^\d{10}$/.test(bookCallFormDetails.mobile) && (
                    <p
                      style={{
                        marginLeft: '15px',
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

            <div className='book-call-form__input-group'>
              <label htmlFor='book-call-form__test-detail'>Test Detail*</label>
              <input
                type='text'
                id='book-call-form__test-detail'
                placeholder='Test Detail'
                value={bookCallFormDetails.testName}
                required
                readOnly
              />
            </div>

            <div className='book-call-form__input-group'>
              <label htmlFor='book-call-form__appointment-date'>Date*</label>
              <input
                type='text'
                placeholder='Enter Appointment Date'
                id='book-call-form__appointment-date'
                value={bookCallFormDetails.date}
                onClick={e => (e.target.type = 'date')}
                onChange={e =>
                  setBookCallFormDetails({
                    ...bookCallFormDetails,
                    date: e.target.value
                  })
                }
                required
              />
            </div>

            <div className='book-call-form__input-group'>
              <label htmlFor='book-call-form__pincode'>Address</label>
              <input
                type='text'
                id='book-call-form__pincode'
                placeholder='Enter Your Address'
                value={bookCallFormDetails.address}
                // onChange={e =>
                //   setBookCallFormDetails({
                //     ...bookCallFormDetails,
                //     address: e.target.value
                //   })
                // }

                onChange={e =>
                  handleInputChange(
                    e,
                    setBookCallFormDetails,
                    bookCallFormDetails,
                    'address'
                  )
                }
                onPaste={e =>
                  handlePaste(
                    e,
                    setBookCallFormDetails,
                    bookCallFormDetails,
                    'address'
                  )
                }
                required
              />
            </div>
          </div>
          <ReCAPTCHA
            ref={recaptcha}
            sitekey='6LcYrhYpAAAAAAwXXTjNwkEWZWPeeKqHF7hKW-ol'
            className='book-call-form__recaptha'
          />
          <button
            type="submit"
            style={{
              cursor: !buttonDisable ? 'pointer' : 'not-allowed'
            }}
            className='book-call-form__submit-btn'
            disabled={buttonDisable}
          >
            {buttonDisable ? (
              <div className='' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                <div className="loader"> </div>
                Booking in progress...
              </div>
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </div>
    </div>
  )
}

export default BookCallForm
