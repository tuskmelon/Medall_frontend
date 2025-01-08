import React, { useContext, useEffect, useState } from 'react'
import Collapsible from 'react-collapsible'
import '../styles/TestHistory.scss'
// import { Accordion } from 'flowbite-react'
import { ProfileIcon } from '../assets/icons/organs/Profile-Icon'
import API from '../api'
import Download from '../assets/icons/download-arrow.svg'
import { ThreeCircles } from 'react-loader-spinner'
import { CartContext } from '../context/Cart'
import { UserLocationContext } from '../context/UserLocation'
import { allTestList } from '../resources/alltests/AllTest'
import { toast } from 'react-toastify'
// import HistoryCollapsibleCard from '../components/TestHistory/HistoryCollapsibleCard'

const TestHistory = () => {
  const userDetails = [
    {
      name: 'Venkatesh',
      number: '9360200359'
    }
  ]

  const testHistory = [
    {
      title: 'MRI',
      highlightedTitle: '11/12/2022',
      text: 'asdfgfdasdfghgfdsdfghgfdsdfghgfdsasdfghgfdsasdfgh'
    }
  ]

  //   const [openIndex, setOpenIndex] = useState(0)

  //   const handleToggle = index => {
  //     setOpenIndex(openIndex === index ? -1 : index) // Toggle the open/close state of the clicked Collapsible
  //   }

  //   const [fillColor, setFillColor] = useState('#007CBC')

  //   const handleClick = () => {
  //     setFillColor('#FFFFFF')
  //   }

  const [showDownloadingLoader, setShowDownloadingLoader] = useState()
  const [showLoaderWhileFecthingCustomer, setShowLoaderWhileFecthingCustomer] =
    useState(false)
  const [customerInfo, setCustomerInfo] = useState({
    name: 'Null',
    age: '',
    sex: '',
    patientId: '',
    dob: '',
    mobile: '',
    email: '',
    pincode: ''
  })
  const [displayDetails, setDisplayDetails] = useState(false)
  const [showNoReportsFound, setShowNoReportsFound] = useState(false)

  // Session Storage
  const [members, setMembers] = useState(
    JSON.parse(window.localStorage?.getItem('allMembers'))
  )

  const [ActiveMembers, setActiveMenbers] = useState(
    members[0]?.CustomerID,
    members[0]?.CustomerId
  )

  useEffect(() => {
    setActiveMenbers(members[0]?.CustomerID, members[0]?.CustomerId)
  }, [members])

  const [customerReportDetails, setCustomerReportDetails] = useState([])

  useEffect(() => {
    fetchReports(ActiveMembers)
  }, [ActiveMembers])

  console.log(
    members,
    'members',
    customerInfo,
    customerReportDetails?.map(item => item.TestDetail)
  )

  const fetchReports = async (userId, userIdViaMedallIdLogin) => {
    // show loader
    setShowLoaderWhileFecthingCustomer(true)

    // show All details when user click name Tags
    setDisplayDetails(true)

    // Set userID based on login methods
    let userID
    if (userId) {
      userID = userId
    }
    if (userIdViaMedallIdLogin) {
      userID = userIdViaMedallIdLogin
    }

    await API.post(
      'https://medinfra.medallcorp.in/WebsiteAPI/api/GetCustomerReportsDetails',
      {
        UserID: userID
      },
      {
        auth: {
          username: 'Medall',
          password: 'TWVkYWxsQDMxMTJ2'
        }
      }
    )
      .then(res => {
        // console.log(userID);

        window.localStorage.setItem(
          'customerReportDetails',
          JSON.stringify(res.data.GetCustomerReportsDetailsResult)
        )

        // Getting customer all reports
        setCustomerReportDetails(
          JSON.parse(window.localStorage.getItem('customerReportDetails'))
        )

        // console.log(res, 'getting customer report details Response');
        // console.log(res.data.GetCustomerReportsDetailsResult, 'getting customer report details');

        if (res.data.GetCustomerReportsDetailsResult.length === 0) {
          setShowNoReportsFound(true)
        } else {
          setShowNoReportsFound(false)
        }
        setShowLoaderWhileFecthingCustomer(false)
      })
      .catch(err => {
        console.log(userID)
        console.log(err, 'error getting customer report details')
      })

    // Fetching Customer Personal details
    // Only make the below POST request when we are getting userID via OTP login method
    if (userID === userId) {
      await API.post(
        'https://medinfra.medallcorp.in/WebsiteAPI/api/GetCustomerDetailsbyOTP',
        {
          UserID: userID
        },
        {
          auth: {
            username: 'Medall',
            password: 'TWVkYWxsQDMxMTJ2'
          }
        }
      )
        .then(res => {
          // console.log(userID, 'USER ID')
          const customerData = res.data.CustomerDetails[0]

          window.sessionStorage.setItem(
            'customerPersonalDetails',
            JSON.stringify({
              customerPersonalInfo: {
                name: customerData.Customername,
                age: customerData.Age,
                sex: customerData.Sex,
                patientId: customerData.Patientid,
                dob: customerData.DateofBirth,
                mobile: customerData.MobileNo,
                email: customerData.Emailid,
                pincode: customerData.Pincode
              }
            })
          )

          setMembers(JSON.parse(window.localStorage.getItem('allMembers')))

          const customerPersonalInfo = JSON.parse(
            window.sessionStorage.getItem('customerPersonalDetails')
          ).customerPersonalInfo
          setCustomerInfo({
            ...customerPersonalInfo,
            name: customerPersonalInfo.name,
            age: customerPersonalInfo.age,
            sex: customerPersonalInfo.sex,
            patientId: customerPersonalInfo.patientId,
            dob: customerPersonalInfo.dob,
            mobile: customerPersonalInfo.mobile,
            email: customerPersonalInfo.email,
            pincode: customerPersonalInfo.pincode
          })

          // remove loader
          setShowLoaderWhileFecthingCustomer(false)
        })
        .catch(err => console.log(err, 'error getting customer details'))
    }
  }

  const userInfo = JSON.parse(window.localStorage.getItem('medallUserInfo'))

  const [isOpen, setIsOpen] = useState(false) // State to track whether the Collapsible is open

  const handleToggle = () => {
    setIsOpen(!isOpen) // Toggle the open/close state
  }

  const downloadReportDocument = async (
    event,
    testName,
    modality,
    center,
    visit,
    scanType
  ) => {
    event.stopPropagation()
    event.preventDefault()

    setShowDownloadingLoader(testName)

    console.log(
      testName,
      'Test Name',
      modality,
      'Modalaity',
      center,
      'Center',
      visit,
      'Visit',
      scanType,
      'Scantype',
      'DATATATATATA'
    )

    await API.post(
      'https://medinfra.medallcorp.in/WebsiteAPI/api/GetPDFReportsDetails',
      {
        CenterId: center,
        VisitId: visit,
        ScanTypeId: scanType, //billingid
        TypeId: modality === 'LAB' ? '1' : '0' //Modality = Lab (typeid=1), otherwise (typeid =0)
      },
      {
        auth: {
          username: 'Medall',
          password: 'TWVkYWxsQDMxMTJ2'
        }
      }
    )
      .then(res => {
        console.log(res)

        const fileName = res.data.GetPDFReportsDetailsResult.split('/').pop()

        const aTag = document.createElement('a')
        aTag.href = res.data.GetPDFReportsDetailsResult
        aTag.target = '_blank'
        aTag.setAttribute = ('download', fileName)
        // setReportDocumentLink(res.data.GetPDFReportsDetailsResult); console.log(res, 'success fetching report document url')
        document.body.appendChild(aTag)
        aTag.click()
        aTag.remove()

        setShowDownloadingLoader('')
      })
      .catch(err => {
        console.log(err, 'Error getting link of test report document')
      })
  }

  const userLocationContext = useContext(UserLocationContext)
  const cartContext = useContext(CartContext)
  const [testPriceBasedOnLocation, setTestPriceBasedOnLocation] = useState()

  console.log(userLocationContext.userLocationState)
  // Setting price of Tests based on selected location
  // useEffect(() => {
  //     if (userLocationContext.userLocationState === 'chennai') {
  //         setTestPriceBasedOnLocation(TestCard.chennaiPrice);
  //     } else if (userLocationContext.userLocationState === 'banglore') {
  //         setTestPriceBasedOnLocation(TestCard.banglorePrice);
  //     } else if (userLocationContext.userLocationState === 'andhraPradesh') {
  //         setTestPriceBasedOnLocation(TestCard.andhraPradeshPrice);
  //     } else {
  //         setTestPriceBasedOnLocation(TestCard.price);
  //     }
  // }, [userLocationContext.userLocationState])

  const notifyChooseLocation = () =>
    toast(`🗺️ Choose Your Location`, {
      position: 'top-center',
      draggable: true,
      autoClose: 5000,
      progress: undefined,
      theme: 'dark'
    })

  const packageCards = [
    {
      title: 'Medall Health',
      packName: 'Premium',
      detailsOne: 'Physician Consultation',
      detailsTwo: 'Mind Health Assessment*',
      price: 1699,
      priceToDisplay: '1,699',
      modality: 'health-package',
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
      modality: 'health-package',
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
      modality: 'health-package',
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
      modality: 'health-package',
      priceMark: '*',
      packagePageLink: '/health-package-expert'
    },
    {
      title: 'Medall Health',
      packName: 'Elite',
      detailsOne: 'Physician Consultation',
      detailsTwo: 'Mind Health Assessment*',
      price: 7099,
      modality: 'health-package',
      priceToDisplay: '7,099',

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
      modality: 'health-package',
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
      modality: 'health-package',
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
      modality: 'health-package',
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
      modality: 'health-package',
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
      modality: 'health-package',
      priceMark: '*',
      packagePageLink: '/health-package-senior-citizen-women'
    }
  ]

  const testList = {
    TestDetail: [
      {
        title: 'Medall Health',
        packName: 'Sr. Citizen Women',
        detailsOne: 'Physician Consultation',
        detailsTwo: 'Mind Health Assessment*',
        price: 7899,
        priceToDisplay: '7,899',
        modality: 'health-package',
        priceMark: '*',
        packagePageLink: '/health-package-senior-citizen-women'
      },
      {
        testName: 'Alanine Aminotransferase (ALT/SGPT)',
        alternateTestName: '',
        corpId: '1041',
        description:
          'It is helpful in the diagnosis of liver and biliary disease.',
        parameter: 'Includes : 17 Parameters',
        rating: 4.1,
        price: 200,
        chennaiPrice: 220,
        banglorePrice: 130,
        andhraPradeshPrice: 100,
        discountAmount: 0,
        relatedToOrgan: 'liver',
        testDetailsPageLink: '/alanine-aminotransferase',
        type: 'test',
        popular: false
      }
    ]
  }

  const handleAddToCart = item => {
    if (!userLocationContext.userLocationState) {
      notifyChooseLocation()
      return
    }
    console.log(item.TestDetail)

    testList.TestDetail.forEach(modality => {
      const isLab = modality.modality === 'LAB' || modality.type === 'test'
      console.log(isLab, 'isLab')
      const testCards = isLab ? allTestList : packageCards
      console.log(testCards, 'testCards')

      testCards.forEach(TestCard => {
        const matchedTest = testList?.TestDetail?.find(test => {
          if (isLab) {
            return (
              test.testName === TestCard.testName &&
              test.corpId === TestCard.corpId &&
              test.type === TestCard.type
            )
          } else {
            return test.packName === TestCard.packName
          }
        })

        let testPriceBasedOnLocation

        if (userLocationContext.userLocationState === 'chennai') {
          testPriceBasedOnLocation = TestCard.chennaiPrice
        } else if (userLocationContext.userLocationState === 'banglore') {
          testPriceBasedOnLocation = TestCard.banglorePrice
        } else if (userLocationContext.userLocationState === 'andhraPradesh') {
          testPriceBasedOnLocation = TestCard.andhraPradeshPrice
        } else {
          testPriceBasedOnLocation = TestCard.price
        }

        console.log(matchedTest, 'testmatchedTestCards')

        if (matchedTest) {
          if (isLab) {
            cartContext.cartDispatch({
              type: 'addTestToCart',
              payload: {
                testName: matchedTest.testName,
                testPrice: testPriceBasedOnLocation,
                testCorpId: matchedTest.corpId
              }
            })
          } else {
            cartContext.cartDispatch({
              type: 'addHealthPackage',
              payload: {
                packageName: `Medall Health ${matchedTest.packName}`,
                packagePrice: matchedTest.price,
                packageCorpId: matchedTest.corpId
              }
            })
          }
        }
      })
    })
  }

  return (
    <div className='test-history'>
      <div className='test-history__container'>
        <div className='test-history__heading'>
          <p>
            Test<span> History</span>
          </p>
        </div>

        <div className='test-history__user-detail '>
          <>
            <p>
              Name : <span> {userInfo.name}</span>
            </p>
            <p>
              Mobile Number :{' '}
              <span>
                {userInfo.mobileCode} {userInfo.mobileNumber}
              </span>
            </p>
          </>
        </div>

        <div className='test-history__report'>
          <div className='test-history__tab-section'>
            <p className='test-history__report-title'>Reports</p>
            <div className='test-history__report-tab-section mt-4'>
              {/* <div className='test-history__report-tab test-history__report-tab-active '>
                <ProfileIcon fill={'#ffffff'} />
                <div>
                  <p>Overall history</p>
                  <p>Sub ID : 543546</p>
                </div>
              </div> */}
              {members?.map(member => (
                <div
                  className={`test-history__report-tab ${
                    member?.CustomerId === ActiveMembers?.CustomerID ||
                    ActiveMembers?.CustomerId
                      ? 'test-history__report-tab-active'
                      : ''
                  } `}
                  onClick={event =>
                    setActiveMenbers(member?.CustomerID, member?.CustomerId)
                  }
                  key={member?.CustomerID}
                >
                  <ProfileIcon
                    fill={
                      member.CustomerId === ActiveMembers.CustomerID ||
                      ActiveMembers.CustomerId
                        ? '#ffffff'
                        : '#007CBC'
                    }
                  />
                  <div>
                    {member.CustomerName && <p>{member.CustomerName}</p>}
                    {member.Customername && <p>{member.Customername}</p>}

                    {member.CustomerID && (
                      <span>Sub ID : {member.CustomerID}</span>
                    )}

                    {member.CustomerId && (
                      <span>Sub ID : {member.CustomerId}</span>
                    )}
                    {/* <p>Hari</p>
                    <p>Sub ID : 543546</p> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {customerReportDetails?.map(item =>
            item.TestDetail.map(item1 => (
              <div className='test-history__report-details'>
                <div className='collapsible-card'>
                  <div className=' collapsible-card__tableHeading'>
                    <div className='collapsible-card__header flex flex-col'>
                      <h6>Test Date</h6>
                      <p>{item1?.Visitdate}</p>
                    </div>
                    <div className='collapsible-card__header flex flex-col'>
                      <h6>Overall Price</h6>
                      <p>₹2343</p>
                    </div>
                    <div className='collapsible-card__header flex flex-col'>
                      <h6>Order Number</h6>
                      <p>234323543421345</p>
                    </div>
                    <div className='collapsible-card__header flex flex-col'>
                      <h6>Test Status</h6>
                      <p>{item1.TestStatus}</p>
                    </div>
                  </div>
                  <div className='collapsible-card__body'>
                    <h4>Test Details</h4>
                    <Collapsible
                      trigger={
                        <div
                          className={` ${isOpen ? 'active pt-3' : ''}`}
                          onClick={handleToggle}
                          style={{
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                          }}
                        >
                          <div className=' collapsible-card__body-Title'>
                            <h6>Lipid Profile Test</h6>
                            <p>My self</p>
                          </div>
                          <p>
                            <span
                              className='collapsible_arrow '
                              style={{
                                transition: 'transform 0.3s ease-in-out',
                                paddingRight: '10px'
                              }}
                            ></span>
                          </p>
                        </div>
                      }
                      open={isOpen}
                      //   transitionTime={600}
                      //   open={index === openIndex}
                      //   onOpening={() => setOpenIndex(index)} // Set the opened Collapsible index
                      //   onClosing={() => setOpenIndex(-1)} // Reset the opened Collapsible index when closing
                      //   key={index}
                    >
                      <div className='collapsible-card__list active'>
                        <div className=''>
                          <h6>Medall ID</h6>
                          <h5>YUIV2345654321</h5>
                        </div>
                        <div
                          className=''
                          style={{
                            display: 'flex',
                            gap: '10px',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            paddingTop: '10px'
                          }}
                        >
                          <div className=''>
                            <h6>Price:</h6>
                            <h5>₹700/-</h5>
                          </div>

                          <div className='reports__view-download-btn-box'>
                            <p
                              className='collapsible-card__button  '
                              onClick={event =>
                                downloadReportDocument(
                                  event,
                                  item1.TestName + item1.billingid,
                                  item1.Modality,
                                  item1.Centerid,
                                  item1.Visitid,
                                  item1.billingid
                                )
                              }
                              style={{
                                cursor: 'pointer',
                                padding: '10px',
                                margin: '0px',
                                textAlign: 'center',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '5px'
                              }}
                            >
                              {showDownloadingLoader ===
                              item1.TestName + item1.billingid ? (
                                <p className='' style={{ margin: '0px' }}>
                                  <ThreeCircles
                                    height='20'
                                    width='20'
                                    color='#007cbc'
                                    wrapperStyle={{}}
                                    wrapperClass=''
                                    visible={true}
                                    ariaLabel='three-circles-rotating'
                                    outerCircleColor=''
                                    innerCircleColor=''
                                    middleCircleColor=''
                                  />
                                </p>
                              ) : (
                                <img src={Download} alt='download' />
                              )}
                              Download Report{' '}
                            </p>
                            {/* <button
                              onClick={event =>
                                downloadReportDocument(
                                  event,
                                  item1.TestName + item1.billingid,
                                  item1.Modality,
                                  item1.Centerid,
                                  item1.Visitid,
                                  item1.billingid
                                )
                              }
                            >
                              {showDownloadingLoader ===
                              item1.TestName + item1.billingid ? (
                                <p className='reports__loader'>
                                  <ThreeCircles
                                    height='20'
                                    width='20'
                                    color='#007cbc'
                                    wrapperStyle={{}}
                                    wrapperClass=''
                                    visible={true}
                                    ariaLabel='three-circles-rotating'
                                    outerCircleColor=''
                                    innerCircleColor=''
                                    middleCircleColor=''
                                  />
                                  <span>Downloading..</span>{' '}
                                </p>
                              ) : (
                                <img src={Download} alt='download' />
                              )}
                            </button> */}
                          </div>
                        </div>
                      </div>
                    </Collapsible>
                    <div className='collapsible-card__footer '>
                      <div className=''>
                        <h6 className=''>Rate Your Experience</h6>
                        <button className=' submit  text-center '>
                          Submit
                        </button>
                      </div>
                      <div className=''>
                        <div>
                          <p>Total Price</p>
                          <h5>₹1400/-</h5>
                        </div>
                        <button
                          className=' bookAgain '
                          onClick={() => handleAddToCart(item)}
                        >
                          Book Again
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default TestHistory
