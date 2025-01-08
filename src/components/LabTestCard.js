import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';

import '../styles/LabTestCard.scss'

// import icon 
import Plus from '../assets/icons/plus.svg'

import { CartContext } from '../context/Cart'
import { UserLocationContext } from '../context/UserLocation';

const LabTestCard = ({ TestCard }) => {

    const notifyItemAddedToCart = (testName) => toast(`🛒 "${testName}" added to cart`, { draggable: true });
    const notifyChooseLocation = () => toast(`🗺️ Choose Your Location, from top menu`, { draggable: true });
    const notifyItemNotAddedToCart = () => toast("❗ Test not added to your cart", { draggable: true });
    const notifyMultipleTestInCart = () => toast("❗ Test already in cart, Checkout Cart", { draggable: true });

    const cartContext = useContext(CartContext);

    // Using UserLocationContext to change price based on user location
    const userLocationContext = useContext(UserLocationContext);

    const [testPriceBasedOnLocation, setTestPriceBasedOnLocation] = useState();

    // Setting price of Tests based on selected location 
    useEffect(() => {
        if (userLocationContext.userLocationState === 'chennai') {
            setTestPriceBasedOnLocation(TestCard.chennaiPrice);
        } else if (userLocationContext.userLocationState === 'banglore') {
            setTestPriceBasedOnLocation(TestCard.banglorePrice);
        } else if (userLocationContext.userLocationState === 'andhraPradesh') {
            setTestPriceBasedOnLocation(TestCard.andhraPradeshPrice);
        } else {
            setTestPriceBasedOnLocation(TestCard.price);
        }
    }, [userLocationContext.userLocationState])


    return (
        <>
            <Link to={TestCard.testDetailsPageLink} className="lab-test-card" data-aos="fade-up" >
                <img className='lab-test-card__thumbnail' loading="lazy" src={TestCard.thumbnail} alt="thumbnail" />
                <div className="lab-test-card__details">
                    <h3>{TestCard.testName}</h3>
                    <p className='lab-test-card__description'>{TestCard.description}</p>
                    <p className='lab-test-card__parameter'>{TestCard.parameter}</p>
                    <div className="lab-test-card__price">
                        <p>&#8377;{testPriceBasedOnLocation}/-</p>
                        {
                            testPriceBasedOnLocation === 'NA' ? <p className='order-sum-card__test-not-available'>Test not avaiable at selected location</p> : <button onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();

                                if (userLocationContext.userLocationState === "") {
                                    notifyChooseLocation();
                                    notifyItemNotAddedToCart();
                                } else {

                                    // check if user already having the Test in cart or not 
                                    let cartTests = cartContext.cartState.tests.find(test => test.testName === TestCard.testName);

                                    // if Test is not present in cart then add it
                                    if (cartTests === undefined) {
                                        cartContext.cartDispatch({ type: 'addTestToCart', payload: { testName: TestCard.testName, testPrice: testPriceBasedOnLocation, testCorpId: TestCard.corpId } });
                                        notifyItemAddedToCart(TestCard.testName);
                                    } else {
                                        notifyMultipleTestInCart();
                                    }
                                }
                            }}>
                                <img src={Plus} alt="plus icon" />
                                <span>Add to cart</span>
                            </button>
                        }
                    </div>
                </div>
            </Link >
        </>
    )
}

export default LabTestCard