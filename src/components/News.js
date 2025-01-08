import React from 'react'

import '../styles/News.scss'

// import News card component
import NewsCard from './NewsCard';

// import react-slick carousel library
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const News = () => {

    const newsCards = [
        {
            thumbnail: 'https://medallwebsite.s3.ap-south-1.amazonaws.com/blogs/Diagnostic+Chains+on+Expansion+Spree+in+tamil+Nadu.jpg',
            title: 'Diagnostic chains on expansion spree in Tamil Nadu ',
            description: 'Leading diagnostics chains are on an expansion spree in Tamil Nadu to expand their presence in the Rs 3,100 crore diagnostics market, dominated by standalone units, in the state.',
            link: 'https://timesofindia.indiatimes.com/business/india-business/diagnostic-chains-on-expansion-spree-in-tamil-nadu/articleshow/91501157.cms '
        },
        {
            thumbnail: 'https://medallwebsite.s3.ap-south-1.amazonaws.com/blogs/Common+tests+and+procedures+to+deal+with+heart+problems.jpg',
            title: 'Common tests and procedures to deal with heart problems',
            description: 'Nowadays, heart problems are increasingly being reported. This is mostly due to the lifestyle of an individual and rise in risk factors like smoking, diabetes, hypertension, lipid abnormalities, sedentary..',
            link: 'https://timesofindia.indiatimes.com/blogs/voices/common-tests-and-procedures-to-deal-with-heart-problems/'
        },

        {
            thumbnail: 'https://medallwebsite.s3.ap-south-1.amazonaws.com/blogs/Medall+to+strengthen+presence+in+south+India_+eyes+to+open+300+400+centres+in.jpg',
            title: 'Medall to strengthen presence in South India; eyes to open 300-400 centres in 2022',
            description: 'Medall, diagnostic service provider has lined up plans to strengthen its presence in Southern parts of the country.',
            link: 'https://timesofindia.indiatimes.com/medall-to-strengthen-presence-in-south-india-eyes-to-open-300-400-centres-in-2022/articleshow/88976796.cms?from=mdr'
        },
        // {
        //     thumbnail: 'https://medallwebsite.s3.ap-south-1.amazonaws.com/blogs/Medall+to+expand+Across+south+indiaplans+to+open+300+-+400+centres+in.jpg',
        //     title: 'Medall to expand across South India',
        //     description: 'Medall, a diagnostic major, has announced its plans to expand across South India. Apart from penetrating deeper into Tamil Nadu into Tier 2 and 3 cities, it will also be expanding into other South Indian states of Karnataka, Andhra Pradesh, Telangana and Kerala.',
        //     link: 'http://www.pharmabiz.com/NewsDetails.aspx?aid=145318&sid=2'
        // },
        // {
        //     thumbnail: 'https://medallwebsite.s3.ap-south-1.amazonaws.com/blogs/Medall+to+expand+across+south+indian+plans+to+open+300+-+400+centres+this+year.jpg',
        //     title: 'Medall to invest in expanding across south India',
        //     description: 'In an effort to expand its basket of qualitative diagnostic services and preventive healthcare services, one of South India’s largest chain',
        //     link: 'https://citytoday.media/2022/01/18/medall-to-expand-across-south-indiaplans-to-open-300-400-centres-in-2022/'
        // },
    ]

    const carouselSettings = {
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1050,
                settings: {
                    slidesToShow: 2.8,
                }
            },
            {
                breakpoint: 920,
                settings: {
                    slidesToShow: 2.4,
                }
            },
            {
                breakpoint: 778,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 664,
                settings: {
                    slidesToShow: 1.8,
                }
            },
            {
                breakpoint: 613,
                settings: {
                    slidesToShow: 1.6,
                }
            },
            {
                breakpoint: 512,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    }

    return (
        <div className='news'>
            <h1 className="news__heading">Latest Blogs & News</h1>
            <div className="news__carousel-container">
                <Slider className='news__carousel' {...carouselSettings}>
                    {
                        newsCards.map(card => <NewsCard key={card.title} cardDetails={card} />)
                    }
                </Slider>
            </div>
        </div>
    )
}

export default News