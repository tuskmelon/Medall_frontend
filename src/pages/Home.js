import React from 'react'

// importing components
import Hero from '../components/Hero.js'
import Statistic from '../components/Statistic.js'
import WhyMedall from '../components/WhyMedall.js'
import Tests from '../components/Tests.js'
import Radiology from '../components/Radiology.js'
import Services from '../components/Services.js'
import Packages from '../components/Packages.js'
import MedallCards from '../components/MedallCards.js'
import ImageWithText from '../components/ImageWithText.js'
// import AppInterface from '../components/AppInterface.js'
import Awards from '../components/Awards.js'
import CorporateCustomer from '../components/CorporateCustomer.js'
import Certificates from '../components/Certificates.js'
import News from '../components/News.js'
import Reviews from '../components/Reviews.js'

import Premium from '../assets/images/packageMembers/premium.png'
import Pro from '../assets/images/packageMembers/pro.png'
import Supreme from '../assets/images/packageMembers/supreme.png'
import Elite from '../assets/images/packageMembers/elite.png'
import Men from '../assets/images/packageMembers/men.png'
import YoungLady from '../assets/images/packageMembers/young-lady.png'
import Women from '../assets/images/packageMembers/women.png'
import OldMen from '../assets/images/packageMembers/old-men.png'
import OldWomen from '../assets/images/packageMembers/old-women.png'
import Expert from '../assets/images/packageMembers/expert.png'

const Home = () => {
  const packageHeader = {
    title: 'Our Most Selling Packages',
    subTitle: 'Preventive Health checks'
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
      packName: 'Pro',
      detailsOne: 'Physician Consultation',
      detailsTwo: 'Mind Health Assessment*',
      price: 2499,
      priceToDisplay: '2,499',
      thumbnail: Pro,
      priceMark: '*',
      packagePageLink: '/health-package-pro'
    },
    {
      title: 'Medall Health',
      packName: 'Supreme',
      detailsOne: 'Physician Consultation',
      detailsTwo: 'Mind Health Assessment*',
      price: 3199,
      priceToDisplay: '3,199',
      thumbnail: Supreme,
      priceMark: '*',
      packagePageLink: '/health-package-supreme'
    },
    {
      title: 'Medall Health',
      packName: 'Expert',
      detailsOne: 'Physician Consultation',
      detailsTwo: 'Mind Health Assessment*',
      price: 5199,
      priceToDisplay: '5,199',
      thumbnail: Expert,
      priceMark: '*',
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
      priceMark: '*',
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
    },
    {
      title: 'Medall Health',
      packName: 'Women < 35',
      detailsOne: 'Physician Consultation',
      detailsTwo: 'Mind Health Assessment*',
      price: 7999,
      priceToDisplay: '7,999',
      thumbnail: YoungLady,
      priceMark: '*',
      packagePageLink: '/health-package-young-women'
    },
    {
      title: 'Medall Health',
      packName: 'Women > 35',
      detailsOne: 'Physician Consultation',
      detailsTwo: 'Mind Health Assessment*',
      price: 8999,
      priceToDisplay: '8,999',
      thumbnail: Women,
      priceMark: '*',
      packagePageLink: '/health-package-old-women'
    },
    {
      title: 'Medall Health',
      packName: 'Sr. Citizen Men',
      detailsOne: 'Physician Consultation',
      detailsTwo: 'Mind Health Assessment*',
      price: 6699,
      priceToDisplay: '6,699',
      thumbnail: OldMen,
      priceMark: '*',
      packagePageLink: '/health-package-senior-citizen-men'
    },
    {
      title: 'Medall Health',
      packName: 'Sr. Citizen Women',
      detailsOne: 'Physician Consultation',
      detailsTwo: 'Mind Health Assessment*',
      price: 7899,
      priceToDisplay: '7,899',
      thumbnail: OldWomen,
      priceMark: '*',
      packagePageLink: '/health-package-senior-citizen-women'
    }
  ]

  return (
    <>
      <Hero />
      <Statistic />
      <WhyMedall />
      <Radiology />
      <Tests />
      <Services />
      <Packages packageCards={packageCards} packageHeader={packageHeader} />
      <MedallCards />
      <ImageWithText />

      {/* This section is only hidden, code is present at this component  */}
      {/* <AppInterface /> */}

      <Awards />
      <CorporateCustomer />
      <Certificates />
      <News />
      <Reviews />
    </>
  )
}

export default Home
