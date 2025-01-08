import React from 'react'

import '../styles/Cart/Cart.scss'

// import components 
import CartItems from '../components/Cart/CartItems'
import PaymentDetailsCard from '../components/Cart/PaymentDetailsCard'
import HeadingWithText from '../components/HeadingWithText'
// import BookHomeVisitCard from '../components/BookHomeVisitCard'

const Cart = () => {
    return (
        <div className='cart'>
            <h2 className="cart__header">
                Your Cart
            </h2>
            <div className="cart__container">
                <CartItems />
                <div className='cart__details-card-container'>
                    <PaymentDetailsCard />
                    {/* <BookHomeVisitCard /> */}
                </div>
            </div>
            <HeadingWithText heading="About Medall ?" text="Medall is a chain of medical diagnostic service centres in India, offering a wide range of lab tests, radiology tests including CT & MRI scans and master health checkup packages" secondDetail="" thirdDetail="" />
        </div>
    )
}

export default Cart