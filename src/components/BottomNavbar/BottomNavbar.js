import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { OpenHealthPackageMenuContext } from '../../context/OpenHealthPackageMenu'

import '../../styles/BottomNavbar/BottomNavbar.scss'


const BottomNavbar = () => {
    const openHealthPackageMenuContext = useContext(OpenHealthPackageMenuContext);
    let navigate = useNavigate();

    const handleHealthPackageLink = () => {
        window.scrollTo(0, 0);

        if (openHealthPackageMenuContext.healthPackageDisplayState === true) {
            openHealthPackageMenuContext.healthPackageDisplayDispatch({ type: 'closeHealthPackageMenu' })
        } else {
            openHealthPackageMenuContext.healthPackageDisplayDispatch({ type: 'openHealthPackageMenu' });
        }
    }

    const handleBookTest = () => {
        navigate("/");
        setTimeout(() => { window.scroll(0, 300) }, 1500)
    }

    return (
        <div className='bottom-navbar'>
            <ul className="bottom-navbar__container">
                <li>
                    <span onClick={handleBookTest}>
                        <svg width="80" height="81" viewBox="0 0 80 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25.5 60.2305C29.0899 60.2305 32 57.3203 32 53.7305C32 50.1406 29.0899 47.2305 25.5 47.2305C21.9101 47.2305 19 50.1406 19 53.7305C19 57.3203 21.9101 60.2305 25.5 60.2305Z" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M58.5 60.2305C62.0899 60.2305 65 57.3203 65 53.7305C65 50.1406 62.0899 47.2305 58.5 47.2305C54.9101 47.2305 52 50.1406 52 53.7305C52 57.3203 54.9101 60.2305 58.5 60.2305Z" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M18.9474 54.2305H12.3158V43.2305M9 21.2305H45.4737V54.2305M32.2105 54.2305H52.1053M65.3684 54.2305H72V37.7305M72 37.7305H45.4737M72 37.7305L62.0526 23.9805H45.4737" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M12.334 31.7461H25.6673" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p>Book Test</p>
                    </span>
                </li>

                <li>
                    <span onClick={handleHealthPackageLink}>
                        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_4457_1187)">
                                <path d="M29.9993 16.667H23.3327C21.5646 16.667 19.8689 17.3694 18.6186 18.6196C17.3684 19.8699 16.666 21.5655 16.666 23.3337V63.3337C16.666 65.1018 17.3684 66.7975 18.6186 68.0477C19.8689 69.2979 21.5646 70.0003 23.3327 70.0003H56.666C58.4341 70.0003 60.1298 69.2979 61.3801 68.0477C62.6303 66.7975 63.3327 65.1018 63.3327 63.3337V23.3337C63.3327 21.5655 62.6303 19.8699 61.3801 18.6196C60.1298 17.3694 58.4341 16.667 56.666 16.667H49.9993" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M43.3333 10H36.6667C32.9848 10 30 12.9848 30 16.6667C30 20.3486 32.9848 23.3333 36.6667 23.3333H43.3333C47.0152 23.3333 50 20.3486 50 16.6667C50 12.9848 47.0152 10 43.3333 10Z" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M33.334 46.667H46.6673" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M40 40V53.3333" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_4457_1187">
                                    <rect width="80" height="80" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>

                        <p>Health Package</p>
                    </span>
                </li>
            </ul>
        </div>
    )
}

export default BottomNavbar