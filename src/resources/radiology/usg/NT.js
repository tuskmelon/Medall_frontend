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

export const NT = {
    title: 'NT Ultrasound',
    thumbnail: 'https://medallwebsite.s3.ap-south-1.amazonaws.com/radiology/USG-Image/NTscanUSG-IMG.jpg',
    type: 'Ultrasound',
    highlightType: '',
    price: 'NA',
    chennaiPrice: 2100,
    banglorePrice: 2100,
    andhraPradeshPrice: 1500,
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
        highlightedTitle: 'NT ultrasound',
        image: Machine,
        description: [
            {
                text: "Nuchal translucency (NT) is an ultrasound that measures the amount of fluid behind your baby’s neck in the first trimester of pregnancy. A small amount of fluid is normal, and measuring the amount of fluid can help calculate your baby’s chances of having a chromosomal or genetic variant. NT ultrasound is a screening test — it doesn’t diagnose a condition. It helps your healthcare provider determine if your baby is at risk and if further tests should be recommended."
            },
        ]
    },
    faqs: [
        {
            title: 'When is ',
            highlightedTitle: ' NT ultrasound done',
            description: [
                {
                    text: "Your healthcare provider performs an NT scan when your baby is between 11 to 13 weeks of gestation. This is because the fluid behind your baby’s neck tends to get reabsorbed by the body after 14 weeks of gestation. This makes it harder to measure later in pregnancy. NT tests are often done as part of a first-trimester screening test.	"
                },
            ]
        },
        {
            title: 'Who should get a  ',
            highlightedTitle: "NT screening ",
            description: [
                {
                    text: "Anyone can get a nuchal translucency screening as long as they’re between 11 to 13 weeks of pregnancy. The ultrasound is optional for all people who are pregnant. Talk to your healthcare provider to make sure you understand what each test is looking for."
                },
            ]
        },
        {
            title: 'How is ',
            highlightedTitle: 'NT ultrasound done ',
            description: [
                {
                    text: "Your healthcare provider uses abdominal ultrasound (or sometimes, a vaginal ultrasound) for a nuchal translucency test. First, they’ll spread ultrasound gel on your stomach. Then, they’ll move a transducer (a handheld wand) over your stomach. Images of your baby will appear on a screen. Measurements will be taken of the fluid-filled space behind your baby’s neck. The fluid area is measured in millimeters."
                },
            ]
        },
        {
            title: 'Understanding ',
            highlightedTitle: 'your NT ultrasound results',
            description: [
                {
                    text: "The ultrasound images will be reviewed thoroughly by our expert radiologist; who will then prepare the report. Your report may contain complex words and information. You can discuss your results with your referral doctor at your next visit. If there is any concern with the report findings, our radiologists will be happy to answer your queries. "
                },
            ]
        },
    ]
}

export default NT