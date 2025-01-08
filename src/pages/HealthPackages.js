import React, { useContext } from 'react'
import { toast } from 'react-toastify'

import '../styles/HealthPackages/HealthPackage.scss'

import Star from '../assets/icons/star.svg'
// import suggested test card thumbnails
// import HoldingTestTube from '../assets/images/holding-test-tube.jpg'
// import CheckingTestTube from '../assets/images/checking-test-tube.jpg'
// import PickingTestTube from '../assets/images/picking-test-tube.jpg'

import Premium from '../assets/images/packageMembers/premium.png'
import Expert from '../assets/images/packageMembers/expert.png'
import Elite from '../assets/images/packageMembers/elite.png'
import Men from '../assets/images/packageMembers/men.png'

import OrderSummaryCard from '../components/OrderSummaryCard'
import BookHomeVisitCard from '../components/BookHomeVisitCard'
import Reviews from '../components/Reviews'
import SampleCollectionProcess from '../components/SampleCollectionProcess'

import { CartContext } from '../context/Cart'
import Packages from '../components/Packages'

const HealthPackages = ({ packageInfo }) => {
  const cartContext = useContext(CartContext)

  const notifyItemAddedToCart = productName =>
    toast(`🛒 "${productName}" added to cart`, { draggable: true })
  const notifyMultipleCartItem = () =>
    toast('❗ Health Package already in cart, Checkout Cart', {
      draggable: true
    })

  const packageHeader = {
    title: 'Popular Health Packages',
    subTitle: ''
  }

  const packageCards = [
    {
      title: 'Medall Health',
      packName: 'Premium',
      detailsOne: 'Physician Consultation',
      detailsTwo: 'Mind Health Assessment*',
      price: 1699,
      priceToDisplay: '1,699',
      thumbnail: Premium,
      priceMark: '*',
      packagePageLink: '/health-package-premium'
    },
    {
      title: 'Medall Health',
      packName: 'Expert',
      detailsOne: 'Physician Consultation',
      detailsTwo: 'Mind Health Assessment*',
      price: 5199,
      priceToDisplay: '5,199',
      thumbnail: Expert,
      packagePageLink: '/health-package-expert'
    },
    {
      title: 'Medall Health',
      packName: 'Elite',
      detailsOne: 'Physician Consultation',
      detailsTwo: 'Mind Health Assessment*',
      price: 7099,
      priceToDisplay: '7,099',
      thumbnail: Elite,
      packagePageLink: '/health-package-elite'
    },
    {
      title: 'Medall Health',
      packName: 'Men',
      detailsOne: 'Physician Consultation',
      detailsTwo: 'Mind Health Assessment*',
      price: 7999,
      priceToDisplay: '7,999',
      thumbnail: Men,
      priceMark: '*',
      packagePageLink: '/health-package-men'
    }
  ]

  return (
    <>
      <div className='health-package'>
        <div className='health-package__info-container'>
          <div className='health-package__test-header'>
            <h2>
              Medall Health{' '}
              <span>
                {' '}
                {packageInfo.packageName}{' '}
                <span className='health-package__age-range'>
                  {packageInfo.ageRange}
                </span>
              </span>
            </h2>
            <p className='health-package__rating'>
              <img src={Star} alt='star' />
              {packageInfo.rating}/5
            </p>
          </div>
          <p className='health-package__description'>
            {packageInfo.description}
          </p>

          <ul className='health-package__icon-with-text'>
            {packageInfo.iconWithText.map(properties => (
              <li key={properties.text}>
                <span>
                  <img src={properties.icon} alt='properties' />
                </span>
                <p>{properties.text}</p>
                {properties.notes && (
                  <p>
                    <b>Note : </b>
                    {`${properties?.notes}`}
                  </p>
                )}
              </li>
            ))}
          </ul>

          <div className='health-package__atc-btn-container'>
            <button
              className='health-package__add-to-cart-btn'
              onClick={() => {
                // check if user already having the Health Package in cart or not
                let packages = cartContext.cartState.healthPackages.find(
                  healthPackage =>
                    healthPackage.healthPackageName ===
                    `Medall Health ${packageInfo.packageName}`
                )

                // if health package is not present in cart then add it
                if (packages === undefined) {
                  cartContext.cartDispatch({
                    type: 'addHealthPackage',
                    payload: {
                      packageName: `Medall Health ${packageInfo.packageName}`,
                      packagePrice:
                        packageInfo.currentPrice - packageInfo.discountAmount,
                      packageCorpId: packageInfo.corpId
                    }
                  })
                  notifyItemAddedToCart(packageInfo.packageName)
                } else {
                  notifyMultipleCartItem()
                }
              }}
            >
              Add To Cart
            </button>
          </div>

          <div className='health-package__parameters'>
            {/* <h3>{packageInfo.parameters.length} Test parameter</h3> */}
            <h3>Test parameters</h3>
            <div className='health-package__parameter-container'>
              {packageInfo.parameters.map(parameter => (
                <ul>
                  <h2>{parameter.title}</h2>
                  {parameter.list.map(item => (
                    <li>
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
            {packageInfo.free_consultation && (
              <div className='health-package__parameter-container'>
                {packageInfo.free_consultation.map(parameter => (
                  <ul>
                    <h2>{parameter.title}</h2>
                    <li
                      className={
                        parameter.text === 'Free Physician consultation' &&
                        'health-package__highlighted-point'
                      }
                    >
                      <span>{parameter.text}</span>
                    </li>
                  </ul>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className='health-package__order-details'>
          <OrderSummaryCard
            productName={`Medall Health ${packageInfo.packageName}`}
            type={packageInfo.type}
            packageOriginalPrice={packageInfo.originalPrice}
            packageCurrentPrice={packageInfo.currentPrice}
            packageCorpId={packageInfo.corpId}
          />
          <BookHomeVisitCard />
        </div>
      </div>
      <SampleCollectionProcess />
      <Packages packageCards={packageCards} packageHeader={packageHeader} />
      <Reviews heading='' display='none' />
    </>
  )
}

export default HealthPackages
