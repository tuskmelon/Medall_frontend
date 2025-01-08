import React, { useContext } from 'react'
import '../../styles/Login.scss'

import Logo from '../../assets/icons/medall-logo-light.png'
import CloseButton from '../../assets/icons/gradient-cross.svg'
import { CartContext } from '../../context/Cart'
const LocationModal = ({
  modalOpen,
  setModalOpen,
  setClearCart,
  setSelectedLocation
}) => {
  const cartContext = useContext(CartContext)
  return (
    <div>
      <div className='login'>
        <div
          className='popUp'
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '10px',
            padding: '10px'
          }}
          data-aos='flip-down'
        >
          <div
            className='locationPopUp'
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              textAlign: 'center'
            }}
          >
            {/* <img
              data-aos='zoom-in'
              data-aos-delay='500'
              src={Logo}
              alt='logo'
            /> */}
            <p>
              Cart items will be removed if you change the city. Do you want to
              proceed ?
            </p>

            <div className='buttonDesign'>
              <button
                onClick={() => {
                  setModalOpen(false)
                  cartContext.cartDispatch({ type: 'removeLabTests' })
                  setSelectedLocation([])
                }}
                className='buttonYes'
              >
                {' '}
                Yes
              </button>
              <button
                onClick={() => {
                  setClearCart(false)
                  setModalOpen(false)
                }}
                className='buttonNo'
              >
                No
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LocationModal
