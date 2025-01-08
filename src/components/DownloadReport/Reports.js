import React, { useState } from 'react'
import { Bars, ThreeCircles } from 'react-loader-spinner'
import Download from '../../assets/icons/download-arrow.svg'

import API from '../../api'

import '../../styles/DownloadReport/Reports.scss'


const Reports = () => {
    // const [reportDocumentLink, setReportDocumentLink] = useState();
    const [showDownloadingLoader, setShowDownloadingLoader] = useState();
    const [showLoaderWhileFecthingCustomer, setShowLoaderWhileFecthingCustomer] = useState(false);
    const [customerInfo, setCustomerInfo] = useState({ name: 'Null', age: '', sex: '', patientId: '', dob: '', mobile: '', email: '', pincode: '' });
    const [displayDetails, setDisplayDetails] = useState(false);
    const [showNoReportsFound, setShowNoReportsFound] = useState(false);

    // Session Storage 
    const [members, setMembers] = useState(JSON.parse(window.sessionStorage.getItem("allMembers")));
    const [customerReportDetails, setCustomerReportDetails] = useState([]);


    // Get Customer Report Details by using Userid 
    const fetchReports = async (event, userId, userIdViaMedallIdLogin) => {
        event.stopPropagation();

        // show loader 
        setShowLoaderWhileFecthingCustomer(true);

        // show All details when user click name Tags 
        setDisplayDetails(true);

        // Set userID based on login methods 
        let userID;
        if (userId) {
            userID = userId
        }
        if (userIdViaMedallIdLogin) {
            userID = userIdViaMedallIdLogin
        }

        await API.post('https://medinfra.medallcorp.in/WebsiteAPI/api/GetCustomerReportsDetails', {
            "UserID": userID
        }, {
            auth: {
                "username": "Medall",
                "password": "TWVkYWxsQDMxMTJ2"
            }
        }).then(res => {
            // console.log(userID);

            window.sessionStorage.setItem("customerReportDetails", JSON.stringify(res.data.GetCustomerReportsDetailsResult));

            // Getting customer all reports 
            setCustomerReportDetails(JSON.parse(window.sessionStorage.getItem("customerReportDetails")));

            // console.log(res, 'getting customer report details Response');
            // console.log(res.data.GetCustomerReportsDetailsResult, 'getting customer report details');

            if (res.data.GetCustomerReportsDetailsResult.length === 0) {
                setShowNoReportsFound(true);
            } else {
                setShowNoReportsFound(false);
            }
            setShowLoaderWhileFecthingCustomer(false);
        }).catch(err => { console.log(userID); console.log(err, 'error getting customer report details') })

        // Fetching Customer Personal details
        // Only make the below POST request when we are getting userID via OTP login method
        if (userID === userId) {
            await API.post('https://medinfra.medallcorp.in/WebsiteAPI/api/GetCustomerDetailsbyOTP', {
                "UserID": userID
            }, {
                auth: {
                    "username": "Medall",
                    "password": "TWVkYWxsQDMxMTJ2"
                }
            }).then(res => {
                // console.log(userID, 'USER ID')
                const customerData = res.data.CustomerDetails[0];

                window.sessionStorage.setItem("customerPersonalDetails", JSON.stringify({ customerPersonalInfo: { name: customerData.Customername, age: customerData.Age, sex: customerData.Sex, patientId: customerData.Patientid, dob: customerData.DateofBirth, mobile: customerData.MobileNo, email: customerData.Emailid, pincode: customerData.Pincode } }))

                setMembers(JSON.parse(window.sessionStorage.getItem("allMembers")));

                const customerPersonalInfo = JSON.parse(window.sessionStorage.getItem("customerPersonalDetails")).customerPersonalInfo
                setCustomerInfo({ ...customerPersonalInfo, name: customerPersonalInfo.name, age: customerPersonalInfo.age, sex: customerPersonalInfo.sex, patientId: customerPersonalInfo.patientId, dob: customerPersonalInfo.dob, mobile: customerPersonalInfo.mobile, email: customerPersonalInfo.email, pincode: customerPersonalInfo.pincode });

                // remove loader  
                setShowLoaderWhileFecthingCustomer(false);

            }).catch(err => console.log(err, 'error getting customer details'));
        }
    }


    const downloadReportDocument = async (event, testName, modality, center, visit, scanType) => {
        event.stopPropagation();
        event.preventDefault();

        setShowDownloadingLoader(testName);

        console.log(testName, "Test Name", modality, "Modalaity", center, "Center", visit, "Visit", scanType, "Scantype", "DATATATATATA");

        await API.post('https://medinfra.medallcorp.in/WebsiteAPI/api/GetPDFReportsDetails', {
            "CenterId": center,
            "VisitId": visit,
            "ScanTypeId": scanType, //billingid
            "TypeId": modality === 'LAB' ? "1" : "0", //Modality = Lab (typeid=1), otherwise (typeid =0)
        }
            , {
                auth: {
                    "username": "Medall",
                    "password": "TWVkYWxsQDMxMTJ2"
                }
            }).then(res => {
                console.log(res);

                const fileName = (res.data.GetPDFReportsDetailsResult).split('/').pop();

                const aTag = document.createElement('a');
                aTag.href = res.data.GetPDFReportsDetailsResult;
                aTag.target = "_blank";
                aTag.setAttribute = ('download', fileName)
                // setReportDocumentLink(res.data.GetPDFReportsDetailsResult); console.log(res, 'success fetching report document url')
                document.body.appendChild(aTag);
                aTag.click();
                aTag.remove();

                setShowDownloadingLoader('');
            })
            .catch(err => { console.log(err, "Error getting link of test report document") })
    }

    return (
        <div className='reports'>
            <h2 className='reports__header'>Download Reports</h2>
            <div className="reports__user-detail-box">
                <div className="reports__user-info" data-aos="zoom-in-up">
                    {
                        members[0].hasOwnProperty("CustomerName") ? <p>Name: <span>{members[0].CustomerName}</span></p> : <></>
                    }
                    {
                        members[0].Customername && <p>Name: <span>{members[0].Customername}</span></p>
                    }

                </div>
                <div className="reports__user-info" data-aos="zoom-in-up">
                    {
                        members[0].MobileNumber !== undefined && <p>Mobile Number: <span>{members[0].MobileNumber}</span></p>
                    }
                    {/* {
                        downloadReportContext.downloadReportState.members[0].MobileNo !== undefined && <>
                            {
                                downloadReportContext.downloadReportState.members[0].MobileNo === '' && <p>Mobile Number: <span>{downloadReportContext.downloadReportState.members[0].MobileNo}</span></p>
                            }
                        </>
                    } */}
                    {
                        members[0].MobileNo !== undefined && <>
                            {
                                members[0].MobileNo === '' && <p>Mobile Number: <span>{members[0].MobileNo}</span></p>
                            }
                        </>
                    }


                </div>
            </div>

            <div className="reports__report-container">
                <div className="reports__report-detail-header">
                    <h3>Reports for you and your family members</h3>
                    {
                        members.map(member => <button className={`reports__member-switch-btn ${((member.CustomerName !== undefined) && member.CustomerName === customerInfo.name) && 'reports__member-switch-btn--active'} ${(member.Customername === customerInfo.name) && 'reports__member-switch-btn--active'}`} onClick={(event) => fetchReports(event, member.CustomerID, member.CustomerId)} key={member.CustomerID}>
                            {
                                // Show when user login via OTP verification 
                                member.CustomerName && <p>{member.CustomerName}</p>
                            }
                            {
                                // Show when user login via Medall ID 
                                member.Customername && <p>{member.Customername}</p>
                            }

                            {
                                // Show when user login via OTP verification 
                                member.CustomerID && <p>Sub ID : {member.CustomerID}</p>
                            }

                            {
                                // Show when user login via Medall ID 
                                member.CustomerId && <p>Sub ID : {member.CustomerId}</p>
                            }
                        </button>)
                    }

                </div>

                {
                    displayDetails && <div className="reports__member-details-with-reports">
                        <div className="reports__pdf-container">
                            {
                                showLoaderWhileFecthingCustomer && <div className='reports__parent-loader'>
                                    <Bars
                                        height="80"
                                        width="80"
                                        color="#007cbc"
                                        ariaLabel="bars-loading"
                                        wrapperStyle={{}}
                                        wrapperClass=""
                                        visible={true}
                                    />
                                    Loading Details...
                                </div>
                            }
                            {
                                showNoReportsFound && <h2 className='reports__no-report-found'>No Reports Found</h2>
                            }
                            {
                                customerReportDetails.map(testList => testList.TestDetail.map((testInfo, index) => <div className="reports__report-card" key={testInfo.TestName + index}>

                                    <h4 className='reports__report-card-header'><p>{testInfo.TestName}</p> <p>{testInfo.Visitdate}</p></h4>
                                    <div className='reports__card-user-info'>
                                        <p>Name : {customerInfo.name}</p>
                                        <p>Age : {customerInfo.age}</p>
                                        <p>Sex : {customerInfo.sex}</p>
                                    </div>
                                    <div className="reports__view-download-btn-box">
                                        <button>Download Report</button>
                                        <button onClick={(event) => downloadReportDocument(event, testInfo.TestName + testInfo.billingid, testInfo.Modality, testInfo.Centerid, testInfo.Visitid, testInfo.billingid)}>
                                            {
                                                (showDownloadingLoader === testInfo.TestName + testInfo.billingid) ? <p className='reports__loader'>
                                                    <ThreeCircles
                                                        height="20"
                                                        width="20"
                                                        color="#007cbc"
                                                        wrapperStyle={{}}
                                                        wrapperClass=""
                                                        visible={true}
                                                        ariaLabel="three-circles-rotating"
                                                        outerCircleColor=""
                                                        innerCircleColor=""
                                                        middleCircleColor=""
                                                    />
                                                    <span>Downloading..</span> </p> : <img src={Download} alt="download" />
                                            }

                                        </button>
                                    </div>
                                </div>))
                            }
                        </div>

                        <div className="reports__member-info">
                            <div className="reports__member-field-group">
                                <label htmlFor="member-name">Name</label>
                                <input type="text" value={customerInfo.name} id='member-name' readOnly />
                            </div>
                            <div className="reports__member-field-group">
                                <label htmlFor="patient-id">Patient ID</label>
                                <input type="text" value={customerInfo.patientId} id='patient-id' readOnly />
                            </div>
                            <div className="reports__member-field-group">
                                <label htmlFor="member-dob">DOB</label>
                                <input type="text" value={customerInfo.dob} id='member-dob' readOnly />
                            </div>
                            <div className="reports__member-field-group">
                                <label htmlFor="member-age">Age</label>
                                <input type="text" value={customerInfo.age} id='member-age' readOnly />
                            </div>
                            <div className="reports__member-field-group">
                                <label htmlFor="member-gender">Gender</label>
                                <input type="text" value={customerInfo.sex} id='member-gender' readOnly />
                            </div>
                            <div className="reports__member-field-group">
                                <label htmlFor="member-phone">Phone Number</label>
                                <input type="text" value={customerInfo.mobile} readOnly />
                            </div>
                            <div className="reports__member-field-group">
                                <label htmlFor="member-email">E Mail ID</label>
                                <input type="text" value={customerInfo.email} id='member-email' readOnly />
                            </div>
                            <div className="reports__member-field-group">
                                <label htmlFor="member-pincode">Pincode</label>
                                <input type="text" value={customerInfo.pincode} id='pincode' readOnly />
                            </div>
                        </div>
                    </div>
                }


            </div>
        </div>
    )
}

export default Reports
