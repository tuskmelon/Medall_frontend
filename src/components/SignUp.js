import React, { useState, useRef, useContext, useEffect } from 'react'
import Select from 'react-dropdown-select'
import { toast } from 'react-toastify'

import API from '../api'

import '../styles/SignUp.scss'

// UserContext
import { UserContext } from '../context/User'

const SignUp = ({ displayLoginForm, isShowLoginForm }) => {
  const notifyOTPSendAgain = () =>
    toast(`✔️ OTP sent again!`, { draggable: true })
  const notifyUserAlreadyExists = () =>
    toast(`❗ Account already exists with entered mobile number`, {
      draggable: true
    })
  
  // context handle
  const userContext = useContext(UserContext)

  const [signUpOTPCode, setSignUpOTPCode] = useState()
  const [displaySendAgainOTPText, setDisplaySendAgainOTPText] = useState(false)
  const [signUpDetails, setSignUpDetails] = useState({
    namePrefix: 'MR',
    name: '',
    countryMobileCode: '+91',
    mobile: '',
    email: '',
    pincode: '',
    signUpOtp: ''
  })
  useEffect(() => {
    setSignUpDetails({
      namePrefix: 'MR',
      name: '',
      countryMobileCode: '+91',
      mobile: '',
      email: '',
      pincode: '',
      signUpOtp: ''
    })
  }, [])
  const [displayWrongOTPText, setDisplayWrongOTPText] = useState(false)
  // OTP Sent status
  const [OTPSentStatus, setOTPSentStatus] = useState(false)

  console.log(signUpDetails, 'signUpDetails')

  const namePrefix = [
    {
      value: 'MR',
      label: 'MR'
    },
    {
      value: 'MRS',
      label: 'MRS'
    },
    {
      value: 'MS',
      label: 'MS'
    }
  ]

  const countryCodes = [
    {
      label: '+91',
      value: '+91'
    }
  ]

  const [toggleSignUpForm, setToggleSignUpForm] = useState(true)
  const [validationErrorMessage, setValidationErrorMessage] = useState('')

  // Validate Mobile Number on each key press
  const validateMobileNumberOnEachPress = () => {
    const regExp = /^[6-9]\d{9}$/
    if (regExp.test(document.getElementById('sign-up__mobile-number').value)) {
      // User Mobile Number
      // console.log(signUpDetails.mobile, 'mobile number');
      setValidationErrorMessage('')
    } else {
      setValidationErrorMessage('Enter Valid Mobile Number')
      console.log(validationErrorMessage, 'error msg')
      // setIsEnableOTPInput(false);
    }
  }

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

  const submitSignUpForm = e => {
    e.preventDefault()
    e.stopPropagation()
    setToggleSignUpForm(false)
    setDisplaySendAgainOTPText(true)

    // Send OTP to enter mobile number when user click on Verify button
    API.get(`/api/auth/get-otp/${signUpDetails.mobile}`)
      .then(res => {
        // if OTP sent successfully set setOTPSentStatus true
        if (res.status === 200) {
          setOTPSentStatus(true)
        }
      })
      .catch(err => console.log(err, 'Error sending OTP'))
  }

  const verifyOTP = userInputOTP => {
    const OTPVerificationData = {
      recievedOtp: userInputOTP,
      mobileNumber: signUpDetails.mobile
    }

    API.post('/api/auth/verify-otp', OTPVerificationData)
      .then(res => {
        console.log(res, 'OTP Verified')
        // Generate medallId by using name and mobile number
        const generateMedallId =
          signUpDetails.name.slice(0, 3) +
          Math.floor(Math.random() * 9000 + 1000).toString() +
          signUpDetails.mobile.slice(7, 10) +
          Math.floor(Math.random() * 9000 + 1000).toString()

        const userInfo = {
          mobileNumber: signUpDetails.mobile,
          name: signUpDetails.name,
          email: signUpDetails.email,
          pincode: signUpDetails.pincode,
          namePrefix: signUpDetails.namePrefix,
          mobileCode: signUpDetails.countryMobileCode,
          medallId: generateMedallId
        }

        // POST user signUp details to database after OTP is verified at server
        if (res.data.isVerified) {
          // console.log(res, 'success verification');

          API.post('/api/auth/sign-up', userInfo)
            .then(async res => {
              console.log(res, 'response of creating a user account')

              // isShowLoginForm(false);
              // setDisplayWrongOTPText(false);

              // // Automatically login user
              // userContext.userDispatch({ type: 'login', payload: { mobile: res.data.user.mobileNumber, medallId: res.data.user.medallId } });
              // window.localStorage.setItem("ismedallUserLoggedIn", true);
              // // Automatically Log-in User END

              // // Assinging Cart to user
              // const newCartData = {
              //     tests: [],
              //     healthPackages: [],
              //     medallId: res.data.user.medallId
              // }

              // const userDataWithoutCartId = res.data.user;
              // let cartID;

              const medallID = res?.data?.user?.medallId
              if (res.data.status === 'success') {
                setDisplayWrongOTPText(false)

                // Automatically login user
                userContext.userDispatch({
                  type: 'login',
                  payload: {
                    mobile: res.data.user.mobileNumber,
                    medallId: res.data.user.medallId
                  }
                })
                window.localStorage.setItem('ismedallUserLoggedIn', true)
                // Automatically Log-in User END

                // Assinging Cart to user

                let newCartData = {
                  tests: [],
                  healthPackages: [],
                  medallId: medallID,
                  bookingId: ''
                }

                const userDataWithoutCartId = res.data.user
                let cartID

                await API.post('/api/cart/create', newCartData)
                  .then(res => {
                    console.log(res, 'Cart assigned to user')
                    //fetching cart id and assigning it to cartID variable
                    cartID = res.data.cartDoc._id
                    const userData = { ...userDataWithoutCartId, cart: cartID }
                    //Check if user is logged-in or not
                    const isUserLoggedIn = window.localStorage.getItem(
                      'ismedallUserLoggedIn'
                    )

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
                  .catch(err => console.log(err, 'Error assiging cart to user'))

                // Close login form
                isShowLoginForm(false)
              }
              console.log(res, 'responsefrom loginpage')
              if (res.data.status === 'user-already-exists') {
                console.log('user-already')
                // toast(`❗ Account already exists with entered mobile number`, {
                //   draggable: true
                // })
                notifyUserAlreadyExists()
              }
            })
            .catch(err => console.log(err, 'error creating new user'))
        } else {
          setDisplayWrongOTPText(true)
        }
      })
      .catch(err => console.log(err, 'OTP verification error'))
  }

  // Verify User Input Credentials
  const verifyCredentials = e => {
    e.preventDefault()
    e.stopPropagation()
    //OTP setup
    const OTPDigits = document.getElementsByClassName(
      'sign-up-otp__input--otp-code-digit'
    )
    const OTPDigitNumberCount = 5
    const OTPCodeArray = []

    // Now taking each OTP digit and Settting UP
    // Take each digit of entered OTP and convert it into array
    for (let i = 0; i < OTPDigitNumberCount; i++) {
      OTPCodeArray.push(OTPDigits[i].value)
      console.log(OTPDigits[i].value)
    }
    setSignUpOTPCode([...OTPCodeArray])

    // Convert OTP Array into NUMBER type
    // setSignUpOTPCode(+[...OTPCodeArray].join(''));

    // OTP in string type
    setSignUpOTPCode([...OTPCodeArray].join(''))
    // OTP setup code end

    // Finally set LOGIN DETAILS
    setSignUpDetails({
      ...signUpDetails,
      signUpOtp: [...OTPCodeArray].join('')
    })

    setDisplaySendAgainOTPText(true)

    verifyOTP([...OTPCodeArray].join(''))

    console.log([...OTPCodeArray].join(''))
  }

  const sendOTPAgain = e => {
    // API
    API.get(`/api/auth/resend-otp/${signUpDetails.mobile}`)
      .then(res => {
        // Toogle OTP Status text
        notifyOTPSendAgain()
      })
      .catch(err => console.log(err, 'Resending OTP Failed'))
  }

  // console.log(signUpDetails, 'sign up details');
  // console.log(signUpOTPCode, 'sign up OTP CODE');

  return (
    <>
      {toggleSignUpForm ? (
        <div className='sign-up'>
          <h2>Enter your details</h2>
          <form
            action=''
            onSubmit={e => submitSignUpForm(e)}
            method='post'
            className='sign-up__sign-up-form'
          >
            <div className='sign-up__input-group-container'>
              <div className='sign-up__input-group'>
                <label
                  className='sign-up__label'
                  htmlFor='sign-up__uploader-name'
                >
                  NAME
                </label>
                <div className='sign-up__select-menu-box'>
                  <Select
                    className='sign-up__select-menu'
                    placeholder='MR'
                    options={namePrefix}
                    searchable={false}
                    onChange={values =>
                      setSignUpDetails({
                        ...signUpDetails,
                        namePrefix: values[0].value
                      })
                    }
                  />
                </div>
                <input
                  type='text'
                  id='sign-up__uploader-name'
                  className='sign-up__input sign-up__input--margin '
                  placeholder='Please Provide Your Name'
                  value={signUpDetails.name}
                  onChange={e =>
                    setSignUpDetails({ ...signUpDetails, name: e.target.value })
                  }
                  required
                />
              </div>

              <div className='sign-up__input-group'>
                <label
                  className='sign-up__label sign-up__label--mobile sign-up__label--z-index'
                  htmlFor='sign-up__mobile-number'
                >
                  Mobile Number
                </label>
                <div className='sign-up__select-menu-box sign-up__select-menu-box--mobile'>
                  <Select
                    className='sign-up__select-menu sign-up__select-menu--mobile'
                    placeholder='+91'
                    options={countryCodes}
                    searchable={false}
                    onChange={values =>
                      setSignUpDetails({
                        ...signUpDetails,
                        countryMobileCode: values[0].value
                      })
                    }
                  />
                </div>
                <input
                  type='text'
                  id='sign-up__mobile-number'
                  className='sign-up__input sign-up__input--z-index sign-up__input--margin'
                  placeholder='Enter Your Mobile Number'
                  maxLength={10}
                  value={signUpDetails.mobile}
                  onChange={e => {
                    setSignUpDetails({
                      ...signUpDetails,
                      mobile: e.target.value
                    })
                    validateMobileNumberOnEachPress()
                  }}
                  required
                />
              </div>
              {validationErrorMessage !== '' ? (
                <p className='sign-up__mobile-number-error-msg'>
                  {validationErrorMessage}
                </p>
              ) : (
                ''
              )}

              <div className='sign-up__input-group'>
                <label
                  className='sign-up__label sign-up__label--z-index'
                  htmlFor='sign-up__email'
                >
                  Mail Id
                </label>
                <input
                  type='email'
                  id='sign-up__email'
                  className='sign-up__input sign-up__input--z-index'
                  placeholder='Enter Your Email Id'
                  value={signUpDetails.email}
                  onChange={e =>
                    setSignUpDetails({
                      ...signUpDetails,
                      email: e.target.value
                    })
                  }
                  required
                />
              </div>

              <div className='sign-up__input-group'>
                <label
                  className='sign-up__label sign-up__label--z-index'
                  htmlFor='sign-up__pincode'
                >
                  Pincode
                </label>
                <input
                  type='number'
                  id='sign-up__pincode'
                  className='sign-up__input sign-up__input--z-index'
                  placeholder='Enter Your Area Pincode'
                  value={signUpDetails.pincode}
                  onChange={e =>
                    setSignUpDetails({
                      ...signUpDetails,
                      pincode: e.target.value
                    })
                  }
                  required
                />
              </div>
            </div>
            <p className='sign-up-otp__login-suggestion'>
              Already Have An Account? &nbsp;{' '}
              <button
                type='button'
                onClick={() => {
                  displayLoginForm(true)
                }}
              >
                Login
              </button>
            </p>
            <div className='sign-up__verify-btn'>
              <button type='submit'>Verify</button>
            </div>
          </form>
        </div>
      ) : (
        <form onSubmit={e => verifyCredentials(e)} className='sign-up-otp'>
          <h2>Verify OTP</h2>
          <h4>
            Enter the OTP that we have sent to the below mentioned mobile number
          </h4>
          <p className='sign-up-otp__mobile-number'>
            {signUpDetails.countryMobileCode} {signUpDetails.mobile}
          </p>
          <p className='sign-up-otp__label'>Enter OTP</p>
          <div className='sign-up-otp__otp-input-group'>
            <input
              type='number'
              className='sign-up-otp__input sign-up-otp__input--otp-code-digit'
              onInput={e => validateOTPDigitLength}
              id='sign-up-otp__digit-one'
              ref={otpFirstDigit}
              onKeyUp={e => activeNextInput(e, null, 'sign-up-otp__digit-two')}
              required
            />

            <input
              type='number'
              className='sign-up-otp__input sign-up-otp__input--otp-code-digit'
              onInput={e => validateOTPDigitLength}
              id='sign-up-otp__digit-two'
              onKeyUp={e =>
                activeNextInput(
                  e,
                  'sign-up-otp__digit-one',
                  'sign-up-otp__digit-three'
                )
              }
              required
            />

            <input
              type='number'
              className='sign-up-otp__input sign-up-otp__input--otp-code-digit'
              onInput={e => validateOTPDigitLength}
              id='sign-up-otp__digit-three'
              onKeyUp={e =>
                activeNextInput(
                  e,
                  'sign-up-otp__digit-two',
                  'sign-up-otp__digit-four'
                )
              }
              required
            />

            <input
              type='number'
              className='sign-up-otp__input sign-up-otp__input--otp-code-digit'
              onInput={e => validateOTPDigitLength}
              id='sign-up-otp__digit-four'
              onKeyUp={e =>
                activeNextInput(
                  e,
                  'sign-up-otp__digit-three',
                  'sign-up-otp__digit-five'
                )
              }
              required
            />

            <input
              type='number'
              className='sign-up-otp__input sign-up-otp__input--otp-code-digit'
              onInput={e => validateOTPDigitLength}
              id='sign-up-otp__digit-five'
              onKeyUp={e => activeNextInput(e, 'sign-up-otp__digit-four', null)}
              required
            />
          </div>
          {displayWrongOTPText && (
            <p className='sign-up-otp__error-message'>
              Please enter correct OTP
            </p>
          )}
          {displaySendAgainOTPText && (
            <p className='sign-up-otp__otp-status'>
              Didn’t receive the OTP?{' '}
              <button
                type='button'
                onClick={e => {
                  sendOTPAgain()
                  notifyOTPSendAgain()
                }}
              >
                {' '}
                Send Again
              </button>
            </p>
          )}

          <div className='sign-up-otp__sign-up-btn-container'>
            <p className='sign-up-otp__login-suggestion'>
              Already Have An Account? &nbsp;
              <button
                type='button'
                onClick={() => {
                  displayLoginForm(true)
                }}
              >
                Login
              </button>
            </p>
            <button className='sign-up-otp__sign-up-button' type='submit'>
              Sign Up
            </button>
          </div>
        </form>
      )}
    </>
  )
}

export default SignUp
