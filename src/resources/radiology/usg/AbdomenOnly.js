// import thumbnails
// import usabdom from '../../../assets/images/usg/usabdomen.jpg'

// import other images 
import Machine from '../../../assets/images/mri/angiography-machine.jpg'

// import icons 
import Report from '../../../assets/icons/research-report.svg'
import CTScan from '../../../assets/icons/ct-scan-machine.svg'
import Businessmen from '../../../assets/icons/businessmen-discussing.svg'
import RupeesCreditCard from '../../../assets/icons/rupees-credit-card.svg'
import ReportCard from '../../../assets/icons/report-card.svg'
import Care from '../../../assets/icons/day-care.svg'

export const AbdomenOnly = {
    title: 'Abdomen Ultrasound',
    thumbnail: 'https://medallwebsite.s3.ap-south-1.amazonaws.com/radiology/USG-Image/AbdominalUSG-IMG.jpg',
    type: 'Ultrasound',
    highlightType: '',
    price: 'NA',
    chennaiPrice: 1800,
    banglorePrice: 1100,
    andhraPradeshPrice: 1100,
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
        title: 'Why am I having an ',
        highlightedTitle: 'Abdominal ultrasound',
        image: Machine,
        description: [
            {
                text: "Abdominal ultrasound is commonly used to assess the size and location of abdominal organs and structures. It can also be used to check the abdomen for conditions such as: Cysts, tumors, collection of pus (abscesses), obstructions, blockages (clots) in blood vessels, infection. The size of the abdominal aorta can be measured by ultrasound in order to detect an aortic aneurysm. Stones in the gallbladder, kidneys, and ureters may be detected by ultrasound."
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
                {
                    text: "Certain factors or conditions may interfere with the results of the test. These include: Severe obesity and intestinal gas."
                }
            ]
        },
        {
            title: 'How do I prepare for an ',
            highlightedTitle: "Abdominal ultrasound",
            description: [
                {
                    text: "For an A.M. appointment, fat free dinner the evening before. Do not eat or drink from midnight until after the examination. For a P.M. appointment, clear liquid breakfast (no milk) before 9 A.M. Nothing to eat or drink after breakfast. If pelvis scan is also required along with abdomen, then you need to take water to ensure full urinary bladder. "
                },
            ]
        },
        {
            title: 'What happens during the ',
            highlightedTitle: 'Abdominal ultrasound',
            description: [
                {
                    text: "You will be asked to remove any clothing, jewellery, or other objects that may interfere with the scan. You will lie on an examination table on your back or side, depending on the specific area of the abdomen to be examined. Ultrasound gel is applied on the area of the body that will undergo the ultrasound examination. Using a transducer, the ultrasound wave will be sent through the patient's body. The sound will be reflected off structures inside the body, and the ultrasound machine will analyse the information from the sound waves. It will create an image of these structures on a monitor which will be interpreted by our professionals."
                },
            ]
        },
        {
            title: 'Understanding ',
            highlightedTitle: 'your Abdominal ultrasound results',
            description: [
                {
                    text: "The ultrasound images will be reviewed thoroughly by our expert radiologist; who will then prepare the report. Your report may contain complex words and information. You can discuss your results with your referral doctor at your next visit. If there is any concern with the report findings, our radiologists will be happy to answer your queries."
                },
            ]
        },
    ]
}

export default AbdomenOnly