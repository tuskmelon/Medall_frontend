import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'
import API from '../api'
import ReCAPTCHA from 'react-google-recaptcha'

// import react-slick carousel library
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
// import queryString from 'query-string';
// import style file
import '../styles/Hero.scss'

// import images
import medallHeart from '../assets/icons/medall-heart-dark.svg'
import Properties from '../assets/images/heroBanners/properties.jpg'
import SouthLargest from '../assets/images/heroBanners/south-largest.jpg'
import Awards from '../assets/images/heroBanners/awards.jpg'
import homeSampleBackground from '../assets/images/heroBanners/home-collection.jpg'


import OurMissionVissionMobile from '../assets/images/heroBanners/OurMissionVissionMobile.jpg'
import OurMissionVission from '../assets/images/heroBanners/OurMissionVission.jpg'

const Hero = () => {
  const [bookingFormDetails, setBookingFormDetails] = useState({
    name: '',
    mobileNumber: '',
    date: '',
    pincode: ''
  })
  const [displayRecaptcha, setDisplayRecaptcha] = useState(false)
  const [isInputFocused, setIsInputFocused] = useState(false)
  const [isInputPincodeFocused, setisInputPincodeFocused] = useState(false)
  const notifyWrongMobileNumber = () => toast("☎️ Please Enter Valid Mobile Number", { draggable: true });
  // const notifyLogin = () => toast("❗ Please Login into your account", { draggable: true });
  const [isPrivacyPolicyAccepted, setIsPrivacyPolicyAccepted] = useState(false)

  const handleInputFocus = () => {
    setIsInputFocused(true)
    setisInputPincodeFocused(true)
  }

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const notifyFormSubmited = () =>
    toast('☎️ We will contact you soon!', { draggable: true })
  const notifyErrorFormSubmission = () =>
    toast('❗ Try Again, Form Submission Failed', { draggable: true })
  const notifyForReCaptcha = () =>
    toast('❗ Please verify the reCAPTCHA!', { draggable: true })
  // const notifyLogin = () => toast("❗ Please Login into your account", { draggable: true });

  // Recaptcha Ref
  const recaptcha = useRef()

  let navigate = useNavigate()

  const location = useLocation();

  // const queryParams = queryString.parse(location.search);

  const [searchParams, setSearchParams] = useSearchParams();
  const [buttonDisable, setButtonDisable] = useState(false)
  // useEffect(() => {
  //   window.scrollTo(0, 0)
  // }, [])



  // const { utm_source, utm_medium, utm_campaign } = queryParams;

  console.log(searchParams?.get('utm_source'));

  const handleBookingForm = async e => {
    e.preventDefault()
    const bookingFormData = {
      name: bookingFormDetails.name,
      mobileNumber: bookingFormDetails.mobileNumber,
      date: bookingFormDetails.date,
      pincode: bookingFormDetails.pincode,
      Policy_Value: isPrivacyPolicyAccepted ? "enabled" : "disabled"  
  }
    // Check for capctha verification
    const captchaValue = recaptcha.current.getValue();
    if (!captchaValue) {
      // if (false) {
      notifyForReCaptcha();
    } else {
      // Verifying reCapctha at server 
      await API.post("/api/auth/verify-captcha", { "captchaValue": captchaValue }).then(async (res) => {
        // if (res.data.success) {
        if (true) {
          setButtonDisable(true)
          // make form submission
          await API.post('/api/booking/', bookingFormData)
            .then(res => {
              if (res.data.status === "success") {
                console.log(res, "response from Booking api")
                // calling function to send form data to CRM dashboard

                sendDataToCRM();
              } else {
                setButtonDisable(false);
                notifyErrorFormSubmission();
                console.log('Booking Form submission failed');
              }
            })
            .catch(err => {
              setButtonDisable(false);
              notifyErrorFormSubmission();
              console.log(err, 'Error submitting Booking Form')
            })

          // Sending form data to CRM 
          async function sendDataToCRM() {
            // Sending Data to CRM Dashboard 
            const MedallAPIToken = "TWVkYWxsOlRXVmtZV3hzUURNeE1USjI=";
            const bookingData = {
              FullName: bookingFormDetails.name,
              homeCollectionDate: bookingFormDetails.date,
              MobileNumber: bookingFormDetails.mobileNumber,
              EmailID: "NA",
              testDetails: "Medall Visitors Details",
              utmCampaign: searchParams?.get('utm_campaign') ? searchParams?.get('utm_campaign') : "Medall Shop",
              utmMedium: searchParams?.get('utm_medium') ? searchParams?.get('utm_medium') : "Ecommerce Website",
              utmSource: searchParams?.get('utm_source') ? searchParams?.get('utm_source') : "organic",
              Address: bookingFormDetails.pincode
            };

            await axios.post("https://medinfra.medallcorp.in/WebsiteAPI/api/HCLandingPageLoad", bookingData, {
              headers: {
                'Accept': 'application/json',
                'Authorization': `Basic ${MedallAPIToken}`,
                'Content-Type': 'application/json'
              }
            }).then(response => {
              if (response.data === "Success") {
                console.log(response, "Test Booking form submitted successfully ");
                // calling function to send data to LeadSquare API 
                sendDataToLeadSquare();
              } else {
                console.log(response, "Error!, Form data not sent to CRM")
                notifyErrorFormSubmission();
              }
            }).catch(error => {
              setButtonDisable(false);
              console.error(error, "Error sending Booking Form data to server");
            });

          }

          // Sending Data to LeadSquare API - Code Start
          async function sendDataToLeadSquare() {
            const url = 'https://api-in21.leadsquared.com/v2/ProspectActivity.svc/CreateCustom';
            const accessKey = 'u$r66791bf41480f4111abdee73031bab5d';
            // const accessKey = 'u%24r66791bf41480f4111abdee73031bab5d';
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

            const bookingInfo = {
              LeadDetails: [
                {
                  Attribute: 'FirstName',
                  Value: bookingFormDetails.name,
                },
                {
                  Attribute: 'Phone',
                  Value: bookingFormDetails.mobileNumber,
                },
                {
                  Attribute: 'mx_Zip',
                  Value: bookingFormDetails.pincode,
                },
                {
                  Attribute: 'Source',
                  Value: "Online",
                },
                {
                  Attribute: 'mx_Sub_Source ',
                  Value: "Brand Website",
                },
                {
                  Attribute: 'mx_Zip',
                  Value: bookingFormDetails.pincode,
                },
                {
                  Attribute: 'SearchBy',
                  Value: 'Phone',
                },
              ],
              Activity: {
                ActivityEvent: 206,
                ActivityNote: 'Note for the activity',
                ActivityDateTime: getCurrentUTCDateTime(),

                Fields: [
                  {
                    SchemaName: 'mx_Custom_1',
                    Value: bookingFormDetails.date,
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
                    Value: "Home Appointment Form"
                  }
                ],
              },
            };

            console.log(bookingInfo, "Booking Info");
            await axios.post(url, bookingInfo, {
              headers: {
                'Content-Type': 'application/json',
              },
              params: {
                accessKey: accessKey,
                secretKey: secretKey
              }
            }).then(response => {
              console.log(response, "leadsquare respone")
              if (response.data.Status === "Success") {
                setBookingFormDetails({ ...bookingFormDetails, name: '', mobileNumber: '', date: '', pincode: '' });
                notifyFormSubmited();
                navigate("/thank-you");
                setDisplayRecaptcha(false);
                recaptcha.current.reset();
                console.log(response, "response from leadSquare")
              } else {
                recaptcha.current.reset();
                notifyErrorFormSubmission();
                console.log(response, "LSQ API failed");
                setButtonDisable(false);
              }
              console.log(response, "Lead Square response");
            }).catch(error => {
              // if (error.response.data.ExceptionMessage === "Invalid Phone format.") {
              //     notifyWrongMobileNumber();
              // }
              recaptcha.current.reset();
              notifyErrorFormSubmission();
              setButtonDisable(false);
              console.error(error, "Error! sending Booking Form data to Leadsquare");
            });
            // Sending Data to LeadSquare API - Code END
          }
        } else {
          recaptcha.current.reset();
          setButtonDisable(false);
          notifyErrorFormSubmission();
        }
      }).catch(err => {
        recaptcha.current.reset();
        setButtonDisable(false);
        notifyErrorFormSubmission();
        console.log(err, "Login failed");
      });
    }
  }


  useEffect(() => {
    if (
      bookingFormDetails.name !== '' &&
      bookingFormDetails.mobileNumber !== '' &&
      bookingFormDetails.date !== '' &&
      bookingFormDetails.pincode !== ''
    ) {
      setDisplayRecaptcha(true)
    }
  }, [
    bookingFormDetails.name,
    bookingFormDetails.mobileNumber,
    bookingFormDetails.date,
    bookingFormDetails.pincode
  ])

  // Update window width on resize
  const handleResize = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    // Set initial window width
    setWindowWidth(window.innerWidth)

    // Add event listener for window resize
    window.addEventListener('resize', handleResize)

    // Remove event listener when component unmounts
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [windowWidth])

  const handleInputChange = event => {
    const newValue = event.target.value.trimStart()
    setBookingFormDetails({
      ...bookingFormDetails,
      name: newValue
    })
  }

  const handlePaste = event => {
    event.preventDefault() // Prevent default paste behavior
    const pastedText = event.clipboardData.getData('text/plain')
    const cleanedText = pastedText.replace(/[^a-zA-Z]+/g, '') // Remove non-alphabetic characters
    setBookingFormDetails({
      ...bookingFormDetails,
      name: cleanedText
    })
  }

  return (
    <div className='hero'>
      {/* <div className="hero__ribbon-container"> */}
      {/* <div className="hero__ribbon">
                <div className="hero__ribbon-content">
                    <h3>BETA</h3>
                    <p>Version</p>
                </div>
            </div> */}
      {/* </div> */}

      {/* slider for desktop only  */}
      {windowWidth >= 600 && (
        <Slider
          className='hero__carousel bannerDesktop'
          dots={false}
          slidesToShow={1}
          slidesToScroll={1}
          autoplay={true}
          arrows={false}
          autoplaySpeed={3000}
        >
          {/* SLIDE */}
          <div className='hero__carousel-slide'>
            <img
              className='hero__slide-only-image'
              loading='lazy'
              src='https://medall.s3.ap-south-1.amazonaws.com/homebanner.jpg'
              alt='OurMissionVission'
            />
          </div>

          <div className='hero__carousel-slide'>
            <div className='hero__slide-with-text-content'>
              <div className='hero__slide-text-box'>
                <div>
                  <h3>We Provide</h3>
                  {/* <h2>24/7*</h2> */}
                  <h4>Home Sample Collection</h4>
                  <ul>
                    <li>
                      <img src={medallHeart} loading='lazy' alt='heart' />
                      <span>Trained Technicians</span>
                    </li>
                    <li>
                      <img src={medallHeart} loading='lazy' alt='heart' />
                      <span>Special vein finder will be used</span>
                    </li>
                    <li>
                      <img src={medallHeart} loading='lazy' alt='heart' />
                      <span>Trusted Lab</span>
                    </li>
                    <li>
                      <img src={medallHeart} loading='lazy' alt='heart' />
                      <span>Timley reports</span>
                    </li>
                  </ul>
                </div>
                <p>#Experts Who Care</p>
              </div>
              <p className='hero__conditional-text'>
                *On Selected Pincodes Only *T&C Apply
              </p>
            </div>
          </div>

          {/* SLIDE */}
          {/* <div className="hero__carousel-slide">
                    <div className="hero__slide-with-text-content-family">
                        <div className="hero__slide-text-box-family">
                            <div>
                                <h1>India's Largest</h1>
                                <h2>Integrated
                                    <br /> Diagnostics
                                    <br /> Network
                                </h2>
                            </div>
                            <p>#Experts Who Care</p>
                        </div>
                    </div>
                </div> */}

          {/* SLIDE */}
          <div className='hero__carousel-slide' id='form_redirect'>
            <img
              className='hero__slide-only-image'
              loading='lazy'
              src='https://medallwebsite.s3.ap-south-1.amazonaws.com/HomePage/HomeBannerAwardImg.jpg'
              alt='award'
            />
          </div>
        </Slider>
      )}

      {/* slider for Mobile only  */}
      {windowWidth < 600 && (
        <Slider
          className='hero__carousel bannerMobile'
          dots={false}
          slidesToShow={1}
          slidesToScroll={1}
          autoplay={true}
          arrows={false}
          autoplaySpeed={3000}
        >
          {/* SLIDE */}
         <div className='hero__carousel-slide' id='form_redirect'>
            <img
              className='hero__slide-only-image'
              fetchpriority='high'
              src='https://medall.s3.ap-south-1.amazonaws.com/homebannermobile.jpg'
              alt='OurMissionVissionMobile'
            />
          </div>
          <div className='hero__carousel-slide' id='form_redirect'>
            <img
              className='hero__slide-only-image'
              fetchpriority='high'
              src={Properties}
              alt='properties banner'
            />
          </div>

          {/* <div className='hero__carousel-slide' id='form_redirect'>
            <img
              className='hero__slide-only-image'
              fetchpriority='high'
              src={SouthLargest}
              alt='largest company'
            />
          </div> */}
          <div className='hero__carousel-slide' id='form_redirect'>
            <img
              className='hero__slide-only-image'
              src={Awards}
              alt='award'
            />
          </div>
        </Slider>
      )}

      {/* FORM  */}
      <div className='hero__form-container'>
        <form
          onSubmit={handleBookingForm}
          className={
            displayRecaptcha ? 'hero__form hero__form--height' : 'hero__form'
          }
          id='hero__book-test-form'
        >
          <h3 className='hero__form-heading'>Book Test Now !</h3>

          <div className='hero__input-group'>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              id='name'
              required
              value={bookingFormDetails.name}
              onChange={handleInputChange}
              onPaste={handlePaste}
              pattern='[A-Za-z\s]+'
              title='Please enter only alphabetic characters'
            />
          </div>

          <div className='hero__input-group '>
            <label htmlFor='contact'>Mobile Number</label>
            {/* <input type="number" id='contact' required="required"   pattern="\d{10}" maxLength="10"  title="10 digit mobile number only"  value={bookingFormDetails.mobileNumber} onChange={(e) => setBookingFormDetails({ ...bookingFormDetails, mobileNumber: e.target.value })} /> */}
            <input
              type='tel'
              id='contact'
              onFocus={() => handleInputFocus('number')}
              required
              pattern='[0-9]{10}'
              maxLength='10'
              title='Please enter a 10-digit mobile number'
              value={bookingFormDetails.mobileNumber}
              onChange={e => {
                let value = e.target.value
                if (value.startsWith('0')) {
                  value = value.slice(1)
                }
                setBookingFormDetails({
                  ...bookingFormDetails,
                  mobileNumber: value
                })
              }}
            />
          </div>
          {bookingFormDetails.mobileNumber.length >= 1 ? (
            <>
              {' '}
              {isInputFocused &&
                !/^\d{10}$/.test(bookingFormDetails.mobileNumber) && (
                  <small
                    style={{
                      marginLeft: '8px',
                      marginTop: '4px',
                      color: '#F23A3A'
                    }}
                  >
                    Enter valid number
                  </small>
                )}
            </>
          ) : (
            ''
          )}
          {/* <div className='hero__input-group'>
                    <label htmlFor="email">Email</label>
                    <input type="email" id='email' required="required" />
                </div> */}

          <div className='hero__input-group'>
            <label htmlFor='date'>Date</label>
            <input
              type='text'
              id='date'
              required='required'
              placeholder='Enter Home Collection Date'
              value={bookingFormDetails.date}
              onClick={e => (e.target.type = 'date')}
              onChange={e =>
                setBookingFormDetails({
                  ...bookingFormDetails,
                  date: e.target.value
                })
              }
            />
          </div>

          <div className='hero__input-group'>
            <label htmlFor='pincode'>Pincode</label>
            {/* <input type="number" id='pincode' required="required" value={bookingFormDetails.pincode} onChange={(e) => setBookingFormDetails({ ...bookingFormDetails, pincode: e.target.value })} /> */}
            <input
              type='text'
              id='pincode'
              required='required'
              pattern='[0-9]{6}'
              onFocus={() => handleInputFocus('number')}
              maxLength={6}
              title='Please enter a 6-digit pincode'
              value={bookingFormDetails.pincode}
              onChange={e =>
                setBookingFormDetails({
                  ...bookingFormDetails,
                  pincode: e.target.value
                })
              }
            />
          </div>
          {bookingFormDetails.pincode.length >= 1 ? (
            <>
              {' '}
              {isInputPincodeFocused &&
                !/^\d{6}$/.test(bookingFormDetails.pincode) && (
                  <small
                    style={{
                      marginLeft: '8px',
                      marginTop: '4px',
                      color: '#F23A3A'
                    }}
                  >
                    Enter valid Pincode
                  </small>
                )}
            </>
          ) : (
            ''
          )}
	  <div class="hero_input_check_point">
            <div>
              <input type="checkbox" id="Privacy" name="Privacy" value={isPrivacyPolicyAccepted} onClick={() => setIsPrivacyPolicyAccepted(!isPrivacyPolicyAccepted)} />
              <label for="" style={{ marginLeft: '5px' }}> I agree to the<Link to="https://medall.s3.ap-south-1.amazonaws.com/Medall+Website+-+Terms+of+Use+(003).pdf" target="_blank" className='hero__link'> T&C</Link> and <Link className='hero__link' to="https://medall.s3.ap-south-1.amazonaws.com/Medall+Website+Privacy+Policy.pdf" target="_blank">Privacy Policy</Link></label><br />
            </div>
            {/* <div style={{ marginTop: '10px' }}>
              <input type="checkbox" id="communication" name="communication" value={communicationAccepted} onClick={() => setCommunicationAccepted(!communicationAccepted)} />
              <label for="communication" style={{ marginLeft: '5px' }}>Enable communication</label><br />
            </div> */}
          </div>

          {displayRecaptcha && (
            <ReCAPTCHA
              ref={recaptcha}
              sitekey='6LcYrhYpAAAAAAwXXTjNwkEWZWPeeKqHF7hKW-ol'
              className='hero__recaptha'
            />
          )}

          <button
            type="submit"
            style={{
              cursor: !buttonDisable ? 'pointer' : 'not-allowed'
            }}
            disabled={buttonDisable}
          >
            {buttonDisable ? (
              <div className='' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                <div className="loader"> </div>
                Booking in progress...
              </div>
            ) : (
              "Book Now"
            )}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Hero
