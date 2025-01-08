import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Dna } from 'react-loader-spinner'
import { useNavigate } from 'react-router-dom'
import API from '../../api'

import '../../styles/Cart/CartItems.scss'

// import components
import Login from '../Login'

import { CartContext } from '../../context/Cart'
import { UserContext } from '../../context/User'
import { OpenLoginFormContext } from '../../context/OpenLoginForm'

const CartItems = () => {
  const notifyEmptyCart = () =>
    toast(`🛒 Please Add Test To Cart`, { draggable: true })
  const notifyError = () =>
    toast(`❗ Failed to proceed, Please Try Again`, { draggable: true })

  // Login form context
  const openLoginFormContext = useContext(OpenLoginFormContext)

  // Cart Context
  const cartContext = useContext(CartContext)
  // console.log(cartContext.cartState, 'cartState')

  // User Context
  const userContext = useContext(UserContext)

  // Show loader
  const [showLoader, setShowLoader] = useState(false)

  // Display Login Form
  const [showLoginForm, setShowLoginForm] = useState()
  function loginFormDisplay (display) {
    setShowLoginForm(display)
  }

  let navigate = useNavigate()

  const userMedallIdFromContext = userContext.userState.userMedallId

  const isOldUserLoggedIn = window.localStorage.getItem('OldUserLogin')
  const ismedallUserLoggedIn = window.localStorage.getItem(
    'ismedallUserLoggedIn'
  )

  const handleNextBtn = async () => {
    const userInfo = JSON.parse(window.localStorage.getItem('medallUserInfo'))

    // Generating OrderId or Booking ID
    const generateUniqueOrderId =
      Math.floor(Math.random() * 9000 + 1000).toString() +
      Math.floor(Math.random() * 9000 + 1000).toString() +
      userMedallIdFromContext

    window.sessionStorage.setItem('orderID', generateUniqueOrderId)
    const orderID = window.sessionStorage.getItem('orderID')

    const cartData = {
      bookingId: orderID,
      tests: cartContext.cartState.tests,
      healthPackages: cartContext.cartState.healthPackages,
      medallId: userContext.userState.userMedallId
    }

    if (isOldUserLoggedIn || ismedallUserLoggedIn) {
      if (
        cartContext.cartState.tests.length === 0 &&
        cartContext.cartState.healthPackages.length === 0
      ) {
        notifyEmptyCart()
      } else {
        setShowLoader(true)

        // Updating Cart
        await API.put(`/api/cart/${userInfo.cart}`, cartData)
          .then(res => {
            console.log(res, 'Cart Items sent to server successfully')
            navigate('/cart-form')
            setShowLoader(false)
          })
          .catch(err => {
            notifyError()
            console.log(err, 'Error sending cart data to server')
            setShowLoader(false)
          })
      }
    } else {
      openLoginFormContext.openLoginFormDispatch({ type: 'openLoginForm' })
    }
  }

  // console.log(cartContext.cartState);

  const removeTestFromCart = testName => {
    cartContext.cartDispatch({
      type: 'removeSingleTest',
      payload: { testName: testName }
    })
  }

  const removeHealthPackageFromCart = packageName => {
    cartContext.cartDispatch({
      type: 'removeSingleHealthPackage',
      payload: { packageName: packageName }
    })
  }

  // console.log(cartContext.cartState);

  return (
    <>
      <div className='cart-items'>
        <h3 className='cart-items__header'>
          <p>Cart Items</p>
          <p>Free Home Sample Collection Above ₹500</p>
        </h3>
        <div className='cart-items__tests'>
          <div className='cart-items__lab-test-list'>
            <div className='cart-items__lab-test-header'>
              <h2 className='cart-items__lab-test-title'>Lab Test</h2>
              <button
                className='cart-items__close-lab-test-btn'
                onClick={() => {
                  cartContext.cartDispatch({ type: 'removeLabTests' })
                }}
              >
                x
              </button>
            </div>
            {cartContext.cartState.tests.length > 0 ? (
              <ul>
                {cartContext.cartState.tests.map((cartItem, index) => (
                  <li key={cartItem.testName}>
                    <p className='cart-items__test-name'>{cartItem.testName}</p>
                    <p className='cart-items__test-price'>
                      &#8377; {cartItem.testPrice}/-
                      <button
                        onClick={() => removeTestFromCart(cartItem.testName)}
                        title='remove from cart'
                      >
                        <span></span>
                      </button>
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <h5 className='cart-items__empty-cart-message'>
                No Lab Test In Cart
              </h5>
            )}
          </div>
        </div>

        {/*CART HEALTH PACK  */}
        <div className='cart-items__tests cart-items__tests--health-pack'>
          <div className='cart-items__lab-test-list'>
            <div className='cart-items__lab-test-header'>
              <h2 className='cart-items__lab-test-title'>HEALTH PACK</h2>
              <button
                className='cart-items__close-lab-test-btn'
                onClick={() => {
                  cartContext.cartDispatch({ type: 'removeHealthPackages' })
                }}
              >
                x
              </button>
            </div>
            {cartContext.cartState.healthPackages.length > 0 ? (
              <ul>
                {cartContext.cartState.healthPackages.map((cartItem, index) => (
                  <li key={cartItem.healthPackageName}>
                    <p className='cart-items__test-name'>
                      {cartItem.healthPackageName}
                    </p>
                    <p className='cart-items__test-price'>
                      &#8377; {cartItem.healthPackagePrice}/-
                      <button
                        onClick={() =>
                          removeHealthPackageFromCart(
                            cartItem.healthPackageName
                          )
                        }
                        title='remove from cart'
                      >
                        <span></span>
                      </button>
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <h5 className='cart-items__empty-cart-message'>
                No Health Pack In Cart
              </h5>
            )}
          </div>
        </div>
        {/*CART HEALTH PACK END*/}

        <div className='cart-items__button-container'>
          <Link to='/book-your-test'>
            <span>Add More Test +</span>
          </Link>
          {isOldUserLoggedIn || ismedallUserLoggedIn ? (
            <button onClick={() => handleNextBtn()}>Next</button>
          ) : (
            <button onClick={() => setShowLoginForm(true)}>Next</button>
          )}
        </div>

        {/* LOADER Sppiner */}
        {showLoader && (
          <div className='cart-items__loader-container'>
            <div className='cart-items__loader-box'>
              <Dna
                visible={true}
                height='80'
                width='80'
                ariaLabel='dna-loading'
                wrapperStyle={{}}
                wrapperClass='dna-wrapper'
              />
              Processing.....
            </div>
          </div>
        )}
      </div>

      {
        showLoginForm && <Login showForm={loginFormDisplay} />
        // passing showForm prop so that user can close via clicking close button of Child component(i.e. Login)
      }
    </>
  )
}

export default CartItems
