import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import '../styles/Services.scss'

import DottedLine from '../assets/images/dotted-line.svg'

import { OpenHealthPackageMenuContext } from '../context/OpenHealthPackageMenu'

const Services = () => {
    const openHealthPackageMenuContext = useContext(OpenHealthPackageMenuContext);

    const handleHealthPackageLink = () => {
        window.scrollTo(0, 120);
        openHealthPackageMenuContext.healthPackageDisplayDispatch({ type: 'openHealthPackageMenu' });
    }

    return (
        <div className='services' id='services'>
            <h2>Our <span>Services</span></h2>
            <div className="services__links">
                <ul>
                    <li>
                        <a href="#hero__book-test-form">
                            <svg width="80" height="81" viewBox="0 0 80 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M25.5 60.2305C29.0899 60.2305 32 57.3203 32 53.7305C32 50.1406 29.0899 47.2305 25.5 47.2305C21.9101 47.2305 19 50.1406 19 53.7305C19 57.3203 21.9101 60.2305 25.5 60.2305Z" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M58.5 60.2305C62.0899 60.2305 65 57.3203 65 53.7305C65 50.1406 62.0899 47.2305 58.5 47.2305C54.9101 47.2305 52 50.1406 52 53.7305C52 57.3203 54.9101 60.2305 58.5 60.2305Z" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M18.9474 54.2305H12.3158V43.2305M9 21.2305H45.4737V54.2305M32.2105 54.2305H52.1053M65.3684 54.2305H72V37.7305M72 37.7305H45.4737M72 37.7305L62.0526 23.9805H45.4737" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M12.334 31.7461H25.6673" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <p>Book Test <br />or <br />Home Collection</p>
                        </a>
                    </li>
                    <img className='services__divider' src={DottedLine} alt="divider" />
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
                    <img className='services__divider' src={DottedLine} alt="divider" />
                    <li>
                        <Link to="/prescription">
                            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_5030_1217)">
                                    <path d="M46.666 10V23.3333C46.666 24.2174 47.0172 25.0652 47.6423 25.6904C48.2674 26.3155 49.1153 26.6667 49.9993 26.6667H63.3327" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M56.666 70H23.3327C21.5646 70 19.8689 69.2976 18.6186 68.0474C17.3684 66.7971 16.666 65.1014 16.666 63.3333V16.6667C16.666 14.8986 17.3684 13.2029 18.6186 11.9526C19.8689 10.7024 21.5646 10 23.3327 10H46.666L63.3327 26.6667V63.3333C63.3327 65.1014 62.6303 66.7971 61.3801 68.0474C60.1298 69.2976 58.4341 70 56.666 70Z" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M39.5607 40.9393C38.9749 40.3536 38.0251 40.3536 37.4393 40.9393L27.8934 50.4853C27.3076 51.0711 27.3076 52.0208 27.8934 52.6066C28.4792 53.1924 29.4289 53.1924 30.0147 52.6066L38.5 44.1213L46.9853 52.6066C47.5711 53.1924 48.5208 53.1924 49.1066 52.6066C49.6924 52.0208 49.6924 51.0711 49.1066 50.4853L39.5607 40.9393ZM37 65C37 65.8284 37.6716 66.5 38.5 66.5C39.3284 66.5 40 65.8284 40 65H37ZM37 42V65H40V42H37Z" fill="currentColor" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_5030_1217">
                                        <rect width="80" height="80" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <p>Upload Prescription</p>
                        </Link>
                    </li>
                    <img className='services__divider' src={DottedLine} alt="divider" />
                    <li>
                        <Link to="/download-report-via-otp">
                            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_4457_1211)">
                                    <path d="M46.666 10V23.3333C46.666 24.2174 47.0172 25.0652 47.6423 25.6904C48.2674 26.3155 49.1153 26.6667 49.9993 26.6667H63.3327" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M56.666 70H23.3327C21.5646 70 19.8689 69.2976 18.6186 68.0474C17.3684 66.7971 16.666 65.1014 16.666 63.3333V16.6667C16.666 14.8986 17.3684 13.2029 18.6186 11.9526C19.8689 10.7024 21.5646 10 23.3327 10H46.666L63.3327 26.6667V63.3333C63.3327 65.1014 62.6303 66.7971 61.3801 68.0474C60.1298 69.2976 58.4341 70 56.666 70Z" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M38.9393 64.0607C39.5251 64.6464 40.4749 64.6464 41.0607 64.0607L50.6066 54.5147C51.1924 53.9289 51.1924 52.9792 50.6066 52.3934C50.0208 51.8076 49.0711 51.8076 48.4853 52.3934L40 60.8787L31.5147 52.3934C30.9289 51.8076 29.9792 51.8076 29.3934 52.3934C28.8076 52.9792 28.8076 53.9289 29.3934 54.5147L38.9393 64.0607ZM41.5 40C41.5 39.1716 40.8284 38.5 40 38.5C39.1716 38.5 38.5 39.1716 38.5 40H41.5ZM41.5 63L41.5 40H38.5L38.5 63H41.5Z" fill="currentColor" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_4457_1211">
                                        <rect width="80" height="80" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <p>Download Reports</p>
                        </Link>
                    </li>
                </ul>
            </div>
        </div >
    )
}

export default Services