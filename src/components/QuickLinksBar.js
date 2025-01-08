import React from 'react'

import '../styles/QuickLinksBar.scss'

import { Link, useLocation } from "react-router-dom";

const QuickLinksBar = () => {
    const location = useLocation();

    return (
        <div className='quick-links-bar'>
            <ul className='quick-links-bar__links'>
                <li><Link to="/corporate" className={`${location.pathname === '/corporate' ? ' active-link' : 'quick-links-bar__link'}`}>Corporate</Link></li>
                <li><Link to="/business-enquiry" className={`${location.pathname === '/business-enquiry' ? ' active-link' : 'quick-links-bar__link'}`}>Franchise Enquiry</Link></li>
                {/* <li><a href="/">Doctor</a></li> */}
                <li><Link to="/careers" className={`${location.pathname === '/careers' ? 'active-link' : 'quick-links-bar__link'}`}>Careers</Link></li>
            </ul>

            <div className="quick-links-bar__support">
                {/* <div><span>Help & Support</span> <img src={DownArrow} alt="down arrow" />
                    <ul>
                        <li>Helpline 1</li>
                        <li>Helpline 2</li>
                        <li>Helpline 3</li>
                    </ul>
                </div> */}

            </div>

        </div>
    )
}

export default QuickLinksBar