import React, { useState, useRef, useContext } from 'react'
import API from '../api'
import axios from 'axios'
import { toast } from 'react-toastify'
import ReCAPTCHA from 'react-google-recaptcha'

import '../styles/Login.scss'

import Logo from '../assets/icons/medall-logo-light.png'
import CloseButton from '../assets/icons/gradient-cross.svg'

// import component
import SignUp from './SignUp'

// UserContext
import { UserContext } from '../context/User'
import { OpenLoginFormContext } from '../context/OpenLoginForm'

const Login = ({ showForm }) => {
  const notifyWrongOTP = () => toast('❌ Incorrect OTP', { draggable: true })
  const notifyOTPNotSent = () =>
    toast('❌ Something went wrong, OTP not sent', { draggable: true })
  const notifyOTPSentAgain = () =>
    toast(`✔️ OTP sent again!`, { draggable: true })
  const notifyOTPSent = () => toast(`✔️ OTP sent!`, { draggable: true })
  const notifyUserAccountNotExists = () =>
    toast('❌ Please SignUp, No account found with entered mobile number', {
      draggable: true
    })
  const notifyForReCaptcha = () =>
    toast('❗ Please verify the reCAPTCHA!', { draggable: true })
  const notifyLoginFailed = () =>
    toast('❌ Login failed, Try again ', { draggable: true })

  // context handle
  const userContext = useContext(UserContext)
  const openLoginFormContext = useContext(OpenLoginFormContext)

  // Recaptcha Ref
  const recaptcha = useRef()

  // Creating ref for buttons
  const sendOTPButton = useRef()

  // Handle Form events
  const [OTPCode, setOTPCode] = useState()
  const [sentOTP, setSentOTP] = useState(false)
  const [loginDetails, setLoginDetails] = useState({
    countryMobileCode: '+91',
    mobile: null,
    otp: null
  })
  const [toggleForm, setToggleForm] = useState(true)
  // Error Message after Login form validation
  const [validationErrorMessage, setValidationErrorMessage] = useState('')
  const [IsEnableOTPInput, setIsEnableOTPInput] = useState(false)
  const [toggleOTPStatusText, setToggleOTPStatusText] = useState(false)
  const [displaySendAgainOTPText, setDisplaySendAgainOTPText] = useState(false)
  const [displayWrongOTPText, setDisplayWrongOTPText] = useState(false)

  // focus first OTP Digit input box by default
  const otpFirstDigit = useRef()

  // Focus next input of OTP form
  const activeNextInput = (event, prev, next) => {
    const checkKeyPressed = event => {
      const key = event.key
      if (key === 'Backspace' || key === 'Delete') {
        if (document.getElementById(prev) !== null) {
          // Focus Previous input field
          document.getElementById(prev).focus()
        }
      } else if (document.getElementById(next) !== null) {
        // Focus Next input field
        document.getElementById(next).focus()
      }
    }
    checkKeyPressed(event)
  }

  // Restricting OTP input box to contain only Single Digit
  const validateOTPDigitLength = e => {
    // if (e.target.value.length >= 1) {
    //     e.target.value = e.target.value[0];
    // }
    e.target.value = e.target.value[0]
  }

  // Validate Mobile Number on each key press
  const validateMobileNumberOnEachPress = () => {
    const regExp = /^[6-9]\d{9}$/
    if (regExp.test(document.getElementById('login__mobile-number').value)) {
      // User Mobile Number
      // console.log(loginDetails.mobile, 'mobile number');
      setValidationErrorMessage('')
    } else {
      setValidationErrorMessage('Enter Valid Mobile Number')
      // console.log(validationErrorMessage, 'error msg');
      setIsEnableOTPInput(false)
    }
    setSentOTP(false)
  }

  // Verifying and Setting OTP Code after OTP Form submission
  const sendOTP = e => {
    e.preventDefault()
    // Before Verifying OTP first validate mobile number
    // Validate Mobile Number
    const regExp = /^[6-9]\d{9}$/
    const mobileNumberField = document.getElementById('login__mobile-number')
    if (regExp.test(mobileNumberField.value)) {
      // User Mobile Number
      // console.log(loginDetails.mobile, 'mobile number');
      setValidationErrorMessage('')
      // Mobile number validation code end
    } else {
      setValidationErrorMessage('Enter Valid Mobile Number')
      console.log(validationErrorMessage, 'error msg')
      setIsEnableOTPInput(false)
    }

    // API
    API.get(`/api/auth/verify-user/${loginDetails.mobile}`)
      .then(async res => {
        console.log(res)
        // Checking if user exists in MongoDB or not
        if (res.data.status === 'exists') {
          // Enable OTP input fields if mobile number is valid
          setIsEnableOTPInput(true)
          setSentOTP(true)
          mobileNumberField.blur()
          otpFirstDigit.current.focus()

          // Start timer for OTP
          if (!userContext.userState.isUserLoggedIn) {
            setTimeout(() => {
              setDisplaySendAgainOTPText(true)
              setToggleOTPStatusText(false)
            }, 1200000)
          }
          // Start timer for OTP code END

          await API.get(`/api/auth/get-otp/${loginDetails.mobile}`)
            .then(res => {
              // Toogle OTP Status text
              setToggleOTPStatusText(true)
              notifyOTPSent()
              // console.log(res);
              // console.log(res.data);

              // Disable send OTP button
              // sendOTPButton.current.style.pointerEvents = "none";
              // console.log(sendOTPButton);
              // setTimeout(() => {
              //     // Enable send OTP button after 2 minutes
              //     sendOTPButton.current.style.pointerEvents = "auto";
              // }, 1200000);
            })
            .catch(err => console.log(err, 'Error OTP not sent.'))

          // console.log(res, "Verified User at Database");
        }
        // If user does not exists in MongoDB, Check in MS SQL
        if (res.data.status === 'does-not-exist') {
          // console.log(res, "Repsonse when user not found in mongodb");
          // Checking if user exists in another Database as well
          await axios
            .post(
              'https://medinfra.medallcorp.in/WebsiteAPI/api/GetCustomerID',
              { UserID: loginDetails.mobile },
              {
                auth: {
                  username: 'Medall',
                  password: 'TWVkYWxsQDMxMTJ2'
                }
              }
            )
            .then(async res => {
              console.log(res, 'Response from medall old database')
              if (res.data.Status === 'Exists') {
                // console.log(res, "RESPONSE OF CUSTOMER ID");
                window.localStorage.setItem(
                  'OldUserDetails',
                  JSON.stringify(res.data.CustomerID)
                )
                window.localStorage.setItem('OldUserLogin', true)
                // Enable OTP input fields if mobile number is valid
                setIsEnableOTPInput(true)
                setSentOTP(true)
                mobileNumberField.blur()
                otpFirstDigit.current.focus()

                // Start timer for OTP
                if (!userContext.userState.isUserLoggedIn) {
                  setTimeout(() => {
                    setDisplaySendAgainOTPText(true)
                    setToggleOTPStatusText(false)
                  }, 20000)
                }
                // Start timer for OTP code END

                await API.get(`/api/auth/get-otp/${loginDetails.mobile}`)
                  .then(res => {
                    // Toogle OTP Status text
                    setToggleOTPStatusText(true)
                    notifyOTPSent()
                    console.log(res)
                    console.log(res.data)
                  })
                  .catch(err => {
                    notifyOTPNotSent()
                    console.log(err, 'Error OTP not sent.')
                  })
              }
              if (res.data.Status === 'NotExists') {
                // If User Does not exists in both database notify via toast
                notifyUserAccountNotExists()
              }
            })
            .catch(err =>
              console.log(
                err,
                'Error verifying user at another database(MS SQL)'
              )
            )
        }
      })
      .catch(err => {
        notifyUserAccountNotExists()
        console.log(err, 'Error Login User, No Account found in database')
      })
  }

  const sendOTPAgain = e => {
    // API
    API.get(`/api/auth/resend-otp/${loginDetails.mobile}`).then(res => {
      // Toogle OTP Status text
      notifyOTPSentAgain()
      setToggleOTPStatusText(true)
      // console.log(res);
      // console.log(res.data);
    })
  }

  const verifyOTP = async userInputOTP => {
    // API
    const OTPVerificationData = {
      recievedOtp: userInputOTP,
      mobileNumber: loginDetails.mobile
    }

    // Creating Account of Old Database user on MongoDB as well
    const oldUserLogin = window.localStorage.getItem('OldUserLogin')
    const oldUserDetails = JSON.parse(
      window.localStorage.getItem('OldUserDetails')
    )

    if (oldUserLogin) {
      // Getting Old user personal details
      const OldAccountHolderID = oldUserDetails[0].CustomerID
      axios
        .post(
          'https://medinfra.medallcorp.in/WebsiteAPI/api/GetCustomerDetailsbyOTP',
          {
            UserID: OldAccountHolderID
          },
          {
            auth: {
              username: 'Medall',
              password: 'TWVkYWxsQDMxMTJ2'
            }
          }
        )
        .then(async res => {
          console.log(res, 'OLD account holder personal Information')
          window.localStorage.setItem(
            'OldAccountHolderPersonalDetails',
            JSON.stringify(res.data.CustomerDetails[0])
          )

          //    Creating Account of Old User in MongoDB
          const oldUserOTPVerificationData = {
            recievedOtp: userInputOTP,
            mobileNumber: loginDetails.mobile
          }

          const OldUserPersonalDetail = JSON.parse(
            window.localStorage.getItem('OldAccountHolderPersonalDetails')
          )
          await API.post('/api/auth/verify-otp', oldUserOTPVerificationData)
            .then(async res => {
              const userInfo = {
                mobileNumber: OldUserPersonalDetail.MobileNo,
                name: OldUserPersonalDetail.Customername,
                email: OldUserPersonalDetail.Emailid,
                pincode: OldUserPersonalDetail.Pincode,
                namePrefix: OldUserPersonalDetail.Salutation,
                mobileCode: loginDetails.countryMobileCode,
                medallId: OldUserPersonalDetail.CustomerId
              }

              // POST user signUp details to database after OTP is verified at server
              if (res.data.isVerified) {
                console.log(res, 'success verification')

                let OldUserAllInfo
                await API.post('/api/auth/sign-up', userInfo)
                  .then(async res => {
                    console.log(res, 'response of creating a user account')
                    // isShowLoginForm(false);
                    // setDisplayWrongOTPText(false);
                    OldUserAllInfo = res

                    // Assinging Cart
                    const newCartData = {
                      tests: [],
                      healthPackages: [],
                      medallId: res.data.user.medallId
                    }

                    let OldUserCartID
                    if (res.status === 200) {
                      // Automatically Log-in User
                      userContext.userDispatch({
                        type: 'login',
                        payload: {
                          mobile: res.data.user.mobileNumber,
                          medallId: res.data.user.medallId
                        }
                      })

                      API.post('/api/cart/create', newCartData)
                        .then(res => {
                          // console.log(res, 'Cart assigned to user')
                          // console.log(res.data.cartDoc._id, "This is Cart ID for OLD user");
                          OldUserCartID = res.data.cartDoc._id

                          // Store all Old-User Information into localStorage END
                          //Setting cartID as well
                          const userData = {
                            ...OldUserAllInfo.data.user,
                            cart: OldUserCartID
                          }

                          // Setting user loggin status in localStorage
                          window.localStorage.setItem(
                            'ismedallUserLoggedIn',
                            true
                          )

                          //Getting user login status from localStorage
                          const isUserLoggedIn = window.localStorage.getItem(
                            'ismedallUserLoggedIn'
                          )

                          //Note: Here cartId is getting set from above response
                          if (isUserLoggedIn) {
                            const action = {
                              type: 'login',
                              payload: {
                                name: userData.name,
                                mobile: userData.mobileNumber,
                                medallId: userData.medallId,
                                location: userData.location,
                                pincode: userData.pincode,
                                userId: userData._id,
                                cartId: userData.cart,
                                addressId: userData.address,
                                cartMembers: {
                                  name: userData.name,
                                  relation: 'My Self',
                                  medallId: userData.medallId
                                }
                              }
                            }
                            userContext.userDispatch(action)
                          }

                          window.localStorage.setItem(
                            'medallUserInfo',
                            JSON.stringify(userData)
                          )

                          // Store all Old-User Information into localStorage code END
                        })
                        .catch(err =>
                          console.log(err, 'Error assiging cart to user')
                        )

                      // Automatically Log-in User
                      // userContext.userDispatch({ type: 'login', payload: { mobile: res.data.user.mobileNumber, medallId: res.data.user.medallId } });

                      //Close Login Form
                      showForm(false)
                    }
                  })
                  .catch(err => console.log(err, 'error creating new user'))
              } else {
                setDisplayWrongOTPText(true)
              }
            })
            .catch(err => console.log(err, 'OTP verification error'))

          // Creating Account of Old user in MongoDB end
        })
        .catch(err =>
          console.log(
            err,
            'Error getting user personal details from OLD database(MS SQL)'
          )
        )
      // Create Account of Old-User in MongoDB database
    } else {
      await API.post('/api/auth/login', OTPVerificationData)
        .then(res => {
          // console.log(res, "user logged in (this is all the user details response)");
          showForm(false)
          // setDisplayWrongOTPText(false);
          userContext.userDispatch({
            type: 'login',
            payload: {
              mobile: res.data.user.mobileNumber,
              medallId: res.data.user.medallId
            }
          })

          window.localStorage.setItem('ismedallUserLoggedIn', true)

          const isUserLoggedIn = window.localStorage.getItem(
            'ismedallUserLoggedIn'
          )

          const userData = res.data.user
          if (isUserLoggedIn) {
            const action = {
              type: 'login',
              payload: {
                name: userData.name,
                mobile: userData.mobileNumber,
                medallId: userData.medallId,
                location: userData.location,
                pincode: userData.pincode,
                userId: userData._id,
                cartId: userData.cart,
                addressId: userData.address,
                cartMembers: {
                  name: userData.name,
                  relation: 'My Self',
                  medallId: userData.medallId
                }
              }
            }
            userContext.userDispatch(action)
          }

          window.localStorage.setItem(
            'medallUserInfo',
            JSON.stringify(userData)
          )
        })
        .catch(err => {
          notifyWrongOTP()
          console.log(err, 'Error user not loogged in')
        })
    }
  }

  // Verify User Input Credentials
  const verifyCredentials = async e => {
    e.preventDefault()
    e.stopPropagation()
    //OTP setup
    const OTPDigits = document.getElementsByClassName(
      'login__input--otp-code-digit'
    )
    const OTPDigitNumberCount = 5
    const OTPCodeArray = []

    // Now taking each OTP digit and Settting UP
    // Take each digit of entered OTP and convert it into array
    for (let i = 0; i < OTPDigitNumberCount; i++) {
      OTPCodeArray.push(OTPDigits[i].value)
      console.log(OTPDigits[i].value)
    }
    setOTPCode([...OTPCodeArray])
    // Convert OTP Array into NUMBER type
    setOTPCode([...OTPCodeArray].join(''))
    // OTP setup code end

    // Finally set LOGIN DETAILS
    setLoginDetails({ ...loginDetails, otp: [...OTPCodeArray].join('') })

    // Check for capctha verification
    const captchaValue = recaptcha.current.getValue()
    if (!captchaValue) {
      notifyForReCaptcha()
    } else {
      // Verifying reCapctha at server
      await API.post('/api/auth/verify-captcha', { captchaValue: captchaValue })
        .then(res => {
          if (res.data.success) {
            // make form submission
            verifyOTP([...OTPCodeArray].join(''))
          } else {
            notifyLoginFailed()
          }
        })
        .catch(err => {
          notifyLoginFailed()
          console.log(err, 'Login failed')
        })
    }
  }

  const displayLoginFrom = isLoginFormDisplay => {
    setToggleForm(isLoginFormDisplay)
  }

  // Final User Details to verify at server
  console.log(OTPCode)
  console.log(loginDetails)

  return (
    <>
      <div className='login'>
        <div className='login__container' data-aos='flip-down'>
          <span className='login__close-button-container'>
            <img
              className='login__close-button'
              src={CloseButton}
              alt='close button'
              onClick={() => {
                openLoginFormContext.openLoginFormDispatch({
                  type: 'closeLoginForm'
                })
                showForm(false)
              }}
            />
          </span>

          <div className='login__company-info'>
            <img
              data-aos='zoom-in'
              data-aos-delay='500'
              src={Logo}
              alt='logo'
            />
          </div>

          <div className='login__forms-container'>
            <div className='login__header'>
              <h2 data-aos='fade-down' data-aos-delay='500'>
                Hello!
              </h2>
              <p>Kindly login to avail our services</p>
            </div>

            <div className='login__form-outer-box'>
              <div className='login__form-sign-login-toggle-btn-box'>
                <button
                  onClick={() => setToggleForm(false)}
                  className={`login__toggle-btn ${
                    toggleForm ? '' : 'login__toggle-btn--active'
                  }`}
                >
                  Sign Up
                </button>

                <button
                  onClick={() => setToggleForm(true)}
                  className={`login__toggle-btn ${
                    toggleForm ? 'login__toggle-btn--active' : ''
                  }`}
                >
                  Login
                </button>
              </div>

              {toggleForm ? (
                <>
                  <form
                    onSubmit={verifyCredentials}
                    className='login__login-form'
                  >
                    <h2>Login To Your Account</h2>

                    <label
                      htmlFor='login__mobile-number'
                      className='login__label'
                    >
                      Enter Your Mobile Number
                    </label>
                    <div className='login__mobile-number-box'>
                      <span>+91</span>
                      <input
                        type='text'
                        className='login__input login__input--mobile-number-input'
                        id='login__mobile-number'
                        autoFocus
                        maxLength={10}
                        value={loginDetails.mobile}
                        onChange={e => {
                          setLoginDetails({
                            ...loginDetails,
                            mobile: e.target.value
                          })
                          validateMobileNumberOnEachPress()
                        }}
                        required
                      />
                    </div>
                    {/* Mobile Number valdation error message  */}
                    <p className='login__error-message'>
                      {validationErrorMessage}
                    </p>

                    {/* OTP  */}
                    <p className='login__label'>Enter OTP</p>
                    <div className='login__otp-input-group'>
                      <input
                        type='number'
                        className='login__input login__input--otp-code-digit'
                        maxLength={1}
                        onInput={e => validateOTPDigitLength}
                        id='login__digit-one'
                        ref={otpFirstDigit}
                        onKeyUp={e =>
                          activeNextInput(e, null, 'login__digit-two')
                        }
                        required
                        disabled={IsEnableOTPInput ? false : true}
                      />

                      <input
                        type='number'
                        className='login__input login__input--otp-code-digit'
                        maxLength={1}
                        onInput={e => validateOTPDigitLength}
                        id='login__digit-two'
                        onKeyUp={e =>
                          activeNextInput(
                            e,
                            'login__digit-one',
                            'login__digit-three'
                          )
                        }
                        required
                        disabled={IsEnableOTPInput ? false : true}
                      />

                      <input
                        type='number'
                        className='login__input login__input--otp-code-digit'
                        maxLength={1}
                        onInput={e => validateOTPDigitLength}
                        id='login__digit-three'
                        onKeyUp={e =>
                          activeNextInput(
                            e,
                            'login__digit-two',
                            'login__digit-four'
                          )
                        }
                        required
                        disabled={IsEnableOTPInput ? false : true}
                      />

                      <input
                        type='number'
                        className='login__input login__input--otp-code-digit'
                        maxLength={1}
                        onInput={e => validateOTPDigitLength}
                        id='login__digit-four'
                        onKeyUp={e =>
                          activeNextInput(
                            e,
                            'login__digit-three',
                            'login__digit-five'
                          )
                        }
                        required
                        disabled={IsEnableOTPInput ? false : true}
                      />

                      <input
                        type='number'
                        className='login__input login__input--otp-code-digit'
                        maxLength={1}
                        onInput={e => validateOTPDigitLength}
                        id='login__digit-five'
                        onKeyUp={e =>
                          activeNextInput(e, 'login__digit-four', null)
                        }
                        required
                        disabled={IsEnableOTPInput ? false : true}
                      />
                    </div>
                    {displayWrongOTPText && (
                      <p className='login__error-message'>
                        Please enter correct OTP
                      </p>
                    )}
                    {toggleOTPStatusText ? (
                      <p className='login__otp-status'>
                        OTP sent to your registered mobile number
                      </p>
                    ) : (
                      ''
                    )}
                    {displaySendAgainOTPText && (
                      <p className='login__otp-status'>
                        Didn’t receive the OTP?{' '}
                        <button onClick={e => sendOTPAgain(e)}>
                          {' '}
                          Send Again
                        </button>
                      </p>
                    )}

                    <p className='login__sign-up-suggestion'>
                      New User?{' '}
                      <button
                        type='button'
                        onClick={() => setToggleForm(false)}
                      >
                        Create Account
                      </button>
                    </p>
                    <div className='login__submit-buttons-container'>
                      {sentOTP ? (
                        <>
                          <ReCAPTCHA
                            ref={recaptcha}
                            sitekey='6LcYrhYpAAAAAAwXXTjNwkEWZWPeeKqHF7hKW-ol'
                            className='login__recaptha'
                          />
                          <button type='submit' className='login__login-button'>
                            Login
                          </button>
                        </>
                      ) : (
                        <button ref={sendOTPButton} onClick={e => sendOTP(e)}>
                          Send OTP
                        </button>
                      )}

                      {/* <button onClick={(e) => verifyOTP(e)}>Send OTP</button> */}
                    </div>
                  </form>
                </>
              ) : (
                <SignUp
                  displayLoginForm={displayLoginFrom}
                  isShowLoginForm={showForm}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
