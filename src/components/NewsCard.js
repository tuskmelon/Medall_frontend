import React from 'react'

import '../styles/NewsCard.scss'

const NewsCard = ({ cardDetails }) => {
    return (
        <div className='news-card'>
            <div className="news-card__card-box">
                <img src={cardDetails.thumbnail} loading="lazy" alt="thumbnail" />
                <div className="news-card__card-text-content">
                    <h3>{cardDetails.title}</h3>
                    <p>{cardDetails.description}</p>
                    <a href={cardDetails.link} rel="noopener noreferrer" target='_blank' >Read more</a>
                </div>
            </div>
        </div>
    )
}

export default NewsCard