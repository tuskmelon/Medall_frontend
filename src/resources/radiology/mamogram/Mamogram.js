// import thumbnails
// import Thumbnail from '../../../assets/images/mamogram/mamogram.jpg'

// import icons
import Report from '../../../assets/icons/research-report.svg'
import CTScan from '../../../assets/icons/ct-scan-machine.svg'
import Businessmen from '../../../assets/icons/businessmen-discussing.svg'
import RupeesCreditCard from '../../../assets/icons/rupees-credit-card.svg'
import ReportCard from '../../../assets/icons/report-card.svg'
import Care from '../../../assets/icons/day-care.svg'

export const MammogramContent = {
    title: 'Mammogram',
    thumbnail: 'https://medallwebsite.s3.ap-south-1.amazonaws.com/radiology/mammogram-Images/mammogram.jpg',
    type: 'Mammogram',
    price: 'NA',
    chennaiPrice: 3800,
    banglorePrice: 3800,
    andhraPradeshPrice: 3800,
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
        title: 'Why am I having a ',
        highlightedTitle: 'Mammogram',
        image: '',
        description: [
            {
                text: "Mammography may be used either for screening or to make a diagnosis. Women older than 30 years should undergo diagnostic mammography if they have symptoms, such as a palpable lump, breast skin thickening or indentation, nipple discharge or retraction, erosive sore of the nipple or breast pain. A mammogram may be used to evaluate breast pain when physical examination and history are not conclusive. Women with breasts that are dense, lumpy or very large may be screened with mammography, as physical examination may be difficult to perform. Women who are at high risk for breast cancer or with a history of breast cancer may be routinely screened with mammography."
            },
        ]
    },
    faqs: [
        {
            title: 'Is a ',
            highlightedTitle: 'Mammogram safe',
            description: [
                {
                    text: "Mammogram involves the usage of X-ray. However, risks associated with radiation exposure may be related to the cumulative number of X-ray examinations and treatments over a long period of time. If you are pregnant or suspect that you may be pregnant, you should notify your health care provider. Some discomfort may be felt as the breast is compressed against the X-ray plate during the procedure. However, this compression will not harm the breast."
                },
            ]
        },
        {
            title: 'How do I prepare for a ',
            highlightedTitle: "Mammogram",
            description: [
                {
                    text: "Breasts can be tender, the week before and during menstruation, so try to schedule your mammogram for one to two weeks after your period starts. Please notify the technologist if you are currently breast-feeding. Do not use any deodorant, powder, lotion or perfume on the day of your examination. You must remove your clothing from the waist up and change into a patient gown. Please remove all piercings and leave all jewellery and valuables at home."
                },
            ]
        },
        {
            title: 'What happens during the ',
            highlightedTitle: 'Mammogram',
            description: [
                {
                    text: "A female Radiologic Technologist positions the breast by resting it on a small platform and then gently compressing the breast with a plastic compression paddle. The purpose of the compression is to flatten the breast as much as possible. Spreading out the tissue makes abnormal results easier to visualize with minimum amounts of radiation. The pressure of the compression can be uncomfortable or even slightly painful.It helps to remember that each X- ray just takes a few moments and it could save your life.After X - ray mammogram, the Radiologist may do a screening ultrasound mammogram if needed."
                },

            ]
        },
        {
            title: 'Understanding ',
            highlightedTitle: 'your results',
            description: [
                {
                    text: "The mammogram images will be reviewed thoroughly by our expert Radiologist; who will then prepare the report. Your report may contain complex words and information. You can discuss your results with your referral doctor at your next visit."
                },
            ]
        },
    ]
}

export default MammogramContent