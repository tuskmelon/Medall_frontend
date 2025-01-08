import React from 'react'

import '../styles/Pro/Pro.scss'

// import suggested test card thumbnails 
import HoldingTestTube from '../assets/images/holding-test-tube.jpg'
import CheckingTestTube from '../assets/images/checking-test-tube.jpg'
import PickingTestTube from '../assets/images/picking-test-tube.jpg'

// import components 
import ProFeatures from '../components/Pro/ProFeatures'
import WhyPro from '../components/Pro/WhyPro'
import FAQ from '../components/FAQ'
import SampleCollection from '../components/SampleCollection'
import SuggestTests from '../components/SuggestTests'
import News from '../components/News'
import Reviews from '../components/Reviews'

const MedallPro = () => {

    const faqs = [
        {
            question: 'Q. Can i get the scan results in online ?',
            answer: 'Yes, you can get the scan results online . Just go to the official website of medall and get the scan results'
        },
        {
            question: 'Q. Is fasting necessary before the MRI scan ?',
            answer: 'Yes, you can get the scan results online . Just go to the official website of medall and get the scan results'
        },
        {
            question: 'Q. Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
            answer: 'Yes, you can get the scan results online . Just go to the official website of medall and get the scan results'
        },
        {
            question: 'Q. Lorem, ipsum dolor sit amet consectetur adipisicing elit adipisicing.',
            answer: 'Yes, you can get the scan results online . Just go to the official website of medall and get the scan results'
        },
    ];

    const suggestTests = [
        {
            thumbnail: HoldingTestTube,
            title: 'ELECTROLYTES (NA/K/CH/BIC)',
            description: 'It helps monitor the functioning of the kidneys',
            parameter: 'Includes : 17 Parameters',
            price: 120
        },
        {
            thumbnail: CheckingTestTube,
            title: 'Glucose - Fasting with Urine glucose',
            description: 'It helps monitor the functioning of the kidneys',
            parameter: 'Includes : 17 Parameters',
            price: 120
        },
        {
            thumbnail: PickingTestTube,
            title: 'Glucose - Postprandial with urine glucose',
            description: 'HIt helps monitor the functioning of the kidneys',
            parameter: 'Includes : 17 Parameters',
            price: 350
        },
    ];

    return (
        <div className='pro'>
            <ProFeatures />
            <WhyPro />
            <FAQ allFAQs={faqs} />
            <SampleCollection />
            <SuggestTests suggestTests={suggestTests} />
            <News />
            <Reviews heading="Client Review" display="none" />
        </div>
    )
}

export default MedallPro