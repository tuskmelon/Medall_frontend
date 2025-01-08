import React, { useState } from 'react'
import { toast } from 'react-toastify';
import API from '../api';
import { useNavigate } from 'react-router-dom'

import '../styles/AdminLogin/AdminLogin.scss'

import Men from "../assets/icons/men-profile.svg"
import Lock from "../assets/icons/lock.svg"

const AdminLogin = () => {
    const [adminDetails, setAdminDetails] = useState({ email: "", password: "" });
    const notifyWrongCredentials = () => toast(`❌ Wrong Email Or Password`, { draggable: true });
    const navigate = useNavigate();

    const handleAdminLogin = (e) => {
        console.log("asdfkbsnfjn", adminDetails.username,)
        e.preventDefault();
        API.post("/api/transactions-history/fetch-transactions", { emailAddress: adminDetails.email, password: adminDetails.password }).then(res => {
            if (res.data.status === "success") {
                window.sessionStorage.setItem("adminData", JSON.stringify({ adminEmail: adminDetails.email, password: adminDetails.password }));
                navigate('/transactions-history');
                console.log(res);
            }
        }
        ).catch(err => {
            notifyWrongCredentials();
            console.log(err);
        })
    } 

    return (
        <div className='admin-login'>
            <div className="admin-login__form-container">
                <h3>Admin Login</h3>
                <form action="" onSubmit={(e) => handleAdminLogin(e)} className='admin-login__form' >
                    <div className='admin-login__input-group'>
                        <label htmlFor="admin-login__username" className='admin-login__label'>Email</label>
                        <div className='admin-login__input-with-icon'>
                            <img className='admin-login__icon' src={Men} alt="user" />
                            <input type="email" className='admin-login__username-input' id='admin-login__username' value={adminDetails.email} autoFocus onChange={(e) => setAdminDetails({ ...adminDetails, email: e.target.value })} required />
                        </div>
                    </div>

                    <div className='admin-login__input-group'>
                        <label htmlFor="admin-login__password" className='admin-login__label'>Password</label>
                        <div className='admin-login__input-with-icon'>
                            <img className='admin-login__icon admin-login__icon--size' src={Lock} alt="password" />
                            <input type="password" className='admin-login__password-input' id='admin-login__password' value={adminDetails.password} onChange={(e) => setAdminDetails({ ...adminDetails, password: e.target.value })} required />
                        </div>
                    </div>

                    <button type='submit' className='admin-login__login-btn' >Login</button>
                </form>
            </div>
        </div>
    )
}

export default AdminLogin