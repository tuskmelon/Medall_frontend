import React, { useState, useContext } from 'react'

import '../styles/Tests.scss'

// import react-slick carousel library
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

// import Card Component
import TestCard from './TestCard'

// import thumbnails
import HoldingTestTube from '../assets/images/holding-test-tube.jpg'
import LiverPain from '../assets/images/labTests/testCardThumbnails/liver-pain.jpg'
import ThyroidProfile from '../assets/images/labTests/testCardThumbnails/thyroid-profile.jpg'
import lipidTesttube from '../assets/images/labTests/testCardThumbnails/lipid.jpg'
import CheckingTesttube from '../assets/images/labTests/testCardThumbnails/renal-test.jpg'
import VitaminDThumb from '../assets/images/labTests/testCardThumbnails/vitamin-d.jpg'
import VitaminB12Thumb from '../assets/images/labTests/testCardThumbnails/vitamin-b12.jpg'
import Hba1cThumb from '../assets/images/hba1c.jpg'

// import Tests
import CBCTest from '../resources/pathology/bloodTests/Cbc'
import ThyroidTest from '../resources/pathology/bloodTests/Thyroid'
import Hba1c from '../resources/pathology/bloodTests/Hba1c'
import LipidTest from '../resources/pathology/bloodTests/LipidProfile'
import LiverFunctionTest from '../resources/pathology/bloodTests/LiverFunction'
import RenalFunction from '../resources/pathology/bloodTests/RenalFunction'
import VitaminD from '../resources/pathology/bloodTests/VitaminD'
import VitaminB12 from '../resources/pathology/bloodTests/VitaminB12'

import { OpenPopularTestMenuContext } from '../context/OpenPopularTestMenu'

const Tests = () => {
  const [nextArrowColor, setNextArrowColor] = useState('#B41E85')
  const [prevArrowColor, setPrevArrowColor] = useState('#AFAFAF')

  const openPopularTestMenuContext = useContext(OpenPopularTestMenuContext)

  const TestCardsFirstColumn = [
    {
      ...CBCTest,
      thumbnail: HoldingTestTube,
      description: 'Check Your Complete Blood Count!'
    },
    {
      ...ThyroidTest,
      thumbnail: ThyroidProfile,
      description: 'Check Your Thyroid Health Today!'
    }
  ]

  console.log(
    TestCardsFirstColumn.map(item => item),
    'TestCardsFirstColumn'
  )

  const TestCardsSecondColumn = [
    {
      ...Hba1c,
      thumbnail: Hba1cThumb,
      description: 'Check Your HbA1c Levels!'
    },
    {
      ...LipidTest,
      thumbnail: lipidTesttube,
      description: 'Check Your Heart Health Now!'
    }
  ]

  const TestCardsThirdColumn = [
    {
      ...LiverFunctionTest,
      thumbnail: LiverPain,
      description: 'Check Your Liver Health Now!'
    },
    {
      ...RenalFunction,
      testName: 'Renal Function Test',
      thumbnail: CheckingTesttube,
      description: 'Check Your Kidney Health!'
    }
  ]

  const TestCardsFourthColumn = [
    {
      ...VitaminD,
      testName: 'Vitamin D Test',
      thumbnail: VitaminDThumb,
      description: 'Check Your Vitamin D level!'
    },
    {
      ...VitaminB12,
      testName: 'Vitamin B12 Test',
      thumbnail: VitaminB12Thumb,
      description: 'Check Your Vitamin B12 level!'
    }
  ]

  // Adding carousel functionlaity
  //creating the ref
  const customeSlider = React.createRef()

  const carouselSettings = {
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    infinite: false,
    afterChange: function (index) {
      if (index === 1) {
        setNextArrowColor('#AFAFAF')
        setPrevArrowColor('#B41E85')
      } else {
        setNextArrowColor('#B41E85')
        setPrevArrowColor('#AFAFAF')
      }
      // console.log(index);
    },
    responsive: [
      {
        breakpoint: 1259,
        settings: {
          slidesToShow: 2.3
        }
      },
      {
        breakpoint: 1088,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 978,
        settings: {
          slidesToShow: 2.8
        }
      },
      {
        breakpoint: 892,
        settings: {
          slidesToShow: 2.3
        }
      },
      {
        breakpoint: 740,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 655,
        settings: {
          slidesToShow: 1.8
        }
      },
      {
        breakpoint: 592,
        settings: {
          slidesToShow: 1.5
        }
      },
      {
        breakpoint: 494,
        settings: {
          slidesToShow: 1.3
        }
      },
      {
        breakpoint: 432,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  }

  function previousSlide () {
    customeSlider.current.slickPrev()
  }

  function nextSlide () {
    customeSlider.current.slickNext()
  }

  const handleViewRedirect = () => {
    window.scrollTo(0, 0)
    openPopularTestMenuContext.openPopularTestMenuReducerDispatch({
      type: 'openPopularTestMenu'
    })
  }

  return (
    <div className='tests'>
      <div className='tests__slider'>
        <div className='tests__slide-control-buttons'>
          <button className='tests__slide-left' onClick={() => previousSlide()}>
            <svg
              width='63'
              height='20'
              viewBox='0 0 63 20'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M61 11.25C61.6904 11.25 62.25 10.6904 62.25 10C62.25 9.30964 61.6904 8.75 61 8.75V11.25ZM1.11612 9.11612C0.627964 9.60427 0.627964 10.3957 1.11612 10.8839L9.07107 18.8388C9.55922 19.327 10.3507 19.327 10.8388 18.8388C11.327 18.3507 11.327 17.5592 10.8388 17.0711L3.76777 10L10.8388 2.92893C11.327 2.44078 11.327 1.64932 10.8388 1.16117C10.3507 0.67301 9.55922 0.67301 9.07107 1.16117L1.11612 9.11612ZM61 8.75L2 8.75V11.25L61 11.25V8.75Z'
                fill={prevArrowColor}
              />
            </svg>
          </button>

          <button className='test__slide-right' onClick={() => nextSlide()}>
            <svg
              width='98'
              height='20'
              viewBox='0 0 98 20'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M2 8.75C1.30964 8.75 0.75 9.30964 0.75 10C0.75 10.6904 1.30964 11.25 2 11.25V8.75ZM96.8839 10.8839C97.372 10.3957 97.372 9.60427 96.8839 9.11612L88.9289 1.16117C88.4408 0.67301 87.6493 0.67301 87.1612 1.16117C86.673 1.64932 86.673 2.44078 87.1612 2.92893L94.2322 10L87.1612 17.0711C86.673 17.5592 86.673 18.3507 87.1612 18.8388C87.6493 19.327 88.4408 19.327 88.9289 18.8388L96.8839 10.8839ZM2 11.25H96V8.75H2V11.25Z'
                fill={nextArrowColor}
              />
            </svg>
          </button>
        </div>
        <Slider
          className='tests__carousel'
          ref={customeSlider}
          {...carouselSettings}
        >
          {/* Carousel Slides */}

          {/* First column  */}
          <div className='tests__slide'>
            {TestCardsFirstColumn.map(card => (
              <TestCard key={card.description} cardDetails={card} />
            ))}
          </div>

          {/* Second Column  */}
          <div className='tests__slide'>
            {TestCardsSecondColumn.map(card => (
              <TestCard key={card.description} cardDetails={card} />
            ))}
          </div>
          {/* Third Column  */}
          <div className='tests__slide'>
            {TestCardsThirdColumn.map(card => (
              <TestCard key={card.description} cardDetails={card} />
            ))}
          </div>

          {/* Fourth Column  */}
          <div className='tests__slide'>
            {TestCardsFourthColumn.map(card => (
              <TestCard key={card.description} cardDetails={card} />
            ))}
          </div>
        </Slider>
      </div>
      <div className='tests__section-details'>
        <div className='tests__text-info'>
          <h2>
            Most Searched <span>Tests</span>
          </h2>
          <p>
            Discover the most frequently taken medical tests that can help you
            diagnose and monitor your health. You can be sure that you are
            getting the most appropriate and beneficial tests available.
          </p>
          <button onClick={() => handleViewRedirect()}>View More</button>
        </div>
      </div>
      <button
        className='tests__view-more-btn-mobile'
        onClick={() => handleViewRedirect()}
      >
        View More
      </button>
    </div>
  )
}

export default Tests
