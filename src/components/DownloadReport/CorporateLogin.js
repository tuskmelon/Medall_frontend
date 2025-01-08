import React, { useState, useRef, useEffect, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

import '../../styles/DownloadReport/CorporateLogin.scss'

const CorporateLogin = () => {

    const [userCorporateIdLoginInfo, setUserCorporateIdLoginInfo] = useState({ corporateID: '', password: '' });
    const navigate = useNavigate();

    const verifyCredentials = async (e) => {
        e.preventDefault();
        e.stopPropagation();

        const loginDetails = {
            "UserID": userCorporateIdLoginInfo.corporateID,
            "Password": userCorporateIdLoginInfo.password
        }

        await axios.post('https://medinfra.medallcorp.in/WebsiteAPI/api/GetCustomerDetails', loginDetails,
            {
                auth: {
                    withCredentials: true,
                    username: 'Medall',
                    password: 'TWVkYWxsQDMxMTJ2'
                },
            },
        ).then(async (res) => {
            if (res.data.Status === "Exists") {
                const corporateAccountHolderData = {
                    UserID: res.data.CustomerDetails[0].CustomerId,
                    Fromdate: "2023-01-01",
                    Todate: new Date().toJSON().slice(0, 10),
                    Guid: res.data.CustomerDetails[0].Guid
                }

                window.sessionStorage.setItem("corporateCustomerLoginInfo", JSON.stringify(corporateAccountHolderData));
                navigate('/employee-details');
            }

            console.log(res, "Response from Corporate Login");

        }).catch((err) => {
            console.log(err, "Error verifying user via employee ID")
        })

    }

    return (
        <div className='corporate-login'>
            <h1>Download Reports via Corporate Login</h1>
            <p className='corporate-login__sub-title'>Login using your corporate id</p>
            <div className='corporate-login__form-container'>
                <form action="" onSubmit={verifyCredentials} className='corporate-login__form'>
                    <h2>Corporate Login</h2>

                    <label htmlFor="corporate-login__medall-id" className='corporate-login__label'>Corporate ID</label>
                    <input type="text" className='corporate-login__input' id='corporate-login__medall-id' autoFocus value={userCorporateIdLoginInfo.corporateID} onChange={(e) => { setUserCorporateIdLoginInfo({ ...userCorporateIdLoginInfo, corporateID: e.target.value }); }} required />

                    <label htmlFor="corporate-login__password" className='corporate-login__label'>Password</label>
                    <input type="password" className='corporate-login__input' id='corporate-login__password' value={userCorporateIdLoginInfo.password} onChange={(e) => { setUserCorporateIdLoginInfo({ ...userCorporateIdLoginInfo, password: e.target.value }); }} required autoComplete='on' />

                    <div className="corporate-login__divider-line-box">
                        <span>or</span>
                        <p></p>
                    </div>

                    {/* <p className='corporate-login__redirect-link corporate-login__redirect-link--margin'>Already have the medall ID ? <Link to="/">Login</Link> </p> */}

                    {/* <p className='corporate-login__redirect-link'>Looking for corporate info ? <Link to="/">Corporate Login</Link> </p> */}
                    <p className='medall-id-login__redirect-link medall-id-login__redirect-link--margin'>Already a regsitered user? <Link to="/download-report-via-otp">Login</Link> </p>
                    <p className='verify-via-otp__redirect-link'>Already have the medall ID ? <Link to="/download-report-via-medall-login">Login</Link> </p>


                    <div className="corporate-login__submit-buttons-container">
                        <button type='submit'>Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CorporateLogin