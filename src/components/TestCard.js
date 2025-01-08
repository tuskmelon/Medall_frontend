import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

import Plus from '../assets/icons/plus.svg'

import '../styles/TestCard.scss'

import { CartContext } from '../context/Cart'
import { UserLocationContext } from '../context/UserLocation'

const TestCard = ({ cardDetails }) => {
  const cartContext = useContext(CartContext)
  // console.log()
  console.log( 'cardDetails',cardDetails)

  const [testPriceBasedOnLocation, setTestPriceBasedOnLocation] = useState()
  // Using UserLocationContext to change price based on user location
  const userLocationContext = useContext(UserLocationContext)

  const notifyItemAddedToCart = testName =>
    toast(`🛒 "${testName}" added to cart`, { draggable: true })
  const notifyChooseLocation = () =>
    toast(`🗺️ Choose Your Location, from top menu`, { draggable: true })
  const notifyItemNotAddedToCart = () =>
    toast('❗ Test not added to your cart', { draggable: true })
  const notifyMultipleTestInCart = () =>
    toast('❗ Test already in cart, Checkout Cart', { draggable: true })

  // Setting price of Tests based on selected location
  useEffect(() => {
    if (userLocationContext.userLocationState === 'chennai') {
      setTestPriceBasedOnLocation(cardDetails.chennaiPrice)
    } else if (userLocationContext.userLocationState === 'banglore') {
      setTestPriceBasedOnLocation(cardDetails.banglorePrice)
    } else if (userLocationContext.userLocationState === 'andhraPradesh') {
      setTestPriceBasedOnLocation(cardDetails.andhraPradeshPrice)
    } else {
      setTestPriceBasedOnLocation(cardDetails.price)
    }
  }, [userLocationContext.userLocationState])

  return (
    <Link to={cardDetails.testDetailsPageLink} className='test-card'>
      <img
        className='test-card__thumbnail'
        loading='lazy'
        src={cardDetails.thumbnail}
        alt='thumbnail'
      />
      <div className='test-card__details'>
        <h5>{cardDetails.testName}</h5>
        <p className='test-card__description'>
          {cardDetails.description} <span className='test-card__tc'>*T&C</span>
        </p>
        <div className='test-card__info'>
          <p>&#8377;{testPriceBasedOnLocation}/-*</p>
          <button
            onClick={e => {
              e.preventDefault()
              e.stopPropagation()

              if (userLocationContext.userLocationState === '') {
                notifyChooseLocation()
                notifyItemNotAddedToCart()
              } else {
                // check if user already having the Test in cart or not
                let cartTests = cartContext.cartState.tests.find(
                  test => test.testName === cardDetails.testName
                )

                // if Test is not present in cart then add it
                if (cartTests === undefined) {
                  cartContext.cartDispatch({
                    type: 'addTestToCart',
                    payload: {
                      testName: cardDetails.testName,
                      testPrice: testPriceBasedOnLocation,
                      testCorpId: cardDetails.corpId
                    }
                  })
                  console.log(
                    cardDetails.testName,
                    testPriceBasedOnLocation,
                    cardDetails.corpId,
                    "console.log('Test added to cart')"
                  )
                  notifyItemAddedToCart(cardDetails.testName)
                } else {
                  notifyMultipleTestInCart()
                }
              }
            }}
          >
            <img src={Plus} alt='plus icon' />
          </button>
        </div>
      </div>
    </Link>
  )
}

export default TestCard
