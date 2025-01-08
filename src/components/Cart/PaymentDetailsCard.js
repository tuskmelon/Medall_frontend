import React, { useState, useContext, useEffect } from 'react'
import API from '../../api'

import '../../styles/Cart/PaymentDetailsCard.scss'

import { CartContext } from '../../context/Cart'

const PaymentDetailsCard = () => {

    const cartContext = useContext(CartContext);
    const [totalPriceToPay, setTotalPriceToPay] = useState();
    const [displayHomeCollectionFee, setDisplayHomeCollectionFee] = useState(false);


    // Calculate Total Price 
    let totalPrice = 0;
    // let totalPriceForHealthPackage = 0;
    // cartContext.cartState.tests.map(cartItem => totalPrice += (+cartItem.testPrice));
    // cartContext.cartState.healthPackages.map(cartItem => totalPriceForHealthPackage += (+cartItem.healthPackagePrice));
    // console.log('total Price', totalPrice)

    cartContext.cartState.tests.map(cartItem => totalPrice += (+cartItem.testPrice));
    cartContext.cartState.healthPackages.map(cartItem => totalPrice += (+cartItem.healthPackagePrice));
    // console.log('total Price', totalPrice); 

    useEffect(() => {
        // if (totalPrice > 1399) {
        //     setTotalPriceToPay((totalPrice - 100) + totalPriceForHealthPackage);
        //     setDisplayHomeCollectionFee(true);
        //     // Set amount to be paid at cart context
        //     cartContext.cartDispatch({ type: 'setTotalPayableAmount', payload: { totalAmountToPay: totalPriceToPay } })
        // } else {
        //     setTotalPriceToPay(totalPrice + totalPriceForHealthPackage);
        //     setDisplayHomeCollectionFee(false);
        //     cartContext.cartDispatch({ type: 'setTotalPayableAmount', payload: { totalAmountToPay: totalPriceToPay } })
        // }

        setTotalPriceToPay(totalPrice);
    }, [totalPriceToPay, totalPrice])

    return (
        <div className='payment-card'>
            <h3>Payment Details</h3>

            <div className="payment-card__purchased-items">
                {
                    cartContext.cartState.tests.length > 0 || cartContext.cartState.healthPackages.length > 0 ? <ul>
                        {
                            cartContext.cartState.tests.map((cartItem, index) => <li key={cartItem.testName}>
                                <p className='cart-items__test-name'>{cartItem.testName}</p>
                                <p className='cart-items__test-price'>&#8377; {cartItem.testPrice}/-</p>
                            </li>)
                        }

                        {/* {
                            (cartContext.cartState.healthPackages.length !== 0 && cartContext.cartState.tests.length !== 0) && <hr style={{ margin: '1em 0' }} />
                        } */}

                        {
                            cartContext.cartState.healthPackages.length !== 0 && cartContext.cartState.healthPackages.map((healthPackage, index) => <li key={healthPackage.healthPackageName}>
                                <p className='cart-items__test-name'>{healthPackage.healthPackageName}</p>
                                <p className='cart-items__test-price'>&#8377; {healthPackage.healthPackagePrice}/-</p>
                            </li>)
                        }
                    </ul> : <h5 className='cart-items__empty-cart-message'>Your cart is empty</h5>
                }
            </div>
            {
                (cartContext.cartState.tests.length > 0 || cartContext.cartState.healthPackages.length > 0) ?

                    <>
                        <div className="payment-card__mrp">
                            <p>MRP Total</p>
                            {/* <p>₹ {totalPrice + totalPriceForHealthPackage}/-</p> */}
                            <p>₹ {totalPriceToPay}/-</p>
                        </div>
                        {
                            displayHomeCollectionFee && <div className="payment-card__discount">
                                <p>Discount <br />
                                    <span>(Home Collection)</span>
                                </p>
                                <p>-₹100/-</p>
                            </div>
                        }


                        <div className="payment-card__total-amount">
                            <p>Total Amount</p>
                            <p>₹ {totalPriceToPay}/-</p>
                        </div>
                    </>

                    : ''}
        </div>
    )
}

export default PaymentDetailsCard