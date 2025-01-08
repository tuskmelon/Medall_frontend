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

export const ScortalUSG = {
    title: 'Scrotal Ultrasound',
    thumbnail: 'https://medallwebsite.s3.ap-south-1.amazonaws.com/radiology/USG-Image/scrotalultrasoundUSG-IMG.jpg',
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
        title: 'Why am I having a ',
        highlightedTitle: 'Scrotal ultrasound',
        image: Machine,
        description: [
            {
                text: "This study is typically used to: determine whether a mass in the scrotum felt by the patient or doctor is cystic or solid and its location; diagnose results of trauma to the scrotal area; diagnose causes of testicular pain or swelling such as inflammation or torsion; evaluate the cause of infertility such as varicocele; look for the location of undescended testis."
            },
        ]
    },
    faqs: [
        {
            title: 'Are ',
            highlightedTitle: 'ultrasound examinations safe ',
            description: [
                {
                    text: "There is no radiation used and generally no discomfort from the application of the ultrasound transducer to the skin. There may be risks depending on your specific medical condition. Be sure to discuss any concerns with your doctor prior to the procedure."
                },
            ]
        },
        {
            title: 'How do I prepare for a ',
            highlightedTitle: "Scrotal ultrasound ",
            description: [
                {
                    text: "Wear comfortable, loose-fitting clothing. You may need to remove all clothing and jewellery in the area to be examined. You may need to change into a gown for the procedure. No other preparation is required."
                },
            ]
        },
        {
            title: 'What happens during the ',
            highlightedTitle: 'Scrotal ultrasound',
            description: [
                {
                    text: "During the scan, a transducer sends the sound waves and records the echoing (returning) waves. When the transducer is pressed against the skin, it sends small pulses of inaudible, high-frequency sound waves into the body. As the sound waves bounce off internal organs, fluids and tissues, the sensitive receiver in the transducer records tiny changes in the sound's pitch and direction. A computer instantly measures these signature waves and displays them as real-time pictures on a monitor. The doctor typically captures one or more frames of the moving pictures as still images. They may also save short video loops of the images."
                },
            ]
        },
        {
            title: 'Understanding ',
            highlightedTitle: 'your Scrotal ultrasound results',
            description: [
                {
                    text: "The ultrasound images will be reviewed thoroughly by our expert radiologist; who will then prepare the report. Your report may contain complex words and information. You can discuss your results with your referral doctor at your next visit. If there is any concern with the report findings, our radiologists will be happy to answer your queries."
                },
            ]
        },
    ]
}

export default ScortalUSG