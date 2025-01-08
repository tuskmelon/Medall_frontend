import React, { useState, useRef } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import API from '../api';
import axios from 'axios';
import ReCAPTCHA from "react-google-recaptcha";

import '../styles/BookHomeVisitCard.scss'

import CloseSign from "../assets/icons/cross-pink.svg"

const BookHomeVisitCard = ({ testDetails }) => {
    const [bookingFormDetails, setBookingFormDetails] = useState({ name: '', mobileNumber: '', date: '', pincode: '' });
    const [isDisplayBookTestForm, setIsDisplayBookTestForm] = useState(false);
    const [isInputFocused, setIsInputFocused] = useState(false);

    const [searchParams, setSearchParams] = useSearchParams();

    const formName = window.location.href
    console.log(formName.split("/")[formName.split("/").length - 1], 'test details');

    console.log(searchParams, 'test details');

    const handleInputFocus = () => {
        setIsInputFocused(true);
    };
    const notifyFormSubmited = () => toast("☎️ We will contact you soon!", { draggable: true });
    const notifyErrorFormSubmission = () => toast("❗ Try Again, Form Submission Failed", { draggable: true });
    const notifyForReCaptcha = () => toast("❗ Please verify the reCAPTCHA!", { draggable: true });

    // Recaptcha Ref 
    const recaptcha = useRef();

    let navigate = useNavigate();

    const [buttonDisable, setButtonDisable] = useState(false)

    const handleBookingForm = async (e) => {
        e.preventDefault();
        const bookingFormData = {
            name: bookingFormDetails.name,
            mobileNumber: bookingFormDetails.mobileNumber,
            date: bookingFormDetails.date,
            pincode: bookingFormDetails.pincode
        }

        // Check for capctha verification
        const captchaValue = recaptcha.current.getValue();
        if (!captchaValue) {
        // if (false) {
            notifyForReCaptcha();
        } else {
	    setButtonDisable(true);

            await API.post('/api/booking/', bookingFormData)
                .then(res => {
                    if (res.data.status === "success") {
                        console.log(res, "Booking Success");
                        // Calling function to send data to CRM dashboard 
                        sendDataToCRM();
                    } else {
			setButtonDisable(false);

                        notifyErrorFormSubmission();
                        console.log("Booking failed");
                    }
                })
                .catch(err => {
		    setButtonDisable(false);

                    notifyErrorFormSubmission();
                    console.log(err, 'Error submitting Booking Form')
                })

            async function sendDataToCRM() {
                // Sending Data to CRM Dashboard 
                const MedallAPIToken = "TWVkYWxsOlRXVmtZV3hzUURNeE1USjI=";
                const utcDate = new Date();
                const nowUTC = Date.UTC(utcDate.getUTCFullYear, utcDate.getUTCMonth(), utcDate.getUTCDate(), utcDate.getUTCDate(), utcDate.getUTCHours());

                console.log(nowUTC, "utc");

                const bookingData = {
                    FullName: bookingFormDetails.name,
                    homeCollectionDate: setBookingFormDetails.date,
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
                }).then(async (response) => {
                    console.log(response, "Test Booking form submitted successfully ");
                    if (response.data === "Success") {
			
                        // Sending Form data to LeadSquare API- Code Start
                        const url = 'https://api-in21.leadsquared.com/v2/ProspectActivity.svc/CreateCustom';
                        const accessKey = 'u$r66791bf41480f4111abdee73031bab5d';
                        const secretKey = 'e990c51e929a92c8dc9dbd5073548da11405c5ae';
                        // const date = new Date().toISOString().slice(0, 10);
                        // const time = new Date().toLocaleTimeString('en-IN', { hour12: false, timeZone: 'Asia/Kolkata' })
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
                                    Attribute: 'SearchBy',
                                    Value: 'Phone',
                                },
                            ],
                            Activity: {
                                ActivityEvent: 206,
                                ActivityNote: "Note for the activity",
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
                                        Value: formName.split("/")[formName.split("/").length - 1].includes('health-package') ? `Health Package Form - ${formName.split("/")[formName.split("/").length - 1]} ` : `Test Form - ${formName.split("/")[formName.split("/").length - 1]}`
                                    }
                                ],
                            },
                        }
                        await axios.post(url, bookingInfo, {
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            params: {
                                accessKey: accessKey,
                                secretKey: secretKey
                            }
                        })
                            .then(response => {
                                console.log(response, "Sent Booking Details to Lead Square");
                                if (response.data.Status === "Success") {
                                    setBookingFormDetails({ ...bookingFormDetails, name: '', mobileNumber: '', date: '', pincode: '' });
                                    recaptcha.current.reset();
                                    setIsDisplayBookTestForm(false);
                                    notifyFormSubmited();
                                    navigate("/thank-you");
				    setButtonDisable(false);

                                } else {
				    setButtonDisable(false);

                                    recaptcha.current.reset();
                                    notifyErrorFormSubmission();
                                    notifyErrorFormSubmission();
                                    console.log("Error!, LSQ API failed");
                                }
                            })
                            .catch(error => {
				setButtonDisable(false);
                                recaptcha.current.reset();
                                notifyErrorFormSubmission();
                                console.error(error, "Error! sending Booking Form data to Leadsquare API");
                            });
                        // Sending Form data to LeadSquare API- Code END
                    }
                    else {
			setButtonDisable(false);

                        recaptcha.current.reset();
                        notifyErrorFormSubmission();
                        console.log("Error!,CRM API failed");
                    }
                }).catch(error => {
		    setButtonDisable(false);
                    recaptcha.current.reset();
                    notifyErrorFormSubmission();
                    console.error(error, "Error sending Booking Form data to server");
                });
            }
        }
    }

    const handleMobileNumber = (e) => {
        // Remove non-numeric characters
        const sanitizedValue = e.target.value.replace(/\D/g, '');
        // Limit the length to 10 digits
        const limitedValue = sanitizedValue.slice(0, 10);
        // Update the state
        setBookingFormDetails({ ...bookingFormDetails, mobileNumber: limitedValue })
    }

    // If required we can pass in Book Your Test form 
    // console.log(testDetails, 'Test NAME');

    return (
        <>
            {/* FORM  */}
            {
                isDisplayBookTestForm && <div className="book-visit-form">

                    <form onSubmit={handleBookingForm} className='book-visit-form__form' id="book-visit-form__book-test-form">
                        <img className='book-visit-form__close-form-btn' src={CloseSign} alt="close" onClick={() => setIsDisplayBookTestForm(false)} />

                        <h3 className='book-visit-form__form-heading'>Book Test Now !</h3>

                        <div className='book-visit-form__input-group'>
                            <label htmlFor="name">Name</label>
                            <input type="text" id='name' required="required" pattern="[A-Za-z\s]+" value={bookingFormDetails.name} onChange={(e) => setBookingFormDetails({ ...bookingFormDetails, name: e.target.value })} />
                        </div>

                        <div className='book-visit-form__input-group'>
                            <label htmlFor="contact">Mobile Number</label>
                            <input type="text" id='contact' onFocus={handleInputFocus} required="required" pattern="[0-9]{10}" maxLength="10" value={bookingFormDetails.mobileNumber} onChange={(e) => setBookingFormDetails({ ...bookingFormDetails, mobileNumber: e.target.value })} />
                        </div>
                        {bookingFormDetails.mobileNumber.length >= 1 ? <> {isInputFocused && !/^\d{10}$/.test(bookingFormDetails.mobileNumber) && (
                            <small style={{ marginLeft: '8px', marginTop: '4px', color: '#F23A3A' }}>
                                Enter valid  number
                            </small>
                        )}</> : ""}

                        {/* <div className='book-visit-form__input-group'>
                    <label htmlFor="email">Email</label>
                    <input type="email" id='email' required="required" />
                </div> */}

                        <div className='book-visit-form__input-group'>
                            <label htmlFor="date">Date</label>
                            <input type="text" id='date' required="required" placeholder='Enter Home Collection Date' value={bookingFormDetails.date} onClick={(e) => e.target.type = "date"} onChange={(e) => setBookingFormDetails({ ...bookingFormDetails, date: e.target.value })} />
                        </div>

                        <div className='book-visit-form__input-group'>
                            <label htmlFor="pincode">Pincode</label>
                            <input type="tel" id='pincode' required="required" pattern="[0-9]{6}" maxLength={6} value={bookingFormDetails.pincode} onChange={(e) => setBookingFormDetails({ ...bookingFormDetails, pincode: e.target.value.replace(/\D/, "") })} />
                        </div>

                        <ReCAPTCHA ref={recaptcha} sitekey="6LcYrhYpAAAAAAwXXTjNwkEWZWPeeKqHF7hKW-ol" className='hero__recaptha' />

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
            }


            <div className="book-visit">
                <h4>Book a Home Visit Now</h4>
                <p>Book any blood test or health checkup and get tested at the comfort of your home</p>
                <button onClick={() => setIsDisplayBookTestForm(true)}>Get a call</button>
            </div>
        </>
    )
}

export default BookHomeVisitCard
