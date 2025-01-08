import React, { useState, useContext, useEffect } from 'react'
import { toast } from 'react-toastify';

import '../../styles/Pathology/BloodTest/BloodTest.scss'

import Star from '../../assets/icons/star.svg'

import OrderSummaryCard from '../OrderSummaryCard'
import BookHomeVisitCard from '../BookHomeVisitCard'


import { UserLocationContext } from '../../context/UserLocation'
import { CartContext } from '../../context/Cart'

const BloodTest = ({ testInfo }) => {

    const [priceBasedOnLocation, setPriceBasedOnLocation] = useState('');
    const userLocation = useContext(UserLocationContext);

    const cartContext = useContext(CartContext);

    const notifyItemAddedToCart = (testName) => toast(`🛒 "${testName}" added to cart`, { draggable: true });
    const notifyChooseLocation = () => toast(`🗺️ Choose Your Location, from top menu`, { draggable: true });
    const notifyItemNotAddedToCart = () => toast("❗ Test not added to your cart", { draggable: true });
    const notifyMultipleTestInCart = () => toast("❗ Test already in cart, Checkout Cart", { draggable: true });

    useEffect(() => {
        if (userLocation.userLocationState === 'chennai') {
            setPriceBasedOnLocation(testInfo.chennaiPrice);
        } else if (userLocation.userLocationState === 'banglore') {
            setPriceBasedOnLocation(testInfo.banglorePrice);
        } else if (userLocation.userLocationState === 'andhraPradesh') {
            setPriceBasedOnLocation(testInfo.andhraPradeshPrice);
        } else {
            setPriceBasedOnLocation(testInfo.price);
        }
    }, [userLocation.userLocationState, testInfo.testName])

    return (
        <div className='blood-test'>
            <div className="blood-test__info-container">
                <div className='blood-test__test-header'>
                    <h2><span>{testInfo.testName}</span> Test</h2>
                    <p className='blood-test__rating'><img src={Star} alt="star" />{testInfo.rating}/5</p>
                </div>
                {
                    testInfo.alternateTestName !== '' && <p className='blood-test__alternate-name'><span>Also know as</span>: {testInfo.alternateTestName}</p>
                }
                <p className='blood-test__description'>{testInfo.description}</p>
                <ul className='blood-test__icon-with-text'>
                    {
                        testInfo.iconWithText.map(properties => <li key={properties.text}>
                            <span><img src={properties.icon} alt="properties" /></span>
                            <p>{properties.text}</p>
                        </li>)
                    }

                </ul>
                {

                    priceBasedOnLocation === 'NA' ? "" : <div className='blood-test__atc-btn-container'>
                        <button className='blood-test__add-to-cart-btn'
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();

                                if (userLocation.userLocationState === "") {
                                    notifyChooseLocation();
                                    notifyItemNotAddedToCart();
                                } else {
                                    // check if user already having the Test in cart or not 
                                    let cartTests = cartContext.cartState.tests.find(test => test.testName === testInfo.testName);

                                    // if Test is not present in cart then add it
                                    if (cartTests === undefined) {
                                        cartContext.cartDispatch({ type: 'addTestToCart', payload: { testName: testInfo.testName, testPrice: priceBasedOnLocation, testCorpId: testInfo.corpId } });
                                        notifyItemAddedToCart(testInfo.testName);
                                    } else {
                                        notifyMultipleTestInCart();
                                    }
                                }

                            }
                            }
                        >Add To Cart
                        </button>
                    </div>
                }

                {
                    testInfo.propertiesTitle !== '' && <div className="blood-test__list-info">
                        <h3>{testInfo.propertiesTitle}</h3>
                        <ul>
                            {
                                testInfo.properties.map(properties => <li key={properties.text}>{properties.text}</li>)
                            }
                        </ul>
                        {/* <button className='blood-test__book-now-btn'>Book Now</button> */}
                    </div>
                }

            </div>

            <div className="blood-test__order-details">
                <OrderSummaryCard productName={testInfo.testName} productPrice={priceBasedOnLocation} discountAmount={testInfo.discountAmount} type={testInfo.type} productCorpId={testInfo.corpId} />
                <BookHomeVisitCard testDetails={testInfo.testName} />
            </div>
        </div>
    )
}

export default BloodTest