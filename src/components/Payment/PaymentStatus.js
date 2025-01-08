import React, { useContext } from 'react'
import Cross from "../../assets/icons/cross-white.svg"

import '../../styles/Payment/PaymentStatus.scss'

import { PaymentStatusContext } from '../../context/PaymentStatus'

const PaymentStatus = () => {

    const paymentStatusContext = useContext(PaymentStatusContext)

    return (
        <div className='payment-status' data-aos="zoom-in">
            <div className='payment-status__thank-container'>
                <img src={Cross} alt="close" onClick={() => paymentStatusContext.paymentStatusDispatch({ type: 'closeThankYouPage' })} />
                <h1>🎉</h1>
                <h3>Thank you! <br /> we will call you shortly</h3>
            </div>
        </div>
    )
}

export default PaymentStatus