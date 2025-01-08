import React, { useState, useEffect } from 'react'
import { ThreeCircles } from 'react-loader-spinner'
import '../../styles/DownloadReport/EmployeeReports.scss'
import API from '../../api'

import Download from '../../assets/icons/download-arrow.svg'

const EmployeeReports = () => {
    const [employeeDetails, setEmployeeDetails] = useState({ employeeName: "", employeeReportInfo: [] });
    const [showDownloadingLoader, setShowDownloadingLoader] = useState();

    const employeeName = window.sessionStorage.getItem("employeeName");

    useEffect(() => {

        const employeeReportDetails = JSON.parse(window.sessionStorage.getItem("employeeReportDetails"));
        setEmployeeDetails({ ...employeeDetails, employeeName: employeeName, employeeReportInfo: employeeReportDetails });

    }, [employeeName])

    const downloadReportDocument = async (event, testname, modality, center, visit, scanType) => {
        event.stopPropagation();
        event.preventDefault();

        setShowDownloadingLoader(testname);

        console.log(testname, modality, center, visit, scanType, "parameterss")

        await API.post('https://medinfra.medallcorp.in/WebsiteAPI/api/GetPDFReportsDetails', {
            "CenterId": center,
            "VisitId": visit,
            "ScanTypeId": scanType, ///billingid
            "TypeId": modality === 'LAB' ? "1" : "0", /////Modality = Lab (typeid=1), otherwise (typeid =2)
        }
            , {
                auth: {
                    "username": "Medall",
                    "password": "TWVkYWxsQDMxMTJ2"
                }
            }).then(res => {
                // console.log(res);
                const fileName = (res.data.GetPDFReportsDetailsResult).split('/').pop();

                const aTag = document.createElement('a');
                aTag.href = res.data.GetPDFReportsDetailsResult;
                aTag.target = "_blank";
                aTag.setAttribute = ('download', fileName)
                document.body.appendChild(aTag);
                aTag.click();
                aTag.remove();

                setShowDownloadingLoader('');
            })
            .catch(err => { console.log(err, "Error getting url of test report document") })
    }

    return (
        <div className='employee-report'>
            <h2 className='employee-report__header'>Download Reports</h2>
            <div className="employee-report__user-detail-box">
                <div className="employee-report__user-info" data-aos="zoom-in-up">
                    <p>Name: <span>{employeeDetails.employeeName}</span></p>
                </div>

            </div>

            <div className="employee-report__report-container">
                <div className="employee-report__member-details-with-reports">
                    <div className="employee-report__pdf-container">
                        {
                            employeeDetails.employeeReportInfo.map(testList => testList.TestDetail.map(testInfo => <div className="employee-report__report-card" key={testInfo.TestName}>

                                <h4 className='employee-report__report-card-header'><p>{testInfo.TestName}</p> <p>{testInfo.Visitdate}</p></h4>
                                <div className="employee-report__view-download-btn-box">
                                    {/* <button>View Details</button> */}
                                    <button onClick={(event) => downloadReportDocument(event, testInfo.TestName, testInfo.Modality, testInfo.Centerid, testInfo.Visitid, testInfo.billingid)}>
                                        {
                                            (showDownloadingLoader === testInfo.TestName) ? <p className='employee-report__loader'>
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
                </div>
            </div>
        </div>
    )
}

export default EmployeeReports