import React from 'react'

import '../styles/Awards.scss'

import AwardLogo from '../assets/icons/award-logo.svg'

const Awards = () => {
    const awardsCards = [
        {
            logo: AwardLogo,
            year: '2023',
            text: '',
            list: [
                {
                    text: 'Times Business Awards - Best Diagnostic Centre in Bengaluru'
                },
            ]
        },
        {
            logo: AwardLogo,
            year: '2020',
            text: '',
            list: [
                {
                    text: 'Best Medical Diagnostic Laboratory with NABL'
                },
                {
                    text: 'TANCARE, FICCI & Health & Family Welfare Department, Tamil Nadu'
                },
            ]
        },
        {
            logo: AwardLogo,
            year: '2018',
            text: '',
            list: [
                {
                    text: 'Most Customer-Centric and Innovative Diagnostics Solutions Company - Pharma Leadership Awards 2018'
                },
                {
                    text: 'Pharma Leadership Power Brand Award - by Pharma Leadership Awards 2018'
                },
            ]
        },
        {
            logo: AwardLogo,
            year: '2017',
            text: '',
            list: [
                {
                    text: 'Best Diagnostic Company of the Year in South India - World Health Congress'
                },
                {
                    text: 'Best Diagnostic Company of the Year in South India - World Health Congress Best Outreach in Rural Areas - World Health Congress'
                },
                {
                    text: 'Over 100 ISO Certified Labs - 3 Mother Labs got NABL Certification and the rest are in the process of acquiring it'
                }
            ]
        },
        {
            logo: AwardLogo,
            year: '2016',
            text: '',
            list: [
                {
                    text: '10 Most Valuable Health Care Solutions Providers - Insight Success'
                },
                {
                    text: 'Best Healthcare Brands - Economic Times'
                },
                {
                    text: 'International Leadership Excellence Award & Gold Medal - Institute of Economic Studies, Bangkok'
                }
            ]
        },
        {
            logo: AwardLogo,
            year: '2015',
            text: 'Excellence Award - Institute of Economic Studies'
        },
        {
            logo: AwardLogo,
            year: '2013',
            text: 'Appreciation Award - Public Health Department and Corporation of Chennai'
        },
        {
            logo: AwardLogo,
            year: '2012',
            text: 'Top 5 on "The Weeks" survey - "Best Pathology Laboratories and Best Imaging Centres” in Chennai and Bengaluru'
        },
        {
            logo: AwardLogo,
            year: '2011',
            text: 'Emerging Diagnostics Services Provider of the Year - Frost and Sullivan'
        },
    ]

    return (
        <div className='awards'>
            <h1 className="awards__heading">Awards and Recognitions</h1>
            <div className="awards__details">
                {
                    awardsCards.map((card, index) => <div key={card.text} className="awards__card" data-aos="fade-up"
                        data-aos-delay={index * 100} >
                        <img src={card.logo} loading="lazy" alt="award logo" />
                        <h3>{card.year}</h3>
                        <p>{card.text}</p>
                        {
                            card.list && <ul>
                                {card.list.map(listItem => <li key={listItem.text}>{listItem.text}</li>)}
                            </ul>
                        }
                    </div>)
                }
            </div>
        </div>
    )
}

export default Awards