import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Bars } from 'react-loader-spinner'
import { Table, Input, Button } from 'antd';
import '../../styles/DownloadReport/EmployeeDetails.scss'
import axios from 'axios';
import API from '../../api'

const { Search } = Input;

const EmployeeDetails = () => {
    const [employees, setEmployees] = useState();
    const [filteredData, setFilteredData] = useState();
    const navigate = useNavigate();
    const [showLoader, setShowLoader] = useState(false);

    const showReportsOfEmployee = async (userID, name) => {
        await API.post('https://medinfra.medallcorp.in/WebsiteAPI/api/GetCustomerReportsDetails', {
            "UserID": userID
        }, {
            auth: {
                "username": "Medall",
                "password": "TWVkYWxsQDMxMTJ2"
            }
        }).then(res => {
            // console.log(userID);
            // console.log(res, 'getting customer report details Response');

            window.sessionStorage.setItem("employeeReportDetails", JSON.stringify(res.data.GetCustomerReportsDetailsResult));
            window.sessionStorage.setItem("employeeName", name);

            navigate('/employee-report');

            // console.log(res.data.GetCustomerReportsDetailsResult, 'getting customer report details');

        }).catch(err => { console.log(userID); console.log(err, 'error getting customer report details') })
    }

    const columns = [
        {
            title: 'Name',
            dataIndex: 'Name',
            key: 'Name',
        },
        {
            title: 'EGuid',
            dataIndex: 'EGuid',
            key: 'EGuid',
        },
        {
            title: 'External ID',
            dataIndex: 'ExternalID',
            key: 'ExternalID',
        },
        {
            title: 'Member UserId',
            dataIndex: 'MemberUserId',
            key: 'MemberUserId',
        },
        // {
        //     title: 'Sourcename',
        //     dataIndex: 'Sourcename',
        //     key: 'Sourcename',
        // },
        {
            title: 'Visit Date',
            dataIndex: 'Visitdate',
            key: 'Visitdate',
        },
        {
            title: 'View Reports',
            dataIndex: 'Visitdate',
            key: 'Visitdate',
            render: (text, record) => (
                <span>
                    {/* Use Link component to navigate to different pages */}
                    {/* <Link to={`/details/${record.ExternalID}`}> */}
                    <Button type="primary" onClick={() => showReportsOfEmployee(record.ExternalID, record.Name)}>
                        View Details
                    </Button>
                    {/* </Link> */}
                </span>
            ),
        },
        // Add more columns as needed
    ];


    useEffect(() => {

        const fetchEmployees = async () => {
            setShowLoader(true);

            // Getting All employees details 
            const corporateCustomerData = JSON.parse(window.sessionStorage.getItem("corporateCustomerLoginInfo"))

            await axios.post('https://medinfra.medallcorp.in/WebsiteAPI/api/GetMyEmployeedetails', corporateCustomerData, {
                auth: {
                    withCredentials: true,
                    username: 'Medall',
                    password: 'TWVkYWxsQDMxMTJ2'
                },
            }).then(res => {
                setEmployees(res.data);
                setFilteredData(res.data);
                setShowLoader(false);
                // console.log(res, "Response from Getting employee details")
            }).catch(err => console.log(err, "Error getting employee details "));

        }

        fetchEmployees();
    }, []);

    const handleSearch = searchText => {
        const filtered = employees.filter(item =>
            item.Name.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredData(filtered);
    };

    // console.log(downloadEmployeeReportContext.downloadEmployeeReportState.allEmployee);
    return (
        <div className='employee-detail'>
            <h2>Employee Details</h2>
            <Search
                placeholder="Search by name"
                onSearch={handleSearch}
                style={{ marginBottom: 16 }}
            />
            <Table dataSource={filteredData} columns={columns} />
            {
                showLoader && <div className='employee-detail__parent-loader'>
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
        </div>
    )
}

export default EmployeeDetails