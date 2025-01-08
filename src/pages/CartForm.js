import React, { useState, useEffect, useRef, useContext } from 'react'
import { toast } from 'react-toastify';
import '../styles/Cart/CartForm.scss'

// import react-slick carousel library
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeadingWithText from '../components/HeadingWithText';

// import icons 
// import Minus from '../assets/icons/minus.svg';
// import Plus from '../assets/icons/plus-bold.svg';
import Cross from '../assets/icons/cross-pink.svg';
import CloseButton from "../assets/icons/gradient-cross.svg"

// import Cart form context 
// import { CartFormContext } from '../context/Cart';

import { UserContext } from '../context/User';
import { CartContext } from '../context/Cart';
import { AddressContext } from '../context/Address';

import Address from '../components/Address/Address';
import PaymentDetailsCard from '../components/Cart/PaymentDetailsCard';
import Payment from '../components/Payment/Payment';

const CartForm = () => {
    const notifyEmptyField = () => toast(`⚠️ Please fill all the fields`, { draggable: true });
    const notifyClickNext = () => toast(`⚠️ Make sure to fill all the fields and click Next`, { draggable: true });
    const notifyAddMember = () => toast(`⚠️ Add Member`, { draggable: true });
    const notifyEmptyCart = () => toast(`🛒❗ Please Add Test To Cart`, { draggable: true });


    // context handle 
    const userContext = useContext(UserContext);
    const cartContext = useContext(CartContext);
    const addressContext = useContext(AddressContext);

    // Adding carousel functionlaity 
    //creating the ref
    const customeSlider = useRef();

    // set Active dropdown list 
    const [activeDropDown, setActiveDropDown] = useState('');
    const [activeDropDownSalutation, setActiveDropDownSalutation] = useState('');
    const [isDisplaySalutationPlaceholder, setIsDisplaySalutationPlaceholder] = useState('Salutation');
    const [isDisplayRelationPlaceholder, setIsDisplayRelationPlaceholder] = useState('Relation');

    // Toggle Form for self and other members 
    const [toggleCartForm, setToggleCartForm] = useState(false);
    const [addMemberForm, setAddMemberForm] = useState(false);

    const [activeSlide, setActiveSlide] = useState(0);
    const [dashedLine, setDashedLine] = useState('25%');

    const carouselSettings = {
        dots: false,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        initialSlide: 0,
        swipeToSlide: false,
        swipe: false,
        autoplay: false,
        autoplaySpeed: 2500,
        afterChange: current => setActiveSlide(current)
    }

    useEffect(() => {
        if (activeSlide >= 0) {
            setDashedLine('0%')
        }

        if (activeSlide >= 1) {
            setDashedLine('50%')
        }

        if (activeSlide >= 2) {
            setDashedLine('100%')
        }

        const paymentDetailCard = document.getElementById("cart-form__payment-detail-card");
        if (activeSlide === 2) {
            paymentDetailCard.classList.add("cart-form__payment-detail-card--position")
        } else {
            paymentDetailCard.classList.remove("cart-form__payment-detail-card--position")

        }

    }, [activeSlide]);

    // Handle Form events
    // Home Collection available then appointmentPlace = 1 
    // Home Collection NOT available then appointmentPlace = 0 
    const [patientDetails, setPatientDetails] = useState({ relationship: 'self', name: '', dateOfBirth: '', gender: 'male', userName: '', email: '', phone: '', address: '', appointmentDate: '', appointmentPlace: 1, appointmentTime: '' })

    // go to respective slide when clicked on Slide Title
    function gotToSlide(slideNumber) {

        if (slideNumber === 0) {
            customeSlider.current.slickGoTo(slideNumber);
        }

        if (slideNumber === 1) {
            if (activeSlide === 0) {
                if (patientDetails.relationship === "self") {
                    if (patientDetails.dateOfBirth === "" || patientDetails.gender === "") {
                        notifyEmptyField();
                        notifyClickNext();
                    } else {
                        customeSlider.current.slickGoTo(slideNumber);
                    }
                }
                if (patientDetails.relationship === "forMember") {
                    console.log(userContext.userState.cartMembers, "cart meber");
                    if (userContext.userState.cartMembers.length !== 0) {
                        customeSlider.current.slickGoTo(slideNumber);
                    } else {
                        notifyEmptyField();
                        notifyClickNext();
                    }
                }
            }
            if (activeSlide === 2) {
                customeSlider.current.slickGoTo(slideNumber);
            }

            // if (patientDetails.dateOfBirth === "" || addressContext.addressState.permanentAddress.houseOrFlatNum === "" || addressContext.addressState.permanentAddress.pincode === "" || addressContext.addressState.permanentAddress.contactPerson === "") {
            //     notifyEmptyField();
            //     notifyClickNext();
            // } else {
            //     customeSlider.current.slickGoTo(slideNumber);
            // }
        }

        if (slideNumber === 2) {
            if (patientDetails.relationship === "self") {
                if (patientDetails.dateOfBirth === "" || addressContext.addressState.permanentAddress.houseOrFlatNum === "" || addressContext.addressState.permanentAddress.pincode === "" || addressContext.addressState.permanentAddress.contactPerson === "") {
                    notifyEmptyField();
                    notifyClickNext();
                } else {
                    customeSlider.current.slickGoTo(slideNumber);
                }
            }

            if (patientDetails.relationship === "forMember") {
                if (userContext.userState.cartMembers.length === 0 || addressContext.addressState.permanentAddress.houseOrFlatNum === "" || addressContext.addressState.permanentAddress.pincode === "" || addressContext.addressState.permanentAddress.contactPerson === "") {
                    notifyEmptyField();
                    notifyClickNext();
                } else {
                    customeSlider.current.slickGoTo(slideNumber);
                }
            }

        }
    }

    // function postPatientDetails(e) {
    //     e.preventDefault();
    //     // Make POST request 
    //     // console.log(patientDetails);
    // }

    const removeMemberFromCart = (e, memberId) => {
        e.preventDefault();
        e.stopPropagation();
        console.log(memberId);
        userContext.userDispatch({
            type: 'removeCartMember', payload: { memberIdValue: memberId }
        })
    }

    // Add new member to cart form 
    // Handle Addition of new member 
    const [newMemberDetails, setNewMemberDetails] = useState({ name: '', salutation: '', dateOfBirth: '', relation: '', medallId: "" });

    const addNewMember = (e) => {
        e.preventDefault();
        setNewMemberDetails({ ...newMemberDetails, medallId: "MED" + (Math.floor(Math.random() * 9000 + 1000)).toString() + (Math.floor(Math.random() * 9000 + 1000)).toString() + (Math.floor(Math.random() * 9000 + 1000)).toString() });
    }


    useEffect(() => {
        // Updating new member details after assigning newMedallID
        if (newMemberDetails.medallId != "") {
            userContext.userDispatch({ type: 'addNewMemberAtCheckout', payload: { newMember: newMemberDetails } });
            setAddMemberForm(false);
        }
    }, [newMemberDetails.medallId]);


    function nextSlide(e) {
        e.preventDefault();
        // if cart is empty notify user else proceed further 
        if (cartContext.cartState.tests.length === 0 && cartContext.cartState.healthPackages.length === 0) {
            notifyEmptyCart();
        } else {
            if (patientDetails.relationship === "self") {
                if (patientDetails.dateOfBirth === "" || patientDetails.gender === "") {
                    notifyEmptyField();
                } else {
                    let patientData = {
                        dob: patientDetails.dateOfBirth,
                        age: (Math.floor((new Date() - new Date(patientDetails.dateOfBirth,).getTime()) / 3.15576e+10)).toString() ? (Math.floor((new Date() - new Date(patientDetails.dateOfBirth,).getTime()) / 3.15576e+10)).toString() : 0,
                        gender:patientDetails.gender,
                    }
                    window.sessionStorage.setItem("patientData", JSON.stringify(patientData));
                    customeSlider.current.slickNext();
                }
            }
            if (patientDetails.relationship === "forMember") {
                if (userContext.userState.cartMembers.length !== 0) {
                    let patientData = {
                        dob: "",
                        age: 0,
                        gender:""
                    }
                    window.sessionStorage.setItem("patientData", JSON.stringify(patientData));
                    customeSlider.current.slickNext();
                } else {
                    notifyAddMember();
                }
            }
        }
    }

    const userInformation = JSON.parse(window.localStorage.getItem('medallUserInfo'));
    // console.log(userInformation);
    useEffect(() => {
        cartContext.cartDispatch({ type: 'updateAppointmentDetails', payload: { place: patientDetails.appointmentPlace, date: new Date().toJSON().slice(0, 10), time: "" } })
    }, []);


    // Show payment slide when submit Address Form 
    const showPaymentSlide = () => {
        customeSlider.current.slickNext();
        gotToSlide(2);
    }

    // console.log(userContext.userState.cartMembers, 'cart members');
    // console.log(userContext.userState, 'ALL USER details');
    // console.log(patientDetails, 'patients details');
    // console.log(cartContext.cartState, 'cart details');
    return (
        <>
            <div className='cart-form'>
                <div className="cart-form__steps-header-container">

                    <div className="cart-form__completed-steps">
                        <div className="cart-form__dots">
                            <span className={`${activeSlide}` >= 0 ? 'cart-form__dot cart-form__active-dot' : 'cart-form__dot'}>1</span>
                            <span className={`${activeSlide}` >= 1 ? 'cart-form__dot cart-form__active-dot' : 'cart-form__dot'}>2</span>
                            <span className={`${activeSlide}` >= 2 ? 'cart-form__dot cart-form__active-dot' : 'cart-form__dot'}>3</span>
                            {/* <span className={`${activeSlide}` >= 3 ? 'cart-form__dot cart-form__active-dot' : 'cart-form__dot'}>4</span> */}
                        </div>
                        <div className='cart-form__dotted-line'></div>
                        <div className='cart-form__dotted-line' style={{ borderColor: '#8AE056', width: `${dashedLine}` }}></div>
                    </div>

                    <div className="cart-form__steps-header">
                        <button onClick={() => gotToSlide(0)} className={`${activeSlide}` >= 0 && 'cart-form__step-title'}>Member Details</button>
                        <button onClick={() => gotToSlide(1)} className={`${activeSlide}` >= 1 ? 'cart-form__step-title' : ''}>Address</button>
                        <button onClick={() => gotToSlide(2)} className={`${activeSlide}` >= 2 ? 'cart-form__step-title' : ''}>Payment</button>
                    </div>

                </div>

                <div className='cart-form__container'>
                    {/* <h2 className="cart-form__header">
                        Your Cart
                    </h2> */}

                    <div className="cart-form__card-container">
                        <div className="cart-form__form-slides">
                            <Slider className='cart-form___carousel' ref={customeSlider}  {...carouselSettings}>

                                {/* First Slide  */}
                                <div className='cart-form__slide'>
                                    <div className='cart-form__slide-inner-container'>
                                        <h2 className="cart-form__slide-title">Member Details</h2>
                                        <div className="cart-form__user-medall-id-container">
                                            <h3>Medall ID</h3>
                                            <p><span>ID: </span>{userContext.userState.userMedallId}</p>
                                        </div>
                                        <form action="">

                                            <div className="cart-form__relationship-selector">
                                                <input type="radio" name="relationship" id="self" value="self" onChange={(e) => { setPatientDetails({ ...patientDetails, relationship: e.target.value }); setToggleCartForm(false) }} defaultChecked={true} />
                                                <label htmlFor="self">Self</label>

                                                <input type="radio" name="relationship" id="familyMember" value="forMember" onChange={(e) => { setPatientDetails({ ...patientDetails, relationship: e.target.value }); setToggleCartForm(true) }} />
                                                <label htmlFor="familyMember">For Family Members</label>
                                            </div>

                                            <div className="cart-form__self-details">
                                                <div className="cart-form__self-information">
                                                    <p>Name:</p>
                                                    <p>{userContext.userState.name}</p>
                                                </div>
                                                <div className="cart-form__self-information">
                                                    <p>Mobile Number:</p>
                                                    <p>{userContext.userState.mobile}</p>
                                                </div>
                                            </div>
                                            {
                                                !toggleCartForm && <>
                                                    <div className="cart-form__dob">
                                                        <label htmlFor="dob">Date of Birth: &nbsp;&nbsp;&nbsp;</label>
                                                        <input type="date" value={patientDetails.dateOfBirth} onChange={(e) => setPatientDetails({ ...patientDetails, dateOfBirth: e.target.value })} max={new Date().toISOString().slice(0, 10)} placeholder='DOB' />
                                                    </div>
                                                    <div className="cart-form__gender-container">
                                                        <p>Gender: &nbsp;</p>
                                                        <div className="cart-form__gender-fields-container">

                                                            <div className="cart-form__input-gender-group">
                                                                <input type="radio" name="gender" id='gender-male' value="male" defaultChecked={true} onChange={(e) => setPatientDetails({ ...patientDetails, gender: e.target.value })} />
                                                                <label htmlFor="gender-male">Male</label>
                                                            </div>

                                                            <div className="cart-form__input-gender-group">
                                                                <input type="radio" name="gender" id='gender-female' value="female" onChange={(e) => setPatientDetails({ ...patientDetails, gender: e.target.value })} />
                                                                <label htmlFor="gender-female">Female</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            }
                                            {
                                                toggleCartForm && <div className="cart-form__other-members-container">
                                                    <h3>Total Members</h3>
                                                    <div className="cart-form__members-info-container">

                                                        {
                                                            userContext.userState.cartMembers.map(member => member.medallId && <div key={member.medallId} className="cart-form__added-member-info">
                                                                <img src={Cross} alt="close" onClick={(e) => removeMemberFromCart(e, member.medallId)} />
                                                                <h4>{member.relation}</h4>
                                                                <p>Medall ID: {member.medallId}</p>
                                                            </div>)
                                                        }

                                                        <button className="cart-form__add-member-btn" onClick={(e) => { e.preventDefault(); setAddMemberForm(true); setIsDisplaySalutationPlaceholder('Salutation'); setIsDisplayRelationPlaceholder('Relation'); setNewMemberDetails({ ...newMemberDetails, salutation: '', name: '' }) }}>Add members</button>
                                                    </div>
                                                </div>
                                            }
                                            <div className='cart-form__slide-button'>
                                                <button onClick={(e) => nextSlide(e)}>Next</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                                {/* Second slide  */}
                                <div className='cart-form__slide'>
                                    <div className='cart-form__slide-inner-container'>
                                        <h2 className="cart-form__slide-title">Contact Details</h2>
                                        <div className="cart-form__user-medall-id-container">
                                            <h3>Medall ID</h3>
                                            <p><span>ID: </span>{userContext.userState.userMedallId}</p>
                                        </div>
                                        <div className="cart-form__contact-details">
                                            <div className="cart-form__contact-name">
                                                <p>{userContext.userState.name}</p>
                                            </div>
                                            <div className="cart-form__contact-number">
                                                <span>+91</span><p>{userContext.userState.mobile}</p>
                                            </div>
                                        </div>
                                        <div className="cart-form__other-details">
                                            <p>Home Collection Booking: &nbsp;</p>

                                            <div>
                                                <div className="cart-form__other-detail-group">

                                                    <input type="radio" name='collection-type' id='visit-home' defaultChecked={true} value={1} onChange={(e) => {
                                                        setPatientDetails({ ...patientDetails, appointmentPlace: 1 });
                                                        cartContext.cartDispatch({ type: 'updateAppointmentDetails', payload: { place: e.target.value, date: patientDetails.appointmentDate, time: patientDetails.time } })
                                                    }} />

                                                    <label htmlFor="visit-home">Collect Test Samples at my Place</label>

                                                </div>

                                                <div className="cart-form__other-detail-group">

                                                    <input type="radio" name='collection-type' id='visit-center' value={0} onChange={(e) => {
                                                        setPatientDetails({ ...patientDetails, appointmentPlace: 0 });
                                                        cartContext.cartDispatch({ type: 'updateAppointmentDetails', payload: { place: e.target.value, date: patientDetails.appointmentDate, time: patientDetails.time } })
                                                    }} />

                                                    <label htmlFor="visit-center">Visit Medall Centre to take Tests</label>

                                                </div>


                                            </div>

                                        </div>
                                        <div className="cart-form__date-time-container">
                                            <div className="cart-form__date-and-time">
                                                <label htmlFor="collection-date">Date: </label>
                                                <input type="date" id='collection-date' min={new Date().toISOString().slice(0, 10)} value={patientDetails.appointmentDate} onChange={(e) => {
                                                    setPatientDetails({ ...patientDetails, appointmentDate: e.target.value });
                                                    cartContext.cartDispatch({ type: 'updateAppointmentDetails', payload: { place: patientDetails.appointmentPlace, date: e.target.value, time: patientDetails.appointmentTime } })
                                                }} />
                                            </div>
                                            <div className="cart-form__date-and-time">
                                                <label htmlFor="collection-time">Time:</label>
                                                <input type="time" id='collection-time' value={patientDetails.appointmentTime} onChange={(e) => {
                                                    setPatientDetails({ ...patientDetails, appointmentTime: e.target.value });
                                                    cartContext.cartDispatch({ type: 'updateAppointmentDetails', payload: { place: patientDetails.appointmentPlace, date: patientDetails.appointmentDate, time: e.target.value } })
                                                    console.log(e.target.value);
                                                }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Third Slide  */}
                                {/* Payment Slide  */}
                                <div className='cart-form__slide'>
                                    <div className='cart-form__slide-inner-container'>
                                        {
                                            activeSlide === 2 && <Payment />
                                        }
                                    </div>
                                </div>

                            </Slider>
                        </div>

                        {
                            activeSlide === 1 && <Address showPaymentSlide={() => showPaymentSlide()} />
                        }
                    </div >


                    {/* SIDE CARD   */}
                    <div className="cart-form__payment-detail-card" id='cart-form__payment-detail-card'>
                        <PaymentDetailsCard />
                    </div>
                </div >

                {/* ADD MEMBER POP-UP FORM  */}
                {
                    addMemberForm && <div className="cart-form__add-member-form">
                        <div className="cart-form__add-member-container">
                            <img className="cart-form__close-button" src={CloseButton} alt="close button" onClick={() => setAddMemberForm(false)} />
                            <h3>Add Member</h3>
                            <form onSubmit={(e) => addNewMember(e)}>
                                <div className="cart-form__add-member-pop-up-container">
                                    <div className="cart-form__select-group">
                                        <p className='cart-form__salutation-placeholder'>{isDisplaySalutationPlaceholder}</p>
                                        <select className={`cart-form__drop-down${activeDropDownSalutation}`} name="salutation" id="member-salutation" onChange={(e) => { setNewMemberDetails({ ...newMemberDetails, salutation: e.target.value }); setActiveDropDownSalutation(''); setIsDisplaySalutationPlaceholder('') }} onFocus={() => { setActiveDropDownSalutation('-active'); }} onBlur={() => { setActiveDropDownSalutation(''); if (newMemberDetails.salutation === '') { setIsDisplaySalutationPlaceholder('Salutation') } }}>
                                            <option value="" disabled selected hidden className='cart-form__add-member-disable-option'></option>
                                            <option value="Mr.">Mr.</option>
                                            <option value="Mrs.">Mrs.</option>
                                            <option value="Ms.">Ms.</option>
                                        </select>
                                    </div>

                                    <div className="cart-form__member-input-group">
                                        <input type="text" id='member-name' placeholder='Name' value={newMemberDetails.name} maxLength={15} required onChange={(e) => setNewMemberDetails({ ...newMemberDetails, name: e.target.value })} />
                                    </div>

                                    <div className="cart-form__member-input-group">
                                        <input type="text" id="member-dob" placeholder='DOB' required onFocus={(e) => e.target.type = "date"} onBlur={(e) => e.target.type = "text"} onChange={(e) => setNewMemberDetails({ ...newMemberDetails, dateOfBirth: e.target.value })} />
                                    </div>
                                    <div className="cart-form__select-group">
                                        <p className='cart-form__salutation-placeholder'>{isDisplayRelationPlaceholder}</p>

                                        <select className={`cart-form__drop-down${activeDropDown}`} name="realtion" id="member-relation" onChange={(e) => { setNewMemberDetails({ ...newMemberDetails, relation: e.target.value }); setIsDisplayRelationPlaceholder('') }} onFocus={() => { setActiveDropDown('-active') }} onBlur={() => { setActiveDropDown(''); if (newMemberDetails.relation === '') { setIsDisplayRelationPlaceholder('Relation') } }} required>
                                            <option value="" disabled selected hidden className='cart-form__add-member-disable-option'></option>
                                            <option className='cart-form__select-option' value="son">Son</option>
                                            <option className='cart-form__select-option' value="Daughter">Daughter</option>
                                            <option className='cart-form__select-option' value="Father">Father</option>
                                            <option className='cart-form__select-option' value="Mother">Mother</option>
                                        </select>

                                    </div>
                                </div>
                                <div className="cart-form__add-member-btn-box">
                                    <button type='submit'>Add Member</button>
                                </div>
                            </form>
                        </div>
                    </div>
                }

            </div >
            <HeadingWithText heading="About Medall ?" text="Medall is a chain of medical diagnostic service centres in India, offering a wide range of lab tests, radiology tests including CT & MRI scans and master health checkup packages" />
        </>
    )
}

export default CartForm