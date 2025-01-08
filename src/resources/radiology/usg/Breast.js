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

export const Breast = {
    title: 'Breast Ultrasound',
    thumbnail: 'https://medallwebsite.s3.ap-south-1.amazonaws.com/radiology/USG-Image/BreastultrasoundUSG-IMG.jpg',
    type: 'Ultrasound',
    highlightType: '',
    price: 'NA',
    chennaiPrice: 2800,
    banglorePrice: 1400,
    andhraPradeshPrice: 1400,
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
        title: 'Why am I having a ',
        highlightedTitle: 'Breast ultrasound',
        image: Machine,
        description: [
            {
                text: "A breast ultrasound is most often done to find out if a problem found by a mammogram or physical exam of the breast may be a cyst filled with fluid or a solid tumor."
            },
        ]
    },
    faqs: [
        {
            title: 'Are ',
            highlightedTitle: 'ultrasound examinations safe',
            description: [
                {
                    text: "There is no radiation used and generally no discomfort from the application of the ultrasound transducer to the skin. There may be risks depending on your specific medical condition. Be sure to discuss any concerns with your doctor prior to the procedure."
                },
            ]
        },
        {
            title: 'How do I prepare for a ',
            highlightedTitle: "Breast ultrasound",
            description: [
                {
                    text: "You do not need to stop eating or drinking before the test. You also will not need medicine to help you relax. You should not put any lotion, powder, or other substances on your breasts on the day of the test. Wear clothing that you can easily take off or wear clothing that lets the radiologist reach your chest. The gel applied on your skin during the test does not stain clothing, but you may want to wear older clothing. The gel may not be completely removed from your skin afterward."
                },
            ]
        },
        {
            title: 'What happens during the ',
            highlightedTitle: 'Breast ultrasound',
            description: [
                {
                    text: "During the scan, a transducer sends the sound waves and records the echoing(returning) waves. When the transducer is pressed against the skin, it sends small pulses of inaudible, high- frequency sound waves into the body. As the sound waves bounce off internal organs, fluids and tissues, the sensitive receiver in the transducer records tiny changes in the sound's pitch and direction. A computer instantly measures these signature waves and displays them as real-time pictures on a monitor. The doctor typically captures one or more frames of the moving pictures as still images. They may also save short video loops of the images."
                },
            ]
        },
        {
            title: 'Understanding ',
            highlightedTitle: 'your Breast ultrasound results	',
            description: [
                {
                    text: "The ultrasound images will be reviewed thoroughly by our expert radiologist; who will then prepare the report. Your report may contain complex words and information. You can discuss your results with your referral doctor at your next visit. If there is any concern with the report findings, our radiologists will be happy to answer your queries. "
                },
            ]
        },
    ]
}

export default Breast