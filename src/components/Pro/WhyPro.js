import React from 'react'

import '../../styles/Pro/WhyPro.scss'

const WhyPro = () => {
    const listItems = [
        {
            text: "The count of red blood cells"
        },
        {
            text: "The count of white blood cells",
        },
        {
            text: "The overall count of the blood's haemoglobin content",
        }
        , {
            text: "A percentage of your red blood cell content (hematocrit)"
        }
    ]
    return (
        <div className='why-pro'>
            <h2>What Does a Medall Health Pro?</h2>
            <ul>
                {
                    listItems.map(item => <li key={item.text}>{item.text}</li>)
                }
            </ul>
            <a href="/">Book Now</a>
        </div>
    )
}

export default WhyPro