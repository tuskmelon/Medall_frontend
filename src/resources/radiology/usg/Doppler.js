// import thumbnails
// import Angiography from '../../../assets/images/mri/blood-vessels.jpg'

// import other images 
import Machine from '../../../assets/images/mri/angiography-machine.jpg'

// import icons 
import Report from '../../../assets/icons/research-report.svg'
import CTScan from '../../../assets/icons/ct-scan-machine.svg'
import Businessmen from '../../../assets/icons/businessmen-discussing.svg'
import RupeesCreditCard from '../../../assets/icons/rupees-credit-card.svg'
import ReportCard from '../../../assets/icons/report-card.svg'
import Care from '../../../assets/icons/day-care.svg'

export const Doppler = {
    title: 'Doppler Ultrasound',
    thumbnail: 'https://medallwebsite.s3.ap-south-1.amazonaws.com/radiology/USG-Image/DopplerultrasoundUSG-IMG.jpg',
    type: 'Ultrasound',
    highlightType: '',
    price: 'NA',
    chennaiPrice: 'NA',
    banglorePrice: 'NA',
    andhraPradeshPrice: 'NA',
    discountAmount: 0,

    iconWithText: [
        {
            icon: Report,
            text: 'Specialised clinical reports by experts'
        },
        {
            icon: CTScan,
            text: 'High end, State-of-the-art machines'
        },
        {
            icon: ReportCard,
            text: 'Fast report turn around time'
        },
        {
            icon: RupeesCreditCard,
            text: 'Competitive pricing'
        },
        {
            icon: Businessmen,
            text: 'Friendly and professional staff'
        },
        {
            icon: Care,
            text: 'Exemplary patient care'
        },
    ],
    imageWithInfo: {
        title: 'What is ',
        highlightedTitle: 'Doppler Ultrasound',
        image: Machine,
        description: [
            {
                text: "A Doppler ultrasound uses sound waves to produce images of blood moving through your circulatory system. The images show the direction and speed of blood as it flows through your arteries or veins."
            },
        ]
    },
    faqs: [
        {
            title: 'Why am I having a  ',
            highlightedTitle: 'Doppler ultrasound',
            description: [
                {
                    text: "Doctor use Doppler ultrasound to diagnose: Narrowed arteries or veins; blood clots, including deep vein thrombosis (DVT); blood vessel injuries; chronic venous insufficiency (CVI); evaluate blood supply to a transplant organ (like your kidney, liver or pancreas); renal vascular causes of hypertension; tumors in blood vessels etc."
                },
            ]
        },
        {
            title: 'Are ',
            highlightedTitle: 'Doppler ultrasound examinations safe ',
            description: [
                {
                    text: "There is no radiation used and generally no discomfort from the application of the ultrasound transducer to the skin."
                },
            ]
        },
        {
            title: 'How do I prepare for a ',
            highlightedTitle: 'Doppler ultrasound ',
            description: [
                {
                    text: "Quit smoking and do not use nicotine products for at least two hours before the test. Nicotine narrows blood vessels, which may affect the test results. Fasting is required for renal doppler studies."
                },
            ]
        },
        {
            title: 'What happens during the ',
            highlightedTitle: 'Doppler ultrasound ',
            description: [
                {
                    text: "You will be asked to remove any clothing, jewellery, or other objects that may interfere with the scan. You will lie on an examination table on your back or side, depending on the specific area to be examined. Ultrasound gel is applied on the area of the body that will undergo the examination. The transducer sends painless sound waves through your skin into your body. The sound waves are high frequency and you won’t hear them.The sound waves reflect off the moving blood cells, causing the pitch of the sound waves to change. You may hear a whooshing sound from the ultrasound machine. The transducer detects changes in the sound wave. A machine records the sound wave changes and converts them into images or graphs for your doctor to review."
                },
            ]
        },
        {
            title: 'Understanding ',
            highlightedTitle: 'your Doppler ultrasound results ',
            description: [
                {
                    text: "The doppler images will be reviewed thoroughly by our expert radiologist; who will then prepare the report. Your report may contain complex words and information. You can discuss your results with your referral doctor at your next visit. If there is any concern with the report findings, our radiologists will be happy to answer your queries."
                },
            ]
        },
    ]
}

export default Doppler