import React, { useState, useEffect, useContext, lazy, Suspense } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Select from 'react-dropdown-select'
import { toast } from 'react-toastify'
import Collapsible from 'react-collapsible'
// import { utils, write } from 'xlsx'
import '../styles/Header.scss'

import { Link } from 'react-router-dom'

// import component
import Login from './Login'

import Logo from '../assets/logos/medall.png'
import Location from '../assets/icons/location.svg'
import Search from '../assets/icons/search.svg'
import Download from '../assets/icons/download.svg'
import DownloadIcon from '../assets/icons/download-white.svg'
import Phone from '../assets/icons/phone.svg'
import Cart from '../assets/icons/cart.svg'
import User from '../assets/icons/user.svg'
import Upload from '../assets/icons/upload-white.svg'
import Testtube from '../assets/icons/test-tube.svg'
import LocationIcon from '../assets/icons/location.svg'
import ArrowLeft from '../assets/icons/arrow-left.svg'

// import context
import { CartContext } from '../context/Cart'
import { UserContext } from '../context/User'
import { UserLocationContext } from '../context/UserLocation'
import { OpenLoginFormContext } from '../context/OpenLoginForm'
import { OpenHealthPackageMenuContext } from '../context/OpenHealthPackageMenu'

// importing all tests and scans list
import XRays from './Menubar/TestAndScansList/Radiology/XRay'
import USGs from './Menubar/TestAndScansList/Radiology/USG'
import CT from './Menubar/TestAndScansList/Radiology/CT'
import MRI from './Menubar/TestAndScansList/Radiology/MRI'
import ECG from './Menubar/TestAndScansList/Radiology/ECG'
import ECHO from './Menubar/TestAndScansList/Radiology/ECHO'
import TMT from './Menubar/TestAndScansList/Radiology/TMT'
import Mammogram from './Menubar/TestAndScansList/Radiology/Mammogram'
import TestBasedOnOrgans from './Menubar/TestAndScansList/Pathology/TestsBasedOnOrgan'
import PopularTests from './Menubar/TestAndScansList/PopularTests/PopularTests'

// import all tests from resources
import { allTestList } from '../resources/alltests/AllTest'

import Loading from './Loading'
const MenuBar = lazy(() => import('./Menubar/MenuBar'))

const Header = () => {
  let navigate = useNavigate()
  const [showSideBarMenuOnMobile, setShowSideBarMenuOnMobile] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  // const [testBasedOnOrgans, setTestBasedOnOrgans] = useState(TestBasedOnOrgans);

  // Cart Context
  const cartContext = useContext(CartContext)
  const itemsAddedToCart = cartContext.cartState

  // User Context
  const userContext = useContext(UserContext)

  // User Location Context Handle
  const userLocationContext = useContext(UserLocationContext)

  const openHealthPackageMenuContext = useContext(OpenHealthPackageMenuContext)

  // Display Login Form
  const [showLoginForm, setShowLoginForm] = useState()
  const openLoginFormContext = useContext(OpenLoginFormContext)

  // Display Logout
  const [showLogout, setShowLogout] = useState(false)

  // const hamburgerIcon = useRef();
  // const healthPackageMenu = useRef();

  const getUserLoginStatus = window.localStorage.getItem('ismedallUserLoggedIn')

  useEffect(() => {
    if (userLocationContext.userLocationState === '') {
      setTimeout(() => {
        notifyChooseLocation()
      }, 100)
    }
  }, [])

  const notifyChooseLocation = () =>
    toast(`🗺️ Choose Your Location`, {
      position: 'top-center',
      draggable: true,
      autoClose: 5000,
      progress: undefined,
      theme: 'dark'
    })

  function loginFormDisplay (display) {
    setShowLoginForm(display)
  }

  useEffect(() => {
    if (openLoginFormContext.openLoginFormState === true) {
      setShowLoginForm(true)
    }
  }, [openLoginFormContext.openLoginFormState])

  useEffect(() => {
    const hamburgerIcon = document.getElementById('header__hamburger-icon')
    // Open side bar menu when click on Health Packages menu of Bottom Naviagtion menu
    hamburgerIcon.click()
  }, [openHealthPackageMenuContext.healthPackageDisplayState])

  // Location Select Values
  const locations = [
    {
      value: 'chennai',
      label: 'Chennai'
    },
    {
      value: 'banglore',
      label: 'Bengaluru'
    },
    {
      value: 'andhraPradesh',
      label: 'Andhra Pradesh'
    },
    {
      value: 'banglore', // Value is banglore because prices of tests in Karnataka is same as in Banglore
      label: 'Rest of Karnataka'
    },
    {
      value: 'chennai', // Value is chennai because prices of tests in Tamil Nadu is same as in Chennai
      label: 'Rest of Tamil Nadu'
    }
  ]

  // Filtering Test Result
  const [query, setquery] = useState('')
  // initially show only popular test
  const [filteredTests, setFilteredTests] = useState({
    query: '',
    list: []
  })

  // console.log(
  //   allTestList
  //     .filter(test => test.type === 'test')
  //     .map(test => {
  //       // Remove unwanted fields from each test object
  //       const {
  //         properties,
  //         iconWithText,
  //         faqs,
  //         description,
  //         parameter,
  //         testDetailsPageLink,
  //         thumbnail,
  //         discountAmount,
  //         alternateTestName,
  //         popular,
  //         price,
  //         rating,
  //         propertiesTitle,

  //         ...rest
  //       } = test
  //       return {
  //         ...rest,
  //         testName: test.testName.toLowerCase()
  //       }
  //     }),
  //   'All Lab Test'
  // )

  // useEffect(() => {
  //   downloadFilteredTestList(allTestList)
  // }, [allTestList])

  // function downloadFilteredTestList (allTestList) {
  //   // Filter and map the data
  //   const filteredData = allTestList
  //     .filter(test => test.type === 'test')
  //     .map(test => {
    
  //       const {
  //         properties,
  //         iconWithText,
  //         faqs,
  //         description,
  //         parameter,
  //         testDetailsPageLink,
  //         thumbnail,
  //         discountAmount,
  //         alternateTestName,
  //         popular,
  //         price,
  //         rating,
  //         propertiesTitle,

  //         ...rest
  //       } = test
  //       return {
  //         ...rest,
  //         testName: test.testName.toLowerCase()
  //       }
  //     })

  //   console.log(filteredData, 'All Lab Test')

  //   // Convert the data to a worksheet
  //   const worksheet = utils.json_to_sheet(filteredData)

  //   // Create a new workbook and append the worksheet
  //   const workbook = utils.book_new()
  //   utils.book_append_sheet(workbook, worksheet, 'Lab Tests')

  //   // Generate the Excel file and trigger a download
  //   const excelFile = write(workbook, { bookType: 'xlsx', type: 'array' })
  //   const blob = new Blob([excelFile], { type: 'application/octet-stream' })

  //   // Create a link element and trigger a download
  //   const link = document.createElement('a')
  //   link.href = URL.createObjectURL(blob)
  //   link.download = 'LabTests.xlsx'
  //   document.body.appendChild(link)
  //   link.click()
  //   document.body.removeChild(link)
  // }

  // Handling Searched Test's from search bar
  const handleSearch = e => {
    e.stopPropagation()
    setquery(e.target.value)
    const results = allTestList.filter(test => {
      return test.testName.toLowerCase().includes(e.target.value.toLowerCase())
    })

    setFilteredTests({
      query: e.target.value,
      list: [...results]
    })
  }

  const closeDropDownTestList = e => {
    e.preventDefault()
    setFilteredTests({
      query: '',
      list: []
    })
  }

  // Logout user
  const handleLogout = () => {
    window.localStorage.removeItem('OldUserLogin', false)
    window.localStorage.removeItem('OldUserDetails', false)
    window.localStorage.removeItem('OldAccountHolderPersonalDetails', false)
    //For mongoDB user
    window.localStorage.removeItem('ismedallUserLoggedIn', false)
    window.localStorage.removeItem('medallUserInfo', false)

    navigate('/')
    setShowSideBarMenuOnMobile(false)
  }

  const arrowSvg = (
    <svg
      width='12'
      height='7'
      viewBox='0 0 12 7'
      fill='currentColor'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M5.99999 6.9748C5.86665 6.9748 5.73732 6.9498 5.61199 6.8998C5.48665 6.8498 5.38265 6.78314 5.29999 6.6998L0.699987 2.0998C0.516654 1.91647 0.424988 1.68314 0.424988 1.3998C0.424988 1.11647 0.516654 0.883138 0.699987 0.699804C0.883321 0.516471 1.11665 0.424805 1.39999 0.424805C1.68332 0.424805 1.91665 0.516471 2.09999 0.699804L5.99999 4.5998L9.89999 0.699804C10.0833 0.516471 10.3167 0.424805 10.6 0.424805C10.8833 0.424805 11.1167 0.516471 11.3 0.699804C11.4833 0.883138 11.575 1.11647 11.575 1.3998C11.575 1.68314 11.4833 1.91647 11.3 2.0998L6.69999 6.6998C6.59999 6.7998 6.49165 6.8708 6.37499 6.9128C6.25832 6.9548 6.13332 6.97547 5.99999 6.9748Z'
        fill='currentColor'
      />
    </svg>
  )

  const handleSideBar = () => {
    showSideBarMenuOnMobile
      ? setShowSideBarMenuOnMobile(false)
      : setShowSideBarMenuOnMobile(true)
    window.scrollTo(0, 0)
    //     openHealthPackageMenuContext.healthPackageDisplayDispatch({ type: 'closeHealthPackageMenu' })
  }

  // Close sidebar for mobile when route changes
  const { pathname } = useLocation()

  useEffect(() => {
    // close the navigation panel
    setShowSideBarMenuOnMobile(false)
  }, [pathname])

  // Update window width on resize
  const handleResize = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    // Set initial window width
    setWindowWidth(window.innerWidth)

    // Add event listener for window resize
    window.addEventListener('resize', handleResize)

    // Remove event listener when component unmounts
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [windowWidth])

  return (
    <>
      <div className='header'>
        <div className='header__navbar'>
          <Link to='/' className='header__logo-link'>
            <img className='header__company-logo' src={Logo} alt='logo' />
          </Link>
          {/* Location Selector  */}
          <div className='header__location-search-container'>
            <div
              className={
                userLocationContext.userLocationState === ''
                  ? 'header__user-location header__user-location--active'
                  : 'header__user-location'
              }
            >
              <div className='header__location-icon'>
                <img src={Location} alt='icon' />
              </div>
              {/* <input type="text" name="userLocation" value={userDistrict ? userDistrict : 'Fecthing Location...'} /> */}
              <Select
                className='header__location-selector'
                labelField='label'
                valueField='value'
                placeholder='Choose Location'
                options={locations}
                searchable={false}
                onChange={values => {
                  userLocationContext.userLocationDispatch({
                    type: `${values[0].value}`
                  })
                  console.log(values[0].value)
                }}
              />
              {/* <Select className='header__location-selector' labelField="label" valueField={userLocationContext.userLocationState} placeholder="Choose Location" options={locations} searchable={false} onChange={(values) => { userLocationContext.userLocationDispatch({ type: `${values[0].value}` }); console.log(values[0].value) }} /> */}
            </div>

            {/*  Search Bar  */}
            <div className='header__search'>
              <div className='header__search-icon'>
                <img src={Search} alt='icon' />
              </div>
              <input
                type='search'
                value={query}
                onInput={e => handleSearch(e)}
                placeholder='Search Test , scans , Services'
              />
              {query !== '' && (
                <ul className='header__search-result-container'>
                  {filteredTests.list.map(test => (
                    <li key={test.corpId} onClick={closeDropDownTestList}>
                      <Link data-aos='fade-up' to={test.testDetailsPageLink}>
                        {test.testName} <span>{arrowSvg}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/*  Download button  */}
          <Link
            to='/download-report-via-otp'
            className='header__download-report'
          >
            {' '}
            <img src={Download} alt='icon' /> <span>Download Reports</span>
          </Link>

          {/*  Customer Care  */}
          <a href='tel:+917550177777' className='header__customer-care'>
            <img src={Phone} alt='phone icon' />
            <div className='header__customer-care-number'>
              <h4>Home Visit Booking & Customer Care</h4>
              <p>+91 7550177777</p>
            </div>
          </a>

          {/* Cart  */}
          <Link to='/cart' className='header__cart'>
            <span className='header__cart-items'>
              {itemsAddedToCart.tests.length +
                itemsAddedToCart.healthPackages.length}
            </span>
            <img src={Cart} alt='cart' />
          </Link>

          <div className='header__vertical-line'></div>

          {/* Login details  */}
          <div className='header__login'>
            {getUserLoginStatus ? (
              <div
                className='header__logged-user'
                onClick={() => {
                  showLogout ? setShowLogout(false) : setShowLogout(true)
                }}
              >
                <img src={User} alt='user icon' />
                <p>{userContext.userState.name}</p>
                {showLogout && (
                  <div className='header__log-out-box'>
                    <button onClick={e => handleLogout(e)}>Log out</button>
                  </div>
                )}
              </div>
            ) : (
              <div className='header__ask-login'>
                <button
                  className='login_button'
                  onClick={() => setShowLoginForm(true)}
                >
                  Login
                  <span className='login_img'>
                    <img src={User} alt='user icon' />
                  </span>
                </button>
              </div>
            )}
          </div>
        </div>

        <Suspense fallback={<Loading />}>
          {windowWidth > 1145 && <MenuBar />}
        </Suspense>
        {
          showLoginForm && <Login showForm={loginFormDisplay} />
          // passing showForm prop so that user can close via clicking close button of Child component(i.e. Login)
        }

        {/* Hamburger Icon  */}

        <div
          className='header__hamburger-icon'
          id='header__hamburger-icon'
          onClick={() => handleSideBar()}
        >
          <span className='header__hamburger-line'></span>
          <span className='header__hamburger-line'></span>
          <span className='header__hamburger-line'></span>
        </div>
      </div>

      {showSideBarMenuOnMobile && (
        <div className='header__side-bar' data-aos='fade-right'>
          <div
            className='header__side-bar-close-btn'
            onClick={() => handleSideBar()}
          >
            <img src={ArrowLeft} alt='close button' />
          </div>

          <div className='header__side-bar-button-container'>
            <Link to='/download-report-via-otp'>
              {' '}
              <img src={DownloadIcon} alt='icon' />{' '}
              <span>Download Reports</span>
            </Link>

            <Link to='/prescription' className='header__upload-prescription'>
              <img className='header__upload-icon' src={Upload} alt='icon' />{' '}
              Upload Prescription
            </Link>
          </div>

          {/*  Customer Care  */}
          {/* <a href="tel:+917550177777" className="header__customer-care header__customer-care--mobile">
                        <img src={Phone} alt="phone icon" />
                        <div className="header__customer-care-number header__customer-care-number--mobile">
                            <h4>Home Visit Booking & Customer Care</h4>
                            <p>+91 7550177777</p>
                        </div>
                    </a> */}

          <Link to='/book-your-test' className='header__icon-with-text'>
            <img src={Testtube} alt='testtube' />
            <p>Book Your Test</p>
          </Link>

          <Link to='/medall-center' className='header__icon-with-text'>
            <img src={LocationIcon} alt='location' />
            <p>Nearest Center</p>
          </Link>

          <a href='tel:+917550177777' className=' header__icon-with-text'>
            <img src={Phone} alt='phone icon' />
            <p>
              <span>Home Visit Booking & Customer Care </span>
              <br />
              +91 7550177777
            </p>
          </a>

          {/* Arranging MenuBar for mobile view  */}
          <div className='header__menu-container'>
            <div className='header__collapsible-bar-container'>
              <Collapsible
                trigger='X-ray & Scans'
                className='header__parent-collapse-bar'
              >
                {/* X-RAY  */}
                <div className='header__child-collapse-bar'>
                  <Collapsible trigger='X-ray'>
                    <ul>
                      {XRays.map(scan => (
                        <li key={scan.name}>
                          <Link to={`${scan.pageLink}`}>{scan.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </Collapsible>
                </div>

                {/* USG Scans  */}
                <div className='header__child-collapse-bar'>
                  <Collapsible trigger='USG'>
                    <ul>
                      {USGs.map(scan => (
                        <li key={scan.name}>
                          <Link to={`${scan.pageLink}`}>{scan.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </Collapsible>
                </div>

                {/* CT Scans  */}
                <div className='header__child-collapse-bar'>
                  <Collapsible trigger='CT'>
                    <ul>
                      {CT.map(scan => (
                        <li key={scan.name}>
                          <Link to={`${scan.pageLink}`}>{scan.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </Collapsible>
                </div>

                {/* MRI Scans  */}
                <div className='header__child-collapse-bar'>
                  <Collapsible trigger='MRI'>
                    <ul>
                      {MRI.map(scan => (
                        <li key={scan.name}>
                          <Link to={`${scan.pageLink}`}>{scan.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </Collapsible>
                </div>

                {/* ECG Scans  */}

                <ul className='header__direct-test-link'>
                  {ECG.map(scan => (
                    <li key={scan.name}>
                      <Link to={`${scan.pageLink}`}>{scan.name}</Link>
                    </li>
                  ))}
                </ul>

                {/* ECHO Scans  */}
                <ul className='header__direct-test-link'>
                  {ECHO.map(scan => (
                    <li key={scan.name}>
                      <Link to={`${scan.pageLink}`}>{scan.name}</Link>
                    </li>
                  ))}
                </ul>

                {/* TMT Scans  */}
                <ul className='header__direct-test-link'>
                  {TMT.map(scan => (
                    <li key={scan.name}>
                      <Link to={`${scan.pageLink}`}>{scan.name}</Link>
                    </li>
                  ))}
                </ul>

                {/* Mammogram Scans  */}
                <ul className='header__direct-test-link'>
                  {Mammogram.map(scan => (
                    <li key={scan.name}>
                      <Link to={`${scan.pageLink}`}>{scan.name}</Link>
                    </li>
                  ))}
                </ul>
              </Collapsible>
            </div>
            <div className='header__collapsible-bar-container'>
              <Collapsible
                trigger='Lab Tests'
                className='header__parent-collapse-bar'
              >
                {/* Popular Search  */}
                <div className='header__child-collapse-bar'>
                  <Collapsible trigger='Popular Search '>
                    <ul>
                      {PopularTests.map(test => (
                        <li key={test.name}>
                          <Link to={test.pageLink}>{test.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </Collapsible>
                </div>

                {/*  Search By organs  */}
                <div className='header__child-collapse-bar'>
                  <Collapsible trigger='Search By Organs'>
                    {/* Search By Kidney */}
                    <div className='header__organ-menu'>
                      <Collapsible trigger='Kidney'>
                        <ul className='header__organ-tests'>
                          {TestBasedOnOrgans.kidney.map((test, index) => (
                            <li key={test.name}>
                              <Link to={test.pageLink}>{test.name}</Link>
                            </li>
                          ))}
                        </ul>
                      </Collapsible>
                    </div>

                    {/* Search By Liver */}
                    <div className='header__organ-menu'>
                      <Collapsible trigger='Liver'>
                        <ul>
                          {TestBasedOnOrgans.liver.map((test, index) => (
                            <li key={test.name}>
                              <Link to={test.pageLink}>{test.name}</Link>
                            </li>
                          ))}
                        </ul>
                      </Collapsible>
                    </div>

                    {/* Search By Heart */}
                    <div className='header__organ-menu'>
                      <Collapsible trigger='Heart'>
                        <ul>
                          {TestBasedOnOrgans.heart.map((test, index) => (
                            <li key={test.name}>
                              <Link to={test.pageLink}>{test.name}</Link>
                            </li>
                          ))}
                        </ul>
                      </Collapsible>
                    </div>

                    {/* Search By Lungs */}
                    <div className='header__organ-menu'>
                      <Collapsible trigger='Lungs'>
                        <ul>
                          {TestBasedOnOrgans.lungs.map((test, index) => (
                            <li key={test.name}>
                              <Link to={test.pageLink}>{test.name}</Link>
                            </li>
                          ))}
                        </ul>
                      </Collapsible>
                    </div>

                    {/* Search By thyroid */}
                    <div className='header__organ-menu'>
                      <Collapsible trigger='Thyroid'>
                        <ul>
                          {TestBasedOnOrgans.thyroid.map((test, index) => (
                            <li key={test.name}>
                              <Link to={test.pageLink}>{test.name}</Link>
                            </li>
                          ))}
                        </ul>
                      </Collapsible>
                    </div>

                    {/* Search By  Reproductive system */}
                    <div className='header__organ-menu'>
                      <Collapsible trigger='Reproductive System'>
                        <ul>
                          {TestBasedOnOrgans.femaleReproductive.map(
                            (test, index) => (
                              <li key={test.name}>
                                <Link to={test.pageLink}>{test.name}</Link>
                              </li>
                            )
                          )}
                        </ul>
                      </Collapsible>
                    </div>

                    {/* Search By  cancer Marker */}
                    <div className='header__organ-menu'>
                      <Collapsible trigger='Cancer Marker'>
                        <ul>
                          {TestBasedOnOrgans.cancerMarker.map((test, index) => (
                            <li key={test.name}>
                              <Link to={test.pageLink}>{test.name}</Link>
                            </li>
                          ))}
                        </ul>
                      </Collapsible>
                    </div>

                    {/* Search By  blood */}
                    <div className='header__organ-menu'>
                      <Collapsible trigger='Blood'>
                        <ul>
                          {TestBasedOnOrgans.blood.map(test => (
                            <li key={test.name}>
                              <Link to={test.pageLink}>{test.name}</Link>
                            </li>
                          ))}
                        </ul>
                      </Collapsible>
                    </div>

                    {/* Search By  bonesAndJoints */}
                    <div className='header__organ-menu'>
                      <Collapsible trigger='Bones And Joints'>
                        <ul>
                          {TestBasedOnOrgans.bonesAndJoints.map(test => (
                            <li key={test.name}>
                              <Link to={test.pageLink}>{test.name}</Link>
                            </li>
                          ))}
                        </ul>
                      </Collapsible>
                    </div>

                    {/* Search By  bones */}
                    <div className='header__organ-menu'>
                      <Collapsible trigger='Bones'>
                        <ul>
                          {TestBasedOnOrgans.bones.map(test => (
                            <li key={test.name}>
                              <Link to={test.pageLink}>{test.name}</Link>
                            </li>
                          ))}
                        </ul>
                      </Collapsible>
                    </div>

                    {/* Search By  joints */}
                    <div className='header__organ-menu'>
                      <Collapsible trigger='joints'>
                        <ul>
                          {TestBasedOnOrgans.joints.map(test => (
                            <li key={test.name}>
                              <Link to={test.pageLink}>{test.name}</Link>
                            </li>
                          ))}
                        </ul>
                      </Collapsible>
                    </div>

                    {/* Search By  digestiveSystem */}
                    <div className='header__organ-menu'>
                      <Collapsible trigger='Digestive System'>
                        <ul>
                          {TestBasedOnOrgans.digestiveSystem.map(test => (
                            <li key={test.name}>
                              <Link to={test.pageLink}>{test.name}</Link>
                            </li>
                          ))}
                        </ul>
                      </Collapsible>
                    </div>

                    {/* Search By  hormones */}
                    <div className='header__organ-menu'>
                      <Collapsible trigger='Hormones'>
                        <ul>
                          {TestBasedOnOrgans.hormones.map(test => (
                            <li key={test.name}>
                              <Link to={test.pageLink}>{test.name}</Link>
                            </li>
                          ))}
                        </ul>
                      </Collapsible>
                    </div>

                    {/* Search By  immuneSystem */}
                    <div className='header__organ-menu'>
                      <Collapsible trigger='Immune System'>
                        <ul>
                          {TestBasedOnOrgans.immuneSystem.map(test => (
                            <li key={test.name}>
                              <Link to={test.pageLink}>{test.name}</Link>
                            </li>
                          ))}
                        </ul>
                      </Collapsible>
                    </div>

                    {/* Search By  immuneSystem */}
                    <div className='header__organ-menu'>
                      <Collapsible trigger='Whole Body'>
                        <ul>
                          {TestBasedOnOrgans.wholeBody.map(test => (
                            <li key={test.name}>
                              <Link to={test.pageLink}>{test.name}</Link>
                            </li>
                          ))}
                        </ul>
                      </Collapsible>
                    </div>

                    {/* Search By  git */}
                    <div className='header__organ-menu'>
                      <Collapsible trigger='Git'>
                        <ul>
                          {TestBasedOnOrgans.git.map(test => (
                            <li key={test.name}>
                              <Link to={test.pageLink}>{test.name}</Link>
                            </li>
                          ))}
                        </ul>
                      </Collapsible>
                    </div>

                    {/* Search By  systemic */}
                    <div className='header__organ-menu'>
                      <Collapsible trigger='Systemic'>
                        <ul>
                          {TestBasedOnOrgans.systemic.map(test => (
                            <li key={test.name}>
                              <Link to={test.pageLink}>{test.name}</Link>
                            </li>
                          ))}
                        </ul>
                      </Collapsible>
                    </div>
                  </Collapsible>
                </div>
              </Collapsible>
            </div>
            <div className='header__collapsible-bar-container'>
              <Collapsible
                trigger='Health Packages'
                id='header__health-packages'
              >
                <ul className='header__health-packages'>
                  {userLocationContext.userLocationState ===
                    'andhraPradesh' && (
                    <li>
                      <Link to='/health-package-basic'>
                        Medall Health Basic
                      </Link>
                    </li>
                  )}
                  {userLocationContext.userLocationState ===
                    'andhraPradesh' && (
                    <li>
                      <Link to='/health-package-classic'>
                        Medall Health Classic
                      </Link>
                    </li>
                  )}
                  <li>
                    <Link to='/health-package-premium'>
                      Medall Health Premium{' '}
                    </Link>
                  </li>
                  <li>
                    <Link to='/health-package-pro'>Medall Health Pro</Link>
                  </li>
                  <li>
                    <Link to='/health-package-supreme'>
                      Medall Health Supreme{' '}
                    </Link>
                  </li>
                  <li>
                    <Link to='/health-package-expert'>
                      Medall Health Expert
                    </Link>
                  </li>
                  <li>
                    <Link to='/health-package-elite'>Medall Health Elite </Link>
                  </li>
                  <li>
                    <Link to='/health-package-men'>Medall Health Men</Link>
                  </li>
                  <li>
                    <Link to='/health-package-young-women'>
                      Medall Health Women (&lt;35 Years)
                    </Link>
                  </li>
                  <li>
                    <Link to='/health-package-old-women'>
                      Medall Health Women (&gt;35 Years)
                    </Link>
                  </li>
                  <li>
                    <Link to='/health-package-senior-citizen-men'>
                      Medall Health Senior Citizen Men{' '}
                    </Link>
                  </li>
                  <li>
                    <Link to='/health-package-senior-citizen-women'>
                      Medall Health Senior Citizen Women &nbsp; &nbsp;
                    </Link>
                  </li>
                </ul>
              </Collapsible>
            </div>
          </div>
          <div className='header__sidebar-logout-btn'>
            <button onClick={e => handleLogout(e)}>Logout</button>
          </div>
        </div>
      )}
    </>
  )
}

export default Header
