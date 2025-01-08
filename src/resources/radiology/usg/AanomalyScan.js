// import thumbnails
// import AanomalScan from '../../../assets/images/usg/aanomalyscan.jpg'

// import other images 
import Machine from '../../../assets/images/mri/angiography-machine.jpg'

// import icons 
import Report from '../../../assets/icons/research-report.svg'
import CTScan from '../../../assets/icons/ct-scan-machine.svg'
import Businessmen from '../../../assets/icons/businessmen-discussing.svg'
import RupeesCreditCard from '../../../assets/icons/rupees-credit-card.svg'
import ReportCard from '../../../assets/icons/report-card.svg'
import Care from '../../../assets/icons/day-care.svg'

export const AanomalyScan = {
    title: 'Anomaly Ultrasound',
    thumbnail: "https://medallwebsite.s3.ap-south-1.amazonaws.com/radiology/USG-Image/pregnancyUSG-IMG.jpg",
    type: 'Ultrasound',
    highlightType: '',
    price: 'NA',
    chennaiPrice: 2200,
    banglorePrice: 2200,
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
        highlightedTitle: 'Anomaly ultrasound',
        image: Machine,
        description: [
            {
                text: "An anomaly scan takes a close look at your baby and your womb (uterus) at about 20 weeks of pregnancy. During the scan we examine each part of the fetal body, determine the position of the placenta, assess the amount of amniotic fluid, and measure fetal growth. Special attention is paid to the brain, face, spine, heart, stomach, bowel, kidneys, and limbs. The main purpose of the anomaly scan is to assess the pregnancy thoroughly and determine the presence of any rare conditions including those of the brain, spine, and heart."
            },
        ]
    },
    faqs: [
        {
            title: 'When is ',
            highlightedTitle: 'Anomaly ultrasound done',
            description: [
                {
                    text: "The anomaly scan is performed between 20-24 weeks of gestation."
                },
            ]
        },
        {
            title: 'How is ',
            highlightedTitle: "Anomaly ultrasound done ",
            description: [
                {
                    text: "Your healthcare provider uses abdominal ultrasound for the anomaly scan. First, they’ll spread ultrasound gel on your stomach. Then, they’ll move a transducer (a handheld wand) over your stomach. Images of your baby will appear on a screen. "
                },
            ]
        },
        {
            title: 'Are ',
            highlightedTitle: 'ultrasound examinations safe',
            description: [
                {
                    text: "There is no radiation used and generally no discomfort from the application of the ultrasound transducer to the skin. No known biological risks to babies with ultrasound."
                },
            ]
        },
        {
            title: 'Understanding ',
            highlightedTitle: 'Your Anomaly ultrasound Results',
            description: [
                {
                    text: "The ultrasound images will be reviewed thoroughly by our expert radiologist; who will then prepare the report. Your report may contain complex words and information. You can discuss your results with your referral doctor at your next visit. If there is any concern with the report findings, our radiologists will be happy to answer your queries. "
                },
            ]
        },
    ]
}

export default AanomalyScan