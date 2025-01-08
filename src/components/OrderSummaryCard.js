import React, { useContext } from 'react'
import { toast } from 'react-toastify'

import '../styles/OrderSummaryCard.scss'

import { CartContext } from '../context/Cart'
import { UserLocationContext } from '../context/UserLocation'

const OrderSummaryCard = ({
  productName,
  productPrice,
  productCorpId,
  discountAmount,
  type,
  packageOriginalPrice,
  packageCurrentPrice,
  packageCorpId,
  page
}) => {
  const cartContext = useContext(CartContext)
  const userLocationContext = useContext(UserLocationContext)

  const notifyItemAddedToCart = productName =>
    toast(`🛒 "${productName}" added to cart`, { draggable: true })
  const notifyChooseLocation = () =>
    toast(`🗺️ Choose Your Location, from top menu`, { draggable: true })
  const notifyItemNotAddedToCart = () =>
    toast('❗ Test not added to your cart', { draggable: true })
  const notifyMultiplePackInCart = () =>
    toast('❗ Health Package already in cart, Checkout Cart', {
      draggable: true
    })
  const notifyMultipleTestInCart = () =>
    toast('❗ Test already in cart, Checkout Cart', { draggable: true })

  // console.log(productPrice, 'PRODUCT PRICE')
  return (
    <div className='order-sum-card'>
      <div className='order-sum-card__header'>
        <h2>Buying Price</h2>
        {/* {
                    type !== 'test' && <p><span>{Math.trunc(((discountAmount) / productPrice) * 100)}% Off</span></p>
                } */}
        {type !== 'test' && (
          <p>
            <span>
              {Math.trunc(
                ((packageOriginalPrice - packageCurrentPrice) /
                  packageOriginalPrice) *
                  100
              )}
              % Off
            </span>
          </p>
        )}
      </div>

      <div className='order-sum-card__price-info'>
        {type === 'test' && (
          <p>
            <span>{productName}</span>
            <span>₹ {productPrice}/-</span>
          </p>
        )}
        {type === 'healthPackage' && (
          <p>
            <span>{productName}</span>
            <span>
              <span className='order-sum-card__strikeout-price'></span>₹{' '}
              {packageOriginalPrice}/-
            </span>
          </p>
        )}

        {/* Hide Offer Price from Lab Tests  */}
        {/* <p>
                    <span>Offer Price</span>
                    <span>- ₹ {discountAmount}/-</span>
                </p> */}

        {/* Calculate Health Package Offer Price  */}
        {type === 'healthPackage' && (
          <p>
            <span>Offer Price</span>
            <span> ₹ {packageCurrentPrice}/-</span>
          </p>
        )}
      </div>

      <div className='order-sum-card__final-amount-info'>
        <div>
          <h3>Amount to be paid</h3>
          <p>*inclusive of all the taxes, fees and subject to availability</p>
        </div>
        {type === 'test' && (
          <p className='order-sum-card__final-amount'>
            ₹{productPrice - discountAmount}/-*
          </p>
        )}
        {type === 'healthPackage' && (
          <p className='order-sum-card__final-amount'>
            ₹{packageCurrentPrice}/-*
          </p>
        )}
      </div>

      <div className='order-sum-card__btn-container'>
        {/* <button>Book Now</button> */}
        {productPrice === 'NA' ? (
          <p className='order-sum-card__test-not-available'>
            Test not avaiable at selected location
          </p>
        ) : (
          type === 'test' && (
            <button
              onClick={() => {
                // Check if user selected location or not
                if (userLocationContext.userLocationState === '') {
                  notifyChooseLocation()
                  notifyItemNotAddedToCart()
                } else {
                  // check if user already having the Test in cart or not
                  let obj = cartContext.cartState.tests.find(
                    test => test.testName === productName
                  )

                  if (obj === undefined) {
                    cartContext.cartDispatch({
                      type: 'addTestToCart',
                      payload: {
                        testName: productName,
                        testPrice: `${productPrice - discountAmount}`,
                        testCorpId: productCorpId
                      }
                    })
                    notifyItemAddedToCart(productName)
                  } else {
                    notifyMultipleTestInCart()
                  }
                }
              }}
            >
              Add to cart
            </button>
          )
        )}
        {type === 'healthPackage' && (
          <button
            onClick={() => {
              // Check if user selected location or not
              //   if (userLocationContext.userLocationState === '') {
              //     notifyChooseLocation()
              //     notifyItemNotAddedToCart()
              //   } else {
              // check if user already having the Health Package in cart or not
              let obj = cartContext.cartState.healthPackages.find(
                healthPackage => healthPackage.healthPackageName === productName
              )

              // if health package is not present in cart then add it
              if (obj === undefined) {
                cartContext.cartDispatch({
                  type: 'addHealthPackage',
                  payload: {
                    packageName: productName,
                    packagePrice: `${packageCurrentPrice}`,
                    packageCorpId: packageCorpId
                  }
                })
                notifyItemAddedToCart(productName)
              } else {
                notifyMultiplePackInCart()
              }
              //   }
            }}
          >
            Add to cart
          </button>
        )}
      </div>
    </div>
  )
}

export default OrderSummaryCard
