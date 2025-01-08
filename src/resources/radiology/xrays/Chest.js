// import icons 
import Report from '../../../assets/icons/research-report.svg'
import CTScan from '../../../assets/icons/ct-scan-machine.svg'
import Businessmen from '../../../assets/icons/businessmen-discussing.svg'
import RupeesCreditCard from '../../../assets/icons/rupees-credit-card.svg'
import ReportCard from '../../../assets/icons/report-card.svg'
import Care from '../../../assets/icons/day-care.svg'

export const Chest = {
    title: 'Chest X-ray',
    type: 'X-ray',
    originalPrice: '5525',
    currentPrice: '3325',
    thumbnail: 'https://medallwebsite.s3.ap-south-1.amazonaws.com/radiology/X-ray-Images/Chest-X-ray-IMG.jpg',
    highlightType: '',
    price: 'NA',
    chennaiPrice: 500,
    banglorePrice: 400,
    andhraPradeshPrice: 600,
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
        highlightedTitle: ' Chest X-ray',
        image: '',
        description: [
            {
                text: "If you have symptoms such as feeling short of breath, a chest X-ray can help doctors find out if it’s caused by a heart or lung condition or something else. You would also have a chest X-ray done as part of routine health-check, pre-employment check or work up for any surgery."
            },
            {
                text: "Note: If you are pregnant or have any signs of pregnancy, make sure you tell your doctor.",
            },
        ]
    },
    faqs: [
        {
            title: 'What happens during the ',
            highlightedTitle: 'Chest X-ray',
            description: [
                {
                    text: "Before the X-ray, you will be asked to remove your clothes down to your waist, put on a hospital gown and also remove jewellery. You will stand against a photographic plate and the radiographer, the health professional who takes the X-rays, will ask you to take a deep breath and hold it (this helps to improve the quality of the X-ray image). Once they have taken the X-ray, they will advise you to breathe normally again. You may have chest X-rays taken from different angles, but they only take a few seconds each time and the whole process usually takes a few minutes. The radiographer will check the images before you leave and advise you when the results will be available to you. "
                },
            ]
        },
        {
            title: 'Understanding ',
            highlightedTitle: 'your results',
            description: [
                {
                    text: "The image will be reviewed thoroughly by our expert radiologist, who will then prepare the report. Your report may contain complex words and information. You can discuss your results with your referral doctor at your next visit. If there is any concern with the report findings, our radiologists will be happy to answer your queries."
                },
            ]
        },
    ]
}

export default Chest