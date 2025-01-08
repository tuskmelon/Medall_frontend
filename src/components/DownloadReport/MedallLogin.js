import React, { useState, useRef, useEffect, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import '../../styles/DownloadReport/MedallLogin.scss'

import axios from 'axios';

const MedallLogin = () => {
    const [userMedallIdLoginInfo, setUserMedallIdLoginInfo] = useState({ medallID: '', password: '' });
    const navigate = useNavigate();

    const verifyCredentials = async (e) => {
        e.preventDefault();
        e.stopPropagation();

        const loginDetails = {
            "UserID": userMedallIdLoginInfo.medallID,
            "Password": userMedallIdLoginInfo.password
        }

        await axios.post('https://medinfra.medallcorp.in/WebsiteAPI/api/GetCustomerDetails', loginDetails,
            {
                auth: {
                    withCredentials: true,
                    username: 'Medall',
                    password: 'TWVkYWxsQDMxMTJ2'
                },
            },
        ).then((res) => {
            if (res.data.Status === "Exists") {
                window.sessionStorage.setItem("allMembers", "");
                window.sessionStorage.setItem("allMembers", JSON.stringify(res.data.CustomerDetails));
                navigate('/download-report');
            }
        }).catch((err) => {
            console.log(err, "Error verifying user via medall ID")
        })

    }

    return (
        <div className='medall-id-login'>
            <h1>Download Reports via Medall Login</h1>
            <p className='medall-id-login__sub-title'>Login using your registered medall ID</p>
            <div className='medall-id-login__form-container'>
                <form action="" onSubmit={verifyCredentials} className='medall-id-login__form'>
                    <h2>Medall Login</h2>

                    <label htmlFor="medall-id-login__medall-id" className='medall-id-login__label'>Medall ID</label>
                    <input type="text" className='medall-id-login__input' id='medall-id-login__medall-id' autoFocus value={userMedallIdLoginInfo.medallID} onChange={(e) => { setUserMedallIdLoginInfo({ ...userMedallIdLoginInfo, medallID: e.target.value }); }} required />

                    <label htmlFor="medall-id-login__password" className='medall-id-login__label'>Password</label>
                    <input type="password" className='medall-id-login__input' id='medall-id-login__password' value={userMedallIdLoginInfo.password} onChange={(e) => { setUserMedallIdLoginInfo({ ...userMedallIdLoginInfo, password: e.target.value }); }} required autoComplete='on' />

                    <div className="medall-id-login__divider-line-box">
                        <span>or</span>
                        <p></p>
                    </div>

                    {/* <p className='medall-id-login__redirect-link medall-id-login__redirect-link--margin'>Already have the medall ID ? <Link to="/">Login</Link> </p> */}
                    <p className='medall-id-login__redirect-link medall-id-login__redirect-link--margin'>Already a regsitered user? <Link to="/download-report-via-otp">Login</Link> </p>
                    <p className='medall-id-login__redirect-link'>Looking for corporate info ? <Link to="/download-report-via-corporate-login">Corporate Login</Link> </p>

                    <div className="medall-id-login__submit-buttons-container">
                        <button type='submit'>Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default MedallLogin
