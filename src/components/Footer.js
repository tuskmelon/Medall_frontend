import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import tuskLogo from '../assets/images/tuskLogo.svg'
import '../styles/Footer.scss'

// import images
import Logo from '../assets/logos/medall.png'

import { OpenLoginFormContext } from '../context/OpenLoginForm'

const Footer = () => {
  const openLoginFormContext = useContext(OpenLoginFormContext)

  const information = [
    {
      title: 'MOST POPULAR RADIOLOGY TESTS',
      description:
        'Ultrasound Usg Lower Abdomen / Nt Scan / Early Pregnancy Viability Scan / Sonomammography Both Breast / Usg Upper Abdomen / Usg Breast / Usg Scrotal Scan / Usg Follicular Study / X-ray Chest Pa View / X-ray Chest Ap View / X-ray Lumbar Spine Ap And Lateral View / X-ray Cervical Spine Ap And Lateral View / X-ray Abdomen Ap View / X-ray Lumbar Spine Lateral View / X-ray Lumbar Spine Ap View / X-ray Cervical Spine Ap View / X-ray Pelvis Ap View / X-ray Left Knee Ap And Lateral View / X-ray Right Knee Ap And Lateral View / X-ray /  Left Knee Ap View / X-ray Ls Spine Extension View / X-ray Left Wrist Joint Ap View / X-ray Left Knee Lateral View'
    },
    {
      title: 'MOST POPULAR TESTS',
      description:
        'C Reactive Protein Test / CBC Test / Cholesterol Test / Creatinine Test / D Dimer Test / Dengue Test / Double Marker / ESR Test / FBS Test / Ferritin Test / HBA1C Test / HCV Test / HIV Test / IL6 Test / Kidney Finction Test / Lipid Profile Test / Liver Function Test / PT INR Test / Pregnancy Test / Prolactin Test / RBS Test / TLC Test / TSH Test / Troponin Test / Typhidot Test / Uric Acid / Urine Culture Test / Widal Test'
    },
    {
      title: 'HEALTH CHECK PACKAGES',
      description:
        'Full Body Checkup In Tamilnadu / Full Body Checkup In Chennai / Full Body Checkup In Bangalore / Full Body Checkup In Karnataka / Full Body Checkup In Andhra Pradesh / Full Body Checkup In Pondicherry'
    }
  ]

  const isUserLoggedIn = JSON.parse(
    window.localStorage.getItem('ismedallUserLoggedIn')
  )

  const handleLoginForm = e => {
    e.preventDefault()
    openLoginFormContext.openLoginFormDispatch({ type: 'openLoginForm' })
  }

  return (
    <div className='footer'>
      {information.map(info => (
        <div key={info.title} className='footer__informations'>
          <h2>{info.title}</h2>
          <p>{info.description}</p>
        </div>
      ))}

      <div className='footer__content'>
        <div className='footer__company-details'>
          <img src={Logo} loading='lazy' alt='logo' />
          <p>
            Medall is a chain of medical diagnostic service centres in India,
            offering a wide range of lab tests, radiology tests including CT &
            MRI scans and master health checkup packages
          </p>
          <p>
            Andhra Pradesh | Jharkhand | Karnataka | Pondicherry | Tamilnadu
          </p>
          {/* <div className="footer__app-link">
                        <p>Download our App</p>
                        <div className="footer__store-logo">
                            <a href="/"> <img src={PlayStore} alt="google play store" /></a>
                            <a href="/"><img src={AppleStore} alt="apple store" /></a>
                        </div>
                    </div> */}
        </div>
        <div className='footer__quick-links'>
          <ul>
            <li>
              <Link to='#services'>Our Services</Link>
            </li>
            {/* <li><Link to="https://mind.medall.in/" target='_blank'>Medall Mind</Link></li> */}
            {!isUserLoggedIn && (
              <li>
                <button onClick={handleLoginForm}>Login</button>
              </li>
            )}
            <li>
              <Link to='/corporate'>Corporate</Link>
            </li>
            <li>
              <Link
//                to='https://medallwebsite.s3.ap-south-1.amazonaws.com/footer/Medall+Website+-+Privacy+Policy.pdf'
		to='https://medall.s3.ap-south-1.amazonaws.com/Medall+Website+Privacy+Policy.pdf'  
              target='_blank'
                download
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to='/admin-login'>Admin Login</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to='/careers'>Career</Link>
            </li>
            <li>
              <Link to='/'>Find your Medall</Link>
            </li>
            <li>
              <Link to='/business-enquiry'>Franchise Enquiry</Link>
            </li>
            <li>
              <Link
//                to='https://medallwebsite.s3.ap-south-1.amazonaws.com/footer/Medall+Website+-+Terms+of+Use+(003).pdf'
		to='https://medall.s3.ap-south-1.amazonaws.com/Medall+Website+-+Terms+of+Use+(003).pdf'
                target='_blank'
                download
              >
                Terms of use
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <a href='mailto:customercare@medall.in'>
                E-mail : customercare@medall.in
              </a>
            </li>
            <li>
              <a href='tel:+917550177777'>
                Customer Care No.: + 91 75501 77777
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className=''>
      <Link to="https://www.tuskmelon.com/" target='_blank' className='Footer_Logo'>
        <p className='mb-0'>Powered By</p>
        <div>
            <img src={tuskLogo} className='footer__tusk' alt='tusk' width="50%" />
        </div>
      </Link>
      </div>
    </div>
  )
}

export default Footer
