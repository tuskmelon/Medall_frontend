// import thumbnails
// import EchoThumb from '../../../assets/images/echo/echo.jpg'

// import icons
import Report from '../../../assets/icons/research-report.svg'
import CTScan from '../../../assets/icons/ct-scan-machine.svg'
import Businessmen from '../../../assets/icons/businessmen-discussing.svg'
import RupeesCreditCard from '../../../assets/icons/rupees-credit-card.svg'
import ReportCard from '../../../assets/icons/report-card.svg'
import Care from '../../../assets/icons/day-care.svg'

export const ECHO = {
    title: 'ECHO',
    thumbnail: 'https://medallwebsite.s3.ap-south-1.amazonaws.com/radiology/ECHO-Imges/ECHO.jpg',
    type: 'ECHO',
    price: 'NA',
    chennaiPrice: 2100,
    banglorePrice: 2100,
    andhraPradeshPrice: 2100,
    discountAmount: 0,
    highlightType: '',

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
        title: 'Why am I having an  ',
        highlightedTitle: 'ECHO',
        image: '',
        description: [
            {
                text: "If your Doctor thinks you have some form of heart disease, the echo is used to diagnose the specific problem and learn more about it. Your Doctor wants to check on a condition you’ve already been diagnosed with. For example, some people with valve disease need echo tests on a regular basis. If you’re preparing for a surgery or procedure your doctor wants to check the outcome of a surgery or procedure."
            },
        ]
    },
    faqs: [
        {
            title: 'Is an ',
            highlightedTitle: 'ECHO safe',
            description: [
                {
                    text: "There is no radiation used and generally no discomfort from the application of the ultrasound transducer to the skin. There may be risks depending on your specific medical condition. Be sure to discuss any concerns with your doctor prior to the procedure."
                },
            ]
        },
        {
            title: 'How do I prepare for an ',
            highlightedTitle: "ECHO",
            description: [
                {
                    text: "You don’t need to avoid eating or drinking before a transthoracic echo. Take your medications as you usually do. Wear anything you’d like. Leave anything valuable at home."
                },
            ]
        },
        {
            title: 'What happens during the ',
            highlightedTitle: 'ECHO',
            description: [
                {
                    text: "You will be asked to remove any clothing, jewellery, or other objects that may interfere with the scan. You will lie down on an examination table. Ultrasound gel will be applied over the chest. Using a transducer,  the ultrasound wave will be sent inside the patient's body. The sound will be reflected off the heart structures, and the ultrasound machine will analyse the information from the sound waves. The ultrasound machine will create an image of these structures on a monitor which will be interpreted by our professionals. Throughout the test, you may be asked to hold your breath for several seconds at a time. You may also need to move into a different position."
                },

            ]
        },
        {
            title: 'Understanding ',
            highlightedTitle: 'your results',
            description: [
                {
                    text: "The ECHO images will be reviewed thoroughly by our expert physician / cardiologist who will then prepare the report. Your report may contain complex words and information. You can discuss your results with your referral doctor at your next visit."
                },
            ]
        },
    ]
}

export default ECHO