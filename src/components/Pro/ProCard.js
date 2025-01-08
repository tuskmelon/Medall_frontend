import React from 'react'

import '../../styles/Pro/ProCard.scss'

import Package from '../../assets/icons/medical-benefits-package.svg'

const ProCard = () => {
    return (
        <div className='pro-card'>
            <div className="pro-card__container">
                <h2>Medall Health <span> Pro</span> <img src={Package} alt="package icon" /></h2>
                <div className="pro-card__price">
                    <h3>₹ 1,799/-</h3>
                    <del>₹ 1220/-</del>
                    <span>54% <br /> OFF</span>
                </div>
            </div>
            <div className="pro-card__paying-amount">
                <h3>Amount to be paid</h3>
                <p>₹ 1,799/-</p>
            </div>
            <p className='pro-card__condition'>*inclusive of all the taxes, fees and subject to availability</p>
            <a href="/" className='pro-card__compare'>Compare with other Packages</a>
            <a href="/" className='pro-card__add-to-cart-button'>Add to cart</a>
        </div>
    )
}

export default ProCard