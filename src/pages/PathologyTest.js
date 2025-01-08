import React from 'react'

// import components
import BloodTest from '../components/Pathology/BloodTest'
import SampleCollectionProcess from '../components/SampleCollectionProcess'
// import SuggestTests from '../components/SuggestTests'
import Packages from '../components/Packages'
import Reviews from '../components/Reviews'

// import suggested test card thumbnails
// import HoldingTestTube from '../assets/images/holding-test-tube.jpg'
// import CheckingTestTube from '../assets/images/checking-test-tube.jpg'
// import PickingTestTube from '../assets/images/picking-test-tube.jpg'

import Premium from '../assets/images/packageMembers/premium.png'
import Expert from '../assets/images/packageMembers/expert.png'
import Elite from '../assets/images/packageMembers/elite.png'
import Men from '../assets/images/packageMembers/men.png'

const PathologyTest = ({ testInfo }) => {
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
    <div className='pathology'>
      <BloodTest testInfo={testInfo} />
      <SampleCollectionProcess />
      {/* <SuggestTests suggestTests={suggestTests} /> */}
      <Packages packageCards={packageCards} packageHeader={packageHeader} />
      <Reviews heading='' display='none' />
    </div>
  )
}

export default PathologyTest
