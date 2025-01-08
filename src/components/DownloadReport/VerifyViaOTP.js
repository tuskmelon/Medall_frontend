import React, { useState, useRef, useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

import API from '../../api'

import '../../styles/DownloadReport/VerifyViaOtp.scss'

const VerifyViaOTP = ({ initialTime = 120 }) => {

    const [OTPCode, setOTPCode] = useState();
    const [registeredUserloginInfo, setRegisteredUserloginInfo] = useState({ countryMobileCode: "+91", mobile: "", otp: "" });
    const [sentOTP, setSentOTP] = useState(false);
    // Error Message after Login form validation
    const [validationErrorMessage, setValidationErrorMessage] = useState('');
    const [toggleOTPStatusText, setToggleOTPStatusText] = useState(false);

    const [timeLeft, setTimeLeft] = useState(initialTime);
    const [isTimerActive, setIsTimerActive] = useState(true);
    const [Timer, setTimer] = useState(false);

    const notifyWrongOTP = () => toast("❌ Incorrect OTP", { draggable: true });
    const notifyOTPSent = () => toast(`✔️ OTP sent to registered mobile number`, { draggable: true });
    const notifyOTPSentAgain = () => toast(`✔️ OTP sent again!`, { draggable: true });
    const notifyOTPNotSent = () => toast("❌ Something went wrong, OTP not sent", { draggable: true });
    const navigate = useNavigate();

    // focus first OTP Digit input box by default
    const otpFirstDigit = useRef();

    // Focus next input of OTP form 
    const activeNextInput = (event, prev, next) => {
        const checkKeyPressed = (event) => {
            const key = event.key;
            if (key === "Backspace" || key === "Delete") {
                if (document.getElementById(prev) !== null) {
                    // Focus Previous input field 
                    document.getElementById(prev).focus();
                }
            } else if (document.getElementById(next) !== null) {
                // Focus Next input field 
                document.getElementById(next).focus();
            }
        }
        checkKeyPressed(event);
    }

    const validateOTPDigitLength = (e) => {
        e.target.value = e.target.value[0];
    }

    // Validate Mobile Number on each key press
    const validateMobileNumberOnEachPress = () => {
        const regExp = /^[6-9]\d{9}$/;
        if (regExp.test(document.getElementById('verify-via-otp__mobile-number').value)) {
            // User Mobile Number
            // console.log(registeredUserloginInfo.mobile, 'mobile number');
            setValidationErrorMessage('');
        } else {
            setValidationErrorMessage('Enter Valid Mobile Number');
            // console.log(validationErrorMessage, 'error msg');
        }
        setSentOTP(false);
    }

    // Verifying and Setting OTP Code after OTP Form submission
    const sendOTP = (e) => {
        e.preventDefault();
        // Before Verifying OTP first validate mobile number
        // Validate Mobile Number 
        const regExp = /^[6-9]\d{9}$/;
        const mobileNumberField = document.getElementById('verify-via-otp__mobile-number');
        if (regExp.test(mobileNumberField.value)) {
            // User Mobile Number
            console.log(registeredUserloginInfo.mobile, 'mobile number');
            // Mobile number validation code end 

            mobileNumberField.blur();
            otpFirstDigit.current.focus();

            setSentOTP(true);
            notifyOTPSent();

        } else {
            setValidationErrorMessage('Enter Valid Mobile Number');
            // console.log(validationErrorMessage, 'error msg');
        }

        // API 
        API.get(`/api/auth/get-otp/${registeredUserloginInfo.mobile}`)
            .then(res => {
                // Toogle OTP Status text 
                console.log(res);
                console.log(res.data);
		setTimer(true);
            }).catch(err => console.log(err, "Error OTP not sent"))
    }

    // Verify this OTP at server 
    const verifyOTP = async (userInputOTP) => {
        // console.log(userInputOTP);

        const OTPVerificationData = {
            recievedOtp: userInputOTP,
            mobileNumber: registeredUserloginInfo.mobile,
        }

        await API.post("/api/auth/verify-otp", OTPVerificationData).then(res => {
            console.log(res);
            if (res.data.isVerified) {
                // If OTP is verified fetch custmer info
                API.post('https://medinfra.medallcorp.in/WebsiteAPI/api/GetCustomerID', { "UserID": registeredUserloginInfo.mobile }, {
                    auth: {
                        "username": "Medall",
                        "password": "TWVkYWxsQDMxMTJ2"
                    }
                }).then(res => {
                    if (res.data.Status === "Exists") {
                        // Setting custnomer IDs to session storage 
                        window.sessionStorage.setItem("allMembers", JSON.stringify(res.data.CustomerID));

                        navigate('/download-report');
                    }
                    // console.log(res, 'getting user details after OTP verification');
                }).catch(err => console.log(err, "Error getting user details after otp verification"))
            } else {
                notifyWrongOTP();
                console.log('Incorrect OTP');
            }
        }).catch(err => { notifyOTPNotSent(); console.log(err, 'OTP verification error') })
    }

    const verifyCredentials = (e) => {
        e.preventDefault();
        e.stopPropagation();
        //OTP setup
        const OTPDigits = document.getElementsByClassName('verify-via-otp__input--otp-code-digit');
        const OTPDigitNumberCount = 5;
        const OTPCodeArray = [];

        // Now taking each OTP digit and Settting UP 
        // Take each digit of entered OTP and convert it into array 
        for (let i = 0; i < OTPDigitNumberCount; i++) {
            OTPCodeArray.push(OTPDigits[i].value);
            console.log(OTPDigits[i].value);
        }
        setOTPCode([...OTPCodeArray]);
        // Convert OTP Array into NUMBER type 
        setOTPCode([...OTPCodeArray].join(''));
        // OTP setup code end

        // Finally set LOGIN DETAILS 
        setRegisteredUserloginInfo({ ...registeredUserloginInfo, otp: [...OTPCodeArray].join('') });

        verifyOTP([...OTPCodeArray].join(''));
    }

    const sendOTPAgain = (e) => {
        // API 
        if (registeredUserloginInfo.mobile !== "") {
            API.get(`/api/auth/resend-otp/${registeredUserloginInfo.mobile}`)
                .then(res => {
                    // Toogle OTP Status text 
                    notifyOTPSentAgain();
		    setReSendOtp(false);
                    setTimeLeft(initialTime);
                    setIsTimerActive(true);
                    setTimer(true);
                })
        }

    }

    useEffect(() => {

        if (Timer) {
            let timerInterval;

            if (isTimerActive && timeLeft > 0) {
                timerInterval = setInterval(() => {
                    setTimeLeft((prevTime) => prevTime - 1);
                }, 1000);
            } else if (timeLeft <= 0) {
                setIsTimerActive(false);
            }
            return () => clearInterval(timerInterval);
        }
    }, [timeLeft, isTimerActive, Timer]);

    return (
        <div className='verify-via-otp'>
            <h1>Download Reports</h1>
            {
                sentOTP && <p className='verify-via-otp__sub-title'>Enter the OTP thet we have sent to the below mentioned mobile number</p>
            }

            <div className='verify-via-otp__form-container'>
                <form action="" onSubmit={verifyCredentials} className='verify-via-otp__form'>
                    <h2>Only Registered Numbers For Reports</h2>
                    <label htmlFor="verify-via-otp__mobile-number" className='verify-via-otp__label'>Enter Your Mobile Number</label>
                    <div className='verify-via-otp__mobile-number-box'>
                        <span>+91</span>
                        <input type="text" className='verify-via-otp__input verify-via-otp__input--mobile-number-input' id='verify-via-otp__mobile-number' autoFocus maxLength={10} value={registeredUserloginInfo.mobile} onChange={(e) => { validateMobileNumberOnEachPress(); setRegisteredUserloginInfo({ ...registeredUserloginInfo, mobile: e.target.value }); }} required />
                    </div>
                    {/* Mobile Number valdation error message  */}
                    <p className='verify-via-otp__error-message'>{validationErrorMessage}</p>

                    <p className='verify-via-otp__label'>Enter OTP</p>
                    <div className="login__otp-input-group">
                        <input type="number" className='verify-via-otp__input verify-via-otp__input--otp-code-digit' maxLength={1} onInput={(e) => validateOTPDigitLength} id='verify-via-otp__digit-one' ref={otpFirstDigit} onKeyUp={(e) => activeNextInput(e, null, 'verify-via-otp__digit-two')} required />

                        <input type="number" className='verify-via-otp__input verify-via-otp__input--otp-code-digit' maxLength={1} onInput={(e) => validateOTPDigitLength} id='verify-via-otp__digit-two' onKeyUp={(e) => activeNextInput(e, 'verify-via-otp__digit-one', 'verify-via-otp__digit-three')} required />

                        <input type="number" className='verify-via-otp__input verify-via-otp__input--otp-code-digit' maxLength={1} onInput={(e) => validateOTPDigitLength} id='verify-via-otp__digit-three' onKeyUp={(e) => activeNextInput(e, 'verify-via-otp__digit-two', 'verify-via-otp__digit-four')} required />

                        <input type="number" className='verify-via-otp__input verify-via-otp__input--otp-code-digit' maxLength={1} onInput={(e) => validateOTPDigitLength} id='verify-via-otp__digit-four' onKeyUp={(e) => activeNextInput(e, 'verify-via-otp__digit-three', 'verify-via-otp__digit-five')} required />

                        <input type="number" className='verify-via-otp__input verify-via-otp__input--otp-code-digit' maxLength={1} onInput={(e) => validateOTPDigitLength} id='verify-via-otp__digit-five' onKeyUp={(e) => activeNextInput(e, 'verify-via-otp__digit-four', null)} required />
                    </div>
                    {/* <p className='verify-via-otp__send-again'>Didn’t receive the OTP ? <button onClick={(e) => sendOTPAgain(e)}>Send Again</button></p>
		    */}
		    
		    {
                        Timer ?
                            <div className='mt-4'>
                                <p className='verify-via-otp__label'>
                                    {isTimerActive
                                        ? `Time left: ${timeLeft}s`
                                        : "OTP expired. Please request a new OTP."
                                    }
                                </p>

                                {!isTimerActive && (
                                    <p className='verify-via-otp__send-again'>Didn’t receive the OTP ? <button onClick={(e) => sendOTPAgain(e)}>Send Again</button></p>
                                )}
                            </div>

                            : ""
                    }
                    <div className="verify-via-otp__divider-line-box">
                        <span>or</span>
                        <p></p>
                    </div>

                    <p className='verify-via-otp__redirect-link verify-via-otp__redirect-link--margin'>Already have the medall ID ? <Link to="/download-report-via-medall-login">Login</Link> </p>
                    <p className='verify-via-otp__redirect-link'>Looking for corporate info ? <Link to="/download-report-via-corporate-login">Corporate Login</Link> </p>


                    <div className="verify-via-otp__submit-buttons-container">
                        {
                            sentOTP ?
                                <button type='submit'>Login</button> : <button onClick={(e) => sendOTP(e)}>Send OTP</button>
                        }
                    </div>
                </form>
            </div>
        </div>
    )
}

export default VerifyViaOTP
